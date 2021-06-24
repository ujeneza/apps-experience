import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeLast } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { MatSnackBarConfig, MatSnackBar, MatDialogConfig, MatDialog } from '@angular/material';

import { MetalUnitService } from '../../services/metal-unit/metal-unit.service';
import { MetalUnitModel } from './../../models/metal-unit-section.model';
import { MetalUnit } from '../../models/metal-movement-unit-model';
import MiniValidationError from '../../models/mini-validation-error-model';
import { OutputSectionService } from '../../services/output-section/output-section.service';
import { MetalMovementService } from '../../services/metal-movement/metal-movement.service';
import { OpenDialogComponent } from '../../open-dialog/open-dialog.component';

@Component({
  selector: 'app-metal-unit',
  templateUrl: './metal-unit.component.html',
  styleUrls: ['./metal-unit.component.scss']
})
export class MetalUnitComponent implements OnInit {
  isMetalUnit: boolean = false;
  metalUnitSection: MetalUnitModel;
  metalUnitOrig: MetalUnit;
  metalUnitSectionForm: FormGroup;
  isInCopyMode: boolean = false;
  successfullySavedAndChecked: boolean;
  currentMetalMovementId: number;

  outputSectionSubscriptions: Subscription;
  metalUnitSectionFormOnChangeSubscription: Subscription;
  metalUnitServiceSubscriptions: Subscription;
  metalMovementSubscriptions: Subscription;

  goToCopyModeAfterLoading: boolean = false;
  copyTriggeredByMetalMovement: boolean = false;

  miniValidationErrors: MiniValidationError[];
  isDataLoading = true;
  isErrorsLoading = false;

  // variable for openDialog
  comment: string;
  includingAllItemsAfterThis: boolean;
  duplicateAfter: boolean;
  consumedBySameMetalMovement: boolean;

  constructor(
    private metalUnitService: MetalUnitService,
    private metalMovementService: MetalMovementService,
    private outputSectionService: OutputSectionService,
    private snackBar: MatSnackBar,
    public router: Router,
    private dialog: MatDialog,
    public route: ActivatedRoute) {

  }

  ngOnInit() {
    this.initForm();
    this.subscribeToOutputSectionObservables();
    this.subScribeToMetalUnitServiceObservables();
    this.subscribeToMetalMovementServiceObservables();
  }

  // Init form
  initForm() {
    if (this.metalUnitSectionFormOnChangeSubscription)
      this.metalUnitSectionFormOnChangeSubscription.unsubscribe();

    this.metalUnitSectionForm = new FormGroup({
      metalUnit: new FormControl(
        { value: null, disabled: true },
        { validators: [Validators.minLength(1)] }
      ),
      coilNumber: new FormControl(
        null,
        { validators: [Validators.minLength(1)] }
      ),
      partNumber: new FormControl(
        null,
        { validators: [Validators.minLength(1)] }
      ),
      operation: new FormControl(
        { value: null, disabled: true },
        { validators: [Validators.minLength(1)] }
      ),
      batchName: new FormControl(
        { value: null, disabled: true },
        { validators: [Validators.minLength(1)] }
      ),
      macroArticle: new FormControl(
        { value: null, disabled: true },
        { validators: [Validators.minLength(1)] }
      ),
      weight: new FormControl(
        null,
        { validators: [Validators.minLength(1)] }
      ),
      hotWeight: new FormControl(
        { value: null, disabled: !this.isInCopyMode },
        { validators: [Validators.minLength(1)] }
      ),
      steelgrade: new FormControl(
        { value: null, disabled: true },
        { validators: [Validators.minLength(1)] }
      ),
      finishing: new FormControl(
        null,
        { validators: [Validators.minLength(1)] }
      ),
      shape: new FormControl(
        null,
        { validators: [Validators.minLength(1)] }
      ),
      length: new FormControl(
        null,
        { validators: [Validators.minLength(1)] }
      ),
      width: new FormControl(
        null,
        { validators: [Validators.minLength(1)] }
      ),
      thickness: new FormControl(
        null,
        { validators: [Validators.minLength(1)] }
      ),
      no: new FormControl(
        { value: null, disabled: !this.isInCopyMode },
        { validators: [Validators.minLength(1)] }
      ),
      type: new FormControl(
        { value: null, disabled: !this.isInCopyMode },
        { validators: [Validators.minLength(1)] }
      ),
      class: new FormControl(
        { value: null, disabled: !this.isInCopyMode },
        { validators: [Validators.minLength(1)] }
      ),
    });

    this.metalUnitSectionFormOnChangeSubscription = this.metalUnitSectionForm.valueChanges.subscribe(val => {
      this.metalUnitService.metalUnitSectionFormData = val;
    });
  }

  // OutputSectionObservable-subscriptions
  // activeMetalUnitChanged observable
  // copyMetalUnitClicked observable
  subscribeToOutputSectionObservables() {
    this.outputSectionSubscriptions = this.outputSectionService.activeMetalUnitChanged.subscribe(val => {
      if (val != this.metalUnitSection.metalUnitId) {
        this.getMetalUnitDetail({ metalMovementId: null, metalUnitId: val });
      }
    });

    this.outputSectionSubscriptions.add(
      this.outputSectionService.copyMetalUnitClicked.subscribe(val => {
        if (val != this.metalUnitSection.metalUnitId) {
          this.goToCopyModeAfterLoading = true;
          this.getMetalUnitDetail({ metalMovementId: null, metalUnitId: val });
        }
        else {
          this.setCopyMode(false);
        }
      })
    );
  }

  // MetalUnitServiceObservable-subscriptions
  // metalUnitChanged
  // validationResultsChanged
  subScribeToMetalUnitServiceObservables() {
    this.metalUnitServiceSubscriptions = this.metalUnitService.metalUnitChanged.subscribe(val => {
      this.metalUnitSection = val;
      this.currentMetalMovementId = this.metalUnitService.currentMetalMovementId;
      this.outputSectionService.setActiveMetalUnit(this.metalUnitSection.metalUnitId);
      this.setInputForm(this.metalUnitSection);
      if (this.goToCopyModeAfterLoading) {
        this.goToCopyModeAfterLoading = false;
        this.setCopyMode(false);
      }
      this.isDataLoading = false;
    });

    this.metalUnitServiceSubscriptions = this.metalUnitService.validationResultsChanged.subscribe(val => {
      this.miniValidationErrors = val;
      this.isErrorsLoading = false;
    });

  }

  // MetalMovementServiceObservable-subscriptions
  // metalMvtChangeActionItem (after a metal movement save/copy)
  // metalMvtLoadingActionItem (after a metal movement load)
  // mvtLoadingItem (there is a metal movement loading)
  subscribeToMetalMovementServiceObservables() {
    this.metalMovementSubscriptions = this.metalMovementService.metalMvtChangeActionItem.subscribe(response => {
      if (response) {
        this.metalUnitService.setMetalUnit(response.metalMovement);
        this.metalUnitService.validationResultsChanged.next(response.metalMovementRelatedItemsValidationErrors);
      } else {
        console.log("unable to get data from backend");
      }
    });

    this.metalMovementSubscriptions.add(
      this.metalMovementService.metalMvtLoadingActionItem.subscribe(response => {
        if (response) {
          this.metalUnitService.setMetalUnit(response);
        } else {
          console.log("unable to get data from backend");
        }
      })
    );

    this.metalMovementSubscriptions.add(
      this.metalMovementService.metalUnitValidationResultItem.subscribe(response => {
        if (response) {
          this.metalUnitService.setMetalUnitValidationResult(response);
        } else {
          console.log("unable to get data from backend");
        }
      })
    )

    this.metalMovementSubscriptions.add(
      this.metalMovementService.mvtLoadingItem.subscribe(response => {
        if (response) {
          if (response === true) {
            this.startAllLoading();
          } else {
            console.log(response, "response loading")
          }
        }
      })
    );

    this.metalMovementSubscriptions.add(
      this.metalMovementService.mvtCopyItem.subscribe(response => {
        if (response === false || response === true) {
          if (response === false) {
            this.setCopyMode(true);
          } else {
            this.cancelCopy();
          }
        }
      })
    );
  }

  // Get data from the backend
  getMetalUnitDetail(id: IInputParameters) {
    this.startAllLoading();
    this.metalMovementService.getMetalMovementByMetalMovementId(id.metalMovementId, id.metalUnitId)
      .subscribe(metalMovementData => {
        this.metalUnitService.setMetalUnit(metalMovementData);
      });

    /* load metal movement validation errors */
    this.metalMovementService.getMetalUnitValidationErrors(id.metalMovementId, id.metalUnitId)
      .subscribe(miniValidationErrorData => {
        this.metalUnitService.validationResultsChanged.next(miniValidationErrorData);
      });
  }

  // Save data in the backend

  saveMetalUnit() {
    const functionnality = "saveMu";
    const dialogRef = this.openDialog(functionnality);
    dialogRef.afterClosed().subscribe(
      (data: openDialogData) => {
        if(data) {
          this.sendMetalUnit(data.comment);
        }
        
      }, error => {
        this.cancelCopy();
        console.log("error while saving mu");
      });
  }

  sendMetalUnit(comment: string) {
    this.startAllLoading();

    this.metalUnitService.saveMetalUnit(comment)
      .subscribe(response => {
        const responseData: any = response;
        const metalUnitData: any = responseData.metalMovement;
        const validationErrorMini = responseData.metalMovementRelatedItemsValidationErrors;

        this.metalUnitService.setMetalUnit(metalUnitData);

        // send the data to the template
        this.setInputForm(this.metalUnitSection)

        // checked if data are saved
        this.successfullySavedAndChecked = responseData.successfullySavedAndChecked;
        // success 
        if (this.successfullySavedAndChecked === true) {
          this.snackBarSuccessActionInfo("Metal Unit " + this.metalUnitSection.metalUnit + " saved successfully", 'Close');

        } else {
          this.snackBarFailedActionInfo("An unknown error occurred", 'Close');
        }

        this.metalUnitService.validationResultsChanged.next(validationErrorMini);

      }, error => {
        this.stopAllLoading();
      })
  }


  copyMetalUnit() {
    const functionnality ="copyMu";
    const dialogRef = this.openDialog(functionnality);
    dialogRef.afterClosed().subscribe(
      (data: openDialogData) => {
        if(data) {
          this.sendCopyMetalUnit(data.comment, data.consumedBySameMetalMovement);
        } 
      }, error => {
        this.cancelCopy();
        console.log("error while copying mu");
      });
  }
  // Copy metal unit
  sendCopyMetalUnit(comment: string, consumedBySameMetalMovement: boolean) {
    this.startAllLoading();
    this.metalUnitService.copyMetalUnit(comment,consumedBySameMetalMovement ).subscribe(response => {
      this.isErrorsLoading = true;
      const responseData: any = response;
      const metalUnitData: any = responseData.metalMovement;
      const validationErrorMini = responseData.metalMovementRelatedItemsValidationErrors;

      // subscribe to the matal unit data
      this.metalUnitService.setMetalUnit(metalUnitData);

      // send the data to the template
      this.isInCopyMode = false;
      this.metalUnitSectionForm.reset();
      this.setInputForm(this.metalUnitSection)

      // checked if data are saved
      this.successfullySavedAndChecked = responseData.successfullySavedAndChecked;

      // success 
      if (this.successfullySavedAndChecked === true) {
        this.snackBarSuccessActionInfo("Metal Unit " + this.metalUnitSection.metalUnit + " saved successfully", 'Close');

      } else {
        this.snackBarFailedActionInfo("An unknown error occurred", 'Close');
      }

      // subscribe to validation errors
      //this.miniValidationErrors = validationErrorMini
      this.metalUnitService.validationResultsChanged.next(validationErrorMini);

      // reload related items
      if (this.metalUnitSection && this.metalUnitSection.metalUnitId) {
        this.outputSectionService.getOutputMetalUnits(this.metalUnitSection.metalUnitId, null);
        this.outputSectionService.setActiveMetalUnit(this.metalUnitSection.metalUnitId);
      }
    }, error => {
      this.stopAllLoading();
    })
  }

  // Detele metal unit 
  deleteMetalUnit(metalunitId) {
    const functionnality ="deleteMu";
    const dialogRef = this.openDialog(functionnality);
    dialogRef.afterClosed().subscribe(
      (data: openDialogData) => {
        if(data) {
          this.sendDeleteMetalUnit(metalunitId, data.comment);
        } 
      }, error => {
        this.cancelCopy();
        console.log("error while deleting mu");
      });
  }

  sendDeleteMetalUnit(metalunitId: number, comment:string) {
    this.startAllLoading();
    const deletedMetalUnitData = { comment: comment };
    this.metalUnitService.deleteMetalUnit(deletedMetalUnitData)
      .pipe(takeLast(1))
      .subscribe(response => {

        // reload related items
        this.getMetalUnitDetail({ metalMovementId: this.currentMetalMovementId, metalUnitId: null });
        this.outputSectionService.getOutputMetalUnits(null, this.currentMetalMovementId);
      },
        error => {
          this.stopAllLoading();
        }
      );
  }

  // Form actions

  // Set input values in the dom
  setInputForm(metalUnitSection) {
    this.metalUnitSection = metalUnitSection;
    this.metalUnitSectionForm.setValue({
      metalUnit: this.metalUnitSection.metalUnit,
      coilNumber: this.metalUnitSection.coilNumber,
      partNumber: this.metalUnitSection.partNumber,
      operation: this.metalUnitSection.operation,
      batchName: this.metalUnitSection.batchName,
      macroArticle: this.metalUnitSection.macroArticle,
      weight: this.metalUnitSection.weight,
      hotWeight: this.metalUnitSection.hotWeight,
      steelgrade: this.metalUnitSection.steelgrade,
      finishing: this.metalUnitSection.finishing,
      shape: this.metalUnitSection.shape,
      length: this.metalUnitSection.length,
      width: this.metalUnitSection.width,
      thickness: this.metalUnitSection.thickness,
      no: this.metalUnitSection.no,
      type: this.metalUnitSection.type,
      class: this.metalUnitSection.packageClass,
    });
    this.isDataLoading = false;
  }

  // Set form in copy mode?
  setCopyMode(isTriggeredByMetalMovement: boolean) {
    this.copyTriggeredByMetalMovement = isTriggeredByMetalMovement;
    this.isInCopyMode = true;
    this.initForm();
    this.setInputForm(this.metalUnitSection);
  }

  // Cancel copy mode en go back to view mode
  cancelCopy() {
    this.isInCopyMode = false;
    this.copyTriggeredByMetalMovement = false;
    this.stopAllLoading();
    this.initForm();
    this.setInputForm(this.metalUnitSection);
  }

  // Display all loading states
  startAllLoading() {
    this.isDataLoading = true;
    this.isErrorsLoading = true;
  }

  // Hide all loading states
  stopAllLoading() {
    this.isDataLoading = false;
    this.isErrorsLoading = false;
  }

  // Show success Snack bar
  snackBarSuccessActionInfo(message: string, action: string) {
    const config = new MatSnackBarConfig();
    config.duration = 4000;
    config.panelClass = ['green-snackbar'];
    config.horizontalPosition = 'right';
    this.snackBar.open(message, action, config);
  }

  // Show failed Snack bar
  snackBarFailedActionInfo(message: string, action: string) {
    const config = new MatSnackBarConfig();
    config.duration = 4000;
    config.panelClass = ['red-snackbar'];
    config.horizontalPosition = 'right';
    this.snackBar.open(message, action, config);
  }

  // can copy metal unit
  canCopy(): boolean {
    return (
      !this.isInCopyMode
      && !this.isDataLoading
    );
  }

  // can delete metal unit
  canDelete(): boolean {
    return (
      !this.isInCopyMode
      && !this.isDataLoading
      && (
        (this.metalUnitSection === undefined)
        || (this.metalUnitSection.nextMetalMovementId === undefined)
        || (this.metalUnitSection.nextMetalMovementId === 0)
      )
      && this.outputSectionService.getOutputMetalUnitsCount() > 1
    );
  }

  canCancelCopyMode(): boolean {
    return (
      this.isInCopyMode
      && !this.copyTriggeredByMetalMovement
    );
  }

  canSaveCopyMode(): boolean {
    return (
      this.isInCopyMode
      && !this.copyTriggeredByMetalMovement
    );
  }

  // Destroing all the subscriptions
  ngOnDestroy(): void {
    this.metalUnitSectionFormOnChangeSubscription.unsubscribe();
    this.metalUnitServiceSubscriptions.unsubscribe();
    this.outputSectionSubscriptions.unsubscribe();
    this.metalMovementSubscriptions.unsubscribe();
  }

  // open dialog
  openDialog(functionnality) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
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
