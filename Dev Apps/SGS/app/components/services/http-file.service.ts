import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { IFile } from "../scripts/interfaces.scripts";


@Injectable()
export class HttpFileService {
    // Customer
    private listWithoutBlobApiUrl = this.baseUrl + "api/Files/ListWithoutBlob";
    private listWithoutBlobMultipleTypesApiUrl = this.baseUrl + "api/Files/ListWithoutBlobMultipleTypes";
    private loadFileApiUrl = this.baseUrl + "api/Files/LoadFile";
    private loadFileWithoutUserCheckApiUrl = this.baseUrl + "api/Files/LoadFileWithoutUserCheck";
    private deleteUploadsApiUrl = this.baseUrl + "api/Files/DeleteUploads";
    private moveFilesFromTempToFinalLocationApiUrl = this.baseUrl + "api/Files/MoveToFinalTable";
    private moveFilesFromTempToFinalLocationForKlantApiUrl = this.baseUrl + "api/Files/MoveToFinalTableForKlant";

    // SGS
    private listFilesByTypeAndUserApiUrl = this.baseUrl + "api/sgsFiles/GetListByTypeAndUser";
    private multipleListFilesByTypeAndUserApiUrl = this.baseUrl + "api/sgsFiles/GetListByMultipleTypesAndUser";
    private multipleListFilesByTypeAndDocumentApiUrl = this.baseUrl + "api/sgsFiles/GetListByMultipleTypesAndDocument";


    private headers = new HttpHeaders().set("content-type", "application/json");

    constructor(private readonly http: HttpClient, @Inject("BASE_URL") private readonly baseUrl: string) {
    }


    // Customer
    public ListWithoutBlob(type: fileTypes, documentId: number) {
        let params = new HttpParams();
        params = params.append("type", type.toString());
        params = params.append("documentId", documentId.toString());
        return this.http.get(this.listWithoutBlobApiUrl, { params: params });
    }

    public ListWithoutBlobMultipleTypes(types: fileTypes[], documentId: number) {
        let params = new HttpParams();
        params = params.append("types", JSON.stringify(types));
        params = params.append("documentId", documentId.toString());

        return this.http.get(this.listWithoutBlobMultipleTypesApiUrl, { headers: this.headers, params: params });
    }

    public LoadFile(id: number) {
        let params = new HttpParams();
        params = params.append("FileId", id.toString());
        return this.http.get(this.loadFileApiUrl, { responseType: "blob", observe: "response", params: params });
    }

    public LoadFileWithoutUserCheck(id: number) {
        let params = new HttpParams();
        params = params.append("FileId", id.toString());
        return this.http.get(this.loadFileWithoutUserCheckApiUrl, { responseType: "blob", observe: "response", params: params });
    }


    public deleteUploadedFiles(uploadedIDs: string) {
        return this.http.delete(this.deleteUploadsApiUrl + "?UploadIDs=" + uploadedIDs, { headers: this.headers })
            .map((response: any) => response);
    }

    public moveFilesFromTempToFinalLocation(documentId: number, fileIDs: number[]) {
        let params = new HttpParams();
        params = params.append("DocumentId", documentId.toString());
        params = params.append("TemporaryUploadedIDs", fileIDs.join(","));
        return this.http.get(this.moveFilesFromTempToFinalLocationApiUrl, { params: params });
    }

    public moveFilesFromTempToFinalLocationForKlant(documentId: number, klantId: number, fileIDs: number[]) {
        let params = new HttpParams();
        params = params.append("DocumentId", documentId.toString());
        params = params.append("KlantId", klantId.toString());
        params = params.append("TemporaryUploadedIDs", fileIDs.join(","));
        return this.http.get(this.moveFilesFromTempToFinalLocationApiUrl, { params: params });
    }


    // SGS
    public listFilesByTypeAndUser(type: fileTypes, userid: number) {
        let params = new HttpParams();
        params = params.append("type", type.toString());
        params = params.append("userid", userid.toString());
        return this.http.get(this.listFilesByTypeAndUserApiUrl, { params: params })
            .map(result => result as IFile[]);
    }
    public multipleListFilesByTypeAndUser(types: fileTypes[], userId: number) {
        let params = new HttpParams();
        params = params.append("types", JSON.stringify(types));
        params = params.append("userId", userId.toString());
        return this.http.get(this.multipleListFilesByTypeAndUserApiUrl, { params: params })
            .map(result => result as IFile[]);
    }
    public multipleListFilesByTypeAndDocument(types: fileTypes[], docId: number) {
        let params = new HttpParams();
        params = params.append("types", JSON.stringify(types));
        params = params.append("docId", docId.toString());
        return this.http.get(this.multipleListFilesByTypeAndDocumentApiUrl, { params: params })
            .map(result => result as IFile[]);
    }

}

export enum fileTypes {
    TechnischVerslag,
    BbrStudieOntvangendeGrond,
    BbrStudieBouwkundigBodemgebruik,
    Bbr2StudieOntvangendeGrond,
    Bbr2StudieBouwstof,
    Bbr2Aanvulplan,
    KlantContract,
    MailGrondTransportMelding,
    MailVerklaringAfnemerBBR,
    MailVerklaringAfnemerGTM,
    MailTransportVerklaring,
    GwMailGoedkeuringWeigeringTransport,
    GwMailConformNietConformVerklaring,
    GwMailVerklaringafnemer,
    GwMailGoedkeuringAfkeuringBodembeheerRapport,
    GwMailVervoersdocument,
    GwMailOntvangstverklaring,
    GwMailExtraAttachment,
    AanvrBestTranspStudieOntvangendeGrond,
    AanvrBestTranspStudieBouwstof,

    GwExtraFilesTv,
    GwExtraFilesTvSamengevoegd,
    GwExtraFilesBbrEditFinaal,
    GwExtraFilesBbrEdit,
    GwExtraFilesGtmEdit,
    GwExtraFilesKlant,
    MailKleineWervenMelding,
    MailVervoerDocumentKW,

    GwMailFileAddedFromArchive = 50,

    UserExtraFilesGTM = 100,

    UserUploadOntvangstVerklaring = 200,
    UserOnlineFilledOntvangstVerklaring = 201,
    UserUploadVerklaringAfnemer = 202,
    UserOnlineFilledVerklaringAfnemer = 203,

    GwWerfVerslag = 300,
    GwWerfVerslagUpload = 301
}