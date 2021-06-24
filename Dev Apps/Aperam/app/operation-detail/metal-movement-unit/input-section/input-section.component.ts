import { Component, OnInit } from '@angular/core';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MetalMovementService } from '../../services/metal-movement/metal-movement.service';
import { InputSectionService } from '../../services/input-section/input-section.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-input-section',
  templateUrl: './input-section.component.html',
  styleUrls: ['./input-section.component.scss']
})
export class InputSectionComponent implements OnInit {
  inputSectionForm: FormGroup
  isInputLoading = true;


  inputMetalUnits: any[];


  parameters: IInputParameters;
  isOperationLoading = true;
  constructor(private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private metalMovementService: MetalMovementService,
    private route: ActivatedRoute,
    public inputSectionService: InputSectionService) { }

  ngOnInit() {
    this.initForm();
    this.getInputAfterCopy();
  }



  initForm() {
    this.inputSectionForm = new FormGroup({

      length: new FormControl(
        { value: null, disabled: true },
        { validators: [Validators.minLength(1)] }
      ),
      width: new FormControl(
        { value: null, disabled: true },
        { validators: [Validators.minLength(1)] }
      ),
      thickness: new FormControl(
        null,
        { validators: [Validators.minLength(1)] }
      ),

      weight: new FormControl(
        null,
        { validators: [Validators.minLength(1)] }
      ),
      

    })
    this.getIdfromRoute();
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
    ).subscribe(value => { this.getInput(value); })
  }

  getInput(id) {
    // this.parameters = id;
    // this.metalMovementService.getRelatedMetalUnits(this.parameters.metalUnitId, this.parameters.metalMovementId)
    // .subscribe( responseData => {
    //   this.inputMetalUnits = responseData.inputMetalUnits, 
    //   this.isInputLoading = false;

    // });
    this.parameters = id
    this.inputSectionService.getInputMetalUnits(this.parameters.metalUnitId, this.parameters.metalMovementId);
    this.isInputLoading = false;
  }

  
   getInputAfterCopy() {
    this.metalMovementService.metalMvtChangeActionItem.subscribe(responseData =>{
      if(responseData){
        const metalMovement = responseData;
        this.inputSectionService.getInputMetalUnits(null, metalMovement.metalMovement.metalMovementId);
      } else{
        console.log("impossible to subscribe");
      }
   
    })
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
