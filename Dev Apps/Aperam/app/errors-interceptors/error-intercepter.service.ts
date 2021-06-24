import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorIntercepterService {


    private errorListener = new Subject<string>();
    
    dataLoadingListener = new Subject<boolean>();
    isDataLoading: boolean;
  
    getErrorListener() {
      return this.errorListener.asObservable();
    }
  
    throwError(message: string) {
      this.errorListener.next(message);
    }
  
    handleError() {
      this.errorListener.next(null);
    }


}
