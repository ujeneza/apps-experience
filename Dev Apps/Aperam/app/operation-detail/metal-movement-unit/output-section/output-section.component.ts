import { Component, OnInit } from '@angular/core';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material';
import { OutputSectionService } from '../../services/output-section/output-section.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of, Subscription } from 'rxjs';
import MiniValidationError from '../../models/mini-validation-error-model';
import MetalMovementUnit from '../../models/metal-movement-unit-model';
import { OutputMetalUnit } from '../../models/related-metal-units';
import { MetalMovementService } from '../../services/metal-movement/metal-movement.service';
import { MetalUnitService } from '../../services/metal-unit/metal-unit.service';

@Component({
  selector: 'app-output-section',
  templateUrl: './output-section.component.html',
  styleUrls: ['./output-section.component.scss']
})
export class OutputSectionComponent implements OnInit {

  isOutputLoading = true;
  isMetalMovementValidationErrorsLoading = true;
  isMetalUnitValidationErrorsLoading = true;
  metalMovement: MetalMovementUnit;
  metalMovementValidationErrors: MiniValidationError[];
  metalUnitValidationErrors: MiniValidationError[];
  parameters: IInputParameters;
  date: Date;
  endtime: string;
  isOperationLoading = true;
  isMetalUnitLoading = true;

  metalUnitServiceSubscriptions: Subscription;

  displayedColumns: string[] = ['metalUnit', 'packageNo', 'weight', 'hasValidationErrors', 'actions'];
  
  constructor(public outputSectionService: OutputSectionService,
    private route: ActivatedRoute,
    private metalMovementService: MetalMovementService,
    private metalUnitService: MetalUnitService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getIdfromRoute();
    this.getOuputtAfterCopy();
    this.subscribeToMetalUnitService();
  }

  subscribeToMetalUnitService(): any {
    this.metalUnitServiceSubscriptions = this.metalUnitService.metalUnitChanged.subscribe(val => {
      this.outputSectionService.updateUpdatedMetalUnit(val);
    });
  }


  getIdfromRoute() {
    this.route.paramMap.pipe(
      switchMap(params => {
        let parameters: IInputParameters = {
          metalMovementId: null,
          metalUnitId: null
        }
        // (+) before `params.get()` turns the string into a number
        if (params.get('type') === 'metalunit') {
          parameters.metalUnitId = +params.get('id');
          return of(parameters);
        }
        else {
          parameters.metalMovementId = +params.get('id');
          return of(parameters);
        };
      })
    ).subscribe(value => {
      this.getOutput(value);
    })
  }


  getOutput(id) {
    this.parameters = id
    this.outputSectionService.getOutputMetalUnits(this.parameters.metalUnitId, this.parameters.metalMovementId);
    this.isOutputLoading = false;
  }

  getOuputtAfterCopy() {
    this.metalMovementService.metalMvtChangeActionItem.subscribe(responseData =>{
      if(responseData){
        const metalMovement = responseData;
        this.outputSectionService.getOutputMetalUnits(null, metalMovement.metalMovement.metalMovementId);
      } else{
        console.log("impossible to subscribe");
      }
   
    })
  }

  clickOutputRow(metalUnitId){
    this.outputSectionService.sendActiveMetalUnit(metalUnitId);
  }

  clickCopyOutputRow(metalUnitId){
    this.outputSectionService.sendCopyClicked(metalUnitId);
  }

  clickDeleteOutputRow(metalUnitId){
    this.outputSectionService.deleteMetalUnit(metalUnitId, `Delete metal unit ${metalUnitId}`);
  }

  metalUnitLoaded(metalMovementUnit: MetalMovementUnit): void{
    /* The empty metalMovementUnit is inserted at pagereset! */
    if (metalMovementUnit){
      this.metalMovement.metalUnit = metalMovementUnit.metalUnit;
    }
  }

  metalMovementLoaded(metalMovementUnit: MetalMovementUnit): void{
    /* The empty metalMovementUnit is inserted at pagereset! */
    if (metalMovementUnit){
      this.metalMovement = metalMovementUnit;
    }
    if (this.metalMovement.endDate){
      let endDate = new Date(this.metalMovement.endDate);
      this.date = endDate;
      this.endtime = endDate.toLocaleTimeString();
    }
    else{
      this.date = null;
      this.endtime = "";
    }
    
    this.isOperationLoading = false;
    this.isMetalUnitLoading = false;
  }
  
  canDelete(metalUnit: OutputMetalUnit): boolean{
    return (
      (!metalUnit.nextMetalMovementId
      || metalUnit.nextMetalMovementId == 0)
      && this.outputSectionService.getOutputMetalUnitsCount() > 1
      && !this.isMetalUnitDeleteLoading(metalUnit.metalUnitId)
    );
  }

  canCopy(metalUnit: OutputMetalUnit): boolean{
    return (
      true
    );
  }

  canNavigate(metalUnit: OutputMetalUnit): boolean{
    return (
      !!metalUnit.nextMetalMovementId
    );
  }

  isMetalUnitDeleteLoading(metalUnitId: number): boolean{
    return this.outputSectionService.isMetalUnitDeleteLoading(metalUnitId);
  }

}
