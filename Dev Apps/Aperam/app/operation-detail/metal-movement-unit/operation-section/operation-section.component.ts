import { DialogData } from './../../../closing/closing.component';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { MatSnackBarConfig, MatSnackBar, MatDialog, MatDialogConfig } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MetalMovementService } from '../../services/metal-movement/metal-movement.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, takeLast } from 'rxjs/operators';
import { of, Subscription } from 'rxjs';
import { DatePipe } from '@angular/common'


import { OperationSection } from './../../models/operation.model';
import { MetalUnitService } from '../../services/metal-unit/metal-unit.service';
import { SiteProductionOperationModel } from '../../models/site-production-Operation.model';
import { ValidationErrorsFiltersService } from 'src/app/validation-errors-view/services/validation-errors-filters.service';
import { InputSectionService } from '../../services/input-section/input-section.service';
import { OpenDialogComponent } from '../../open-dialog/open-dialog.component';
import { tick } from '@angular/core/src/render3';
import { async } from 'q';


@Component({
  selector: 'app-operation-section',
  templateUrl: './operation-section.component.html',
  styleUrls: ['./operation-section.component.scss']
})
export class OperationSectionComponent implements OnInit {
  // variables for the input filters
  operationSectionForm: FormGroup;
  operationSection: OperationSection;
  miniValidationErrors: any;

  parameters: IInputParameters;
  isDataLoading = false;
  subscription: Subscription;
  metalUnitInputData: any;
  isMvtCopied: boolean = true;
  successfullySavedAndChecked: boolean;
  metalMvtResponse: boolean = false;

  // get operation id and site
  siteProdOperations: SiteProductionOperationModel[] = [];
  sitesList: any[];
  productionLinesList: any[];
  operationsList: any[];
  selectedSite: any;
  selectedProductionLine: number;
  selectedOperation: number;

  // variable for openDialog
  comment: string;
  includingAllItemsAfterThis: boolean;
  duplicateAfter: boolean;
  consumedBySameMetalMovement: boolean;

  constructor(
    private snackBar: MatSnackBar,
    private metalMovementService: MetalMovementService,
    private metalUnitService: MetalUnitService,
    private route: ActivatedRoute,
    public inputSectionService: InputSectionService,
    private router: Router,
    private location: Location,
    private datePipe: DatePipe,
    private dialog: MatDialog,
    private validationErrorsFiltersService: ValidationErrorsFiltersService) {
    //this.subscribeMetalUnit();
  }



  ngOnInit() {
    this.initForm();
    this.getIdfromRoute();
    this.getUpdatedMetalMovement();
    this.getSiteAndProductionOperation();
  }


  initForm() {
    this.operationSectionForm = new FormGroup({

      coilPartNumber: new FormControl(
        { value: null, disabled: true },
        { validators: [Validators.minLength(1)] }
      ),
      packageNo: new FormControl(
        { value: null, disabled: true },
        { validators: [Validators.minLength(1)] }
      ),
      endDate: new FormControl(
        null,
        { validators: [Validators.minLength(1)] }
      ),
      time: new FormControl(
        null,
        { validators: [Validators.minLength(1)] }
      ),
      rot: new FormControl(
        { value: null, disabled: this.isMvtCopied },
        { validators: [Validators.minLength(0)] }
      ),
      uot: new FormControl(
        { value: null, disabled: this.isMvtCopied },
        { validators: [Validators.minLength(0)] }
      ),
      ft: new FormControl(
        { value: null, disabled: this.isMvtCopied },
        { validators: [Validators.minLength(0)] }
      ),
      otForActivity: new FormControl(
        { value: null, disabled: true },
        { validators: [Validators.minLength(0)] }
      ),
      setpoint: new FormControl(
        { value: null, disabled: this.isMvtCopied },
        { validators: [Validators.minLength(0)] }
      ),
      realised: new FormControl(
        { value: null, disabled: this.isMvtCopied },
        { validators: [Validators.minLength(0)] }
      ),
      operationId: new FormControl(
        null,
        { validators: [Validators.minLength(0)] }
      ),
      productionLineId: new FormControl(
        null,
        { validators: [Validators.minLength(0)] }
      ),
      sequenceNumberLocal: new FormControl(
        { value: null, disabled: this.isMvtCopied },
        { validators: [Validators.minLength(1)] }
      ),

    });

  }

  // get Id from route
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
    ).subscribe(value => { this.getOperationDetail(value); })
  }

  // get operation and errors related;
  getOperationDetail(id) {
    this.parameters = id;

    /* load metal movement details */
    this.metalMovementService.getMetalMovementByMetalMovementId(this.parameters.metalMovementId, this.parameters.metalUnitId)
      .subscribe(operationSectionData => {
        this.isDataLoading = true;
        this.defineMetalMovement(operationSectionData);
        this.setDataInput(operationSectionData);
      });

    /* load metal movement validation errors */
    this.metalMovementService.getMetalMovementValidationErrors(this.parameters.metalMovementId, this.parameters.metalUnitId)
      .subscribe(miniValidationErrorData => {
        this.miniValidationErrors = miniValidationErrorData
      });

    this.isDataLoading = false;
  }

  // open dialog



  // saveMetal movement 
  saveMetalMovement() {
    const functionnality = "saveMvt";
   const dialogRef=  this.openDialog(functionnality);
   dialogRef.afterClosed().subscribe(
    (data: openDialogData) => {
      if(data) {
        this.sendMetalMovement(data.comment);
      }
    
    }, error => {
      this.cancelCopy();
      console.log("error while copying mvt");
    });
  }

  sendMetalMovement( comment:string) {
    this.isDataLoading = true;
    this.metalMovementService.setMetalMvtLoading(this.isDataLoading);
    const date = this.datePipe.transform(this.operationSectionForm.value.endDate, "yyyy-MM-dd");
    const endTime = this.operationSectionForm.value.time;
    const endDate = date + 'T' + endTime;

    this.metalMovementService.saveMetalMovement(
      this.operationSection.metalMovementId,
      endDate, comment); 
      
    if (this.metalMvtResponse === true) {
      this.isDataLoading = false;
    }

  }

  getUpdatedMetalMovement() {
    this.metalMovementService.metalMvtChangeActionItem.subscribe(response => {

      if (response) {

        this.metalMvtResponse = false;
        this.isDataLoading = true;
        const responseData: any = response;
        this.defineMetalMovement(responseData.metalMovement);

        // --------Todo: Do only when copied not when updating!!!-----------
        this.setNewUrlAfterCopy(responseData.metalMovement.metalMovementId);

        // checked if data are saved
        this.successfullySavedAndChecked = responseData.successfullySavedAndChecked;
        // success 
        if (this.successfullySavedAndChecked === true) {
          this.isMvtCopied = true;
          this.metalMovementService.setMetalMvtCopied(this.isMvtCopied);
          this.snackBarSuccessActionInfo("Metal movement " + this.operationSection.metalMovementId + " saved successfully", 'Close');

        } else {
          this.snackBarFailedActionInfo("An unknown error occurred", 'Close');
        }
      }
      this.metalMvtResponse = true;
    })
  }



  //copy the metal movement 
  copyMetalMovement() {
    this.isMvtCopied = false;
    this.metalMovementService.setMetalMvtCopied(this.isMvtCopied);
    this.initForm();
    this.setDataInput(this.operationSection);
  }

  cancelCopy() {
    this.isMvtCopied = true;
    this.isDataLoading = true;
    this.metalMovementService.setMetalMvtCopied(this.isMvtCopied);
    this.initForm();
    this.setDataInput(this.operationSection);
  }

  saveCopiedData(metalMovementId) {
    const functionnality = "copyMvt";
    const dialogRef = this.openDialog(functionnality);
    dialogRef.afterClosed().subscribe(
      (data: openDialogData) => {
        if(data) {
          this.sendCopiedData(metalMovementId, data.comment, data.duplicateAfter);
        }
    
      }, error => {
        this.cancelCopy();
        console.log("error while copying mvt");
      });
  }

  sendCopiedData(metalMovementId: number, comment: string, duplicateAfter: boolean) {
    this.isDataLoading = true;
    this.metalMovementService.setMetalMvtLoading(this.isDataLoading);
    const date = this.datePipe.transform(this.operationSectionForm.value.endDate, "yyyy-MM-dd");
    const endTime = this.operationSectionForm.value.time;
    const endDate = date + 'T' + endTime;


    this.metalMovementService.copyMetalMovement(
      metalMovementId,
      endDate,
      this.operationSectionForm.value.rot,
      this.operationSectionForm.value.uot,
      this.operationSectionForm.value.ft,
      this.operationSectionForm.value.otForActivity,
      this.operationSectionForm.value.setpoint,
      this.operationSectionForm.value.realised,
      this.operationSectionForm.value.operationId,
      this.operationSectionForm.value.productionLineId,
      this.operationSectionForm.value.sequenceNumberLocal,
      comment,
      duplicateAfter,
    )
    if (this.metalMvtResponse === true) {
      this.isDataLoading = false;
    } else {

    }
  }

  deleteMetalMovement(metalMovementId: number | string) {
    const functionnality = "deleteMvt";
    const dialogRef = this.openDialog(functionnality);
  
    dialogRef.afterClosed().subscribe(
      (data: openDialogData) => {
        if(data) {
          this.sendDeletedMetalMovement(metalMovementId, data.comment, data.includingAllItemsAfterThis);
        }  
      }, error => {
        console.log("error while deleting mvt");
      });
  }

  sendDeletedMetalMovement(metalMovementId:number | string, comment:string, includingAllItemsAfterThis: boolean) {
    const id = metalMovementId;

    const deleteData =
    {
      includingAllItemsAfterThis: includingAllItemsAfterThis,
      comment: comment
    }
    this.metalMovementService.deleteMetalMovement(deleteData, id)
    .pipe(takeLast(1))
    .subscribe(responseData => {
      console.log(responseData, "responseData while delting");
        if (this.inputSectionService.inputMetalUnits.length > 0) {
          const previousMetalMovementId = this.inputSectionService.inputMetalUnits[0].previousMetalMovementId;
          this.router.navigate(['/operationdetail', 'metalmovement', previousMetalMovementId]);
        } else {
          this.router.navigate(['/validationErrors', 'validationErrorsView']);
        }
     
    }, error =>{
      console.log("error success")
    })

  }

  // define the metal movement 
  defineMetalMovement(responseData) {

    const operationSectionData = responseData;
    this.operationSection = {
      id: operationSectionData.metalMovementId,
      metalMovementId: operationSectionData.metalMovementId,
      operation: operationSectionData.operation,
      coilPartNumber: operationSectionData.coilPartNumber,
      coilNumber: operationSectionData.coilNumber,
      partNumber: operationSectionData.partNumber,
      sequenceNumber: operationSectionData.sequenceNumber,
      hasValidationErrors: operationSectionData.hasValidationErrors,
      packageNo: operationSectionData.packageNo,
      endDate: operationSectionData.endDate,
      siteId: operationSectionData.siteId,
      time: operationSectionData.endDate,
      speedSetpoint: operationSectionData.speed.setpoint,
      speedRealised: operationSectionData.speed.realised,
      operationId: operationSectionData.operationId,
      productionLineId: operationSectionData.productionLineId,
      sequenceNumberLocal: operationSectionData.sequenceNumber,
      duration: operationSectionData.duration,
      speed: operationSectionData.speed,
    } as OperationSection;
  }

  setDataInput(responseData) {
    this.operationSection = responseData;
    const date = this.datePipe.transform(this.operationSection.endDate, "yyyy-MM-dd");
    const time = this.datePipe.transform(this.operationSection.endDate, "HH:mm:ss")
    this.operationSectionForm.setValue({
      coilPartNumber: this.operationSection.coilPartNumber,
      packageNo: this.operationSection.packageNo,
      endDate: this.operationSection.endDate,
      time: time,
      rot: this.operationSection.duration.rot,
      uot: this.operationSection.duration.uot,
      ft: this.operationSection.duration.ft,
      otForActivity: this.operationSection.duration.otForActivity,
      setpoint: this.operationSection.speed.setpoint,
      realised: this.operationSection.speed.realised,
      operationId: null,
      productionLineId: null,
      sequenceNumberLocal: this.operationSection.sequenceNumber,
    });
  }

  // Snack bar when a action is successfull
  snackBarSuccessActionInfo(message: string, action: string) {
    const config = new MatSnackBarConfig();
    config.duration = 4000;
    config.panelClass = ['green-snackbar'];
    config.horizontalPosition = 'left';
    this.snackBar.open(message, action, config);
  }

  snackBarFailedActionInfo(message: string, action: string) {
    const config = new MatSnackBarConfig();
    config.duration = 4000;
    config.panelClass = ['red-snackbar'];
    config.horizontalPosition = 'left';
    this.snackBar.open(message, action, config);
  }
  /// operation Id and 

  // get site production and Operation  from the backend
  getSiteAndProductionOperation() {
    const siteProdOperationsLocal: SiteProductionOperationModel[] = JSON.parse(localStorage.getItem('siteProdOperations'));
    if (siteProdOperationsLocal) {
      this.siteProdOperations = siteProdOperationsLocal;

    } else {
      this.validationErrorsFiltersService.getSiteProductionOperationFilters();
      this.validationErrorsFiltersService.getSiteProdOperationListener()
        .subscribe((siteProdOperations: SiteProductionOperationModel[]) => {
          this.siteProdOperations = siteProdOperations;
          localStorage.setItem('siteProdOperations', JSON.stringify(this.siteProdOperations));
        });
    }

  }

  // filter the sitesName
  getSiteNames() {
    const result = [];
    const tmp = {};
    for (let i = 0; i < this.siteProdOperations.length; i++) {
      if (!tmp[this.siteProdOperations[i].siteId]) {
        result.push({ siteId: this.siteProdOperations[i].siteId, site: this.siteProdOperations[i].site });
        tmp[this.siteProdOperations[i].siteId] = true;

      }
    }
    return result
  }


  // get selected SiteName and the corresponding production view
  getProductionLineFromSite(siteId) {
    this.selectedSite = siteId;

    const fullPrudctionData = this.getProductionLineslist(this.selectedSite);

    const hash = Object.create(null),
      result = [];
    for (let i = 0; i < fullPrudctionData.length; i++) {
      if (!hash[fullPrudctionData[i].productionLineId]) {
        hash[fullPrudctionData[i].productionLineId] = true;
        result.push(fullPrudctionData[i]);
      }
    }
    this.productionLinesList = result;
  }

  // get production list
  getProductionLineslist(selectedSiteId) {
    const result = [];
    const tmp = {};
    for (let i = 0; i < this.siteProdOperations.length; i++) {
      if (this.siteProdOperations[i].siteId === selectedSiteId) {
        result.push({ productionLineId: this.siteProdOperations[i].productionLineId, productionLine: this.siteProdOperations[i].productionLine });
        tmp[this.siteProdOperations[i].siteId] = true;

      }
    }
    return result
  }

  // get operation list
  getOperationFromProduction(productionLineId) {
    this.selectedProductionLine = productionLineId;

    const fullOperationData = this.getOperationList(this.selectedProductionLine);
    const hash = Object.create(null),
      result = [];
    for (let i = 0; i < fullOperationData.length; i++) {
      if (!hash[fullOperationData[i].operationId]) {
        hash[fullOperationData[i].operationId] = true;
        result.push(fullOperationData[i]);
      }
    }
    this.operationsList = result;

  }

  getOperationList(selectedProductionLineId) {
    const result = [];
    const tmp = {};
    for (let i = 0; i < this.siteProdOperations.length; i++) {
      if (this.siteProdOperations[i].productionLineId === selectedProductionLineId) {
        result.push({ operationId: this.siteProdOperations[i].operationId, operation: this.siteProdOperations[i].operation });
        tmp[this.siteProdOperations[i].productionLineId] = true;

      }

    }
    return result;

  }

  setNewUrlAfterCopy(metalMovementId: number) {
    /* replace url */
    let url = this.router.createUrlTree(['../../metalmovement', metalMovementId], { relativeTo: this.route });
    this.location.go(url.toString());
  }

  // open dialog
  openDialog(functionnality) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data= {
      comment: this.comment,
      functionnality: functionnality,
      includingAllItemsAfterThis: this.includingAllItemsAfterThis,
      duplicateAfter: this.duplicateAfter,
      consumedBySameMetalMovement: this.consumedBySameMetalMovement
    }
    dialogConfig.width = '50%'
    const dialogRef = this.dialog.open(OpenDialogComponent, dialogConfig);
    return dialogRef;
  }



  

}