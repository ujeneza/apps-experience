import { Observable } from 'rxjs/Observable';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
  HttpEvent
} from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { Injectable, OnDestroy} from "@angular/core";
import { MatDialog } from '@angular/material';
import { AuthService } from '../auth/services/auth.service'


import { ErrorComponent } from "./error/error.component";
import { ErrorIntercepterService } from './error-intercepter.service';



@Injectable()
export class ErrorInterceptor implements HttpInterceptor, OnDestroy {
  counter = 0;
  timer;
  constructor(private dialog: MatDialog, private errorService: ErrorIntercepterService, private authService: AuthService) { 
    this.timer = setInterval(() => {
      this.counter = 0;
    }, 1000);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler, ): Observable<HttpEvent<any>> {
    return next.handle(req)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = "An unknown error occurred!";
        let skipError = false;
        let status;
       
        if (error) {
          if (error.status === 500) {
            errorMessage = error.statusText;
            status = error.status;
      
          } else if (error.status === 401) {
            skipError = true;
            this.authService.login();
            // this.authService.collectFailedRequests(req);
          } else if (error.status === 403) {
            errorMessage = error.statusText;
            status = error.status;
          } else if (error.status === 404) {
            errorMessage = error.statusText;
            status = error.status;
          } else {
            errorMessage = error.statusText
            status = error.status;
          }
        }
        if (!skipError){
          this.counter++;
          if (this.counter <= 1) {
            this.dialog.open(ErrorComponent, {
                      width: "30%",
                      height: "30%",
                      data: { message: errorMessage, status: status }
                    });
    
          }
        }
        
        return throwError(error);
      }),
      // bufferTime(500),
      // mergeMap(items => items[0]),
      // catchError(error => {
      //   console.log('sdfdfdf');
      //   return throwError(error);
      // })
    )
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
 