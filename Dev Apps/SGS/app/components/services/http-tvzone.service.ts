import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from "@angular/common/http";
import { ITVVolume, ITVZone, IQGebruik, ITVZoneDetail } from "../scripts/interfaces.scripts";
import { Observable } from "rxjs/Observable";
import { sgsVolumes } from "../scripts/sgsInterfaces.scripts";

@Injectable()
export class HttpTVZoneService {
    private deleteAPIUrl = this._baseUrl + "api/TVZone/Delete";
    private fillTVZonesAPIUrl = this._baseUrl + "api/TVZone/FillTVzones";
    private kwaliteitenGebruikenAPIUrl = this._baseUrl + "api/TVZone/KwaliteitenGebruiken";
    private listAPIUrl = this._baseUrl + "api/TVZone/List";
    private listByTvIdAPIUrl = this._baseUrl + "api/TVZone/ListByTVId";
    private saveAPIUrl = this._baseUrl + "api/TVZone/Save";
    private zonesListAPIUrl = this._baseUrl + "api/TVZone/ZonesList";
    private zonesListByTVIdAPIUrl = this._baseUrl + "api/TVZone/ZonesListByTVId";


    private headers = new HttpHeaders().set("content-type", "application/json");

    constructor(private readonly _http: HttpClient, @Inject("BASE_URL") private readonly _baseUrl: string) {
    }

    public Delete(zoneId: number) {
        let params = new HttpParams();
        params = params.append("tvZoneId", zoneId.toString());
        return this._http.delete(this.deleteAPIUrl, { params: params });
    }

    public FillTVZones(tvId: number) {
        let params = new HttpParams();
        params = params.append("TVId", tvId.toString());
        return this._http.get(this.fillTVZonesAPIUrl, { params: params });
    }

    public KwaliteitenGebruiken(typeGebruik: string) {
        let params = new HttpParams();
        params = params.append("TypeGebruik", typeGebruik);
        return this._http.get(this.kwaliteitenGebruikenAPIUrl, { params: params })
            .map(result => result as IQGebruik[]);
    }

    public List(TvZoneId: number) {
        let params = new HttpParams();
        params = params.append("TvZoneId", TvZoneId.toString());
        return this._http.get(this.listAPIUrl, { params: params })
            .map(result => result as ITVZoneDetail);
    }

    public ListByTVId(TvId: number): Observable<ITVZone[]> {
        let params = new HttpParams();
        params = params.append("detailId", TvId.toString());
        return this._http.get(this.listByTvIdAPIUrl, { params: params })
            .map(result => result as ITVZone[]);
    }

    public Save(FormData: any) {
        const body = JSON.stringify(FormData);
        return this._http.post(this.saveAPIUrl, body, { headers: this.headers })
            .map((response: any) => response);
    }

    public ZonesList(id: number, gtmId?: number) {
        let params = new HttpParams();
        params = params.append("TechnischVerslagId", id.toString());
        if (gtmId == null) {
            return this._http.get(this.zonesListByTVIdAPIUrl, { params: params })
                .map(result => result as ITVVolume[]);
        } else {
            params = params.append("GrondTransportMeldingId", gtmId.toString());
            return this._http.get(this.zonesListAPIUrl, { params: params })
                .map(result => result as ITVVolume[]);                
        }
    }
    public ZonesListGvt( gvtId: number) {
        let params = new HttpParams();
        params = params.append("GrondVerzettoelating", gvtId.toString());
        return this._http.get(this.zonesListAPIUrl, { params: params })
            .map(result => result as sgsVolumes[]);

    }
}