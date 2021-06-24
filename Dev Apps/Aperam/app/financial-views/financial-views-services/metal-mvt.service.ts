import { EventEmitter } from '@angular/core';
import { Injectable, Output } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { environment } from 'src/environments/environment';

import { ApiFiltersModel } from './../models/api-filters.model';
import { MetalMvtViewApiModel } from '../models/metal-mvt-api';


const BACKEND_URL_METALMVT = environment.APIurl + "/api/SIPDiPMetalMovement/summary";

@Injectable({
  providedIn: 'root'
})
export class MetalMvtService {
  isMetalMvtLoad: boolean;
  @Output() public metalMvtDataLoadChanged: EventEmitter<any> = new EventEmitter();
  private metalMvtLoadingSource = new BehaviorSubject<any>(null);
  metalMvtLoadingItem = this.metalMvtLoadingSource.asObservable();


  constructor(private http: HttpClient, ) { }

  postMetalMvtData(apiFilters: ApiFiltersModel) {
    console.log(apiFilters, "apiFilters service")
    return this.http.post<MetalMvtViewApiModel>(
      BACKEND_URL_METALMVT, apiFilters
    )
  }


  /* get metal data load */
  setMetalMouvementDataLoad(isaDataLoad) {
    this.isMetalMvtLoad = isaDataLoad;
    this.metalMvtLoadingSource.next(isaDataLoad)
  }

  getMetalMouvementDataLoad() {
    return this.metalMvtLoadingSource.asObservable();
  }

  metalMvtDataLoading(IsDataLoading: boolean) {
    this.metalMvtLoadingSource.next(IsDataLoading);
  }

}