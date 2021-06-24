import { AngularMaterialModule } from './angular-material/material-module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MomentModule } from 'ngx-moment';
import { MatMomentDateModule, } from '@angular/material-moment-adapter';
import {  MatFormFieldModule,  MAT_DATE_FORMATS } from '@angular/material';

import { AuthService } from '../app/auth/services/auth.service';
import { AdalService, AdalGuard , AdalInterceptor } from 'adal-angular4';
import { RoleGuardService } from './auth/services/guards/role-guard.service';
import { AuthGuardService } from './auth/services/guards/auth-guard.service';
import { AppRoutingModule } from './app.routes';

import { HttpAuthService } from './auth/http/http-auth.service';
import { AuthInterceptor } from './auth/http/http-interceptor';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AdminComponent } from './admin/admin.component';

import { SnackBarComponent } from './angular-material/snack-bar/snack-bar.component';
import { LogoComponent } from './home/logo/logo.component';

import { RouteNotFoundComponent } from './errors-interceptors/route-not-found/route-not-found.component';
import { NotAuthorizedComponent } from './errors-interceptors/not-authorized/not-authorized.component';


import { ClosingComponent, ConfirmClosingDialog } from './closing/closing.component';


import { ErrorInterceptor } from './errors-interceptors/error-interceptor';
import { ErrorComponent } from './errors-interceptors/error/error.component';


/* export const MY_DATE_FORMAT = {
  parse: {
    dateInput: 'DD/MM/YYYY HH:mm:ss',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};  */


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    AdminComponent,
    LogoComponent,
    RouteNotFoundComponent,
    NotAuthorizedComponent,
    ErrorComponent,
    ConfirmClosingDialog,
    ClosingComponent,
    SnackBarComponent,

  
  ],
  imports: [
    MatFormFieldModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MomentModule,
    MatMomentDateModule,
    AngularMaterialModule,
    AppRoutingModule
  ],

  
  entryComponents: [ ErrorComponent, ConfirmClosingDialog],
  providers: [
   //{provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT},  
    RoleGuardService, 
    AuthService, 
    HttpAuthService,
    AdalService, AdalGuard, AuthGuardService, 
    { provide: HTTP_INTERCEPTORS, useClass: AdalInterceptor, multi: true }, 
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor , multi: true }, 
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
