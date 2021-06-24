import { ConsumptionViewService } from './../../financial-views-services/consumption-view.service';
import { ConsumptionViewApiModel } from './../../models/consumption-view-api';
import { Component, OnInit, ViewChild, Output, EventEmitter, ChangeDetectorRef, OnDestroy, ViewRef } from '@angular/core';
import { Sort, MatTableDataSource, MatSort, MatPaginator, PageEvent } from '@angular/material';
import { DatePipe } from '@angular/common';
import { Subscription, throwError } from 'rxjs';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { ConsumptionViewModel } from './../../models/consumption-view.model';
import { FinancialFiltersService } from './../../financial-views-services/financial-filters.service';
import { FinancialFiltersModel } from './../../models/financial-filter-model';
import { ApiFiltersModel } from './../../models/api-filters.model';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-consumption-view-tab',
  templateUrl: './consumption-view-tab.component.html',
  styleUrls: ['./consumption-view-tab.component.scss']
})
export class ConsumptionViewTabComponent implements OnInit {
  data: ConsumptionViewModel[] = [];
  dataSource = new MatTableDataSource([]);

  /* variables to handle data from the backend */
  columnsToDisplay =
    ['site', 'metalUnitNumber', 'packageNProduced', 'divisionProduced', 'divisionConsumed', 'articleProduced', 'articleConsumed',
      'batchProduced', 'batchConsumed', 'wareHouseProduced', 'wareHouseConsumed', 'weight', 'productionLine', 'operation', 'operationEnd'];
  consumptionViewLabel: Map<string, string> = new Map([
    ["site", "Site"], ["metalUnitNumber", "Metal Unit Number"], ["packageNProduced", "Package N° Produced"], ["divisionProduced", "Division Produced"],
    ["divisionConsumed", "Division Consumed"], ["articleProduced", "Article Produced "], ["articleConsumed", "Article Consumed "],
    ["batchProduced", "Batch Produced"], ["batchConsumed", "Batch Consumed"], ["wareHouseProduced", "WareHouse Produced"],
    ["wareHouseConsumed", "WareHouse Consumed"], ["weight", "Weight"], ["productionLine", "Production Line"],
    ["operation", "Operation"], ["operationEnd", "Operation End"],
  ]);


  /* Angular material variables  to listen the html*/
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  /* output values from child to parent */
  @Output() pageSizeEventEmitter: EventEmitter<number> = new EventEmitter();
  @Output() pageIndexEventEmitter: EventEmitter<number> = new EventEmitter();

  /* variable for pageIndex and pageSize */
  pageIndexConsumptionView: number;
  pageSizeConsumptionView: number;
  pageLengthConsumptionView: number;

  matSortNameActiveConsumptionView: string;
  matSortDirectionConsumptionView: string;



  /* variable for consumption filters */
  consumptionViewFinancialFilters: any;


  // request httP variable
  apiFilters: ApiFiltersModel;
  consumptionViewFinancialFiltersitems: FinancialFiltersModel;
  subscription: Subscription;
  consumptionViewDataApi: ConsumptionViewApiModel[] = [];
  isLoadingResults = false;

  constructor(
    private financialFiltersService: FinancialFiltersService,
    private consumptionViewService: ConsumptionViewService,
    private changeDetectorRefs: ChangeDetectorRef,
    private datePipe: DatePipe,
    public router: Router, ) {
    this.filterSubscription();
  }

  ngOnInit() {
    this.dataSourceInit();
    this.onInitPageIndexOfPage();
  }

  dataSourceInit() {
    this.isLoadingResults = true;
    this.dataSource = new MatTableDataSource((!this.data) ? [] : this.data.map(item => ({ ...item, operationEnd: this.transformDate(item.operationEnd) })));
    this.isLoadingResults = false;
    this.isDataLoading(this.isLoadingResults);
  }




  // subscription to the filtering view
  filterSubscription() {
    this.subscription = this.financialFiltersService.consumptionViewFinancialFilterItem
      .subscribe((item: FinancialFiltersModel) => {
        this.consumptionViewFinancialFiltersitems = item;
        if (this.consumptionViewFinancialFiltersitems && ((this.pageIndexConsumptionView != undefined) || (this.pageSizeConsumptionView != undefined))) {
          this.pageIndexConsumptionView = 0;
          this.onGetConsumptionView();
        } else {
          console.log("Please enter pageZise or page direction");
        }
      });
  }

  // call the backend for getting data
  onGetConsumptionView() {
    this.consumptionViewFinancialFilters = this.financialFiltersService.getConsumptioniewFilters();
    // filters
    if (this.consumptionViewFinancialFilters) {
      const filterObject = this.consumptionViewFinancialFilters;
      const filters = Object.keys(filterObject).map((item) =>
        ({ key: item, values: [filterObject[item]] }))


      // sortCriterias
      const sortCriteriasFilters = [{field: this.matSortNameActiveConsumptionView, direction:this.matSortDirectionConsumptionView}]



      const apiFilters: ApiFiltersModel = {
        take: this.pageSizeConsumptionView,
        skip: this.pageIndexConsumptionView * this.pageSizeConsumptionView,
        filters: filters,
        sortCriterias: sortCriteriasFilters
      }

      this.isLoadingResults = true;
      this.isDataLoading(this.isLoadingResults);
      this.consumptionViewService.postConsumptionData(apiFilters).pipe(catchError(error =>{
        this.isLoadingResults = false;
        this.isDataLoading(this.isLoadingResults);
        return throwError(error);
      }))
      .subscribe((responseData: ConsumptionViewApiModel) => {
        this.isLoadingResults = true;
        this.pageLengthConsumptionView = responseData.count;
        this.data = responseData.entities;
        this.isLoadingResults = true;
        this.detectChanges()
        this.dataSourceInit();
      })
    }
    else {

    }


  }

  detectChanges() {
    if (this.changeDetectorRefs !== null &&
      this.changeDetectorRefs !== undefined &&
      !(this.changeDetectorRefs as ViewRef).destroyed) {
      this.changeDetectorRefs.detectChanges();
    } 250;
  }

  // pageIndex and pageSize on init
  onInitPageIndexOfPage() {
    const localStoragePageSize = localStorage.getItem("pageSizeConsumptionView");
    const localStoragePageIndex = localStorage.getItem("pageIndexConsumptionView");
    const localStorageActive = localStorage.getItem("activeAConsumptionView");
    const localStorageDirection = localStorage.getItem("directionConsumptionView");

    if (localStoragePageSize) {
      this.pageSizeConsumptionView = Number(localStorage['pageSizeConsumptionView']);
    }
    else {
      this.pageSizeConsumptionView = 5;
    }

    if (localStoragePageIndex) {
      this.pageIndexConsumptionView = Number(localStorage['pageIndexConsumptionView']);
    }
    else {
      this.pageIndexConsumptionView = 0;
    }
    if(localStorageActive) {
      this.matSortNameActiveConsumptionView = localStorageActive;
  
    } else {
      this.matSortNameActiveConsumptionView = null
    }
  
    if(localStorageDirection) {
      this.matSortDirectionConsumptionView = localStorageDirection;
    } else {
      this.matSortDirectionConsumptionView = null
    }
  }

  /* to emit pageIndex and pageSize to the parents component*/
  pageEvent(pageEvent: PageEvent): void {
    this.pageIndexConsumptionView = pageEvent.pageIndex;
    this.pageSizeConsumptionView = pageEvent.pageSize;
    this.pageLengthConsumptionView = pageEvent.length;
    this.pageSizeEventEmitter.emit(this.pageSizeConsumptionView);
    this.pageIndexEventEmitter.emit(this.pageIndexConsumptionView);
    localStorage['pageIndexConsumptionView'] = this.pageIndexConsumptionView;
    localStorage['pageSizeConsumptionView'] = this.pageSizeConsumptionView;


    if (this.pageIndexConsumptionView || this.pageSizeConsumptionView) {
      this.onInitPageIndexOfPage();
      this.onGetConsumptionView();
    } 
    else {
      console.log("Please Enter PageSize or pageIndex");
    }
  }
  /* To emit sorting changes */
  sortData(sort: Sort) {
    this.matSortNameActiveConsumptionView = sort.active;
    this.matSortDirectionConsumptionView = sort.direction;
    localStorage['activeAConsumptionView'] = this.matSortNameActiveConsumptionView;
    localStorage['directionConsumptionView'] = this.matSortDirectionConsumptionView;
    if (this.matSortNameActiveConsumptionView && this.matSortDirectionConsumptionView) {
      this.onInitPageIndexOfPage();
      this.onGetConsumptionView();
    }
    else {
      console.log("Please Enter sorting data");
    }

  }

  // clear local storage
  onClearLocalStorgage() {
    localStorage.removeItem('activeAConsumptionView');
    localStorage.removeItem('directionConsumptionView');
    localStorage.removeItem('pageIndexConsumptionView');
    localStorage.removeItem('pageSizeConsumptionView');
    this.onInitPageIndexOfPage();
    this.onGetConsumptionView();
  }

  // pipeDate
  transformDate(date) {
    return this.datePipe.transform(date, 'dd-MM-yyyy HH:mm');
  }

  // navigate to the details
  navigateToDetails(selectedMetalUnit) {
    const metalUnitId = selectedMetalUnit;
    this.router.navigate(['/operationdetail', 'metalunit', metalUnitId]);
  }

   // dataLodading
  
   isDataLoading(isDataLoad: boolean) {
    this.consumptionViewService.consumptionViewDataLoading(isDataLoad);
    this.consumptionViewService.setConsumptionViewDataLoad(isDataLoad);
  }

  ngOnDestroy() {
    this.detectChanges();
    this.subscription.unsubscribe();

  }

}
