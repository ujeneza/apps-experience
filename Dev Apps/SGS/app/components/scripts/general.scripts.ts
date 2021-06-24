import { IndividualConfig, ToastrService } from "ngx-toastr";
import { HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { saveAs } from "file-saver";

export class GeneralScripts {
 
    constructor(private readonly toastrService: ToastrService | null) {        
    }

    isNullOrUndefined(input: string | null): boolean {
        if (input == null)
            return true;
        if (input == undefined)
            return true;

        return false;
    }

    // http://jsfiddle.net/are207L0/1/
    isNullOrWhitespace(input: any | null): boolean {
        if (!input)
            return true;
        if (this.isNumber(input))
            return false;
        if (input.getYear) {
            return false;
        }
        if (input.hasOwnProperty("value")) {//fix for initially empty dropdowns in DottedBorderBelowDirective
            return (!input.value.toString().trim());
        }
        return !input.toString().trim();
    }

    isNumber(input: any): boolean {
        if (!input)
            return false;

        return (typeof input === "number");
    }


    dateToString(dateToconvert: Date | null): string {
        if (dateToconvert === null)
            return "";

        const date = new Date(dateToconvert);
        const dd = (date.getDate() < 10 ? "0" : "") + date.getDate();
        const mm = ((date.getMonth() + 1) < 10 ? "0" : "") + (date.getMonth() + 1);
        const yyyy = date.getFullYear();

        return dd + "/" + mm + "/" + yyyy;
    }

    stringToDate(initialDate: string) {
        const pattern = new RegExp(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/)
        if (pattern.test(initialDate)) {
            if (initialDate) {
                const date1 = initialDate.split("/");
                const newDate = date1[1] + '/' + date1[0] + '/' + date1[2];
                const date = new Date(newDate);
                return date;
            } else {
                return null
            }
        } else {
            return initialDate;
        }
    }

    public openFile(response: HttpResponse<Blob>) {
        let fn: string = "file";
        try {
            const a: string | null = response.headers.get("Content-Disposition");
            if (a) { fn = a.split(";")[1].split("=")[1] }
        } catch (e) { }
        saveAs(response.body, fn);
    }

    /////////////////////////////////////////////////
    // error handling
    /////////////////////////////////////////////////
    handleError(errorObject: any, prefix : string = "") {
        const error = errorObject as HttpErrorResponse;
        if (error === null || error === undefined) {
            this.showErrorToast("Er is een fout opgetreden bij de communicatie met de api");
            return;
        }
        if (error.status === 0) {
            this.showErrorToast("Er is een fout opgetreden bij de communicatie met de api");
            return;
        }

        if (error.status === 401) {
            this.showErrorToast("U bent niet (meer) ingelogged of uw sessie is verlopen, gelieve opnieuw in te loggen");
            return;
        }

        if (error.status === 403) {
            this.showErrorToast("U heeft geen rechten tot deze functie");
            return;
        }

        let message = (error.error === null || error.error === undefined) ? error.message : error.error;
        if (prefix !== "")
            message = prefix + message;

        this.showErrorToast(message);
    }


    /////////////////////////////////////////////////
    // toastr
    /////////////////////////////////////////////////
    public showErrorToast(message: string): void {
        if (this.toastrService != null)
            this.toastrService.error(message, "", this.toastrErrorConfig);
    }
    public showWarningToast(message: string): void {
        if (this.toastrService != null)
            this.toastrService.warning(message, "", this.toastrWarningConfig);
    }
    public showWarningToastWithoutTimeout(message: string): void {
        if (this.toastrService != null) {
            const config = this.toastrWarningConfig;
            config.timeOut = 0;
            this.toastrService.warning(message, "", this.toastrWarningConfig);
        }        
    }
    public showInfoToast(message: string): void {
        if (this.toastrService != null)
            this.toastrService.info(message, "", this.toastrInfoConfig);
    }
    public showSuccesToast(message: string): void {
        if (this.toastrService != null)
            this.toastrService.success(message, "", this.toastrSuccessConfig);
    }

    // toastr config
    public toastrErrorConfig = <IndividualConfig>{
        timeOut: 0,
        extendedTimeOut: 0,
        closeButton: true,
        progressBar: false,
        enableHtml: true
    };

    public toastrWarningConfig = <IndividualConfig>(({
        timeOut: 10000,
        extendedTimeOut: 0,
        closeButton: true,
        progressBar: true,
        progressAnimation: "increasing",
        enableHtml: true
    }) as any);

    public toastrInfoConfig = <IndividualConfig>(({
        timeOut: 4000,
        extendedTimeOut: 2000,
        closeButton: true,
        progressBar: true,
        progressAnimation: "increasing",
        enableHtml: true
    }) as any);

    public toastrSuccessConfig = <IndividualConfig>(({
        timeOut: 4000,
        extendedTimeOut: 0,
        closeButton: true,
        progressBar: true,
        progressAnimation: "increasing",
        enableHtml: true
    }) as any);
}

export class SimpleMail {
    from: string;
    to: string;
    subject: string;
    body: string;
}
export class FullMail extends SimpleMail {
    cc: string;
    bcc: string;
    replyTo: string;
    isBodyHtml: boolean;
    attachments: MailAttachment[];
    // attachments: number[]
    //  attachments: MailAttachment[]
}

export class MailAttachment {
    displayName: string;
    file: number[];
}