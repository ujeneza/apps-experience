import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { IBranche, IKlantPoco } from "../scripts/interfaces.scripts";
import { ISgsStatusGridItem, ISgsKlantWijziging, ISgsKlantComboListItem, ISgsBeroepsorganisatieListItem, ISgsBrancheListItem, ISgsKlantStatusListItem, isgsMailHistory } from "../scripts/sgsInterfaces.scripts";
import { SgsKlantZoekVelden } from "../scripts/sgsClasses.scripts";

@Injectable()
export class HttpKlantService {
    // Customer
    private brancheEntityAPIUrl = this._baseUrl + "api/Klant/BrancheEntity";
    private pocoEntityAPIUrl = this._baseUrl + "api/Klant/PocoEntity";
    private topListAPIUrl = this._baseUrl + "api/Klant/TOPList";

    // SGS
    private sgsBeroepsorganisatieListItemsAPIUrl = this._baseUrl + "api/sgsKlant/GetBeroepsorganisatieListItems";
    private sgsBrancheListItemsAPIUrl = this._baseUrl + "api/sgsKlant/GetBrancheListItems";
    private sgsComboListItemsAPIUrl = this._baseUrl + "api/sgsKlant/GetComboListItems";
    private sgsKlantPocoAPIUrl = this._baseUrl + "api/sgsKlant/GetKlantPoco";
    private sgsKlantStatusListItemsAPIUrl = this._baseUrl + "api/sgsKlant/GetKlantStatusListItems";
    private sgsKlantUsedEmailsAPIUrl = this._baseUrl + "api/sgsKlant/GetKlantUsedEmails";
    private sgsSaveAPIUrl = this._baseUrl + "api/sgsKlant/Save";
    private sgsStatusGridAPIUrl = this._baseUrl + "api/sgsKlant/GetStatusGridItems";
    private sgsUnhandledWijzigingenAPIUrl = this._baseUrl + "api/sgsKlant/GetKlantWijzigingenUnhandled";
    private sgsKlantLoginNamAPIUrl = this._baseUrl + "api/sgsKlant/LoginExists";
    private sgsKlantHistoricEmailsAPIUrl = this._baseUrl + "api/sgsKlant/GetMailLog";
    private sgsZoekListAPIUrl = this._baseUrl + "api/sgsKlant/ZoekList";
    private sgsTopCgrLocatieApiUrl = this._baseUrl + "api/sgsKlant/GetBrancheTypeListItems";


    private headers = new HttpHeaders().set("content-type", "application/json");

    constructor(private readonly _http: HttpClient, @Inject("BASE_URL") private readonly _baseUrl: string) {
    }


    // Customer
    public BrancheEntity() {
        return this._http.get(this.brancheEntityAPIUrl, { headers: this.headers })
            .map(result => result as IBranche);
    }

    public PocoEntity(id: number) {
        let params = new HttpParams();
        params = params.append("topCGRId", id.toString());
        return this._http.get(this.pocoEntityAPIUrl, { params: params })
            //.map(result => result as boolean);
    }

    public TOPList() {
        return this._http.get(this.topListAPIUrl, { headers: this.headers });
    }


    // SGS
    public sgsBeroepsorganisatieListItems() {
        return this._http.get(this.sgsBeroepsorganisatieListItemsAPIUrl, { headers: this.headers })
            .map(result => result as ISgsBeroepsorganisatieListItem[]);
    }

    public sgsBrancheListItems() {
        return this._http.get(this.sgsBrancheListItemsAPIUrl, { headers: this.headers })
            .map(result => result as ISgsBrancheListItem[]);
    }

    public sgsComboListItems() {
        return this._http.get(this.sgsComboListItemsAPIUrl, { headers: this.headers })
            .map(result => result as ISgsKlantComboListItem[]);
    }

    public sgsKlantPoco(id: number) {
        let params = new HttpParams();
        params = params.append("KlantId", id.toString());
        return this._http.get(this.sgsKlantPocoAPIUrl, { params: params })
            .map(result => result as IKlantPoco);
    }

    public sgsKlantStatusListItems() {
        return this._http.get(this.sgsKlantStatusListItemsAPIUrl, { headers: this.headers })
            .map(result => result as ISgsKlantStatusListItem[]);
    }

    public sgsKlantUsedEmails(id: number) {
        let params = new HttpParams();
        params = params.append("KlantId", id.toString());
        return this._http.get(this.sgsKlantUsedEmailsAPIUrl, { params: params })
            .map(result => result as string[]);
    }

    public sgsSave(FormData: any) {
        const body = JSON.stringify(FormData);
        return this._http.post(this.sgsSaveAPIUrl, body, { headers: this.headers })
            .map((response: any) => response);
    }

    public sgsStatusGrid(statusId: number, filterType: number) {
        let params = new HttpParams();
        params = params.append("StatusId", statusId.toString());
        params = params.append("FilterType", filterType.toString());
        return this._http.get(this.sgsStatusGridAPIUrl, { params: params })
            .map(result => result as ISgsStatusGridItem[]);
    }

    public sgsUnhandledWijzigingen() {
        return this._http.get(this.sgsUnhandledWijzigingenAPIUrl, { headers: this.headers })
            .map(result => result as ISgsKlantWijziging[]);
    }

    public sgsKlantLogin(login: string) {
        let params = new HttpParams();
        params = params.append("loginName", login);
        return this._http.get(this.sgsKlantLoginNamAPIUrl, { params: params })
            .map(result => result as number);

    }


    public sgsKlantEmailHistory(id: number) {
        let params = new HttpParams();
        params = params.append("KlantId", id.toString());
        return this._http.get(this.sgsKlantHistoricEmailsAPIUrl, { params: params })
            .map(result => result as isgsMailHistory[]);
    }

    public gwZoekList(zoekVelden: SgsKlantZoekVelden) {
        return this._http.post<ISgsStatusGridItem[]>(this.sgsZoekListAPIUrl, zoekVelden, { headers: this.headers });
    }

    public gwsTopCgrLocatie(brancheType: number, onlyNewRecords: boolean) {
        let params = new HttpParams();
        params = params.append("brancheType", brancheType.toString());
        params = params.append("onlyNewRecords", (onlyNewRecords === true ? "1" : "0"));
        return this._http.get(this.sgsTopCgrLocatieApiUrl, { params: params })
            .map(result => result as any[]);
    }



    
}