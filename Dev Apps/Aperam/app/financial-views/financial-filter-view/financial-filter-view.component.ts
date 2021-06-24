
import { Subscription } from 'rxjs';
import { Component, OnInit, Input, Output, EventEmitter, SimpleChange, SimpleChanges, OnChanges } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { MatButtonToggleChange } from '@angular/material';
import { ActivityViewService } from './../financial-views-services/activity-view.service';
import { ConsumptionViewService } from './../financial-views-services/consumption-view.service';
import { ProductionViewService } from './../financial-views-services/production-view.service';
import { MetalMvtService } from '../financial-views-services/metal-mvt.service';
import { CostCenterDriverModel } from './../models/cost-center-driver-filter.models';
import { SiteProductionLineModel } from './../models/site-production-line.model';
import { FinancialFiltersService } from './../financial-views-services/financial-filters.service';
import { FinancialFiltersModel } from './../models/financial-filter-model';

@Component({
  selector: 'app-financial-filter-view',
  templateUrl: './financial-filter-view.component.html',
  styleUrls: ['./financial-filter-view.component.scss'],
})
export class FinancialFilterViewComponent implements OnChanges, OnInit {
  // variables for the input filters
  financialFiltersForm: FormGroup;
  metalMvtFinancialFilters: FinancialFiltersModel;

  // production list view variables
  private siteProdLinesSub: Subscription;
  siteProdLines: SiteProductionLineModel[] = [];
  sitesList: any[];
  productionLinesList: any[];
  selectedSite: any;
  selectedProductionLine: any;

  // cost center & cost driver varibales
  private costCenterDriverSub: Subscription;
  costCentersDrivers: CostCenterDriverModel[] = [];
  costCentersList: any[];
  costDriversList: any[];
  selectedCostCenter: any

  // variable for selecting the button filters
  selectedValue: string;

  // default financial open period
  financialOpenPeriodDefaultValue = "current";

  // data loading
  dataLoadsubscription: Subscription;
  metalMvtDataLoad: boolean;
  productionViewDataLoad: boolean;
  consumptionViewDataLoad: boolean;
  activityViewDataLoad: boolean;

  financialHeaderFilterLabel: Map<string, string> = new Map([["metalMouvementsView", "Metal Movements View"], ["productionView", "Production View"], ["consumptionView", "Consumption View"], ["activityView", "Activity View"],
  ]);

  @Output() selectedButtonToggleChange: EventEmitter<MatButtonToggleChange> = new EventEmitter();
  @Input() selectedTabIndexEvent: number;

  constructor(private formBuilder: FormBuilder,
    private financialFiltersService: FinancialFiltersService, 
    private metalMvtService: MetalMvtService, 
    private productionViewService: ProductionViewService, 
    private consumptionViewService: ConsumptionViewService,
    private activityViewService: ActivityViewService  ) {
      this.metalMvtSubscription();
      this.productionViewSubscription();
      this.consumptionViewSubscription();
      this.activityViewSubscription();
  }

  // trigger the changes of the tabs 
  ngOnChanges(changes: SimpleChanges) {
    const selectedTabChange: SimpleChange = changes.selectedTabIndexEvent;
    if (selectedTabChange.currentValue === 1) {
      this.selectedValue = "productionView";
    }
    else if (selectedTabChange.currentValue === 2) {
      this.selectedValue = "consumptionView";
    }
    else if (selectedTabChange.currentValue === 3) {
      this.selectedValue = "activityView";
    }
    else {
      this.selectedValue = "metalMouvementsView";
    }

  }

  ngOnInit() {
    this.initForm();
    this.getSiteAndProductionLine();
    this.getCostCenterDrivers();
    this.selectedValue = "metalMouvementsView";
  }

  // Initialization form for filters for all views
  initForm() {
    this.financialFiltersForm = new FormGroup({
      metalUnit: new FormControl(null,
        { validators: [Validators.required, Validators.minLength(3)] }
      ),
      siteName: new FormControl(
        null,
        { validators: [Validators.minLength(3)] }
      ),
      productionLine: new FormControl(
        null,
        { validators: [Validators.minLength(3)] }
      ),
      consumedArticle: new FormControl(
        null,
        { validators: [Validators.minLength(3)] }
      ),
      producedArticle: new FormControl(
        null,
        { validators: [Validators.minLength(3)] }
      ),
      costCenter: new FormControl(
        null,
        { validators: [Validators.minLength(3)] }
      ),
      costDriverName: new FormControl(
        null,
        { validators: [Validators.minLength(3)] }
      ),
      openPeriod: new FormControl(
        this.financialOpenPeriodDefaultValue,
        { validators: [Validators.minLength(3)] }
      ),
    })
  }
  // Reset filters values
  resetFiltersInput() {
    this.financialFiltersForm.reset();
  }

  // trigger when button change
  onButtonToggleChange(value) {
    this.selectedButtonToggleChange.emit(value);
  }




  // Send data to the metal view component
  postMetalMvtFilters() {
    const metalUnit = this.financialFiltersForm.value.metalUnit;
    const siteId = this.financialFiltersForm.value.siteName;
    const openPeriod = this.financialFiltersForm.value.openPeriod;
    this.financialFiltersService.setMetalMouvementFilters(metalUnit, siteId, openPeriod);
    this.financialFiltersService.metalMvtFiltersChanged.emit({ metalUnit, siteId, openPeriod });

    const financialFilterItem = {
      metalUnit: this.financialFiltersForm.value.metalUnit,
      siteId: this.financialFiltersForm.value.siteName,
      openPeriod: this.financialFiltersForm.value.openPeriod
    } as FinancialFiltersModel;

    this.financialFiltersService.changeMetalMvtFinancialFilter(financialFilterItem);
    this.metalMvtSubscription();
  }

  metalMvtSubscription() {
    this.dataLoadsubscription = this.metalMvtService.getMetalMouvementDataLoad().subscribe((item) => {
      this.metalMvtDataLoad = item;

    } );
  }


  // Send data to production view component
  postProductionFilters() {
    const metalUnit = this.financialFiltersForm.value.metalUnit;
    const siteId = this.financialFiltersForm.value.siteName;
    const productionLineId = this.financialFiltersForm.value.productionLine;
    const openPeriod = this.financialFiltersForm.value.openPeriod;
    this.financialFiltersService.setProductionViewFilters(metalUnit, siteId, productionLineId, openPeriod);
    this.financialFiltersService.productionViewFiltersChanged.emit({ metalUnit, siteId, productionLineId, openPeriod });

    const financialFilterItem = {
      metalUnit: this.financialFiltersForm.value.metalUnit,
      siteId: this.financialFiltersForm.value.siteName,
      productionLineId: this.financialFiltersForm.value.productionLine,
      openPeriod: this.financialFiltersForm.value.openPeriod
    } as FinancialFiltersModel;
    this.financialFiltersService.changeProductionViewFinancialFilter(financialFilterItem);

  }

  productionViewSubscription() {
    this.dataLoadsubscription = this.productionViewService.getProductionViewDataLoad().subscribe((item) => {
      this.productionViewDataLoad = item;
  
    } );
  }



// send the filter data to the consumption view component
postConsumptionViewFilters() {
  const metalUnit = this.financialFiltersForm.value.metalUnit;
  const siteId = this.financialFiltersForm.value.siteName;
  const productionLineId = this.financialFiltersForm.value.productionLine;
  const consumedArticle = this.financialFiltersForm.value.consumedArticle;
  const producedArticle = this.financialFiltersForm.value.producedArticle;
  const openPeriod = this.financialFiltersForm.value.openPeriod;
//
   this.financialFiltersService.setConsumptionViewFilters(metalUnit, siteId, productionLineId, consumedArticle, producedArticle, openPeriod);
  this.financialFiltersService.consumptionViewFiltersChanged.emit({metalUnit, siteId, productionLineId, consumedArticle, producedArticle, openPeriod});
  
  const financialFilterItem = {
    metalUnit: this.financialFiltersForm.value.metalUnit,
    siteId: this.financialFiltersForm.value.siteName,
    productionLineId: this.financialFiltersForm.value.productionLine,
    consumedArticle: this.financialFiltersForm.value.consumedArticle,
    producedArticle: this.financialFiltersForm.value.producedArticle,
    openPeriod: this.financialFiltersForm.value.openPeriod
  } as FinancialFiltersModel;

  console.log(financialFilterItem, "financialFilterItem");
 this.financialFiltersService.changeConsumptionViewFinancialFilter(financialFilterItem);

}
consumptionViewSubscription() {
  this.dataLoadsubscription = this.consumptionViewService.getConsumptionViewDataLoad().subscribe((item) => {
    this.consumptionViewDataLoad = item;

  } );
}




  // Send the filter data to activity view component
  postActivityViewFilters() {
    const metalUnit = this.financialFiltersForm.value.metalUnit;
    const siteId = this.financialFiltersForm.value.siteName;
    const productionLineId = this.financialFiltersForm.value.productionLine;
    const costCenterId = this.financialFiltersForm.value.costCenter;
    const costDriverId = this.financialFiltersForm.value.costDriverName;
    const openPeriod = this.financialFiltersForm.value.openPeriod;
     this.financialFiltersService.setActivityViewFilters(metalUnit, siteId, productionLineId, costCenterId, costDriverId, openPeriod);
    this.financialFiltersService.activityViewFiltersChanged.emit({metalUnit, siteId, productionLineId, costCenterId, costDriverId, openPeriod});
    const financialFilterItem = {
      metalUnit: this.financialFiltersForm.value.metalUnit,
      siteId: this.financialFiltersForm.value.siteName,
      productionLineId: this.financialFiltersForm.value.productionLine,
      costCenterId: this.financialFiltersForm.value.costCenter,
      costDriverId: this.financialFiltersForm.value.costDriverName,
      openPeriod: this.financialFiltersForm.value.openPeriod
    } as FinancialFiltersModel;

   this.financialFiltersService.changeActivityViewFinancialFilter(financialFilterItem);
 
  }

  activityViewSubscription() {
    this.dataLoadsubscription = this.activityViewService.getActivityViewDataLoad().subscribe((item) => {
      this.activityViewDataLoad = item;
  
    } );
  }


  // get site and production line from the backend
  getSiteAndProductionLine() {
    const siteProdLinesLocal:SiteProductionLineModel[] =JSON.parse(localStorage.getItem('siteProdLines')) ;
    if(siteProdLinesLocal) {
      this.siteProdLines = siteProdLinesLocal;
      this.sitesList = this.getSiteNames();
    } else {
      this.financialFiltersService.getSiteProductionLineFilters();
      this.siteProdLinesSub = this.financialFiltersService.getSiteProdLineListener()
        .subscribe((siteProdLines: SiteProductionLineModel[]) => {
          this.siteProdLines = siteProdLines;
          localStorage.setItem('siteProdLines', JSON.stringify(this.siteProdLines));
    
          this.sitesList = this.getSiteNames();
        });
    }
 
  }

  // filter the sitesName
  getSiteNames() {
    const result = [];
    const tmp = {};
    for (let i = 0; i < this.siteProdLines.length; i++) {
      if (!tmp[this.siteProdLines[i].siteId]) {
        result.push({ siteId: this.siteProdLines[i].siteId, site: this.siteProdLines[i].site });
        tmp[this.siteProdLines[i].siteId] = true;

      }
    }
    return result
  }


  // get selected SiteName and the corresponding production view
  getProductionLineFromSite(siteId) {
    this.selectedSite = siteId;
    this.productionLinesList = this.getProductionLineslist(this.selectedSite);

  }
  getProductionLineslist(selectedSiteId) {
    const result = [];
    const tmp = {};
    for (let i = 0; i < this.siteProdLines.length; i++) {
      if (this.siteProdLines[i].siteId === selectedSiteId) {
        result.push({ productionLineId: this.siteProdLines[i].productionLineId, productionLine: this.siteProdLines[i].productionLine });
        tmp[this.siteProdLines[i].siteId] = true;

      }
    }
    return result
  }

  // get cost center and cost drive from the backend
  getCostCenterDrivers() {
    const costCentersDriversLocal:CostCenterDriverModel[] =JSON.parse(localStorage.getItem('costCentersDrivers'));
    if(costCentersDriversLocal) {
      this.costCentersDrivers = costCentersDriversLocal;
    }else {
      this.financialFiltersService.getCostCenterCostDriver();
      this.costCenterDriverSub = this.financialFiltersService.getCostCenterDriverListener()
        .subscribe((costCenterDrivers: CostCenterDriverModel[]) => {
          this.costCentersDrivers = costCenterDrivers;
          localStorage.setItem('costCentersDrivers', JSON.stringify(this.costCentersDrivers));
        })
    }
    
  }

  // get cost center from the selected production line
  getCostCenterFromSelectedProductionLine(productionLineId) {
    this.selectedProductionLine = productionLineId;
    const costCenterData = this.getCostcenterList(this.selectedProductionLine);
    const hash = Object.create(null),
      result = [];
    for (let i = 0; i < costCenterData.length; i++) {
      if (!hash[costCenterData[i].costCenterId]) {
        hash[costCenterData[i].costCenterId] = true;
        result.push(costCenterData[i]);
      }
    }
   this.costCentersList = result;
  }
  getCostcenterList(selectedProductionLineId) {
    const result = [];
    const tmp = {};

    for (let i = 0; i < this.costCentersDrivers.length; i++) {
      if (this.costCentersDrivers[i].productionLineId === selectedProductionLineId) {
        result.push({ costCenterId: this.costCentersDrivers[i].costCenterId, costCenter: this.costCentersDrivers[i].costCenter });
        tmp[this.costCentersDrivers[i].productionLineId] = true;

      }
    }
    return result
  }

  // get Cost Driver from selected cost center;
 getCostDriverFromSelectedCostCenter(selectedCostCenter) {
   this.selectedCostCenter = selectedCostCenter;
  
  const costDriverData = this.getCostDriver(selectedCostCenter);
  const hash = Object.create(null),
      result = [];
    for (let i = 0; i <costDriverData.length; i++) {
      if (!hash[costDriverData[i].costDriverId]) {
        hash[costDriverData[i].costDriverId] = true;
        result.push(costDriverData[i]);
      }
    }
   this.costDriversList = result; 
console.log(this.costDriversList, "this.cost driver list after duplication");
 }
  
 getCostDriver(selectedCostCenter) {
  const result = [];
  const tmp = {};

  for (let i = 0; i < this.costCentersDrivers.length; i++) {
    if (this.costCentersDrivers[i].costCenterId === selectedCostCenter) {
      result.push({ costDriverId: this.costCentersDrivers[i].costDriverId, costDriverName: this.costCentersDrivers[i].costDriverName });
      tmp[this.costCentersDrivers[i].costCenterId] = true;

    }
  }
  console.log(result, "this.cost driver list" );
  return result
 }
}
