import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { IKWDetail, IKWGridItem } from "../scripts/interfaces.scripts";
import { SgsKWZoekVelden } from "../scripts/sgsClasses.scripts";

@Injectable()
export class HttpKleineWervenService {
    // Customer
    private insertAPIUrl = this.baseUrl + "api/KleineWerven/Insert";
    private getDetailApiUrl = this.baseUrl + "api/KleineWerven/GetDetail";
    private getMeldingListApiUrl = this.baseUrl + "api/KleineWerven/GetMeldingList";
    private getStatusListApiUrl = this.baseUrl + "api/KleineWerven/GetStatusList";
    private verklaringAPIUrl = this.baseUrl + "api/KleineWerven/Verklaring";

    // SGS
    private sgsMeldingListByStatusApiUrl = this.baseUrl + "api/KleineWerven/GetMeldingListbyStatus";
    private sgsZoekListAPIUrl = this.baseUrl + "api/KleineWerven/ZoekList";

    private headers = new HttpHeaders().set("content-type", "application/json");

    constructor(private readonly http: HttpClient, @Inject("BASE_URL") private readonly baseUrl: string) {
    }

    public Insert(formData: any) {
        const body = JSON.stringify(formData);
        return this.http.post(this.insertAPIUrl, body, { headers: this.headers })
            .map((response: any) => response);
    }

    public getDetail(kwId:number) {
        let params = new HttpParams();
        params = params.append("KleineWervenId", kwId.toString());
        return this.http.get(this.getDetailApiUrl, { headers: this.headers, params: params })
            .map(result => result as IKWDetail);
    }

    public getMeldingList() {
        return this.http.get(this.getMeldingListApiUrl, { headers: this.headers }).toPromise();
    }

    public getStatusList() {
        return this.http.get(this.getStatusListApiUrl, { headers: this.headers }).toPromise();
    }

    public Verklaring(formData: any) {
        const body = JSON.stringify(formData);
        return this.http.post(this.verklaringAPIUrl, body, { headers: this.headers })
            .map((response: any) => response);
    }

    // SGS

    public gwMeldingListByStatus(statusId: number) {
        let params = new HttpParams();
        params = params.append("StatusId", statusId.toString());
        return this.http.get(this.sgsMeldingListByStatusApiUrl, { headers: this.headers, params: params }).toPromise();
    }

    public gwZoekList(zoekVelden: SgsKWZoekVelden) {
        return this.http.post<IKWGridItem[]>(this.sgsZoekListAPIUrl, zoekVelden, { headers: this.headers });
    }

}