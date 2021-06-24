import { CostCenterDriverModel } from './../models/cost-center-driver-filter.models';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FinancialFiltersModel } from './../models/financial-filter-model';
import { Injectable, Output, Pipe } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { SiteProductionLineModel } from '../models/site-production-line.model';
import { environment } from 'src/environments/environment';

const BACKEND_URL_SITE_LINE = environment.APIurl + "/api/filteroptions/sitesproductionlines";
const BACKEND_URL_COST_CENTER = environment.APIurl + "/api/filteroptions/productionlinescostcenterdriver";

@Injectable({
  providedIn: 'root'
})
export class FinancialFiltersService {

  // site and production line filters variables
  siteProductionLines: SiteProductionLineModel[] = [];
  private siteProductionLinesUpdated = new Subject<SiteProductionLineModel[]>();

  // cost Center and Cost Driver 
  costCenterCostDrivers: CostCenterDriverModel[] = [];
  private costCenterCostDriverUpdated = new Subject<CostCenterDriverModel[]>();

  // met Movement variables
  metalMvtFinancialFilters: FinancialFiltersModel;
  @Output() public metalMvtFiltersChanged: EventEmitter<any> = new EventEmitter();
  private metalMvtFinancialFilterSource = new BehaviorSubject<FinancialFiltersModel>(null);
  metalMvtFinancialFilterItem = this.metalMvtFinancialFilterSource.asObservable();

  // production view variables
  productionViewFinancialFilters: FinancialFiltersModel;
  @Output() public productionViewFiltersChanged: EventEmitter<any> = new EventEmitter();
  private productionViewFinancialFilterSource = new BehaviorSubject<FinancialFiltersModel>(null);
  productionViewFinancialFilterItem = this.productionViewFinancialFilterSource.asObservable();


    // activity view variables
    activityViewFinancialFilters: FinancialFiltersModel;
    @Output() public activityViewFiltersChanged: EventEmitter<any> = new EventEmitter();
    private activityViewFinancialFilterSource = new BehaviorSubject<FinancialFiltersModel>(null);
    activityViewFinancialFilterItem = this.activityViewFinancialFilterSource.asObservable();

  // consumed view variables
    consumptionViewFinancialFilters: FinancialFiltersModel;
    @Output() public consumptionViewFiltersChanged: EventEmitter<any> = new EventEmitter();
    private consumptionViewFinancialFilterSource = new BehaviorSubject<FinancialFiltersModel>(null);
    consumptionViewFinancialFilterItem = this.consumptionViewFinancialFilterSource.asObservable();

  constructor(private http: HttpClient) {

  }


  // get site and production from the backend
  getSiteProductionLineFilters() {
 this.http.get<SiteProductionLineModel[]>(
        BACKEND_URL_SITE_LINE
      ) 
        .subscribe(transformedSiteProductionLines => {
          this.siteProductionLines = transformedSiteProductionLines;
          this.siteProductionLinesUpdated.next([...this.siteProductionLines]);
        }); 

  }
 getSiteProdLineListener() {
  return this.siteProductionLinesUpdated.asObservable();
}

  // get cost center and cost driver from the backend
getCostCenterCostDriver() {
 this.http.get<CostCenterDriverModel[]>(
    BACKEND_URL_COST_CENTER
  ) .subscribe(transformedCostCenterDriver => {
    this.costCenterCostDrivers = transformedCostCenterDriver;
    this.costCenterCostDriverUpdated.next([...this.costCenterCostDrivers]);
  }); 
}

getCostCenterDriverListener() {
  return this.costCenterCostDriverUpdated.asObservable();
}


  /* get metal mouvement filters */
  setMetalMouvementFilters(metalUnit: string, siteId: number, openPeriod: boolean) {
    this.metalMvtFinancialFilters = {
      metalUnit: metalUnit,
      siteId: siteId,
      openPeriod: openPeriod
    } as FinancialFiltersModel;

  }
  getMetalMouvementFilters() {
    return this.metalMvtFinancialFilters;
  }
  changeMetalMvtFinancialFilter(filters: FinancialFiltersModel) {
    this.metalMvtFinancialFilterSource.next(filters);
  }


  // get production view filters
  setProductionViewFilters(metalUnit: string, siteId: number, productionLineId: number, openPeriod: boolean) {
    this.productionViewFinancialFilters = {
      metalUnit: metalUnit,
      siteId: siteId,
      productionLineId: productionLineId,
      openPeriod: openPeriod
    } as FinancialFiltersModel;
  }

  getProductionViewFilters() {
    return this.productionViewFinancialFilters;
  }

  changeProductionViewFinancialFilter(filters: FinancialFiltersModel) {
    this.productionViewFinancialFilterSource.next(filters);
  }

// get actvity view filters
setActivityViewFilters(metalUnit: string, siteId: number, productionLineId: number,costCenterId: number, costDriverId:number, openPeriod: boolean) {
  this.activityViewFinancialFilters = {
    metalUnit: metalUnit,
    siteId: siteId,
    productionLineId: productionLineId,
    costCenterId: costCenterId,
    costDriverId: costDriverId,
    openPeriod: openPeriod
  } as FinancialFiltersModel;
}

getActivityiewFilters() {
  return this.activityViewFinancialFilters;
}

changeActivityViewFinancialFilter(filters: FinancialFiltersModel) {
  this.activityViewFinancialFilterSource.next(filters);
}

// get consumption view filters
setConsumptionViewFilters(metalUnit: string, siteId: number, productionLineId: number, consumedArticle: string, producedArticle: string, openPeriod: boolean) {
  this.consumptionViewFinancialFilters = {
    metalUnit: metalUnit,
    siteId: siteId,
    productionLineId: productionLineId,
    consumedArticle: consumedArticle,
    producedArticle: producedArticle,
    openPeriod: openPeriod
  } as FinancialFiltersModel;

 
}

getConsumptioniewFilters() {
  return this.consumptionViewFinancialFilters;
}

changeConsumptionViewFinancialFilter(filters: FinancialFiltersModel) {
  this.consumptionViewFinancialFilterSource.next(filters);
}




}
