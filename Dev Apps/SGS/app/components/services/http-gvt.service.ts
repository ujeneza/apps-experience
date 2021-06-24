import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { IGVTEntity, IGVTStatus } from "../scripts/interfaces.scripts";
import { ISgsBBRItem, ISgsGVTItem, ISgsGVTType } from "../scripts/sgsInterfaces.scripts";
import { SgsGVTZoekVelden } from "../scripts/sgsClasses.scripts";

@Injectable()
export class HttpGVTService {
    // Customer
    private insertAPIUrl = this.baseUrl + "api/GVT/Insert";
    private listAPIUrl = this.baseUrl + "api/GVT/List";
    private statusDefinitionListApiUrl = this.baseUrl + "api/GVT/StatusDefinitionList";

    // SGS
    private sgsStatusListAPIUrl = this.baseUrl + "api/sgsGVT/StatusList";
    private sgsZoekListAPIUrl = this.baseUrl + "api/sgsGVT/ZoekList";
    private grondVerzetTypesApiUrl = this.baseUrl + "api/sgsGVT/GetTypeListItems";



    private headers = new HttpHeaders().set("content-type", "application/json");

    constructor(private readonly http: HttpClient, @Inject("BASE_URL") private readonly baseUrl: string) {
    }

    // Customer
    public Insert(formData: any) {
        const body = JSON.stringify(formData);
        return this.http.post(this.insertAPIUrl, body, { headers: this.headers })
            .map((response: any) => response);
    }

    public List() {
        return this.http.get(this.listAPIUrl, { headers: this.headers })
            .map(result => result as IGVTEntity[]);
    }

    public StatusDefinitionList(type: string, inclNieuweAanvragen: boolean) {
        let params = new HttpParams();
        params = params.append("type", type);
        params = params.append("InclNieuweAanvragen", (inclNieuweAanvragen === true ? "1" : "0"));
        return this.http.get(this.statusDefinitionListApiUrl, { headers: this.headers, params: params })
            .map(result => result as IGVTStatus[]);
    }


    // SGS

    public sgsStatusList(statusId: number, contextCode: string) {
        let params = new HttpParams();
        params = params.append("statusId", statusId.toString());
        params = params.append("contextCode", contextCode);
        return this.http.get(this.sgsStatusListAPIUrl, { params: params })
            .map(result => result as ISgsGVTItem[]);
    }

    public gwZoekList(zoekVelden: SgsGVTZoekVelden) {
        return this.http.post<ISgsGVTItem[]>(this.sgsZoekListAPIUrl, zoekVelden, { headers: this.headers });
    }

    public gwGrondVerzetTypes() {
        return this.http.get(this.grondVerzetTypesApiUrl, { headers: this.headers })
            .map(result => result as ISgsGVTType[]);
    }

}