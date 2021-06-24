import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Subject } from "rxjs/Subject";
import { FullMail } from "../scripts/general.scripts";
import { ISgsFullMail, IsgMailDataShared } from "../scripts/sgsInterfaces.scripts";

@Injectable()
export class EventListenerService {
   

    private headers = new HttpHeaders().set("content-type", "application/json");


    public mailDataToTvChanged = new Subject<ISgsFullMail>();
    public tvDataToMailChanged = new Subject<IsgMailDataShared>();

    constructor(private readonly _http: HttpClient, @Inject("BASE_URL") private readonly _baseUrl: string) {

    }


    setMailDataToTv(data: ISgsFullMail) {
        this.mailDataToTvChanged.next(data);
    }

    setTvDataToMail(data: IsgMailDataShared) {
        this.tvDataToMailChanged.next(data);
    }

    
}