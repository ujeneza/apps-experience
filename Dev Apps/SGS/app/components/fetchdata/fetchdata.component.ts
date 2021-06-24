import { Component, Inject } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { AuthenticationService } from "../services/authentication.service";
import { LoadingAnimationService } from "../services/loading-animation.service";
import { GeneralScripts, SimpleMail, FullMail, MailAttachment } from "../scripts/general.scripts";

@Component({
    selector: "fetchdata",
    templateUrl: "./fetchdata.component.html"
})
export class FetchDataComponent extends GeneralScripts {
    public forecasts: WeatherForecast[];
    public jwtToken = "";
    constructor(private http: HttpClient, @Inject("BASE_URL") private baseUrl: string, private _authenticationService: AuthenticationService, private _loadingAnimationService: LoadingAnimationService) {
        super(null);
        http.get(baseUrl + "api/SampleData/weatherForecasts").subscribe(result => {
            this.forecasts = <WeatherForecast[]>result;
        }, error => console.error(error));
    }

    testSimpleMail() {
        var mail = new SimpleMail;
        mail.to = "jurgen.mange@sgs.com";
        mail.subject = "test subject";
        mail.body = "test body";

        const headers = new HttpHeaders().set("content-type", "application/json");

        this.http.post(this.baseUrl + "api/Mail/SendSimple", mail, { headers })
            .subscribe(mailId => {
                console.log("SendSimple: " + mailId);
            },
            error => {
                this.showErrorToast("SendSimple error occurred");
            });
    }

    testFullMail() {
        var attachment1 = new MailAttachment()
        attachment1.displayName = "file1";
        attachment1.file = [116, 101, 115, 116, 32, 102, 105, 108, 101, 32, 49];

        var attachment2 = new MailAttachment()
        attachment2.displayName = "file2";
        attachment2.file = [116, 101, 115, 116, 32, 102, 105, 108, 101, 32, 50];

        var mail = new FullMail;
        mail.to = "jurgen.mange@sgs.com";
        mail.subject = "test subject";
        mail.body = "test body";
        mail.cc = "cc";
        mail.bcc = "bcc";
        mail.replyTo = "reply to";
        mail.isBodyHtml = false;
        mail.attachments = [attachment1, attachment2];

        const headers = new HttpHeaders().set("content-type", "application/json");

        this.http.post(this.baseUrl + "api/Mail/SendFull", mail, { headers })
            .subscribe(mailId => {
                console.log("SendFull: " + mailId);
            },
            error => {
                this.showErrorToast("SendSimple error occurred");
            });
    }

    gettokenString() {
        let Params = new HttpParams();
        Params = Params.append("username", "xxx");
        Params = Params.append("password", "yyy");

        this.http.get(this.baseUrl + "api/Authentication/LogInString", { params: Params, responseType: "text" }).subscribe(result => {
            this.jwtToken = result;
        },
            error => console.error(error));
    }
    gettoken() {
        let Params = new HttpParams();
        Params = Params.append("username", "xxx222");
        Params = Params.append("password", "yyy333");

        this.http.get(this.baseUrl + "api/Authentication/login", { params: Params }).subscribe(result => {
            var data = result as LoginData;
            this.jwtToken = data.userName + data.token;
        },
            error => console.error(error));
    }

    gettokenService() {

    }

    testclaim() {
        this.http.get(this.baseUrl + "api/Authentication/TestClaim", { responseType: "text" }).subscribe(result => {
            console.log(result);
        },
            error => console.error(error));
    }

    url:string = "wwww.google.be";
    streamPdf() {
        let Params = new HttpParams();
        Params = Params.append("FileId", "9619");

        this.http.get(this.baseUrl + "api/Files/ShowFileBlob2", { responseType: "blob", observe: "response", params: Params })
            .subscribe((response) => {

                console.log(response);
                console.log(response.headers.get("content-disposition"));

                if (!(window.navigator && window.navigator.msSaveOrOpenBlob)) {
                    const objectUrl = URL.createObjectURL(response.body);
                    //window.open(objectUrl);
                    this.url = objectUrl;
                    URL.revokeObjectURL(objectUrl); // cleanup memory
                    return;
                }



                var filename = "";
                var disposition = response.headers.get("content-disposition");
                if (disposition && disposition.indexOf('inline') !== -1) {
                    var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                    var matches = filenameRegex.exec(disposition);
                    if (matches != null && matches[1]) {
                        filename = matches[1].replace(/['"]/g, '');
                    }
                }
                if (filename === "")
                    filename = "file";

                window.navigator.msSaveOrOpenBlob(response.body, filename);
            });
    }

    gettokenStringService() {
        
    }
    //gettokenService() {
    //    this._authenticationService.gettoken();
    //}
    showanimation() { this._loadingAnimationService.showLoading(); }
    hideanimation() { this._loadingAnimationService.hideLoading(); }
}

interface WeatherForecast {
    temperatureC: number;
    aaaaaaaaaaaaaaaaaaaaadateFormatted: string;
    temperatureF: number;
    summary: string;
}


interface LoginData {
    userName: string;
    token: string;
}
