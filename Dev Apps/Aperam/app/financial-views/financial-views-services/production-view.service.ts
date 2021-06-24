
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { EventEmitter } from '@angular/core';
import { Injectable, Output } from '@angular/core';
import { ApiFiltersModel } from './../models/api-filters.model';


import { environment } from 'src/environments/environment';
import { ProductionViewApiModel } from '../models/production-view-api';


const BACKEND_URL_PRODUCTION_VIEW = environment.APIurl + "/api/SIPDiPProduction/summary";
@Injectable({
  providedIn: 'root'
})
export class ProductionViewService {

  isProductionViewtLoad: boolean;
  @Output() public productionViewDataLoadChanged: EventEmitter<any> = new EventEmitter();
  private productionViewLoadingSource = new BehaviorSubject<any>(null);
  productionViewLoadingItem = this.productionViewLoadingSource.asObservable();

  productionViewDataApi: ProductionViewApiModel[] = []


  constructor(private http: HttpClient) { }

  postproductionData(apiFilters: ApiFiltersModel) {
    return this.http.post<ProductionViewApiModel>(
      BACKEND_URL_PRODUCTION_VIEW, apiFilters
    )
  }

  /* get metal data load */
  setProductionViewDataLoad(isaDataLoad) {
    this.isProductionViewtLoad = isaDataLoad;
    this.productionViewLoadingSource.next(isaDataLoad)
  }

  getProductionViewDataLoad() {
    return this.productionViewLoadingSource.asObservable();
  }

  productionViewDataLoading(IsDataLoading: boolean) {
    this.productionViewLoadingSource.next(IsDataLoading);
  }


}
