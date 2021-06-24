import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";

@Injectable()
export class LoadingAnimationService {

    private showLoading$ = new Subject<boolean>();

    getShowLoading(): Observable<boolean> {
        return this.showLoading$.asObservable();
    }

    showLoading() {
        this.showLoading$.next(true);
    }
    hideLoading() {
        this.showLoading$.next(false);
    }
}