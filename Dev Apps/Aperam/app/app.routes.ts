
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { AuthGuardService } from './auth/services/guards/auth-guard.service';

import { ClosingComponent } from './closing/closing.component';
import { AdminComponent } from './admin/admin.component';

import { HomeComponent } from './home/home.component';
import { LogoComponent } from './home/logo/logo.component';
import { NotAuthorizedComponent } from './errors-interceptors/not-authorized/not-authorized.component';
import { RouteNotFoundComponent } from './errors-interceptors/route-not-found/route-not-found.component';
import { OperationDetailModule } from './operation-detail/operation-detail.module';





const routes: Routes = [
{path: '', component: LogoComponent, },
{path: 'home', component: HomeComponent},

{path: 'closing', component: ClosingComponent, canActivate: [AuthGuardService]},
{path: 'admin', component: AdminComponent, canActivate: [AuthGuardService]},
{path: '', loadChildren: './operation-detail/operation-detail.module#OperationDetailModule'},
{path: 'financial', loadChildren: './financial-views/financial-view.module#FinancialViewModule'},
{path: 'validationErrors', loadChildren: './validation-errors-view/validation-errors.module#ValidationErrorsModule'},
{path: 'notauthorized', component: NotAuthorizedComponent },
{path: '**', component: RouteNotFoundComponent } 
 ];


 @NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
  providers: [AuthGuardService]
})
export class AppRoutingModule {}