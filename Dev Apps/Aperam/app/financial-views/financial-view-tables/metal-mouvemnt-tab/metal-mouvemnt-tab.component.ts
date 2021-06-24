import { MetalUnitModel } from './../../models/metal-unit.model';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MetalMvtViewApiModel } from './../../models/metal-mvt-api';
import { MetalMvtModel } from './../../models/metal-mvt.model';
import { Component, OnInit, ViewChild, Output, EventEmitter, ChangeDetectorRef, OnDestroy, ViewRef } from '@angular/core';
import { Sort, MatTableDataSource, MatSort, MatPaginator, PageEvent } from '@angular/material';
import { Subscription, throwError } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { ApiFiltersModel } from './../../models/api-filters.model';
import { FinancialFiltersService } from './../../financial-views-services/financial-filters.service';
import { FinancialFiltersModel } from '../../models/financial-filter-model';
import { MetalMvtService } from '../../financial-views-services/metal-mvt.service';
import { isNgTemplate } from '@angular/compiler';
import { catchError } from 'rxjs/operators';



@Component({
  selector: 'app-metal-mouvemnt-tab',
  templateUrl: './metal-mouvemnt-tab.component.html',
  styleUrls: ['./metal-mouvemnt-tab.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class MetalMouvemntTabComponent implements OnInit, OnDestroy {
  data: MetalMvtModel[] = [];
  dataSource = new MatTableDataSource([]);

  /* variables to handle data from the backend */
  columnsToDisplay = ['site', 'coilNo', 'operation', 'consumedWeight',
    'producedWeight', 'operationEnd', 'hasValidationErrors', 'detail'];
  metalMvtViewLabel: Map<string, string> =
    new Map([["site", "Site"], ["coilNo", "Coil"], ["operation", "Operation"], 
    ["consumedWeight", "consumed Weight "], ["producedWeight", "Produced Weight"],
    ["operationEnd", "Operation End"], ["hasValidationErrors", "Error"], ["detail", ""],
    ]);

  /* Angular material variables  to listen the html*/
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  /* output values from child to parent */
  @Output() pageSizeEventEmitter: EventEmitter<number> = new EventEmitter();
  @Output() pageIndexEventEmitter: EventEmitter<number> = new EventEmitter();

  /* variable for pageIndex and pageSize */
  pageIndexMetalMvtView: number;
  pageSizeMetalMvtView: number;
  pageLengthMetalMvtView: number;

  matSortNameActiveMetalMvtView: string;
  matSortDirectionMetalMvtView: string;

  /* variable for material mouvemnt filters */
  metalMvtFinancialFilters: any;

  // request httP variable
  apiFilters: ApiFiltersModel;
  metalMvtFinancialFiltersitems: FinancialFiltersModel;
  subscription: Subscription;
  metalMvtViewDataApi: MetalMvtViewApiModel[] = [];
  metUnits: MetalUnitModel[] = [];
  isLoadingResults = false;
  isMetalUnits = true;


  constructor(
    private financialFiltersService: FinancialFiltersService,
    private metalMvtService: MetalMvtService,
    private changeDetectorRefs: ChangeDetectorRef,
    private datePipe: DatePipe,
    public router: Router) {
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
    this.subscription = this.financialFiltersService.metalMvtFinancialFilterItem
      .subscribe((item: FinancialFiltersModel) => {
        this.metalMvtFinancialFiltersitems = item;
        console.log(item, "item");
        if (this.metalMvtFinancialFiltersitems && ((this.pageIndexMetalMvtView != undefined) || (this.pageSizeMetalMvtView != undefined))) {
          this.pageIndexMetalMvtView = 0;
          this.onGetMetalMovement();

        } else {
          console.log("Please enter pageZise or page direction");
        }
      });
  }



  /* listing filters data and backend*/

  onGetMetalMovement() {
    this.metalMvtFinancialFilters = this.financialFiltersService.getMetalMouvementFilters();
    if (this.metalMvtFinancialFilters) {
      // filters
      const filterObject = this.metalMvtFinancialFilters;
      const filters = Object.keys(filterObject).map((item) =>
        ({ key: item, values: [filterObject[item]] }))


      // sortCriterias
      const sortCriteriasFilters = [{ field: this.matSortNameActiveMetalMvtView, direction: this.matSortDirectionMetalMvtView }]


      const apiFilters: ApiFiltersModel = {
        take: this.pageSizeMetalMvtView,
        skip: this.pageIndexMetalMvtView * this.pageSizeMetalMvtView,
        filters: filters,
        sortCriterias: sortCriteriasFilters
      };
      this.isLoadingResults = true;
      this.isDataLoading(this.isLoadingResults);
      this.metalMvtService.postMetalMvtData(apiFilters)
        .pipe(catchError(error => {
          this.isLoadingResults = false;
          this.isDataLoading(this.isLoadingResults);
          return throwError(error);
        }))
        .subscribe((responseData: MetalMvtViewApiModel) => {
          this.isLoadingResults = true;

          this.pageLengthMetalMvtView = responseData.count;
          this.data = responseData.entities.map((item) => {
            this.isLoadingResults = true;
            this.isDataLoading(this.isLoadingResults);
            const otherProperties = { transFormedMetalUnits: item.metalUnits[0] };
            let isMetalUnit = { isMetalUnit: true };
            if (otherProperties.transFormedMetalUnits === undefined) {
              isMetalUnit = { isMetalUnit: false };

            } else {
              isMetalUnit = { isMetalUnit: true };
            }

            return {
              ...item,
              ...otherProperties,
              ...isMetalUnit
            };

          });

          this.isLoadingResults = true;
          this.isDataLoading(this.isLoadingResults);

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
    const localStoragePageSize = localStorage.getItem("pageSizeMetalMvtView");
    const localStoragePageIndex = localStorage.getItem("pageIndexMetalMvtView");
    const localStorageActive = localStorage.getItem("activeMetalMvtView");
    const localStorageDirection = localStorage.getItem("directionMetalMvtView");

    if (localStoragePageSize) {
      this.pageSizeMetalMvtView = Number(localStorage['pageSizeMetalMvtView']);
    }
    else {
      this.pageSizeMetalMvtView = 5;
    }

    if (localStoragePageIndex) {
      this.pageIndexMetalMvtView = Number(localStorage['pageIndexMetalMvtView']);
    }
    else {
      this.pageIndexMetalMvtView = 0;
    }
    if (localStorageActive) {
      this.matSortNameActiveMetalMvtView = localStorageActive;

    } else {
      this.matSortNameActiveMetalMvtView = null
    }

    if (localStorageDirection) {
      this.matSortDirectionMetalMvtView = localStorageDirection;
    } else {
      this.matSortDirectionMetalMvtView = null
    }
  }

  /* to emit pageIndex and pageSize to the parents component*/
  pageEvent(pageEvent: PageEvent): void {
    this.pageIndexMetalMvtView = pageEvent.pageIndex;
    this.pageSizeMetalMvtView = pageEvent.pageSize;
    this.pageLengthMetalMvtView = pageEvent.length;
    this.pageSizeEventEmitter.emit(this.pageSizeMetalMvtView);
    this.pageIndexEventEmitter.emit(this.pageIndexMetalMvtView);
    localStorage['pageIndexMetalMvtView'] = this.pageIndexMetalMvtView;
    localStorage['pageSizeMetalMvtView'] = this.pageSizeMetalMvtView;


    if (this.pageIndexMetalMvtView || this.pageSizeMetalMvtView) {
      this.onInitPageIndexOfPage();
      this.onGetMetalMovement();
    }
    else {
      console.log("Please Enter PageSize or pageIndex");
    }

  }


  /* To emit sorting changes */
  sortData(sort: Sort) {
    this.matSortNameActiveMetalMvtView = sort.active;
    this.matSortDirectionMetalMvtView = sort.direction;
    localStorage['activeMetalMvtView'] = this.matSortNameActiveMetalMvtView;
    localStorage['directionMetalMvtView'] = this.matSortDirectionMetalMvtView;
    if (this.matSortNameActiveMetalMvtView && this.matSortDirectionMetalMvtView) {
      this.onInitPageIndexOfPage();
      this.onGetMetalMovement();
    }
    else {
      console.log("Please Enter sorting data");
    }
  }

  // clear local storage
  onClearLocalStorgage() {
    localStorage.removeItem('activeMetalMvtView');
    localStorage.removeItem('directionMetalMvtView');
    localStorage.removeItem('pageIndexMetalMvtView');
    localStorage.removeItem('pageSizeMetalMvtView');

    this.onInitPageIndexOfPage();
    this.onGetMetalMovement();
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

  navigateToDetailsMvt(selectedMetalMvt) {
    const metalMvtId = selectedMetalMvt;
    this.router.navigate(['/operationdetail', 'metalmovement', metalMvtId]);
  }

  // dataLodading

  isDataLoading(isDataLoad: boolean) {
    this.metalMvtService.metalMvtDataLoading(isDataLoad);
    this.metalMvtService.setMetalMouvementDataLoad(isDataLoad);
  }

  ngOnDestroy() {
    this.detectChanges();
    this.subscription.unsubscribe();

  }


}
