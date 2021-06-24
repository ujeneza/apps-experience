import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { IGvtListItem } from "../scripts/interfaces.scripts";
import { ISgsGTMStatus } from "../scripts/sgsInterfaces.scripts";
import { SgsGTMZoekVelden } from "../scripts/sgsClasses.scripts";

@Injectable()
export class HttpGTMService {
    // Customer
    private detailAPIUrl = this._baseUrl + "api/GTM/Detail";
    private gebruikListAPIUrl = this._baseUrl + "api/GTM/GebruikList";
    private herkomstListAPIUrl: string = this._baseUrl + "api/GTM/HerkomstList";
    private insertAPIUrl: string = this._baseUrl + "api/GTM/Insert";
    private insertVerklaringAfnemerAPIUrl: string = this._baseUrl + "api/GTM/InsertVerklaringAfnemer";
    private isVerklaringAfnemerFilledOnlineAPIUrl: string = this._baseUrl + "api/GTM/isVerklaringAfnemerApprovedOrFilledOnline";
    private klantContactInfoAPIUrl: string = this._baseUrl + "api/GTM/KlantContactInfo";
    private listAPIUrl = this._baseUrl + "api/GTM/List";
    private topCGRListAPIUrl: string = this._baseUrl + "api/GTM/TopCGRList";
    private verklaringAfnemerDetailAPIUrl = this._baseUrl + "api/GTM/VerklaringAfnemerDetail";

    // SGS
    private gwStatusListAPIUrl: string = this._baseUrl + "api/sgsGTM/StatusList";
    private gwZoekListAPIUrl = this._baseUrl + "api/sgsGTM/ZoekList";
    private gwWerkelijkeHoeveelheidAPIUrl = this._baseUrl + "api/sgsGTM/GetWerkelijkeHoeveelheid";


    private Headers = new HttpHeaders().set("content-type", "application/json");

    constructor(private readonly _http: HttpClient, @Inject("BASE_URL") private readonly _baseUrl: string) {
    }


    // Customer
    public Detail(gtmId: number) {
        let Params = new HttpParams();
        Params = Params.append("GTMId", gtmId.toString());
        return this._http.get(this.detailAPIUrl, { headers: this.Headers, params: Params });
    }

    public GebruikList() {
        return this._http.get(this.gebruikListAPIUrl, { headers: this.Headers });
    }

    public HerkomstList(TVId: number) {
        let Params = new HttpParams();
        Params = Params.append("TechnischVerslagId", TVId.toString());
        return this._http.get(this.herkomstListAPIUrl, { headers: this.Headers, params: Params })
            .map(result => result as IGvtListItem[]);
    }

    public Insert(FormData: any) {
        const body = JSON.stringify(FormData);
        const params = new HttpParams();
        return this._http.post(this.insertAPIUrl, body, { headers: this.Headers, params: params })
            .map((response: any) => response);
    }

    public InsertVerklaringAfnemer(FormData: any) {
        const body = JSON.stringify(FormData);
        const params = new HttpParams();
        return this._http.post(this.insertVerklaringAfnemerAPIUrl, body, { headers: this.Headers, params: params })
            .map((response: any) => response);
    }

    public isVerklaringAfnemerFilledOnline(gtmId: number) {
        let params = new HttpParams();
        params = params.append("gtmId", gtmId.toString());
        return this._http.get(this.isVerklaringAfnemerFilledOnlineAPIUrl, { headers: this.Headers, params: params })
            .map(result => result as boolean);
    }

    public KlantContactInfo() {
        return this._http.get(this.klantContactInfoAPIUrl, { headers: this.Headers });
    }

    public List() {
        return this._http.get(this.listAPIUrl, { headers: this.Headers }).toPromise();
    }

    public TopCgrList() {
        return this._http.get(this.topCGRListAPIUrl, { headers: this.Headers });
    }

    public VerklaringAfnemerDetail(gtmId: number) {
        let Params = new HttpParams();
        Params = Params.append("GTMId", gtmId.toString());
        return this._http.get(this.verklaringAfnemerDetailAPIUrl, { headers: this.Headers, params: Params });
    }


    // SGS
    public gwStatusList(gtmType: number, topCgrId: number) {
        let Params = new HttpParams();
        Params = Params.append("typeGTM", gtmType.toString());
        Params = Params.append("topCgrId", topCgrId.toString());
        return this._http.get(this.gwStatusListAPIUrl, { headers: this.Headers, params: Params })
            .map(result => result as ISgsGTMStatus[]);
    }

    public gwZoekList(zoekVelden: SgsGTMZoekVelden) {
        return this._http.post<ISgsGTMStatus[]>(this.gwZoekListAPIUrl, zoekVelden, { headers: this.Headers });
    }

    public gwGTMWerkelijkeHoeveelheid(gtmId: number) {
        let Params = new HttpParams();
        Params = Params.append("GtmId", gtmId.toString());
        return this._http.get(this.gwWerkelijkeHoeveelheidAPIUrl, { headers: this.Headers, params: Params })
            .map(result => result as number);
    }

}