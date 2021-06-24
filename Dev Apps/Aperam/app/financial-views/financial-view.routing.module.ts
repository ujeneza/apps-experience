import { FinancialFilterViewComponent } from './financial-filter-view/financial-filter-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './../auth/services/guards/auth-guard.service';

import { FinancialViewsComponent } from './financial-views.component';

const routes: Routes = [
  { path: 'financialViews', component: FinancialViewsComponent, canActivate: [AuthGuardService] },
  { path: 'financialFilters', component: FinancialFilterViewComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [AuthGuardService]
})
export class FinancialViewRoutingModule {}