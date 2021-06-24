import { Injectable, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { ActivityViewApiModel } from './../models/activity-view-api';
import { ApiFiltersModel } from './../models/api-filters.model';
import { ActivityViewModel } from './../models/activity-view.model';

const BACKEND_URL_ACTIVITY_VIEW = environment.APIurl + "/api/SIPDiPActivity/summary";

@Injectable({
  providedIn: 'root'
})
export class ActivityViewService {
  isActivityViewtLoad: boolean;
  @Output() public activityViewDataLoadChanged: EventEmitter<any> = new EventEmitter();
  private activityViewLoadingSource = new BehaviorSubject<any>(null);
  activityViewLoadingItem = this.activityViewLoadingSource.asObservable();

  activityViewDataApi: ActivityViewModel[] = [] 

  constructor(private http: HttpClient) {}

  postActivityData(apiFilters: ApiFiltersModel) {
    return  this.http.post<ActivityViewApiModel>(
      BACKEND_URL_ACTIVITY_VIEW, apiFilters
      ) 
  }

   /* get metal data load */
   setActivityViewDataLoad(isaDataLoad) {
    this.isActivityViewtLoad = isaDataLoad;
    this.activityViewLoadingSource.next(isaDataLoad)
  }

  getActivityViewDataLoad() {
    return this.activityViewLoadingSource.asObservable();
  }

  activityViewDataLoading(IsDataLoading: boolean) {
    this.activityViewLoadingSource.next(IsDataLoading);
  }
}
