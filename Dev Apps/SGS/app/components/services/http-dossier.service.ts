import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { ISgsDossierComboListItem, ISgsDossierBeheerder } from "../scripts/sgsInterfaces.scripts";

@Injectable()
export class HttpDossierService {
    // SGS
    private sgsComboListItemsAPIUrl = this._baseUrl + "api/sgsDossier/GetComboListItems";
    private sgsMailByIdApiUrl = this._baseUrl + "api/sgsDossier/GetMailAddress";


    private headers = new HttpHeaders().set("content-type", "application/json");

    constructor(private readonly _http: HttpClient, @Inject("BASE_URL") private readonly _baseUrl: string) {
    }


    // SGS
    public sgsComboListItems() {
        return this._http.get(this.sgsComboListItemsAPIUrl, { headers: this.headers })
            .map(result => result as ISgsDossierComboListItem[]);
    }

    public sgsMailById(id: number) {
        let params = new HttpParams();
        params = params.append("DossierBeheerderID", id.toString());
        return this._http.get(this.sgsMailByIdApiUrl, { params: params })
            .map(result => result as ISgsDossierBeheerder);
    }

    public sgsMailUserLoggedIn() {
        let params = new HttpParams();
        params = params.append("DossierBeheerderID", "0");
        return this._http.get(this.sgsMailByIdApiUrl, { params: params })
            .map(result => result as ISgsDossierBeheerder);
    }

    
}