import { catchError } from 'rxjs/operators';
import { ValidationErrorViewService } from './../services/validation-error-view.service';
import { ValidationErrorsFiltersService } from './../services/validation-errors-filters.service';


import { ValidationErrorsViewModel } from './../models/validation-errors-view.model';
import { DatePipe } from '@angular/common';
import { Sort, MatTableDataSource, MatSort, MatPaginator, PageEvent } from '@angular/material';
import { Subscription, throwError } from 'rxjs';
import { Component, OnInit, ViewChild, Output, EventEmitter, ChangeDetectorRef, ViewRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { ValidationErrorsFiltersModel } from './../models/validation-filters.model';
import { ApiFiltersModel } from './../models/api-filters.model';
import { ValidationErrorsViewApiModel } from '../models/validation-errors-api.model';
import { ErrorIntercepterService } from 'src/app/errors-interceptors/error-intercepter.service';


@Component({
  selector: 'app-validation-errors-tab',
  templateUrl: './validation-errors-tab.component.html',
  styleUrls: ['./validation-errors-tab.component.scss']
})
export class ValidationErrorsTabComponent implements OnInit, OnDestroy {
  data: ValidationErrorsViewModel[] = [];
  dataSource = new MatTableDataSource([]);


  /* variables to handle data from the backend */
  columnsToDisplay = ['field', 'metalUnitNumber', 'metalMovement', 'status', 'assignedTo',
    'assignedOn', 'site', 'productionLine', 'operation', 'message'];
  validationErrorsViewLabel: Map<string, string> = new Map([
    ["field", "Field"], ["metalUnitNumber", "Metal Unit Number"], ["metalMovement", "Metal Movement"],
    ["status", "Status"], ["assignedTo", "Assigned To"], ["Assigned On", "Assigned On"],
    ["site", "Site"], ["productionLine", "Production Line"], ["operation", "Operation"],
    ["message", "Message"],
  ]);


  /* Angular material variables  to listen the html*/
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  /* output values from child to parent */
  @Output() pageSizeEventEmitter: EventEmitter<number> = new EventEmitter();
  @Output() pageIndexEventEmitter: EventEmitter<number> = new EventEmitter();

  /* variable for pageIndex and pageSize */
  pageIndexValidationErrorsView: number;
  pageSizeValidationErrorsView: number;
  pageLengthValidationErrorsView: number;

  matSortNameActiveValidationErrorsView: string;
  matSortDirectionValidationErrorsView: string;





  // request httP variable
  apiFilters: ApiFiltersModel;
  validationErrorsViewFinancialFiltersitems: ValidationErrorsFiltersModel;
  subscription: Subscription;
  validationErrorsViewDataApi: ValidationErrorsViewApiModel[] = [];
  isLoadingResults = false;

  constructor(
    private validationErrorsFiltersService: ValidationErrorsFiltersService,
    private validationErrorsViewService: ValidationErrorViewService,
    private errorInterceptor : ErrorIntercepterService,
    private datePipe: DatePipe,
    private changeDetectorRefs: ChangeDetectorRef,
    public router: Router) {
    this.filterSubscription();

   

  }

  ngOnInit() {
    this.dataSourceInit();
    this.onInitPageIndexPageSize();
  }

  dataSourceInit() {
    this.isLoadingResults = true;
    this.dataSource = new MatTableDataSource(this.data);
    this.isLoadingResults = false;
    this.isDataLoading(this.isLoadingResults);
    /*   this.dataSource.sort = this.sort;  */
    /*   this.dataSource.paginator = this.paginator; */
  }

  // subscription to the filtering view
  filterSubscription() {
    this.subscription = this.validationErrorsFiltersService.validationErrorsFilterItem
      .subscribe((item: ValidationErrorsFiltersModel) => {
        this.validationErrorsViewFinancialFiltersitems = item;
        if (this.validationErrorsViewFinancialFiltersitems && ((this.pageIndexValidationErrorsView != undefined) || (this.pageSizeValidationErrorsView != undefined))) {
          this.pageIndexValidationErrorsView = 0;
          this.onGetValidationErrorsView();

        } else {
          console.log("Please enter pageZise or page direction");
        }
      });
  }

  // call the backend fpr gettting data
  onGetValidationErrorsView() {
    //filters
    const validationErrorsViewFinancialFilters = this.validationErrorsFiltersService.getValidationErrorsFilters();


    if (validationErrorsViewFinancialFilters) {
      const filters = Object.keys(validationErrorsViewFinancialFilters).map((item) => {
        if (item == 'rule') {
          return {
            key: item,
            values: validationErrorsViewFinancialFilters[item],
          };
        }
        return {
          key: item,
          values: [validationErrorsViewFinancialFilters[item]],
        };
      });

      // sortCriterias

      const sortCriteriasFilters = [{ field: this.matSortNameActiveValidationErrorsView, direction: this.matSortDirectionValidationErrorsView }]


      const apiFilters: ApiFiltersModel = {
        take: this.pageSizeValidationErrorsView,
        skip: this.pageIndexValidationErrorsView * this.pageSizeValidationErrorsView,
        filters: filters,
        sortCriterias: sortCriteriasFilters
      }



      this.isLoadingResults = true;

      this.isDataLoading(this.isLoadingResults);
    this.validationErrorsViewService.postValidationErrorsData(apiFilters)
        .pipe(catchError(error =>{
          this.isLoadingResults = false;
          this.isDataLoading(this.isLoadingResults);
          return throwError(error);
        }))
        .subscribe((responseData: ValidationErrorsViewApiModel) => {
            this.pageLengthValidationErrorsView = responseData.count;
            this.data = responseData.entities;
            this.isLoadingResults = true;
            this.detectChanges();
            this.dataSourceInit();

        });

    }
    else {
      console.log("Please enter filters criterias")
    }
   /*  const isData = this.errorInterceptor.getDataLoading();
    console.log(isData, "isData")
    if(isData === false ) {
      this.isLoadingResults = false;
      this.isDataLoading(this.isLoadingResults);
    }
 */


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
    const localStoragePageSize = localStorage.getItem("pageSizeValidationErrorsView");
    const localStoragePageIndex = localStorage.getItem("pageIndexValidationErrorsView");
    const localStorageActive = localStorage.getItem("activeValidationErrorsView");
    const localStorageDirection = localStorage.getItem("directionValidationErrorsView");

    if (localStoragePageSize) {
      this.pageSizeValidationErrorsView = Number(localStorage['pageSizeValidationErrorsView']);
    }
    else {
      this.pageSizeValidationErrorsView = 5;
    }

    if (localStoragePageIndex) {
      this.pageIndexValidationErrorsView = Number(localStorage['pageIndexValidationErrorsView']);
    }
    else {
      this.pageIndexValidationErrorsView = 0;
    }
    if (localStorageActive) {
      this.matSortNameActiveValidationErrorsView = localStorageActive;

    } else {
      this.matSortNameActiveValidationErrorsView = null
    }

    if (localStorageDirection) {
      this.matSortDirectionValidationErrorsView = localStorageDirection;
    } else {
      this.matSortDirectionValidationErrorsView = null
    }
  }

  /* to emit pageIndex and pageSize to the parents component*/
  pageEvent(pageEvent: PageEvent): void {
    this.pageIndexValidationErrorsView = pageEvent.pageIndex;
    this.pageSizeValidationErrorsView = pageEvent.pageSize;
    this.pageLengthValidationErrorsView = pageEvent.length;
    this.pageSizeEventEmitter.emit(this.pageSizeValidationErrorsView);
    this.pageIndexEventEmitter.emit(this.pageIndexValidationErrorsView);
    localStorage['pageIndexValidationErrorsView'] = this.pageIndexValidationErrorsView;
    localStorage['pageSizeValidationErrorsView'] = this.pageSizeValidationErrorsView;


    if (this.pageIndexValidationErrorsView || this.pageSizeValidationErrorsView) {
      this.onInitPageIndexPageSize();
      this.onGetValidationErrorsView();
    }
    else {
      console.log("Please Enter PageSize or pageIndex");
    }
  }




  /* To emit sorting changes */
  sortData(sort: Sort) {
    this.matSortNameActiveValidationErrorsView = sort.active;
    this.matSortDirectionValidationErrorsView = sort.direction;
    localStorage['activeValidationErrorsView'] = this.matSortNameActiveValidationErrorsView;
    localStorage['directionValidationErrorsView'] = this.matSortDirectionValidationErrorsView;
    if (this.matSortNameActiveValidationErrorsView && this.matSortDirectionValidationErrorsView) {

      this.onInitPageIndexPageSize();
      this.onGetValidationErrorsView();
    }
    else {
      console.log("Please Enter sorting data");
    }
  }



  // clear local storage
  onClearLocalStorgage() {
    localStorage.removeItem('activeValidationErrorsView');
    localStorage.removeItem('directionValidationErrorsView');
    localStorage.removeItem('pageIndexValidationErrorsView');
    localStorage.removeItem('pageSizeValidationErrorsView');

    this.onInitPageIndexPageSize();
    this.onGetValidationErrorsView();
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
    this.validationErrorsViewService.validationErrorsLoading(isDataLoad);
    this.validationErrorsViewService.setValidationErrorsDataLoad(isDataLoad);
  }

  // destroy detect change
  ngOnDestroy() {
    this.detectChanges();
    this.subscription.unsubscribe();

  }

}
