import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { IGvtBestemming, IContactInfo, IBBRBestInfo, IBBRStatus, IBBRStatusGridRecord, IBBRRecord, IBBROntvangstVerklaring, IBBROntvangstVerklaringOnlineIngevuld, IBBRIndieningsWijze } from "../scripts/interfaces.scripts";
import { ISgsBestAardListItem, ISgsBBRItem, ISgsGvtDeelvolume, SgsGvtJoinedData, bbrStatusItem, iSgsTransportListItem, ISgsCategorieItem } from "../scripts/sgsInterfaces.scripts";
import { SgsBBRZoekVelden } from "../scripts/sgsClasses.scripts";

@Injectable()
export class HttpBBRService {
    // CUSTOMER
    private bestemmingBbrListApiUrl = this.baseUrl + "api/BBR/BestemmingBbrList";
    private bestemmingPocoEntityApiUrl = this.baseUrl + "api/BBR/BestemmingPocoEntity";
    private bestemmingContactInfoApiUrl = this.baseUrl + "api/BBR/BestemmingContactInfo";

    private deelvolumesApiUrl = this.baseUrl + "api/BBR/Deelvolumes";
    private detaildApiUrl = this.baseUrl + "api/BBR/Detail";
    private filledOrUploadListApiUrl = this.baseUrl + "api/BBR/FilledOrUploadList";
    private hasOntvangstVerklaringApiUrl = this.baseUrl + "api/BBR/HasOntvangstVerklaring";
    //private herkomstListApiUrl = this.baseUrl + "api/BBR/HerkomstList";
    private ontvangstVerklaringListApiUrl = this.baseUrl + "api/BBR/OntvangstVerklaringList";
    private pocoEntityApiUrl = this.baseUrl + "api/BBR/PocoEntity";
    private onlineOntvangstVerklaringApiUrl = this.baseUrl + "api/BBR/OnlineOntvangstVerklaring";
    private sendLegeOntvangstVerklaringMailApiUrl = this.baseUrl + "api/BBR/SendLegeOntvangstVerklaringMail";
    private statusDefinitionListApiUrl = this.baseUrl + "api/BBR/StatusDefinitionList";
    private statusListApiUrl = this.baseUrl + "api/BBR/StatusList";
    private transportListNr3ApiUrl = this.baseUrl + "api/BBR/TransportListNr3";
    private transportListNrAsIntApiUrl = this.baseUrl + "api/BBR/TransportListNrAsInt";
    private transportListNrAsStringApiUrl = this.baseUrl + "api/BBR/TransportListNrAsString";
    private transportVerklaringPdfDataApiUrl = this.baseUrl + "api/BBR/TransportVerklaringPdfData";
    private zonesListApiUrl = this.baseUrl + "api/BBR/ZonesList";


    // SGS
    private sgsIndieningsWijzeListItemsApiUrl = this.baseUrl + "api/sgsBBR/GetIndieningsWijzeComboListItems";
    private sgsBestemmingsAardListItemsApiUrl = this.baseUrl + "api/sgsBBR/BestemmingsAardListItems";
    private sgsStatusListAPIUrl = this.baseUrl + "api/sgsBBR/StatusList";
    private sgsZoekListAPIUrl = this.baseUrl + "api/sgsBBR/ZoekList";
    private sgsGvtJoinedDataAPIUrl = this.baseUrl + "api/sgsBBR/Detail";
    private sgsGetDeelvolumeAPIUrl = this.baseUrl + "api/sgsBBR/ZoneList";
    private sgsTransportListItemAPIUrl = this.baseUrl + "api/sgsBBR/TransportList";
    private sgsCategorieListItemAPIUrl = this.baseUrl + "api/sgsBBR/CategorieListItems";
    private sgsBBRStatusListItemAPIUrl = this.baseUrl + "api/sgsBBR/StatusListByBbrId";
    private sgsOpgeletListItemAPIUrl = this.baseUrl + "api/sgsBBR/GetBbrIDsForBestemming";
    private sgsSaveGvtJoinedDataAPIUrl = this.baseUrl + "api/sgsBBR/Save";



     

   
    private headers = new HttpHeaders({
        "content-type": "application/json",
        "Cache-Control": "no-cache",
        "Pragma": "no-cache"
    });

    constructor(private readonly http: HttpClient, @Inject("BASE_URL") private readonly baseUrl: string) {
    }


    // CUSTOMER


    public BestemmingBbrList() {
        return this.http.get(this.bestemmingBbrListApiUrl, { headers: this.headers })
            .map(result => result as IGvtBestemming[]);
    }

    public BestemmingPocoEntity(bestId: number) {
        let params = new HttpParams();
        params = params.append("BestId", bestId.toString());
        return this.http.get(this.bestemmingPocoEntityApiUrl, { headers: this.headers, params: params })
            .map(result => result as IBBRBestInfo);
    }

    public BestemmingContactInfo() {
        return this.http.get(this.bestemmingContactInfoApiUrl, { headers: this.headers })
            .map(result => result as IContactInfo);
    }

    public Deelvolumes(bbrId: number) {
        let params = new HttpParams();
        params = params.append("bbrId", bbrId.toString());
        return this.http.get(this.deelvolumesApiUrl, { headers: this.headers, params: params });
    }

    public Detail(bbrId: number) {
        let params = new HttpParams();
        params = params.append("bbrId", bbrId.toString());
        return this.http.get(this.detaildApiUrl, { headers: this.headers, params: params });
    }

    public FilledOrUploadList() {
        return this.http.get(this.filledOrUploadListApiUrl, { headers: this.headers })
            .map(result => result as IBBRStatusGridRecord[]);
    }

    public HasOntvangstVerklaring(bbrId: number) {
        let params = new HttpParams();
        params = params.append("bodemBeheerRapportId", bbrId.toString());
        return this.http.get(this.hasOntvangstVerklaringApiUrl, { headers: this.headers, params: params });
    }

    public OntvangstVerklaringList(bbrId: number) {
        let params = new HttpParams();
        params = params.append("bbrId", bbrId.toString());
        return this.http.get(this.ontvangstVerklaringListApiUrl, { headers: this.headers, params: params })
            .map(result => result as IBBROntvangstVerklaring[]);
    }

    public PocoEntity(bbrId: number) {
        let params = new HttpParams();
        params = params.append("bbrId", bbrId.toString());
        return this.http.get(this.pocoEntityApiUrl, { headers: this.headers, params: params })
            .map(result => result as IBBRRecord);
    }

    public onlineOntvangstVerklaring(data: IBBROntvangstVerklaringOnlineIngevuld) {
        const body = JSON.stringify(data);
        return this.http.post(this.onlineOntvangstVerklaringApiUrl, body, { headers: this.headers }).toPromise();
    }

    public SendLegeOntvangstVerklaringMail(bbrId: number, emailAddress: string) {
        const data = {
            "bbrId": bbrId,
            "emailAddress": emailAddress
        };
        const body = JSON.stringify(data);
        return this.http.post(this.sendLegeOntvangstVerklaringMailApiUrl, body, { headers: this.headers });
    }

    public StatusDefinitionList(type: string, inclNieuweAanvragen: boolean) {
        let params = new HttpParams();
        params = params.append("type", type);
        params = params.append("InclNieuweAanvragen", inclNieuweAanvragen.toString());
        return this.http.get(this.statusDefinitionListApiUrl, { headers: this.headers, params: params })
            .map(result => result as IBBRStatus[]);
    }

    public StatusList(sts: number, contextCode: string) {
        let params = new HttpParams();
        params = params.append("statusId", sts.toString());
        params = params.append("contextCode", contextCode);
        return this.http.get(this.statusListApiUrl, { headers: this.headers, params: params })
            .map(result => result as IBBRStatusGridRecord[]);
    }

    public TransportListNr3() {
        return this.http.get(this.transportListNr3ApiUrl, { headers: this.headers });
    }

    public TransportListNrAsInt(sts: number) {
        let params = new HttpParams();
        params = params.append("statusId", sts.toString());
        return this.http.get(this.transportListNrAsIntApiUrl, { headers: this.headers, params: params })
            .map(result => result as IBBRStatusGridRecord[]);
    }

    public TransportListNrAsString(bestemmingId: number) {
        let params = new HttpParams();
        params = params.append("bestemmingId", bestemmingId.toString());
        return this.http.get(this.transportListNrAsStringApiUrl, { headers: this.headers, params: params });
    }

    public TransportVerklaringPdfData(bbrId: number) {
        let params = new HttpParams();
        params = params.append("bbrId", bbrId.toString());
        return this.http.get(this.transportVerklaringPdfDataApiUrl, { headers: this.headers, params: params });
    }

    public ZonesList(is2008: boolean) {
        let params = new HttpParams();
        params = params.append("is2008", (is2008 ? "1" : "0"));
        return this.http.get(this.zonesListApiUrl, { headers: this.headers, params: params });
    }


    // SGS


    public sgsIndieningsWijzeListItems() {
        return this.http.get(this.sgsIndieningsWijzeListItemsApiUrl, { headers: this.headers })
            .map(result => result as IBBRIndieningsWijze[]);
    }

    public sgsBestemmingsaardListItems() {
        return this.http.get(this.sgsBestemmingsAardListItemsApiUrl, { headers: this.headers })
            .map(result => result as ISgsBestAardListItem[]);
    }

    public sgsStatusList(statusId: number, contextCode: string) {
        let params = new HttpParams();
        params = params.append("statusId", statusId.toString());
        params = params.append("contextCode", contextCode);
        return this.http.get(this.sgsStatusListAPIUrl, { params: params })
            .map(result => result as ISgsBBRItem[]);
    }

    public gwZoekList(zoekVelden: SgsBBRZoekVelden) {
        return this.http.post<ISgsBBRItem[]>(this.sgsZoekListAPIUrl, zoekVelden, { headers: this.headers });
    }

    public sgsGetBBRJoinedData(bbrId: number) {
        let params = new HttpParams();
        params = params.append("bbrId", bbrId.toString());
        return this.http.get(this.sgsGvtJoinedDataAPIUrl, { headers: this.headers, params: params })
            .map(result => result as SgsGvtJoinedData);
    }

    public sgsGetDeelvolume(bbrId: number) {
        let params = new HttpParams();
        params = params.append("bbrId", bbrId.toString());
        return this.http.get(this.sgsGetDeelvolumeAPIUrl, { headers: this.headers, params: params })
            .map(result => result as ISgsGvtDeelvolume[]);

    }

    public sgsTransportListItem(bbrId: number) {
        let params = new HttpParams();
        params = params.append("bbrId", bbrId.toString());
        return this.http.get(this.sgsTransportListItemAPIUrl, { headers: this.headers, params: params })
            .map(result => result as iSgsTransportListItem[]);
    }

    public sgsCategorieListItem() {
        return this.http.get(this.sgsCategorieListItemAPIUrl, { headers: this.headers})
            .map(result => result as ISgsCategorieItem[]);
    }


    public sgsBBRsStatusListItem(bbrId: number) {
        let params = new HttpParams();
        params = params.append("bbrId", bbrId.toString());
        return this.http.get(this.sgsBBRStatusListItemAPIUrl, { params: params })
            .map(result => result as bbrStatusItem[]);
    }

    public sgsOpgeletListItem(bestemmingId: number) {
        let params = new HttpParams();
        params = params.append("bestemmingId", bestemmingId.toString());
        return this.http.get(this.sgsOpgeletListItemAPIUrl, { params: params })
            .map(result => result as number[]);
    }

    public sgsSaveGvtJoinedData(FormData: any) {
        const body = JSON.stringify(FormData);
        return this.http.post(this.sgsSaveGvtJoinedDataAPIUrl, body, { headers: this.headers })
            .map((response: any) => response);
    }


}