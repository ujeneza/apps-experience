import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { environment } from 'src/environments/environment';

import { ConsumptionViewApiModel } from './../models/consumption-view-api';
import { ApiFiltersModel } from './../models/api-filters.model';

const BACKEND_URL_CONSUMPTION_VIEW = environment.APIurl + "/api/SIPDiPConsumption/summary";

@Injectable({
  providedIn: 'root'
})
export class ConsumptionViewService {

  consumptionViewDataApi: ConsumptionViewApiModel[] = [];

  isConsumptionViewtLoad: boolean;
  @Output() public consumptionViewDataLoadChanged: EventEmitter<any> = new EventEmitter();
  private consumptionViewLoadingSource = new BehaviorSubject<any>(null);
  consumptionViewLoadingItem = this.consumptionViewLoadingSource.asObservable();


  constructor(private http: HttpClient) {}

  postConsumptionData(apiFilters: ApiFiltersModel) {
    console.log(apiFilters, "from services")
    return  this.http.post<ConsumptionViewApiModel>(
      BACKEND_URL_CONSUMPTION_VIEW, apiFilters
      ) 
  }

    /* get metal data load */
    setConsumptionViewDataLoad(isaDataLoad) {
      this.isConsumptionViewtLoad = isaDataLoad;
      this.consumptionViewLoadingSource.next(isaDataLoad)
    }
  
    getConsumptionViewDataLoad() {
      return this.consumptionViewLoadingSource.asObservable();
    }
  
    consumptionViewDataLoading(IsDataLoading: boolean) {
      this.consumptionViewLoadingSource.next(IsDataLoading);
    }



}
