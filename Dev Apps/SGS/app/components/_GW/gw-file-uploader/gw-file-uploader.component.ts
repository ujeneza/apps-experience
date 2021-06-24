import { Component, OnInit, Inject, Output, EventEmitter, Injector, Input } from "@angular/core";
import { GeneralScripts } from "../../scripts/general.scripts";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { appLabels } from "../../scripts/appLabels";
import { FileUploader, FileUploaderOptions, FileItem, ParsedResponseHeaders } from "ng2-file-upload";
import { HttpFileService } from "../../services/http-file.service";
import { AuthenticationService } from "../../services/authentication.service";

@Component({
    selector: "gw-file-uploader",
    templateUrl: "./gw-file-uploader.component.html",
    styleUrls: ["./gw-file-uploader.component.css"]
})
export class gwFileUploaderComponent extends GeneralScripts implements OnInit {
    @Input("status") set uplStatus(value: string) {
        if (this.FForm) {
            if (!(value === "upload" || value === "clean")) value = "selection";
            this.FForm.patchValue({ uploadStatus: value });
        }
    }
    @Input("fileType") uplType: string;
    @Input("hasSendButton") hasSendButton: boolean;
    @Input("fullWidth") fullWidth: boolean;
    @Output() uploaded = new EventEmitter<number[]>();
    @Output() inQueue = new EventEmitter<number>();
    @Output() moveToFinalDestinationSucceeded = new EventEmitter<boolean>();

    appLabels = appLabels;
    FForm: FormGroup;

    private uploadToTempApiUrl = this._baseUrl + "api/Files/UploadToTempTableAsync";

    col1: string = "col-sm-3";
    col2: string = "col-sm-5";

    // ng2-File-Upload related
    public uploader = new FileUploader({
        url: this.uploadToTempApiUrl,
        maxFileSize: appLabels.maxFileSize
    });
    public hasBaseDropZoneOver: boolean = false;
    public fileOverBase(e: any): void {
        this.hasBaseDropZoneOver = e;
    }
    private uploadedIDs: number[] = [];

    constructor(private readonly _httpFile: HttpFileService, @Inject("BASE_URL") private readonly _baseUrl: string, private readonly _injector: Injector, private readonly fb: FormBuilder, private readonly _toastr: ToastrService) {
        super(_toastr);
    }

    ngOnInit(): void {

        if (this.fullWidth) {
            this.col1 = "col-sm-4";
            this.col2 = "col-sm-7";
        }

        this.FForm = this.fb.group({
            uploadStatus: "selection"
        });

        // uploader does not pass through http interceptor, so you need to add the auth token to its header
        const auth = this._injector.get(AuthenticationService);
        const uplHeader: Array<{
            name: string;
            value: string;
        }> = [];
        uplHeader.push({ name: "Authorization", value: `Bearer ${auth.jwtToken}` });
        uplHeader.push({ name: "FileType", value: this.uplType });
        const uploadOptions = <FileUploaderOptions>{ headers: uplHeader };
        this.uploader.setOptions(uploadOptions);

        this.uploader.onErrorItem = (item, response, status, headers) => this.onErrorItem(item, response, status, headers);
        this.uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessItem(item, response, status, headers);
        this.uploader.onBeforeUploadItem = (file: any) => file.withCredentials = false;
        this.uploader.onAfterAddingFile = () => this.emitQueueLength();

        const statusElement = this.FForm.get("uploadStatus");
        if (statusElement) {
            statusElement.valueChanges.subscribe(value => {
                switch (value) {
                    case "upload":
                        this.uploader.uploadAll();
                        this.uploadedIDs = [];
                        break;
                    case "clean":
                        this.deleteUploadedFiles();
                        break;
                    case "selection":
                        break;
                }
            });
        }
    }

    emitQueueLength() {
        this.inQueue.emit(this.uploader.queue.length);
    }

    // ng2-file-upload response handler for each individual file's succeeded upload
    onSuccessItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
        const data = JSON.parse(response); //success server response
        this.uploadedIDs.push(data.uploadId);

        // only when the last async has completed send the form data
        if (this.uploadedIDs.length !== this.uploader.queue.length)
            return;

        const ids = [...this.uploadedIDs];

        this.uploaded.emit(ids);
    }

    // ng2-file-upload response handler for each individual file's failed upload
    onErrorItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
        this.uploader.cancelAll();
        this.uploader.clearQueue();
        this.deleteUploadedFiles();
        this.showWarningToast(response);
    }

    public deleteUploadedFiles() {
        if (this.uploadedIDs.length <= 0)
            return;

        this._httpFile.deleteUploadedFiles(JSON.stringify(this.uploadedIDs))
            .subscribe((response: any) => {
                this.uploadedIDs = [];
                this.uploader.clearQueue();
            });
    }

    public uploadFiles() {
        this.uploader.uploadAll();
        this.uploadedIDs = [];        
    }

    public clearQueue() {
        this.uploadedIDs = [];
        this.uploader.clearQueue();
        this.FForm.patchValue({ uploadStatus: "selection" });
    }

    public moveFilesToFinalLocation(documentId: number) {
        if (this.uploadedIDs.length <= 0)
            return;

        this._httpFile.moveFilesFromTempToFinalLocation(documentId, this.uploadedIDs)
            .toPromise()
            .then(() => {
                this.uploadedIDs = [];
                this.uploader.clearQueue();
                this.FForm.patchValue({ uploadStatus: "selection" });
                this.moveToFinalDestinationSucceeded.emit(true);
            })
            .catch(() => {
                this.uploadedIDs = [];
                this.uploader.clearQueue();
                this.FForm.patchValue({ uploadStatus: "selection" });
                this.moveToFinalDestinationSucceeded.emit(false);
            });
    }
}