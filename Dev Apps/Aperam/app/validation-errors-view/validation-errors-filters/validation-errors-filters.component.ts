
import { ValidationStatesModel } from './../models/validation-states.model';

import { Component, OnInit,  } from '@angular/core';
import { Subscription } from 'rxjs';
import {
FormBuilder,  
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { ValidationErrorsFiltersModel } from './../models/validation-filters.model';
import { SiteProductionOperationModel } from '../models/site-production-operation.model';
import { ValidationErrorsFiltersService } from '../services/validation-errors-filters.service';
import { AssigneeModel } from '../models/assignee.models';
import { RulesModel } from '../models/rules.model';

import { ValidationErrorViewService } from '../services/validation-error-view.service';
@Component({
  selector: 'app-validation-errors-filters',
  templateUrl: './validation-errors-filters.component.html',
  styleUrls: ['./validation-errors-filters.component.scss'],
})
export class ValidationErrorsFiltersComponent implements OnInit {
  // variables for the input filters
  validationErrorsFiltersForm: FormGroup;
  validationErrorsFilters: ValidationErrorsFiltersModel;
  checkboxes: boolean;

  // production list view variables
  private siteProdOperationsSub: Subscription;
  private subscription: Subscription;
  siteProdOperations: SiteProductionOperationModel[] = [];
  sitesList: any[];
  productionLinesList: any[];
  operationsList: any[];
  selectedSite: any;
  selectedProductionLine: number;
  selectedOperation: number;

  validationStates: ValidationStatesModel[];
  personAssingees: AssigneeModel[];
  rules: RulesModel[];
  

  // chips list variable
  selectedRules: string[] = [];
  validationErrorsDataLoad: boolean;



  // data loading
  dataLoadsubscription: Subscription;

  constructor(
    private validationErrorsFiltersService: ValidationErrorsFiltersService,
    private validationErrorViewService: ValidationErrorViewService ) { 
      this.validationErrorsSubscription();   
      
  }

  ngOnInit() {
    this.initForm();
    this.getSiteAndProductionOperation();
    this.getValidationStates();
    this.getPersonAssignees();
    this.getRules();
  }

  // Initialization form for filters for all views
  initForm() {
    this.validationErrorsFiltersForm = new FormGroup({
      metalUnit: new FormControl(
        null,
        { validators: [Validators.minLength(3)] }
      ),
      siteId: new FormControl(
        null,
        { validators: [Validators.minLength(3)] }
      ),
      productionLineId: new FormControl(
        null,
        { validators: [Validators.minLength(3)] }
      ),
      operationId: new FormControl(
        null,
        { validators: [Validators.minLength(3)] }
      ),
      validationStatusId: new FormControl(
        null,
        { validators: [Validators.minLength(3)] }
      ),
      assignee: new FormControl(
        null,
        { validators: [Validators.minLength(3)] }
      ),
      rule: new FormControl(
        null,
        { validators: [Validators.minLength(1)] }
      ),


    })
  }

  // get site production and Operation  from the backend
  getSiteAndProductionOperation() {

    const siteProdOperationsLocal: SiteProductionOperationModel[] = JSON.parse(localStorage.getItem('siteProdOperations'));
    if (siteProdOperationsLocal) {
      this.siteProdOperations = siteProdOperationsLocal;
      this.sitesList = this.getSiteNames();
    } else {
      this.validationErrorsFiltersService.getSiteProductionOperationFilters();
      this.siteProdOperationsSub = this.validationErrorsFiltersService.getSiteProdOperationListener()
        .subscribe((siteProdOperations: SiteProductionOperationModel[]) => {
          this.siteProdOperations = siteProdOperations;
          localStorage.setItem('siteProdOperations', JSON.stringify(this.siteProdOperations));

          this.sitesList = this.getSiteNames();
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

  // get validationstates
  getValidationStates() {
    const validationStatesLocal: ValidationStatesModel[] = JSON.parse(localStorage.getItem('validationStates'));
    if (validationStatesLocal) {
      this.validationStates = validationStatesLocal;
    }
    else {
      this.validationErrorsFiltersService.getValidationStates();
      this.subscription = this.validationErrorsFiltersService.getValidationStatusListener()
        .subscribe((validationStates: ValidationStatesModel[]) => {
          this.validationStates = validationStates;
          localStorage.setItem('validationStates', JSON.stringify(this.validationStates));
        });
    }

  }

  // get person assgnee

  getPersonAssignees() {
    this.validationErrorsFiltersService.getPersonAssign();
    this.subscription = this.validationErrorsFiltersService.getPersonAssignListener()
      .subscribe((personAssignees: AssigneeModel[]) => {
        this.personAssingees = personAssignees;
      });
  }

  // Reset filters values
  resetFiltersInput() {
    this.validationErrorsFiltersForm.reset();
    this.selectedRules = undefined;
  }
 // get rules from the backend

 getRules() {
  this.validationErrorsFiltersService.getRules();
  this.subscription = this.validationErrorsFiltersService.getRulesListener()
    .subscribe((rules: RulesModel[]) => {
      this.rules = rules;


    });

}

getSelectedRules(selectedRules) {
this.selectedRules = selectedRules;

}

// send filters data to tab validation

  // Send data to production view component
  postValidationErrorsFilters() {
    const metalUnit = this.validationErrorsFiltersForm.value.metalUnit;
    const siteId = this.validationErrorsFiltersForm.value.siteId;
    const productionLineId = this.validationErrorsFiltersForm.value.productionLineId;
    const operationId = this.validationErrorsFiltersForm.value.operationId;
    const validationStatusId = this.validationErrorsFiltersForm.value.validationStatusId;
    const assignee = this.validationErrorsFiltersForm.value.assignee;
    const rule = this.validationErrorsFiltersForm.value.rule;

    this.validationErrorsFiltersService.setValidationErrorsViewFilters( metalUnit, siteId, productionLineId,operationId,validationStatusId,assignee, rule );
    this.validationErrorsFiltersService.validationErrorsChanged.emit({  metalUnit, siteId, productionLineId,operationId,validationStatusId,assignee, rule});

    const validationErrorsFilterItem = {
       metalUnit: this.validationErrorsFiltersForm.value.metalUnit,
      siteId: this.validationErrorsFiltersForm.value.siteId,
     productionLineId: this.validationErrorsFiltersForm.value.productionLineId,
     operationId: this.validationErrorsFiltersForm.value.operationId,
      validationStatusId: this.validationErrorsFiltersForm.value.validationStatusId,
     assignee: this.validationErrorsFiltersForm.value.assignee,
      rule: this.validationErrorsFiltersForm.value.rule,
    } 

    
    this.validationErrorsFiltersService.changeValidationErrorsFilter(validationErrorsFilterItem);

  }

 validationErrorsSubscription() {
    this.dataLoadsubscription = this.validationErrorViewService.getValidationErrorsDataLoad().subscribe((item) => {
      this.validationErrorsDataLoad = item;

      
    } );
  } 


}
