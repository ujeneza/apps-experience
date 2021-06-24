import { HttpAuthService } from './http-auth.service';
import { Observable } from 'rxjs';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  

  
  @Injectable()
  export class AuthInterceptor implements HttpInterceptor {
    constructor(private httpAuthService: HttpAuthService) {}
  
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const authToken = this.httpAuthService.getToken();
      const authRequest = req.clone({
        headers: req.headers
           .set('Authorization', 'Bearer ' + authToken)

      });
      if (req.method == 'DELETE' || req.method == 'POST' || req.method == 'PUT'){
        authRequest.headers
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
      }

      return next.handle(authRequest);
    }
  }