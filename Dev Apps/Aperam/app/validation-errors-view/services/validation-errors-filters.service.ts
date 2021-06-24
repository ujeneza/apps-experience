import { Injectable, Output } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs';
import { EventEmitter } from '@angular/core';

import { environment } from 'src/environments/environment';

import { SiteProductionOperationModel } from '../models/site-production-operation.model';
import { RulesModel } from '../models/rules.model';
import { ValidationErrorsFiltersModel } from './../models/validation-filters.model';
import { AssigneeModel } from './../models/assignee.models';
import { ValidationStatesModel } from './../models/validation-states.model';



const BACKEND_URL_SITE_OPERATION = environment.APIurl + "/api/filteroptions/productionlines";
const BACKEND_URL_VALIDATIONSTATES = environment.APIurl + "/api/filteroptions/validationstates";
const BACKEND_URL_ASSAGNEES = environment.APIurl + "/api/filteroptions/assignees";
const BACKEND_URL_RULES = environment.APIurl + "/api/filteroptions/validationrules";

@Injectable({
  providedIn: 'root'
})
export class ValidationErrorsFiltersService {
  // site and production line filters variables
  siteProductionOperation: SiteProductionOperationModel[] = [];
  private siteProductionOperationUpdated = new Subject<SiteProductionOperationModel[]>();

  validationStates: ValidationStatesModel[] = [];
  private validationStatesUpdated = new Subject<ValidationStatesModel[]>();

  personAssignee: AssigneeModel[] = [];
  private personAssigneeUpdated = new Subject<AssigneeModel[]>();

  rules: RulesModel[] = [];
  private rulesUpdated = new Subject<RulesModel[]>();

  // Validation Error view view variables
  validationErrorsFilters: ValidationErrorsFiltersModel;
  @Output() public validationErrorsChanged: EventEmitter<any> = new EventEmitter();
  private validationErrorsFilterSource = new BehaviorSubject<ValidationErrorsFiltersModel>(null);
  validationErrorsFilterItem = this.validationErrorsFilterSource.asObservable();



  constructor(private http: HttpClient) { }

  // get site and production from the backend
  getSiteProductionOperationFilters() {
    this.http.get<SiteProductionOperationModel[]>(
      BACKEND_URL_SITE_OPERATION
    )
      .subscribe(transformedSiteProductionLines => {
        this.siteProductionOperation = transformedSiteProductionLines;
        this.siteProductionOperationUpdated.next([...this.siteProductionOperation]);
      });
  }
  getSiteProdOperationListener() {
    return this.siteProductionOperationUpdated.asObservable();
  }

  // get Validation states
  getValidationStates() {
    this.http.get<ValidationStatesModel[]>(
      BACKEND_URL_VALIDATIONSTATES
    )
      .subscribe(transformedValidationStates => {
        this.validationStates = transformedValidationStates;
        this.validationStatesUpdated.next([...this.validationStates]);
      });
  }

  getValidationStatusListener() {
    return this.validationStatesUpdated.asObservable();
  }

  // Assigned person
  getPersonAssign() {
    this.http.get<AssigneeModel[]>(
      BACKEND_URL_ASSAGNEES
    )
      .subscribe(transformedAssignees => {
        this.personAssignee = transformedAssignees;
        this.personAssigneeUpdated.next([...this.personAssignee]);
      });

  }
  getPersonAssignListener() {
    return this.personAssigneeUpdated.asObservable();
  }
  // get rules
  getRules() {
    this.http.get<RulesModel[]>(
      BACKEND_URL_RULES
    )
      .subscribe(transformedrules => {
        this.rules = transformedrules;
        this.rulesUpdated.next([...this.rules]);
      });
  }

  getRulesListener() {
    return this.rulesUpdated.asObservable();
  }

  // Send  filter data to 

  // get production view filters
  setValidationErrorsViewFilters(
    metalUnit: string,
    siteId: number,
    productionLineId: number,
    operationId: number,
    validationStatusId: number,
    assignee: string,
    rule: string) {
    this.validationErrorsFilters = {
      metalUnit: metalUnit,
      siteId: siteId,
      productionLineId: productionLineId,
      operationId: operationId,
      validationStatusId: validationStatusId,
      assignee: assignee,
      rule: rule,
    }

    
  }

  getValidationErrorsFilters() {
    return this.validationErrorsFilters;
  }

  changeValidationErrorsFilter(filters: ValidationErrorsFiltersModel) {
    this.validationErrorsFilterSource.next(filters);
  }


}


