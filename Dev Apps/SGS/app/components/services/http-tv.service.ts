import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from "@angular/common/http";
import { ITVDetail, ITVSearch, ITVStatus, ITVVolume, IContactInfo, ITVZone, IQGebruik, ITVZoneDetail, ITVStatusDefinition } from "../scripts/interfaces.scripts";
import { ISgsTVByStatus, ISgsTVAfsluitReden, ISgsGVTType, sgsTvJoinedData, ISgsGeologischeBeschrijving, ISgsprimaireOppervlakte, ISgsFullMail } from "../scripts/sgsInterfaces.scripts";
import { Observable } from "rxjs/Observable";
import { SgsTVZoekVelden } from "../scripts/sgsClasses.scripts";

@Injectable()
export class HttpTVService {
    // Customer
    private contactInfoAPIUrl = this._baseUrl + "api/TV/ContactInfo";
    private detailAPIUrl = this._baseUrl + "api/TV/Detail";
    private insertAPIUrl = this._baseUrl + "api/TV/Insert";
    private isTopCgrIsBewerktAPIUrl = this._baseUrl + "api/TV/IsTopCgrIsBewerkt";
    private isVlarebo2008APIUrl = this._baseUrl + "api/TV/IsVlarebo2008";
    private pocoEntityAPIUrl = this._baseUrl + "api/TV/PocoEntity";
    private searchListAPIUrl = this._baseUrl + "api/TV/SearchList";
    private statusDefinitionListAPIUrl = this._baseUrl + "api/TV/StatusDefinitionList";
    private statusListAPIUrl = this._baseUrl + "api/TV/StatusList";


    // SGS
    private sgsStatusListAPIUrl = this._baseUrl + "api/sgsTV/StatusList";
    private sgsZoekListAPIUrl = this._baseUrl + "api/sgsTV/ZoekList";
    private sgsAfsluitRedenApiUrl = this._baseUrl + "api/sgsTV/GetAfsluitRedenListItems";
    private sgsTvJoinedDataPIUrl = this._baseUrl + "api/sgsTV/GetJoinedData";
    private sgsSaveTvJoinedDataPIUrl = this._baseUrl + "api/sgsTV/Save ";
    private sgsGeologischeBeschrijvingaPIUrl = this._baseUrl + "api/sgsTV/GetGeologischeBeschrijvingListItems";
    private sgsPrimaireOppervlakteaPIUrl = this._baseUrl + "api/sgsTV/GetPrimaireOppervlakteDelfstofListItems";
    private sgsSaveComformiteitApiUrl = this._baseUrl + "api/sgsTV/SendMailConformVerklaring";
    private sgsPersistConclusionChangeApiUrl = this._baseUrl + "api/sgsTV/PersistConclusionChange";
    private sgsIsEmailSendApiUrl = this._baseUrl + "api/sgsTV/isEmailSend";
    private sgsSetEmailSendApiUrl = this._baseUrl + "api/sgsTV/SetEmailSend";



   


   
   



    private headers = new HttpHeaders().set("content-type", "application/json");

    temporaryTvData: sgsTvJoinedData;

    constructor(private readonly _http: HttpClient, @Inject("BASE_URL") private readonly _baseUrl: string) {
    }


    // Customer
    public ContactInfo() {
        return this._http.get(this.contactInfoAPIUrl, { headers: this.headers })
            .map(result => result as IContactInfo);
    }

    public Detail(id: number): Observable<ITVDetail> {
        let params = new HttpParams();
        params = params.append("detailId", id.toString());
        return this._http.get(this.detailAPIUrl, { params: params })
            .map(result => result as ITVDetail);
    }

    public Insert(FormData: any) {
        const body = JSON.stringify(FormData);
        return this._http.post(this.insertAPIUrl, body, { headers: this.headers })
            .map((response: any) => response);
    }

    public IsTopCgrIsBewerkt(id: number) {
        let params = new HttpParams();
        params = params.append("technischVerslagId", id.toString());
        return this._http.get(this.isTopCgrIsBewerktAPIUrl, { params: params })
            .map(result => result as boolean);
    }

    public IsVlarebo2008(id: number) {
        let params = new HttpParams();
        params = params.append("TechnischVerslagId", id.toString());
        return this._http.get(this.isVlarebo2008APIUrl, { params: params })
            .map(result => result as boolean);
    }

    public PocoEntity(id: number, checkUserId: boolean): Observable<ITVDetail> {
        let params = new HttpParams();
        params = params.append("tvId", id.toString());
        params = params.append("checkUserId", checkUserId.toString());
        return this._http.get(this.pocoEntityAPIUrl, { params: params })
            .map(result => result as ITVDetail);
    }

    public SearchList(klant: string, straat: string, gemeente: string) {
        let params = new HttpParams();
        params = params.append("klant", klant);
        params = params.append("straat", straat);
        params = params.append("gemeente", gemeente);
        return this._http.get(this.searchListAPIUrl, { params: params })
            .map(result => result as ITVSearch[]);
    }

    public StatusDefinitionList(inclNieuweAanvragen: boolean) {
        let params = new HttpParams();
        params = params.append("InclNieuweAanvragen", (inclNieuweAanvragen === true ? "1" : "0"));
        return this._http.get(this.statusDefinitionListAPIUrl, { headers: this.headers, params: params })
            .map(result => result as ITVStatusDefinition[]);
    }

    public StatusList() {
        return this._http.get(this.statusListAPIUrl, { headers: this.headers })
            .map(result => result as ITVStatus[]);
    }



    // SGS

    public gwStatusList(statusId: number, onlyNewRecords: boolean) {
        let params = new HttpParams();
        params = params.append("statusId", statusId.toString());
        params = params.append("onlyNewRecords", onlyNewRecords.toString());
        return this._http.get(this.sgsStatusListAPIUrl, { params: params })
            .map(result => result as ISgsTVByStatus[]);
    }

    public gwZoekList(zoekVelden: SgsTVZoekVelden) {
        return this._http.post<ISgsTVByStatus[]>(this.sgsZoekListAPIUrl, zoekVelden, { headers: this.headers });
    }

    public gwAfsluitReden() {
        return this._http.get(this.sgsAfsluitRedenApiUrl, { headers: this.headers })
            .map(result => result as ISgsTVAfsluitReden[]);
    }


    public sgsTVJoinedData(id: number) {
        let params = new HttpParams();
        params = params.append("technischVerslagId", id.toString());
        return this._http.get(this.sgsTvJoinedDataPIUrl, { params: params })
            .map(result => result as sgsTvJoinedData);
    }

    public sgsSaveTVJoinedData(FormData: any) {
        const body = JSON.stringify(FormData);
        return this._http.post(this.sgsSaveTvJoinedDataPIUrl, body, { headers: this.headers })
            .map((response: any) => response);
    }

    public gwGeologischeBeschrijving() {
        return this._http.get(this.sgsGeologischeBeschrijvingaPIUrl, { headers: this.headers })
            .map(result => result as ISgsGeologischeBeschrijving[]);
    }

    public gwPrimaireOppervlakte() {
        return this._http.get(this.sgsPrimaireOppervlakteaPIUrl, { headers: this.headers })
            .map(result => result as ISgsprimaireOppervlakte[]);
    }

    sgsSaveComformiteitMail(FormData: ISgsFullMail) {
        const body = JSON.stringify(FormData);
        return this._http.post(this.sgsSaveComformiteitApiUrl, body, { headers: this.headers })
            .map((response: ISgsFullMail) => response);
    }

    public sgsPersistConclusionChange(id: number, conclusionId: number) {
        let params = new HttpParams();
        params = params.append("tvId", id.toString());
        params = params.append("conclusionId", conclusionId.toString());
        return this._http.get(this.sgsPersistConclusionChangeApiUrl, { params: params })
            .map(result => result as boolean);
    }

    public sgsIsEmailSend(id: number) {
        let params = new HttpParams();
        params = params.append("tvId", id.toString());
        return this._http.get(this.sgsIsEmailSendApiUrl, { params: params })
            .map(result => result as boolean);
    }

    public sgsSetEmailSend(id: number, emailSend: number) {
        let params = new HttpParams();
        params = params.append("tvId", id.toString());
        params = params.append("emailSend", emailSend.toString());
        return this._http.get(this.sgsSetEmailSendApiUrl, { params: params })
            .map(result => result as boolean);
    }

}