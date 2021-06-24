import { AppModule } from '../app.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MAT_DATE_LOCALE } from '@angular/material';

import { AngularMaterialModule } from '../angular-material/material-module';
import { StopPropagationDirective } from '../directives/stop-propagation/stop-propagation.directive';

import { OperationdetailRoutingModule } from './operation-detail.routing.module';
import { FilterMyValidationErrorsPipe } from './pipes/filterMyValidationErrors';
import { OperationSectionComponent } from './metal-movement-unit/operation-section/operation-section.component';
import { InputSectionComponent } from './metal-movement-unit/input-section/input-section.component';
import { OpenDialogComponent } from './open-dialog/open-dialog.component';
import { OutputSectionComponent } from './metal-movement-unit/output-section/output-section.component';
import { MetalUnitComponent } from './metal-movement-unit/metal-unit/metal-unit.component';
import { MetalMovementUnitComponent } from './metal-movement-unit/metal-movement-unit.component';


@NgModule({
  declarations: [
    MetalMovementUnitComponent, 
    MetalUnitComponent,
    FilterMyValidationErrorsPipe, 
    OperationSectionComponent,
    InputSectionComponent, 
    OutputSectionComponent,
    StopPropagationDirective,
    OpenDialogComponent
  ],
  imports: [
      CommonModule, 
      AngularMaterialModule,
      FormsModule, 
      ReactiveFormsModule,
      OperationdetailRoutingModule,

      ],
      entryComponents: [ OpenDialogComponent],
 providers: [DatePipe,
      {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},]
})
export class OperationDetailModule {}