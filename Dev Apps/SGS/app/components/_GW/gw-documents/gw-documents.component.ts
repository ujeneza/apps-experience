import { Component, OnInit, OnChanges, Input, EventEmitter, Output, SimpleChanges } from "@angular/core";
import { GeneralScripts } from "../../scripts/general.scripts";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpFileService } from "../../services/http-file.service";
import { HttpKlantService } from "../../services/http-klant.service";
import { AuthenticationService } from "../../services/authentication.service";
import { DatePipe } from "@angular/common";
import { DomSanitizer } from "@angular/platform-browser";
import { fileTypes } from "../../services/http-file.service";
import { IFile } from "../../scripts/interfaces.scripts";
import { EmailHistoriekTypes } from "../gw-email-historiek-grid/gw-email-historiek-grid.component";

@Component({
    selector: "gw-documents",
    templateUrl: "./gw-documents.component.html",
    styleUrls: ["./gw-documents.component.css"]
})

export class gwDocumentsComponent extends GeneralScripts implements OnInit, OnChanges {

    // Input Parameters

    @Input() id: number = -1;
    @Input() documentType: DocumentTypes;
    @Input() emailHistoriekType: EmailHistoriekTypes;

    parentUploading = false;
    @Input('uploadByParent')
    get uploadByParent(): boolean {
        return this.parentUploading;
    }
    set uploadByParent(value: boolean) {
        this.parentUploading = "" + value !== "false";
    }

    sendingNewMail = true;
    @Input('canSendNewEmail')
    get canSendNewEmail(): boolean {
        return this.sendingNewMail;
    }
    set canSendNewEmail(value: boolean) {
        this.sendingNewMail = "" + value !== "false";
    }

    ShowDocuments = true;
    @Input('showDocuments')
    get showDocuments(): boolean {
        return this.ShowDocuments;
    }
    set showDocuments(value: boolean) {
        this.ShowDocuments = "" + value !== "false";
    }

    ShowMails = true;
    @Input('showMails')
    get showMails(): boolean {
        return this.ShowMails;
    }
    set showMails(value: boolean) {
        this.ShowMails = "" + value !== "false";
    }

    DoRefresh = false;
    @Input('refreshNeeded')
    get refreshNeeded(): boolean {
        return this.DoRefresh;
    }
    set refreshNeeded(value: boolean) {
        this.DoRefresh = "" + value !== "false";
    }

    _status: string = "selection";
    get status(): string {
        return this._status;
    }
    @Input('status') set status(value: string) {
        this._status = value;
        switch (value) {
            case "upload":
                if (this.uploadQueueCount > 0) {
                    this.uploadedIDs.length = 0;
                    this.uploadStatus = "upload";
                    // This will be catched in filesUploaded()
                }
                else {
                    this.status = "selection";
                    this.uploadStatus = "selection";
                    this.uploadingFiles.emit(null);
                }
                break;
            case "clean":
                if (this.uploadedIDs.length > 0) {
                    this.uploadStatus = "clean";
                }
                this.status = "selection";
                this.uploadStatus = "selection";
                break;
            default:
                break;
        }
    }

    // Output Parameter

    @Output() uploadingFiles: EventEmitter<number[]> = new EventEmitter<number[]>();

    // Variables

    filetypes: fileTypes[];
    userFiles: IFile[] = [];
    isLoading: boolean = true;

    public uploadFileType: fileTypes;
    public uploadStatus: string = "selection";
    private uploadedIDs: number[] = [];
    private uploadQueueCount: number = 0;

    constructor(
        private readonly _toastr: ToastrService,
        private readonly httpFile: HttpFileService,
        private httpKlant: HttpKlantService,
        private readonly sanitizer: DomSanitizer,
        private readonly router: Router,
        private readonly route: ActivatedRoute,
        private readonly datePipe: DatePipe,
        private readonly auth: AuthenticationService) {
        super(_toastr);
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['refreshNeeded']) {
            if (this.refreshNeeded) {
                this.ngOnInit();
                this.uploadStatus = "clean";
                this.refreshNeeded = false;
            } 
        }
    }

    ngOnInit(): void {
        if (this.ShowDocuments === false && this.ShowMails === false)
            this.isLoading = false;

        this.loadDocuments();
    }

    loadDocuments() {
        switch (this.documentType) {
            case DocumentTypes.AanvraagLRMP:
                break;
            case DocumentTypes.BodemBeheerRapport:
                break;
            case DocumentTypes.GrondTransportMelding:
                this.uploadFileType = fileTypes.GwExtraFilesGtmEdit;
                this.filetypes = [
                    fileTypes.GwExtraFilesGtmEdit
                ];
                break;
            case DocumentTypes.GrondVerzetToelating:
                this.uploadFileType = fileTypes.GwExtraFilesBbrEdit;
                this.filetypes = [
                    fileTypes.GwExtraFilesBbrEdit,
                    fileTypes.GwExtraFilesBbrEditFinaal,
                    fileTypes.UserUploadOntvangstVerklaring,
                    fileTypes.UserOnlineFilledOntvangstVerklaring,
                    fileTypes.MailTransportVerklaring
                ];
                break;
            case DocumentTypes.Klant:
                this.uploadFileType = fileTypes.GwExtraFilesKlant;
                this.filetypes = [
                    fileTypes.KlantContract,
                    fileTypes.GwExtraFilesKlant
                ];
                break;
            case DocumentTypes.KleineWerken:
                const filetypes: fileTypes[] = [
                    fileTypes.MailVervoerDocumentKW,
                    fileTypes.MailKleineWervenMelding
                ]
                this.httpFile.ListWithoutBlobMultipleTypes(filetypes, this.id).toPromise().then((files: IFile[]) => {
                    if (files != null && files.length > 0) {
                        this.userFiles = [...files];
                    }
                });

                break;
            case DocumentTypes.TechnischVerslag:
                this.uploadFileType = fileTypes.GwExtraFilesTv;
                this.filetypes = [
                    fileTypes.TechnischVerslag,
                    fileTypes.GwExtraFilesTv,
                    fileTypes.GwMailConformNietConformVerklaring
                ];
                break;
            default:
                return;
        }
        this.httpFile.multipleListFilesByTypeAndDocument(this.filetypes, this.id).toPromise()
            .then((files: IFile[]) => {
                if (files != null && files.length > 0) {
                    this.userFiles = [...files];
                }
                this.isLoading = false;
            });
    }

    showFileWithId(id: number) {
        this.httpFile.LoadFileWithoutUserCheck(id).toPromise()
            .then((response: any) => {
                this.openFile(response);
            })
            .catch(_ => {
                this.showErrorToast("Fout bij het laden van de files");
            });
    }

    // file-upload handlers
    queueCountChanged(queueLength: number) {
        this.uploadQueueCount = queueLength;
    }

    filesUploaded(fileIDs: number[]) {
        this.uploadedIDs = [...fileIDs];
        // emit the uploaded IDs !!
        this.uploadingFiles.emit(this.uploadedIDs);
        this.uploadStatus = "selection";
    }

    upload() {
        this.uploadedIDs.length = 0;
        this.uploadStatus = "upload";
    }
}

export enum DocumentTypes {
    None = "None",
    AanvraagLRMP = "AanvraagLRMP",
    BodemBeheerRapport = "BodemBeheerRapport",
    GrondTransportMelding = "GrondTransportMelding",
    GrondVerzetToelating = "GrondVerzetToelating",
    Klant = "Klant",
    KleineWerken = "KleineWerken",
    TechnischVerslag = "TechnischVerslag"
}