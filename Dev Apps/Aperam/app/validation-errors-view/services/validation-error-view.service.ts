import { EventEmitter } from '@angular/core';
import { Injectable, Output } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { environment } from 'src/environments/environment';
import { ValidationErrorsViewApiModel } from '../models/validation-errors-api.model';
import { ApiFiltersModel } from './../models/api-filters.model';
import { shareReplay } from 'rxjs/operators';

const BACKEND_URL_VALIDATION_ERRORS = environment.APIurl + "/api/SIPDiPValidationResult";
@Injectable({
  providedIn: 'root'
})
export class ValidationErrorViewService {

  isValidationErrorstLoading: boolean;
  @Output() public validationErrorsDataLoadChanged: EventEmitter<any> = new EventEmitter();
  private validationErrorsLoadingSource = new BehaviorSubject<any>(null);
  validationErrorsLoadingItem = this.validationErrorsLoadingSource.asObservable();

  constructor(private http: HttpClient) { }

  postValidationErrorsData(apiFilters: ApiFiltersModel) {
    console.log(apiFilters, "apiFilters service")
    return this.http.post<ValidationErrorsViewApiModel>(
      BACKEND_URL_VALIDATION_ERRORS, apiFilters
    )
  }

   /* get validation errors ready data load */
   setValidationErrorsDataLoad(isaDataLoad) {
    this.isValidationErrorstLoading = isaDataLoad;
    this.validationErrorsLoadingSource.next(isaDataLoad)
  }

  getValidationErrorsDataLoad() {
    return this.validationErrorsLoadingSource.asObservable();
  }

  validationErrorsLoading(IsDataLoading: boolean) {
    this.validationErrorsLoadingSource.next(IsDataLoading);
  }

}
