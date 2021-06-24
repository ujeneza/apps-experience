import { ActivityViewApiModel } from './../../models/activity-view-api';
import { ActivityViewService } from './../../financial-views-services/activity-view.service';
import { FinancialFiltersService } from './../../financial-views-services/financial-filters.service';
import { Subscription, throwError } from 'rxjs';
import { DatePipe } from '@angular/common';
import { Sort, MatTableDataSource, MatSort, MatPaginator, PageEvent } from '@angular/material';
import { Component, OnInit, ViewChild, Output, EventEmitter, ChangeDetectorRef, OnDestroy, ViewRef } from '@angular/core';
import { Router, } from '@angular/router';
import { FinancialFiltersModel } from './../../models/financial-filter-model';
import { ApiFiltersModel } from './../../models/api-filters.model';
import { ActivityViewModel } from './../../models/activity-view.model';
import { catchError } from 'rxjs/operators';



@Component({
  selector: 'app-activity-view-tab',
  templateUrl: './activity-view-tab.component.html',
  styleUrls: ['./activity-view-tab.component.scss']
})
export class ActivityViewTabComponent implements OnInit, OnDestroy {
  data: ActivityViewModel[] = [];
  dataSource = new MatTableDataSource([]);

  /* variables to handle data from the backend */
  columnsToDisplay = ['site', 'metalUnitNumber', 'articleProduced', 'batchProduced', 'wareHouse', 'productionLine', 'steelGrade', 'costCenter', 'costDriver', 'costDriverQuantity', 'costDriverUnit', 'operation', 'operationEnd'];
  activityViewLabel: Map<string, string> = new Map([["site", "Site"], ["metalUnitNumber", "Metal Unit Number"], ["articleProduced", "Article Produced "],
  ["batchProduced", "Batch Produced"], ["wareHouse", "WareHouse"], ["productionLine", "Production Line"],
  ["steelGrade", "Steel Grade"], ["costCenter", "Cost Center"], ["costDriver", "Cost Driver"], ["costDriverQuantity", "cost Driver Quantity"], ["costDriverUnit", "Cost Driver Unit"], ["operation", "Operation"], ["operationEnd", "Operation End"],
  ]);

  /* Angular material variables  to listen the html*/
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  /* output values from child to parent */
  @Output() pageSizeEventEmitter: EventEmitter<number> = new EventEmitter();
  @Output() pageIndexEventEmitter: EventEmitter<number> = new EventEmitter();

  /* variable for pageIndex and pageSize */
  pageIndexActivityView: number;
  pageSizeActivityView: number;
  pageLengthActivityView: number;

  matSortNameActiveActivityView: string;
  matSortDirectionActivityView: string;



  /* variable for activity filters */
  activityViewFinancialFilters: any;


  // request httP variable
  apiFilters: ApiFiltersModel;
  activityViewFinancialFiltersitems: FinancialFiltersModel;
  subscription: Subscription;
  activityViewDataApi: ActivityViewApiModel[] = []
  isLoadingResults = false;

  constructor(
    private financialFiltersService: FinancialFiltersService,
    private activityViewService: ActivityViewService,
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
    this.subscription = this.financialFiltersService.activityViewFinancialFilterItem
      .subscribe((item: FinancialFiltersModel) => {
        this.activityViewFinancialFiltersitems = item;
        if (this.activityViewFinancialFiltersitems && ((this.pageIndexActivityView != undefined) || (this.pageSizeActivityView != undefined))) {
          this.pageIndexActivityView = 0;
          this.onGetActivityView();
        } else {
          console.log("Please enter pageZise or page direction");
        }
      });
  }


  // call the backend for getting data
  onGetActivityView() {
    this.activityViewFinancialFilters = this.financialFiltersService.getActivityiewFilters();
    if (this.activityViewFinancialFilters) {
      // filters
      const filterObject = this.activityViewFinancialFilters;
      const filters = Object.keys(filterObject).map((item) =>
        ({ key: item, values: [filterObject[item]] }))


      // sortCriterias
      const sortCriteriasFilters = [{ field: this.matSortNameActiveActivityView, direction: this.matSortDirectionActivityView }]




      const apiFilters: ApiFiltersModel = {
        take: this.pageSizeActivityView,
        skip: this.pageIndexActivityView * this.pageSizeActivityView,
        filters: filters,
        sortCriterias: sortCriteriasFilters
      };
      this.isLoadingResults = true;
      this.isDataLoading(this.isLoadingResults);
      this.activityViewService.postActivityData(apiFilters).pipe(catchError(error => {
        this.isLoadingResults = false;
        this.isDataLoading(this.isLoadingResults);
        return throwError(error);
      }))
        .subscribe((responseData: ActivityViewApiModel) => {
          this.pageLengthActivityView = responseData.count;
          this.isLoadingResults = true;
          this.data = responseData.entities;
          this.isLoadingResults = true;
          this.detectChanges()
          this.dataSourceInit();
        })

    }
    else {
      console.log("Please enter filters criterias")
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
    const localStoragePageSize = localStorage.getItem("pageSizeActivityView");
    const localStoragePageIndex = localStorage.getItem("pageIndexActivityView");
    const localStorageActive = localStorage.getItem("activeActivityView");
    const localStorageDirection = localStorage.getItem("directionActivityView");

    if (localStoragePageSize) {
      this.pageSizeActivityView = Number(localStorage['pageSizeActivityView']);
    }
    else {
      this.pageSizeActivityView = 5;
    }

    if (localStoragePageIndex) {
      this.pageIndexActivityView = Number(localStorage['pageIndexActivityView']);
    }
    else {
      this.pageIndexActivityView = 0;
    }
    if (localStorageActive) {
      this.matSortNameActiveActivityView = localStorageActive;

    } else {
      this.matSortNameActiveActivityView = null
    }

    if (localStorageDirection) {
      this.matSortDirectionActivityView = localStorageDirection;
    } else {
      this.matSortDirectionActivityView = null
    }
  }



  /* to emit pageIndex and pageSize to the parents component*/
  pageEvent(pageEvent: PageEvent): void {
    this.pageIndexActivityView = pageEvent.pageIndex;
    this.pageSizeActivityView = pageEvent.pageSize;
    this.pageLengthActivityView = pageEvent.length;
    this.pageSizeEventEmitter.emit(this.pageSizeActivityView);
    this.pageIndexEventEmitter.emit(this.pageIndexActivityView);
    localStorage['pageIndexActivityView'] = this.pageIndexActivityView;
    localStorage['pageSizeActivityView'] = this.pageSizeActivityView;


    if (this.pageIndexActivityView || this.pageSizeActivityView) {
      this.onInitPageIndexOfPage();
      this.onGetActivityView();
    }
    else {
      console.log("Please Enter PageSize or pageIndex");
    }

  }



  /* To emit sorting changes */
  sortData(sort: Sort) {
    this.matSortNameActiveActivityView = sort.active;
    this.matSortDirectionActivityView = sort.direction;
    localStorage['activeActivityView'] = this.matSortNameActiveActivityView;
    localStorage['directionActivityView'] = this.matSortDirectionActivityView;
    if (this.matSortNameActiveActivityView && this.matSortDirectionActivityView) {
      this.onInitPageIndexOfPage();
      this.onGetActivityView();
    }
    else {
      console.log("Please Enter sorting data");
    }
  }

  // clear local storage
  onClearLocalStorgage() {
    localStorage.removeItem('activeActivityView');
    localStorage.removeItem('directionActivityView');
    localStorage.removeItem('pageIndexActivityView');
    localStorage.removeItem('pageSizeActivityView');

    this.onInitPageIndexOfPage();
    this.onGetActivityView();
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
    this.activityViewService.activityViewDataLoading(isDataLoad);
    this.activityViewService.setActivityViewDataLoad(isDataLoad);
  }
  ngOnDestroy() {
    this.detectChanges();
    this.subscription.unsubscribe();

  }

}
