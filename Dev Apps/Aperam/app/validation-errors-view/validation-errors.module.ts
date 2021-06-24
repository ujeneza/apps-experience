import { ValidationErrorsTabComponent } from './validation-errors-tab/validation-errors-tab.component';
import { AppModule } from './../app.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MAT_DATE_LOCALE } from '@angular/material';

import { AngularMaterialModule } from '../angular-material/material-module';
import { ValidationErrorsRoutingModule } from './validation-errors.routing.module';
import { ValidationErrorsViewComponent } from './validation-errors-view.component';
import { ValidationErrorsFiltersComponent } from './validation-errors-filters/validation-errors-filters.component';




@NgModule({
  declarations: [
    ValidationErrorsViewComponent,
    ValidationErrorsFiltersComponent,
    ValidationErrorsTabComponent,
  ],
  imports: [
      CommonModule, 
      AngularMaterialModule,
      FormsModule, 
      ReactiveFormsModule,
      ValidationErrorsRoutingModule,

      ],
 providers: [DatePipe,
      {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
      
       ]
})
export class ValidationErrorsModule {}