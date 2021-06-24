import { DatePipe } from '@angular/common';
import { Sort, MatTableDataSource, MatSort, MatPaginator, PageEvent } from '@angular/material';
import { Subscription, throwError } from 'rxjs';
import { Component, OnInit, ViewChild, Output, EventEmitter, ChangeDetectorRef, ViewRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { ProductionViewService } from './../../financial-views-services/production-view.service';
import { FinancialFiltersService } from './../../financial-views-services/financial-filters.service';

import { ProductionViewApiModel } from '../../models/production-view-api';
import { FinancialFiltersModel } from './../../models/financial-filter-model';
import { ApiFiltersModel } from './../../models/api-filters.model';
import { ProductionViewModel } from './../../models/production-view.model';
import { catchError } from 'rxjs/operators';




@Component({
  selector: 'app-production-view-tab',
  templateUrl: './production-view-tab.component.html',
  styleUrls: ['./production-view-tab.component.scss']
})
export class ProductionViewTabComponent implements OnInit, OnDestroy {
  data: ProductionViewModel[] = [];
  dataSource = new MatTableDataSource([]);

  /* variables to handle data from the backend */
  columnsToDisplay = ['site', 'metalUnitNumber', 'consumedMetalUnit', 'packageNProduced', 'articleProduced', 'batchProduced', 'wareHouse', 'weight', 'consumedWeight', 'productionLine', 'operation', 'operationEnd'];
  productionViewLabel: Map<string, string> = new Map([["site", "Site"], ["metalUnitNumber", "Metal Unit Number"], ["consumedMetalUnit", "Consumed Metal Unit"], ["packageNProduced", "package N° Produced"],
  ["articleProduced", "Article Produced "], ["batchProduced", "Batch Produced"], ["wareHouse", "WareHouse"], ["weight", "Weight"], ["consumedWeight", "Consumed Weight"], ["productionLine", "Production Line"], ["operation", "Operation"], ["operationEnd", "Operation End"],
  ]);

  /* Angular material variables  to listen the html*/
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  /* output values from child to parent */
  @Output() pageSizeEventEmitter: EventEmitter<number> = new EventEmitter();
  @Output() pageIndexEventEmitter: EventEmitter<number> = new EventEmitter();

  /* variable for pageIndex and pageSize */
  pageIndexProductionView: number;
  pageSizeProductionView: number;
  pageLengthProductionView: number;

  matSortNameActiveProductionView: string;
  matSortDirectionProductionView: string;



  /* variable for production filters */
  productionViewFinancialFilters: any;

  // request httP variable
  apiFilters: ApiFiltersModel;
  productionViewFinancialFiltersitems: FinancialFiltersModel;
  subscription: Subscription;
  productionViewDataApi: ProductionViewApiModel[] = [];
  isLoadingResults = false;


  constructor(
    private financialFiltersService: FinancialFiltersService,
    private productionViewService: ProductionViewService,
    private datePipe: DatePipe,
    private changeDetectorRefs: ChangeDetectorRef,
    public router: Router) {
    this.filterSubscription();
  }
  // trigger pagination change



  ngOnInit() {
    this.dataSourceInit();
    this.onInitPageIndexPageSize();

  }

  dataSourceInit() {
    this.isLoadingResults = true;
    this.dataSource = new MatTableDataSource((!this.data) ? [] : this.data.map(item => ({ ...item, operationEnd: this.transformDate(item.operationEnd) })));
    this.isLoadingResults = false;
    this.isDataLoading(this.isLoadingResults);
    /*   this.dataSource.sort = this.sort;  */
    /*   this.dataSource.paginator = this.paginator; */
  }



  // subscription to the filtering view
  filterSubscription() {
    this.subscription = this.financialFiltersService.productionViewFinancialFilterItem
      .subscribe((item: FinancialFiltersModel) => {
        this.productionViewFinancialFiltersitems = item;
        if (this.productionViewFinancialFiltersitems && ((this.pageIndexProductionView != undefined) || (this.pageSizeProductionView != undefined))) {
         this.pageIndexProductionView = 0;
          this.onGetProductionView();
        } else {
          console.log("Please enter pageZise or page direction");
        }
      });
  }
  // call the backend fpr gettting data
  onGetProductionView() {
    //filters
    this.productionViewFinancialFilters = this.financialFiltersService.getProductionViewFilters();
    if (this.productionViewFinancialFilters) {
      const filterObject = this.productionViewFinancialFilters;
      const filters = Object.keys(filterObject).map((item) =>
        ({ key: item, values: [filterObject[item]] }))

      // sortCriterias

      const sortCriteriasFilters = [{ field: this.matSortNameActiveProductionView, direction: this.matSortDirectionProductionView }]




      const apiFilters: ApiFiltersModel = {
        take: this.pageSizeProductionView,
        skip: this.pageIndexProductionView * this.pageSizeProductionView,
        filters: filters,
        sortCriterias: sortCriteriasFilters
      }
      this.isLoadingResults = true;
      this.isDataLoading(this.isLoadingResults);
      this.productionViewService.postproductionData(apiFilters)
      .pipe(catchError(error =>{
        this.isLoadingResults = false;
        this.isDataLoading(this.isLoadingResults);
        return throwError(error);
      }))
      .subscribe((responseData: ProductionViewApiModel) => {
        this.isLoadingResults = true;
        this.pageLengthProductionView = responseData.count;
        this.data = responseData.entities;
        this.isLoadingResults = true;
        this.detectChanges();

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
  onInitPageIndexPageSize() {
    const localStoragePageSize = localStorage.getItem("pageSizeProductionView");
    const localStoragePageIndex = localStorage.getItem("pageIndexProductionView");
    const localStorageActive = localStorage.getItem("activeProductionView");
    const localStorageDirection = localStorage.getItem("directionProductionView");

    if (localStoragePageSize) {
      this.pageSizeProductionView = Number(localStorage['pageSizeProductionView']);
    }
    else {
      this.pageSizeProductionView = 5;
    }

    if (localStoragePageIndex) {
      this.pageIndexProductionView = Number(localStorage['pageIndexProductionView']);
    }
    else {
      this.pageIndexProductionView = 0;
    }
    if (localStorageActive) {
      this.matSortNameActiveProductionView = localStorageActive;

    } else {
      this.matSortNameActiveProductionView = null
    }

    if (localStorageDirection) {
      this.matSortDirectionProductionView = localStorageDirection;
    } else {
      this.matSortDirectionProductionView = null
    }
  }

  /* to emit pageIndex and pageSize to the parents component*/
  pageEvent(pageEvent: PageEvent): void {
    this.pageIndexProductionView = pageEvent.pageIndex;
    this.pageSizeProductionView = pageEvent.pageSize;
    this.pageLengthProductionView = pageEvent.length;
    this.pageSizeEventEmitter.emit(this.pageSizeProductionView);
    this.pageIndexEventEmitter.emit(this.pageIndexProductionView);
    localStorage['pageIndexProductionView'] = this.pageIndexProductionView;
    localStorage['pageSizeProductionView'] = this.pageSizeProductionView;


    if (this.pageIndexProductionView || this.pageSizeProductionView) {
      this.onInitPageIndexPageSize();
      this.onGetProductionView();
    }
    else {
      console.log("Please Enter PageSize or pageIndex");
    }
  }




  /* To emit sorting changes */
  sortData(sort: Sort) {
    this.matSortNameActiveProductionView = sort.active;
    this.matSortDirectionProductionView = sort.direction;
    localStorage['activeProductionView'] = this.matSortNameActiveProductionView;
    localStorage['directionProductionView'] = this.matSortDirectionProductionView;
    if (this.matSortNameActiveProductionView && this.matSortDirectionProductionView) {

      this.onInitPageIndexPageSize();
      this.onGetProductionView();
    }
    else {
      console.log("Please Enter sorting data");
    }
  }



  // clear local storage
  onClearLocalStorgage() {
    localStorage.removeItem('activeProductionView');
    localStorage.removeItem('directionProductionView');
    localStorage.removeItem('pageIndexProductionView');
    localStorage.removeItem('pageSizeProductionView');

    this.onInitPageIndexPageSize();
    this.onGetProductionView();
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
    this.productionViewService.productionViewDataLoading(isDataLoad);
    this.productionViewService.setProductionViewDataLoad(isDataLoad);
  }

  // destroy detect change
  ngOnDestroy() {
    this.detectChanges();
    this.subscription.unsubscribe();

  }
}
