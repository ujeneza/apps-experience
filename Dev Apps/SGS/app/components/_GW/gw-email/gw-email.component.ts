import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { GeneralScripts, FullMail, SimpleMail } from "../../scripts/general.scripts";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpFileService } from "../../services/http-file.service";
import { HttpKlantService } from "../../services/http-klant.service";
import { AuthenticationService } from "../../services/authentication.service";
import { DatePipe } from "@angular/common";
import { DomSanitizer } from "@angular/platform-browser";
import { fileTypes } from "../../services/http-file.service";
import { IFile } from "../../scripts/interfaces.scripts";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { BsLocaleService } from "ngx-bootstrap";
import { HttpMailService } from "../../services/http-mail.service";
import { ISgsFullMail, ISgsDossierBeheerder, ISgsTvMail, ISgsKlantMail, ISgsGtmMail, ISgGvtMail, IsgMailDataShared } from "../../scripts/sgsInterfaces.scripts";
import { HttpDossierService } from "../../services/http-dossier.service";
import { HttpGTMService } from "../../services/http-gtm.service";
import { EventListenerService } from "../../services/event-listener.service";
import { HttpTVService } from "../../services/http-tv.service";


@Component({
    selector: "gw-email",
    templateUrl: "./gw-email.component.html",
    styleUrls: ["./gw-email.component.css"],
    providers: [DatePipe]
})

export class gwEmailComponent extends GeneralScripts implements OnInit {

    emailForm: FormGroup;

    // email data
    parentId: number;
    uploadType: fileTypes = fileTypes.GwMailExtraAttachment;
    pageType: string;
    action: string;
    mailId: number;
    mailFormatType: string ="";
    fileId = -1;
    data: FullMail;
    mailData: ISgsFullMail;


    canHiddenDatum = false;
    canHiddenUpload = false;


    // upload documents
    private uploadedIDs: number[] = [];
    uploadStatus: string = "selection";
    uploadQueueCount: number = 0;


    // mail generation

    newLine = "\r\n";
    doubleLines = "\r\n \r\n";
    tripleLines = "\r\n \r\n \r\n";
    aanhef = "Geachte Heer, Mevrouw";
    groeten = "Met vriendelijke groeten," + this.doubleLines + "Grondwijzer vzw";

    // validation
    isConfirmiteit: boolean = false;



    constructor(
        private readonly fb: FormBuilder,
        private readonly _toastr: ToastrService,
        private readonly httpFile: HttpFileService,
        private readonly httpMail: HttpMailService,
        private readonly httpDossier: HttpDossierService,
        private readonly httpGtm: HttpGTMService,
        private readonly httpTv: HttpTVService,
        private readonly eventListenerService: EventListenerService,
        private httpKlant: HttpKlantService,
        private readonly sanitizer: DomSanitizer,
        private readonly router: Router,
        private readonly route: ActivatedRoute,
        private readonly datePipe: DatePipe,
        private readonly localeService: BsLocaleService,
        private readonly auth: AuthenticationService) {
        super(_toastr);


    }

    ngOnInit(): void {
        const snapshot = this.route.snapshot;
        if (snapshot.params["action"]) this.action = snapshot.params["action"];
        if (snapshot.params["id"]) this.parentId = +snapshot.params["id"];
        if (snapshot.params["mailId"]) this.mailId = snapshot.params["mailId"];
        if (snapshot.params["mailFormatType"]) this.mailFormatType = snapshot.params["mailFormatType"];

        if (snapshot.params["type"]) this.pageType =snapshot.params["type"];

        this.localeService.use("bootstrap-locale-nlbe");

        this.formOnInit();

    }

    formOnInit() {
        this.initialiseForm();
        this.loadEntity();

    }

    initialiseForm() {
        this.emailForm = this.fb.group({
            id: [this.parentId],
            type: [this.pageType],
            from: ["", [Validators.required, Validators.pattern("^([\\w+-.%]+@[\\w-.]+\\.[A-Za-z]{2,4};?)+$")]],
            to: ["", [Validators.required, Validators.pattern("^([\\w+-.%]+@[\\w-.]+\\.[A-Za-z]{2,4};?)+$")]],
            cc: ["", [Validators.pattern("^([\\w+-.%]+@[\\w-.]+\\.[A-Za-z]{2,4};?)+$")]],
            subject: ["", [Validators.required]],
            body: [""],
            datum: [{ value: "", disabled: true }],
            uploadedIDs: []
        });

    }

    // load data



    loadEntity() {
        if (this.action === "view") {
            // load email ID
            this.canHiddenDatum = true;
            this.canHiddenUpload = true;
            this.emailForm.disable();

            this.httpMail.sgsGetMailById(this.mailId).toPromise().then((response: ISgsFullMail) => {
                this.mailData = response;
                this.emailForm.patchValue({
                    from: response.dossierBeheerder,
                    to: response.to,
                    cc: response.cc,
                    datum: this.dateToString(response.datum),
                    subject: response.subject,
                    body: response.body,
                });
            }).catch(_ => {
                this.showErrorToast("Fout bij het laden van de mail");
            });


        } else {
            this.emailForm.get("from").disable();
            // get logged user mail for the field From
            this.httpDossier.sgsMailUserLoggedIn().toPromise()
                .then((response: any) => {
                    this.emailForm.patchValue({
                        from: response.email,
                    });
                })
                .catch(_ => {
                    this.showErrorToast("Fout bij het laden van de mail");
                });

            // data for other fields
            this.httpMail.sgsGetMailData(this.parentId, this.pageType).toPromise()
                .then((response: any) => {
                    this.mailGenerator(response);
                })
                .catch(_ => {
                    this.mailGenerator(null);
                });

            this.canHiddenDatum = false;
            this.canHiddenUpload = false;
        }
    }


    // generate default emails
    mailGenerator(data: any) {
        switch (this.pageType) {
            case "gwTvEdit":
                (this.mailFormatType === "comformiteit") ? this.generaTvEmail(data) : this.generaTvNewEmail(data);
                break;
            case "gwKlantEdit":
                (this.mailFormatType === "paswoord") ? this.generateKlantMail(data) : this.generateKlantNewMail(data);
                break;
            case "gwGtmEdit":
                this.generateGtmMail(data);
                // this.generateGtmNewMail(data);
                break;
            case "gwGvtEdit":
                this.generateVerklaringAfnemerMail(data);
                // this.generaGvtNewEmail(data);
                //  this.generateGvtMail(data);
                break;
            case "gwPuinLmrpEdit":
                this.generatePuinNewMail(data);
                // this.generatePuinMail(data);
                break;
            case "gwKwEdit":
                this.generateKwMail(data);
                break;
            default:
                break;
        }

    }

    generaTvNewEmail(data: ISgsTvMail) {
        const body = this.aanhef + this.doubleLines + "" + this.tripleLines + this.groeten;
        const mailBody: SimpleMail = {
            to: (data) ? data.klantContactEmail : "",
            subject: "Technisch Verslag " + this.parentId,
            body: body
        } as SimpleMail;
        this.patchMailData(mailBody);
    };

    generaTvEmail(data: ISgsTvMail) {
        const conformVerklaring =
            (data.statusID === 3) ? "iet-conformverklaring" :
                (data.statusID === 4) ? "Conformiteitsverklaring" :
                    "Technisch Verslag ";


        const content =
            this.doubleLines
            + "Hierbij vindt u het resultaat van de beoordeling van het door u overgemaakte technisch verslag met uw kenmerk "
            + data.factuurReferentieKlant
            + ", betreffende de onderzoekslocatie: " + this.doubleLines
            + data.titel2 + " " + this.newLine
            + data.titel3 + this.doubleLines
            + "Het Technisch Verslag werd door Grondwijzer vzw beoordeeld als zijnde " + this.newLine
            + "voldoende om de conformiteit van de uit te graven bodem met de voorwaarden voor het beoogde gebruik te kunnen attesteren." + this.doubleLines
            + "De " + conformVerklaring + " is bijgevoegd als attachment in deze e-mail." + this.doubleLines
            + "Wij vertrouwen erop u hiermee voldoende te hebben geïnformeerd."
            + this.tripleLines;

        const body = this.aanhef + content + this.groeten;

        const mailBody: SimpleMail = {
            to: data.klantContactEmail,
            subject: conformVerklaring + " " + this.parentId,
            body: body
        } as SimpleMail;
        this.patchMailData(mailBody);
    };

    generaGvtNewEmail(data: ISgGvtMail) {
        const content = "";
        const body = this.aanhef + content + this.groeten;
        const mailBody: SimpleMail = {
            to: data.klantContactEmail,
            subject: "Technisch Verslag " + this.parentId,
            body: body
        } as SimpleMail;
        this.patchMailData(mailBody);
    }

    generateVerklaringAfnemerMail(data: ISgGvtMail) {
        const content = this.doubleLines
            + "De locatie waar de grond wordt aangebracht die u wil uitgraven, kan niet worden verduidelijkt met behulp van een" + this.newLine
        + " aanvulplan." + this.doubleLines
        + "Wij zenden u in plaats daarvan een afnemersverklaring die aan ons dient te worden overgemaakt, " + this.newLine
        + "ondertekend door de ontvanger van de grond." + this.doubleLines
        + "Bijkomend vragen wij een kopie van de milieuvergunning of bodemsaneringsproject (indien beschikbaar) en een " + this.newLine
        +  "overzichtsplan van het terrein." + this.doubleLines
        + "Na ontvangst van de nodige documenten zal uw aanvraag door ons worden behandeld." + this.doubleLines
        +  "Indien u meer informatie wenst, kan u uiteraard met ons contact opnemen."
            + this.doubleLines

        const body = this.aanhef + content + this.groeten;

        const mailBody: SimpleMail = {
            to: data.klantContactEmail,
            subject: "Afnemersverklaring ivm.goedkeuring bestemming/transport " + this.parentId,
            body: body
        } as SimpleMail;
        this.patchMailData(mailBody);

    }

    generateGvtMail(data: ISgGvtMail) {
        let content = null;
        let subject = null;
        const bestemmingAdres = (data.bestemmingsAardID !== 1) ? data.afzetAdres1 : data.bestemmingsBeschrijving + ", " + data.afzetAdres1
        const dechets = (data.bestemmingsAardID === 1) ? " en een situatieschets" : null;
        const binnenOfBuitenKwz = (data.kadastraleWerkzone === 1) ? " binnen de kadastrale werkzone" :
            (data.kadastraleWerkzone === 2) ? " buiten de kadastrale werkzone" :
                "";

        if (data.bBRStatusID === 2) {

            subject = "Weigering Transport " + this.parentId;
            content = "Uw aanvraag voor een Bodembeheerrapport is bij Grondwijzer geregistreerd."
                + "Op basis van de aan ons verstrekte gegevens en onze evaluatie is gebleken dat de betreffende uitgegraven grond in het kader van Vlarebo niet kan worden toegepast op de door U aangegeven bestemming." + this.newLine;
            + "Op basis van deze evaluatie sturen wij U een "
                + '"Weigering Grondverzettoelating"'
                + " met daarin opgenomen de reden(en) van de weigering."
        }
        else if (data.bBRStatusID === 3) {
            subject = "Grondverzettoelating " + this.parentId;
            content = '"Uw aanvraag voor een "' + '"Grondverzettoelating"' + this.newLine
                + " met uw referentie " + '"' + data.klantKenmerk + '"' + this.newLine
                + " en bestemming " + bestemmingAdres + " " + data.afzetPlaats + " is bij Grondwijzer geregistreerd." + this.doubleLines
                + "Op basis van de aan ons verstrekte gegevens en onze evaluatie is gebleken dat " + this.newLine
                + "de betreffende uitgegraven grond in het kader van Vlarebo kan worden toegepast " + this.newLine
                + "op de door U aangegeven bestemming." + this.newLine
                + "Op basis van deze evaluatie sturen wij u een " + '"Grondverzettoelating"' + this.newLine
                + "en de benodigde transportdocumenten." + this.doubleLines
                + "Voor het vervoer voor eigen rekening wordt gebruik gemaakt van het door " + this.newLine
                + "Grondwijzer verschafte vervoersdocument. Bij " + this.newLine
                + "vervoer voor derden wordt gebruik gemaakt van de officiële vrachtbrieven (CMR e.a.)." + this.newLine
                + "Deze documenten worden bewaard gedurende een termijn van 5 jaar en op eenvoudige vraag van Grondwijzer VZW aan Grondwijzer " + this.newLine
                + "VZW overgemaakt." + this.doubleLines
                + "Na het beëindigen van alle transporten dient u ons nog de ingevulde en ondertekende ontvangstverklaring"
                + dechets + this.doubleLines
                + "U vindt in bijlage de Grondverzettoelating in pdf-formaat."
                + this.doubleLines;
        }
        else if (data.bBRStatusID === 4) {
            subject = "ontvangstverklaring " + this.parentId;
            content = "Betreft:" + " \t" + "Beëindiging van transporten" + "\t" + "Goedkeuring Transport" + "\t" + "met nummer " + this.parentId + this.doubleLines
                + "Wij hebben geconstateerd dat de transporten die hebben plaatsgevonden onder " + this.newLine
                + "bovenvermelde " + '"Goedkeuring voor Transport"' + "door u officieel zijn beëindigd. " + this.newLine
                + "Om u vervolgens het definitieve bodembeheerrapport te kunnen toesturen hebben wij " + this.newLine
                + "van u nog een ingevulde ontvangstverklaring en bijbehorende situatieschets nodig. Een model " + this.newLine
                + "ontvangstverklaring wordt u meegestuurd met dit bericht. Gelieve die verklaring verder in te vullen " + this.newLine
                + "en de juiste hoeveelheden die in werkelijkheid zijn vervoerd hierop aan te geven. " + this.newLine
                + "Zodra wij uw stukken hebben ontvangen, zullen wij u – onder voorbehoud van een positieve beoordeling – " + this.newLine
                + "u zo spoedig mogelijk het aangevraagde bodembeheerrapport toesturen."
                + this.doubleLines;
        }
        else if (data.bBRStatusID === 5) {
            subject = "Weigering Bodembeheer Rapport " + this.parentId;
            content = "Helaas kunnnen wij niet overgaan tot het afgeven van het finale bodembeheerrapport met onze referentie" + '"' + this.parentId + '".' + this.doubleLines
                + "Voor meer details verwijzen wij U naar het bijgevoegde document." + this.doubleLines
                + "Zijn er vragen of opmerkingen dan kunt U contact opnemen met ondergetekende.";
        }
        else if (data.bBRStatusID === 6) {

            subject = "Goedkeuring Bodembeheer Rapport " + this.parentId;
            content = this.doubleLines
                + "Bijgaand doe ik U hierbij het officiële bodembeheerrapport met onze referentie - " + this.parentId + "-"
                + '" en uw referentie "' + data.klantKenmerk + " " + binnenOfBuitenKwz + ", "
                + bestemmingAdres + ", " + data.afzetPlaats + " toekomen." + this.doubleLines
                + "Zijn er vragen of opmerkingen dan kunt U contact opnemen met ondergetekende." + this.doubleLines
                + "Wij danken U voor het ons gestelde vertrouwen en zijn U bij een volgende gelegenheid graag weer van dienst."
                + this.doubleLines
                ;
        }


        const body = this.aanhef + content + this.groeten;

        const mailData: SimpleMail = {
            to: data.klantContactEmail,
            subject: subject,
            body: body
        } as SimpleMail;
        this.patchMailData(mailData);
    }

    generateKlantNewMail(data: ISgsKlantMail) {
        // in old code: "generateFreeMail()"
        const body = this.aanhef + this.doubleLines + "" + this.tripleLines + this.groeten;
        const mailBody: SimpleMail = {
            to: data.email,
            subject: "",
            body: body
        } as SimpleMail;
        this.patchMailData(mailBody);

    }

    generateKlantMail(data: ISgsKlantMail) {
        let registratie = "";
        if (data.registratieCode >= 13 && data.registratieCode <= 15 && data.klantStatusID === 5) {
            registratie = "  Vanaf nu bent u kandidaat R-TOP. Na een positief verloop van de acceptatieprocedure en een locatiebezoek wordt u actief gezet in ons systeem kan gebruik worden gemaakt van onze diensten.";
        } else if (data.registratieCode === 16 && data.klantStatusID === 6) {
            registratie = "  Vanaf nu bent u kandidaat TOP en/of CGR voor een Grondwijzer erkenning. Na en positief verloop van de procedure in  de toelatingsperiode zal de officiële erkenning als GW-TOP vzw volgen. Bent u reeds in bezit van een erkenning dan wordt een versnelde procedure gevolgd.";
        } else if (data.registratieCode === 17 && data.klantStatusID === 6) {
            registratie = "  Vanaf nu bent u kandidaat TOP en/of CGR voor een Grondwijzer erkenning. Na en positief verloop van de procedure in  de toelatingsperiode zal de officiële erkenning van als GW-TOP en die van de Minister volgen. De erkenning van de Minister verkrijgt u  na een  positief advies van OVAM. Bent u reeds in bezit van een erkenning dan wordt een versnelde procedure gevolgd.";
        } else if (data.registratieCode < 0) {
            registratie = "  Vanaf nu bent u bij Grondwijzer geregistreerd als DOP.";

        }
        const content = this.doubleLines
            + "Wij hebben uw ondertekend contract ontvangen, waarvoor onze dank."
            + registratie + this.newLine
            + "Uw gebruikersnaam en paswoord voor de Grondwijzer website zijn:" + this.doubleLines
            + "Gebruikersnaam: " + data.login + this.newLine
            + "Paswoord: " + data.paswoord + this.doubleLines
            + "Met uw gebruikersnaam en paswoord kunt u inloggen op onze website en vrij gebruik maken van onze diensten. Zo kunt u alle handelingen elektronisch verrichten en 24 uur per dag de stand van zaken van uw lopende projecten raadplegen." + this.newLine
            + "Uiteraard kunt u ons ook steeds contacteren mocht u vragen of opmerkingen hebben." + this.newLine
            + this.doubleLines;
        const body = this.aanhef + content + this.groeten;
        const mailBody: SimpleMail = {
            to: data.email,
            subject: "Grondwijzer paswoord",
            body: body
        } as SimpleMail;
        this.patchMailData(mailBody);
    }

    generateGtmNewMail(data: ISgsGtmMail) {
        const body = this.aanhef + this.doubleLines + "" + this.tripleLines + this.groeten;
        const mailBody: SimpleMail = {
            to: data.klantContactEmail,
            subject: "GrondTransportMelding " + this.parentId,
            body: body
        } as SimpleMail;
        this.patchMailData(mailBody);
    }

    generateGtmMail(data: ISgsGtmMail) {
        let hoevelheid = 0;
        this.httpGtm.gwGTMWerkelijkeHoeveelheid(this.parentId).toPromise()
            .then((response) => {
                hoevelheid = response;
            })
            .catch(_ => {
                this.showErrorToast("Fout bij het laden van de GTM hoevelheid");
            });

        const content = this.doubleLines
            + "Via deze mail informeren wij u dat wij de verklaring afnemer hebben ontvangen met daarop de werkelijk afgevoerde hoeveelheid bodem." + this.newLine
            + "Grondwijzer heeft voor dit dossier een totale hoeveelheid afgevoerde bodem geregistreerd van " + hoevelheid + " m³." + this.newLine
            + "De registratie van deze Grondtransportmelding bij Grondwijzer vzw is hiermee compleet. " + this.newLine
            + this.doubleLines;
        const body = this.aanhef + content + this.groeten;
        const mailBody: SimpleMail = {
            to: data.klantContactEmail,
            subject: "Grond Transport Melding " + this.parentId,
            body: body
        } as SimpleMail;
        this.patchMailData(mailBody);
    }

    generatePuinNewMail(data: any) {
        const body = this.aanhef + this.doubleLines + "" + this.tripleLines + this.groeten;
        const mailBody: SimpleMail = {
            to: data.klantContactEmail,
            subject: "Puin Lmrp " + this.parentId,
            body: body
        } as SimpleMail;
        this.patchMailData(mailBody);
    }

    generatePuinMail(data: any) {

    }

    generateKwMail(data: any) {

    }

    patchMailData(data: SimpleMail) {
        this.emailForm.patchValue({
            to: data.to,
            cc: "",
            subject: data.subject,
            body: data.body,
        });
    }


    // file-upload handlers
    queueCountChanged(queueLength: number) {
        this.uploadQueueCount = queueLength;
    }

    filesUploaded(fileIDs: number[]) {
        this.uploadedIDs = [...fileIDs];
        this.setSharedData();
    }


    // send data

    send() {
        // Upload Files (if any)
        if (this.uploadQueueCount > 0) {
            // Initialise Array & Upload the Files
            this.uploadedIDs.length = 0;
            this.uploadStatus = "upload";
        }
        else {
            this.setSharedData();
        }
    }
    // share defaultData

    setSharedData() {
        if (this.uploadedIDs != null) {
            this.emailForm.patchValue({ uploadedIDs: this.uploadedIDs });
        }

        switch (this.pageType) {
            case "gwTvEdit":
                (this.mailFormatType === "comformiteit") ? this.saveTvComformiteitMail() : this.saveStandardMail();
                break;
            case "gwKlantEdit":
                this.saveStandardMail();
                break;
            case "gwGtmEdit":

                break;
            case "gwGvtEdit":

                break;
            case "gwPuinLmrpEdit":

                break;

            case "gwKwEdit":

                break;
            default:
                break;
        }

    }


    // file handler
    downloadFile(id: number) {
        this.httpFile.LoadFileWithoutUserCheck(id).toPromise()
            .then((response: any) => {
                this.openFile(response);
            })
            .catch(_ => {
                this.showErrorToast("Fout bij het laden van de files");
            });
    }

    back() {
        switch (this.pageType) {
            case "gwTvEdit":
                this.router.navigate(['/gw/tv-edit', this.parentId])
                break;
            case "gwKlantEdit":
                this.router.navigate(['/gw/klant-edit', this.parentId])
                break;
            case "gwGtmEdit":
                this.router.navigate(['/gw/gtm-edit', this.parentId])
                break;
            case "gwGvtEdit":
                this.router.navigate(['/gw/gvt-edit', this.parentId])
                break;
            case "gwPuinLmrpEdit":
                this.router.navigate(['/gw/puin-lmrp-edit', this.parentId])
                break;
            case "gwkwEdit":
                this.router.navigate(['/gw/kw-edit', this.parentId])
                break;
            default:
                break;
        }

    }

    // save http

    saveStandardMail() {
        this.httpMail.sgsSave(this.emailForm.value).toPromise()
            .then((response: any) => {
                this.showSuccesToast("Mail saved successfully");
                this.back();
            })
            .catch(_ => {
                this.showErrorToast("Fout bij het saving van het mail");

            });
    }

    saveTvComformiteitMail() {
        this.httpTv.sgsSaveComformiteitMail(this.emailForm.value).toPromise()
            .then((response: any) => {
                this.showSuccesToast("Mail saved successfully");
                this.back();
            })
            .catch(_ => {
                this.showErrorToast("Fout bij het saving van het  mail");

            });
    }

}

