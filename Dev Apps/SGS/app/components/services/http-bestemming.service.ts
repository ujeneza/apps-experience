import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { ISgsDossierComboListItem, ISgsDossierBeheerder, ISgsBestAardListItem, ISgsStudieBestemmingItem, ISgsBBRTypeItem } from "../scripts/sgsInterfaces.scripts";

@Injectable()
export class HttpBestemmingService {
    // SGS
    private sgsBestemingListItemsAPIUrl = this.baseUrl + "api/sgsBestemming/AardListItems";
    private sgsStudieListItemsAPIUrl = this.baseUrl + "api/sgsBestemming/StudieListItems";
    private sgsTypeListItemsAPIUrl = this.baseUrl + "api/sgsBestemming/TypeListItems";



    private headers = new HttpHeaders().set("content-type", "application/json");

    constructor(private readonly http: HttpClient, @Inject("BASE_URL") private readonly baseUrl: string) {
    }


    // SGS
    public sgsBestemmingListItems() {
        return this.http.get(this.sgsBestemingListItemsAPIUrl, { headers: this.headers })
            .map(result => result as ISgsBestAardListItem[]);
    }

    public sgsStudieListItems() {
        return this.http.get(this.sgsStudieListItemsAPIUrl, { headers: this.headers })
            .map(result => result as ISgsStudieBestemmingItem[]);
    }

    public sgsTypeListItems() {
        return this.http.get(this.sgsTypeListItemsAPIUrl, { headers: this.headers })
            .map(result => result as ISgsBBRTypeItem[]);
    }



    
}