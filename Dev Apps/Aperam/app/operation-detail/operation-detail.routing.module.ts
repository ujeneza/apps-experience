
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../auth/services/guards/auth-guard.service';
import { MetalMovementUnitComponent } from './metal-movement-unit/metal-movement-unit.component';
import { MetalUnitService } from './services/metal-unit/metal-unit.service';
import { MetalMovementService } from './services/metal-movement/metal-movement.service';
import { OutputSectionService } from './services/output-section/output-section.service';
import { InputSectionService } from './services/input-section/input-section.service';
import { OperationSectionComponent } from './metal-movement-unit/operation-section/operation-section.component';
import { InputSectionComponent } from './metal-movement-unit/input-section/input-section.component';
import { OutputSectionComponent } from './metal-movement-unit/output-section/output-section.component';



const routes: Routes = [
  {path: 'operationdetail/:type/:id', component: MetalMovementUnitComponent, canActivate: [AuthGuardService]},
  {path: 'operationdetails/:type/:id', component: OperationSectionComponent, canActivate: [AuthGuardService]},
  {path: 'input/:type/:id', component: InputSectionComponent, canActivate: [AuthGuardService]},
  {path: 'output/:type/:id', component: OutputSectionComponent, canActivate: [AuthGuardService]},

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [AuthGuardService,
    MetalUnitService, 
    MetalMovementService,
    OutputSectionService,
    InputSectionService]
})
export class OperationdetailRoutingModule {}