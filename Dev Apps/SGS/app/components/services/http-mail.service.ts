import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { ISgsFullMail, isgsMailHistory } from "../scripts/sgsInterfaces.scripts";


@Injectable()
export class HttpMailService {


    // SGS
    private sgsSaveApiUrl = this.baseUrl + "api/sgsMail/SendFromForm";
    private sgsGetMailLogApiUrl = this.baseUrl + "api/sgsMail/GetMailLog";
    private sgsGetMailDataApiUrl = this.baseUrl + "api/sgsMail/GetMailData";
    private sgsGetMailByIdApiUrl = this.baseUrl + "api/sgsMail/GetMailDetails"



    private headers = new HttpHeaders().set("content-type", "application/json");

    constructor(private readonly http: HttpClient, @Inject("BASE_URL") private readonly baseUrl: string) {
    }




    // SGS

    sgsSave(FormData: ISgsFullMail) {
        const body = JSON.stringify(FormData);
        return this.http.post(this.sgsSaveApiUrl, body, { headers: this.headers })
            .map((response: ISgsFullMail) => response);
    }

    sgsGetMails(id: number, type: string) {
        let params = new HttpParams();
        params = params.append("id", id.toString());
        params = params.append("listType", type.toString());
        return this.http.get(this.sgsGetMailLogApiUrl, { params: params })
            .map(result => result as isgsMailHistory[]);
    }

    sgsGetMailData(id: number, type: string) {
        let params = new HttpParams();
        params = params.append("id", id.toString());
        params = params.append("listType", type.toString());
        return this.http.get(this.sgsGetMailDataApiUrl, { params: params })
            .map(result => result as any);

    }

    sgsGetMailById(id: number) {
        let params = new HttpParams();
        params = params.append("mailId", id.toString());
        return this.http.get(this.sgsGetMailByIdApiUrl, { params: params })
            .map(result => result as any);
    }



}