import { AppModule } from './../app.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MAT_DATE_LOCALE } from '@angular/material';

import { AngularMaterialModule } from '../angular-material/material-module';
import { FinancialViewRoutingModule } from './financial-view.routing.module';

import { FinancialViewsComponent } from './financial-views.component';
import { FinancialFilterViewComponent } from './financial-filter-view/financial-filter-view.component';
import { ActivityViewTabComponent } from './financial-view-tables/activity-view-tab/activity-view-tab.component';
import { ProductionViewTabComponent } from './financial-view-tables/production-view-tab/production-view-tab.component';
import { MetalMouvemntTabComponent } from './financial-view-tables/metal-mouvemnt-tab/metal-mouvemnt-tab.component';
import { ConsumptionViewTabComponent } from './financial-view-tables/consumption-view-tab/consumption-view-tab.component';




@NgModule({
  declarations: [
      FinancialViewsComponent,
      FinancialFilterViewComponent, 
      MetalMouvemntTabComponent,

      ProductionViewTabComponent,
      ActivityViewTabComponent,
      ConsumptionViewTabComponent
  ],
  imports: [
      CommonModule, 
      AngularMaterialModule,
      FormsModule, 
      ReactiveFormsModule,
      FinancialViewRoutingModule,
      ],
 providers: [DatePipe,
      {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
      
       ]
})
export class FinancialViewModule {}