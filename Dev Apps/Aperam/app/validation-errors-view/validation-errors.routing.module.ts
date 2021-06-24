import { ValidationErrorsViewComponent } from './validation-errors-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './../auth/services/guards/auth-guard.service';



const routes: Routes = [
  { path: 'validationErrorsView', component: ValidationErrorsViewComponent, canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [AuthGuardService]
})
export class ValidationErrorsRoutingModule {}