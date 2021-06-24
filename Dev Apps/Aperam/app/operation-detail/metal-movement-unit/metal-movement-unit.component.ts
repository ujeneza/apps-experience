
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

import { MetalMovementService } from '../../operation-detail/services/metal-movement/metal-movement.service';
import MetalMovementUnit from '../../operation-detail/models/metal-movement-unit-model';
import MiniValidationError from '../../operation-detail/models/mini-validation-error-model';

import {RelatedMetalUnits, InputMetalUnit, OutputMetalUnit} from '../../operation-detail/models/related-metal-units';
import { OutputSectionService } from '../services/output-section/output-section.service';
import { InputSectionService } from '../services/input-section/input-section.service';

@Component({
  selector: 'app-metal-movement-unit',
  templateUrl: './metal-movement-unit.component.html',
  styleUrls: ['./metal-movement-unit.component.css']
})
export class MetalMovementUnitComponent implements OnInit {
  /* Variables */
  parameters: IInputParameters;
  isOperationLoading = true;
  isMetalUnitLoading = true;
  isInputLoading = true;
  isOutputLoading = true;
  isMetalMovementValidationErrorsLoading = true;
  isMetalUnitValidationErrorsLoading = true;
  panelOpenState = false;

  date: Date;
  endtime: string;
 

  displayedColumns: string[] = ['metalUnit', 'packageNo', 'weight', 'hasValidationErrors', 'actions'];
  dataSource: OutputMetalUnit[] = [];
  inputMetalUnits: InputMetalUnit[] = [];

  isChanged = true;

  metalMovement: MetalMovementUnit;
  metalMovementValidationErrors: MiniValidationError[];
  metalUnitValidationErrors: MiniValidationError[];

  /* Scrap */
  scrapInput: number;
  scrapOutput: number;
  scrapTotal: number;
  scrapInputSubscription: Subscription;
  scrapOutputSubscription: Subscription;

  /* Observables */
  getMetalMovementObservable: Observable<MetalMovementUnit>;
  getMetalMovementValidationErrors: Observable<MiniValidationError[]>;
  getMetalUnitValidationErrors: Observable<MiniValidationError[]>;

  constructor(
    private metalMovementService: MetalMovementService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private outputSectionService: OutputSectionService,
    private inputSectionService: InputSectionService) {

  }
  
  
  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => {
        let parameters: IInputParameters = {
          metalMovementId:null,
          metalUnitId:null
        }
        // (+) before `params.get()` turns the string into a number
        if (params.get('type') === 'metalunit'){
          parameters.metalUnitId = +params.get('id');
          return of(parameters);
        }
        else{
          parameters.metalMovementId = +params.get('id');
          return of(parameters);
        };
      })
    ).subscribe(value => {this.afterInit(value);});

    this.getWeightfromInputSection();
    this.getWeightfromOutputSection();
  }

  ngOnDestroy(){
    this.scrapInputSubscription.unsubscribe();
    this.scrapOutputSubscription.unsubscribe();
  }

  
  // get metal unit id from output section
  getWeightfromOutputSection() {
    this.scrapOutputSubscription = this.outputSectionService.totalWeight.subscribe(val => {
      this.scrapOutput = val;
      this.calculateScrapTotal();
    });
  }

  getWeightfromInputSection() {
    this.scrapInputSubscription = this.inputSectionService.totalWeight.subscribe(val => {
      this.scrapInput = val;
      this.calculateScrapTotal();
    })
  }

  calculateScrapTotal(){
    if (this.scrapInput && this.scrapOutput && this.scrapInput !== 0 && this.scrapOutput !== 0)
      this.scrapTotal = parseFloat((this.scrapInput - this.scrapOutput).toFixed(4));
    else 
      this.scrapTotal = 0;
  }

  // GU 13/12/2019 =>  To delete - we don't need to reset input because we use form. 
  resetPage():void{
    this.isOperationLoading = true;
    this.isMetalUnitLoading = true;
    this.isInputLoading = true;
    this.isOutputLoading = true;
    this.isMetalMovementValidationErrorsLoading = true;
    this.isMetalUnitValidationErrorsLoading = true;

    this.metalMovement = this.metalMovementService.getEmptyMetalMovement();
    this.metalMovementValidationErrors = [];
    this.metalUnitValidationErrors = [];
    this.date = null;
    this.endtime = '';
    this.dataSource = [];
    this.inputMetalUnits = [];
    this.isChanged = false;
  }

  resetMetalUnit():void{
    this.isMetalUnitLoading = true;
    this.isMetalUnitValidationErrorsLoading = true;

    this.metalMovement.metalUnit = null;
    this.metalUnitValidationErrors = [];
  }


  afterInit(value: IInputParameters):void{
    this.parameters = value;
    
    this.resetPage();

    /* load metal movement details */
    this.metalMovementService.getMetalMovementByMetalMovementId(this.parameters.metalMovementId, this.parameters.metalUnitId)
      .subscribe({
        next: value => this.metalMovementLoaded(value),
        error: msg => console.log(`Error getting metalMovementUnit.`)
      });
    
    /* load metal movement validation errors */
    this.metalMovementService.getMetalMovementValidationErrors(this.parameters.metalMovementId, this.parameters.metalUnitId)
      .subscribe({
        next: value => this.metalMovementValidationErrorsLoaded(value),
        error: msg => console.log(`Error getting metalMovement validation errors.`)
      });

    /* load metal unit validation errors */
    this.metalMovementService.getMetalUnitValidationErrors( this.parameters.metalMovementId, this.parameters.metalUnitId,)
      .subscribe({
        next: value => this.metalUnitValidationErrorsLoaded(value),
        error: msg => console.log(`Error getting metalUnit validation errors.`)
      });

    /* load related metal units */
    this.metalMovementService.getRelatedMetalUnits( this.parameters.metalMovementId, this.parameters.metalUnitId)
      .subscribe({
        next: value => this.relatedMetalUnitsLoaded(value),
        error: msg => console.log(`Error getting consumed metalUnits.`)
      });
  }

  metalMovementLoaded(metalMovementUnit: MetalMovementUnit): void{
    /* The empty metalMovementUnit is inserted at pagereset! */
    if (metalMovementUnit){
      this.metalMovementService.setMetalMovementLoaded(metalMovementUnit);
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
  
  metalUnitLoaded(metalMovementUnit: MetalMovementUnit): void{
    /* The empty metalMovementUnit is inserted at pagereset! */
    if (metalMovementUnit){
      this.metalMovement.metalUnit = metalMovementUnit.metalUnit;
    }

    this.isMetalUnitLoading = false;
  }

  metalMovementValidationErrorsLoaded(validationErrors: MiniValidationError[]): void{
    this.metalMovementValidationErrors = validationErrors;
    this.isMetalMovementValidationErrorsLoading = false;
  }

  metalUnitValidationErrorsLoaded(validationErrors: MiniValidationError[]): void{
    this.metalMovementService.setMetalUnitValidationResultLoaded(validationErrors);
    this.metalUnitValidationErrors = validationErrors;
    this.isMetalUnitValidationErrorsLoading = false;
  }

  relatedMetalUnitsLoaded(relatedMetalUnits: RelatedMetalUnits): void{
    this.dataSource = relatedMetalUnits.outputMetalUnits;
    this.inputMetalUnits = relatedMetalUnits.inputMetalUnits;
    this.isInputLoading = false;
    this.isOutputLoading = false;
  }

  clickOutputRow(metalUnitId){
    let currentMetalUnitId = this.metalMovement.metalUnit && this.metalMovement.metalUnit.metalUnitId?this.metalMovement.metalUnit.metalUnitId:null;
    if (metalUnitId != currentMetalUnitId){
      
      this.resetMetalUnit();

      this.metalMovementService.getMetalMovementByMetalMovementId(null, metalUnitId)
        .subscribe({
          next: value => this.metalUnitLoaded(value),
          error: msg => console.log(`Error getting metalMovementUnit.`)
        });

      /* load metal unit validation errors */
      this.metalMovementService.getMetalUnitValidationErrors(metalUnitId, null)
        .subscribe({
          next: value => this.metalUnitValidationErrorsLoaded(value),
          error: msg => console.log(`Error getting metalUnit validation errors.`)
        });
    }
        
    window.scrollTo(0, 0);
  }
// change to the snack bar 
  save(){
    alert("SaveMetalMovement: " + this.metalMovement.metalMovementId);
  }

  delete(){
    alert("DeleteMetalMovement: " + this.metalMovement.metalMovementId);
  }

  copy(){
    alert("CopyMetalMovement: " + this.metalMovement.metalMovementId);
  }

  // Snack bar when a action is successfull
  snackBarSuccessActionInfo(message: string, action: string) {
    const config = new MatSnackBarConfig();
    config.duration = 2000;
    config.panelClass = ['green-snackbar'];
    config.horizontalPosition = 'right';
    this.snackBar.open(message, action, config);
  }
}




// move to models fom

interface IInputParameters{
  metalMovementId:number;
  metalUnitId:number;
}