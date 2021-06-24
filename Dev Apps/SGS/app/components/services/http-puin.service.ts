import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";

@Injectable()
export class HttpPuinService {
    private aanvraagApiUrl = this.baseUrl + "api/Puin/GetAanvraag";
    private bestemmmingsListApiUrl = this.baseUrl + "api/Puin/GetBestemmingList";
    private bestemmingApiUrl = this.baseUrl + "api/Puin/GetBestemming";
    private insertApiUrl = this.baseUrl + "api/Puin/Insert";
    private getAanvraagListApiUrl = this.baseUrl + "api/Puin/GetAanvraagList";
    private getStatusListApiUrl = this.baseUrl + "api/Puin/GetStatusList";

    private headers = new HttpHeaders({
        "content-type": "application/json",
        "Cache-Control": "no-cache",
        "Pragma": "no-cache"
    });

    constructor(private readonly http: HttpClient, @Inject("BASE_URL") private readonly baseUrl: string) {
    }


    getAanvraag(id: number) {
        let params = new HttpParams();
        params = params.append("id", id.toString());
        return this.http.get(this.aanvraagApiUrl, { headers: this.headers, params: params }).toPromise();
    }

    getAanvraagList() {
        return this.http.get(this.getAanvraagListApiUrl, { headers: this.headers }).toPromise();
    }

    getStatusList() {
        return this.http.get(this.getStatusListApiUrl, { headers: this.headers }).toPromise();
    }

    getBestemmingsList() {
        return this.http.get(this.bestemmmingsListApiUrl, { headers: this.headers }).toPromise();
    }

    getBestemming(id: number) {
        let params = new HttpParams();
        params = params.append("id", id.toString());
        return this.http.get(this.bestemmingApiUrl, { headers: this.headers, params: params }).toPromise();
    }

    insert(toInsert: any) {
        const body = JSON.stringify(toInsert);
        return this.http.post(this.insertApiUrl, body, { headers: this.headers }).toPromise();
    }
}