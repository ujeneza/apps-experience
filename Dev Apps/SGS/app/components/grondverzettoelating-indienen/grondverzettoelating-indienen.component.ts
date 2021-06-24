import { Component, OnInit, Inject, ViewChild } from "@angular/core";
import { GeneralScripts } from "../scripts/general.scripts";
import { HttpBBRService } from "../services/http-bbr.service";
import { ToastrService } from "ngx-toastr";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, AbstractControl } from "@angular/forms";
import { appLabels } from "../scripts/appLabels";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { ITVVolume, IContactInfo, ITVDetail, IBBRBestInfo } from "../scripts/interfaces.scripts";
import { HttpTVService } from "../services/http-tv.service";
import { HttpTVZoneService } from "../services/http-tvzone.service";
import { BsLocaleService } from "ngx-bootstrap/datepicker";
import { HttpGTMService } from "../services/http-gtm.service";
import { HttpGVTService } from "../services/http-gvt.service";
import { DomSanitizer } from "@angular/platform-browser";
import { GeopuntScripts } from "../scripts/geopunt.scripts";

@Component({
    selector: "grondverzettoelating-indienen",
    templateUrl: "./grondverzettoelating-indienen.component.html",
    styleUrls: ["./grondverzettoelating-indienen.component.css"]
})
export class GrondverzettoelatingIndienenComponent extends GeneralScripts implements OnInit {
    appLabels = appLabels;

    // QueryString Parameters
    TypeId: number = 0;
    BestId: number = 0;
    TvId: number = 0;
    BestemmingsAardId: number = 0;
    OriginPage: string = '';

    // Upload Component
    uploadStatus: string = "selection";
    uploadQueueCount: number = 0;

    // Form & Form Validation
    GVTForm: FormGroup;
    tvVolumes: FormArray;
    klantemailValidationMessage: string = "";
    bestemailValidationMessage: string = "";

    GVTType: string = "";
    isContinued: boolean = false;
    is2008: boolean = false;
    isLokatieVisible: boolean = true;
    isKadastraleVisible: boolean = true;
    isLambertVisible: boolean = true;
    isGTMApproved: boolean = true;
    isTopIsBewerkt: boolean = false;
    isStudieNietNodig: boolean = true;
    isTVConform: boolean = false;
    herkomstIsSelectable: boolean = false;
    herkomstList: any[];
    toepassingenList: any[];
    @ViewChild(DatatableComponent) z_table: DatatableComponent;

    isLoadingTVVolumes: boolean = false;

    msgToepassing: string = "500 resterend";
    msgGebruik: string = "500 resterend";
    msgOpmerkingen: string = "750 resterend";

    constructor(
        private readonly httpBBR: HttpBBRService,
        private readonly httpGTM: HttpGTMService,
        private readonly httpGVT: HttpGVTService,
        private readonly httpTV: HttpTVService,
        private readonly httpZone: HttpTVZoneService,
        private readonly fb: FormBuilder,
        private readonly toastr: ToastrService,
        private readonly router: Router,
        private readonly localeService: BsLocaleService,
        private readonly route: ActivatedRoute,
        private readonly sanitizer: DomSanitizer) {
        super(toastr);
    }

    ngOnInit(): void {
        var snapshot = this.route.snapshot;

        if (snapshot.params["TypeId"]) this.TypeId = +snapshot.params["TypeId"];
        if (snapshot.params["BestId"]) this.BestId = +snapshot.params["BestId"];
        if (snapshot.queryParams["TvId"]) this.TvId = +snapshot.queryParams["TvId"];
        if (snapshot.queryParams["BestemmingsAardId"]) this.BestemmingsAardId = +snapshot.queryParams["BestemmingsAardId"];
        if (snapshot.queryParams["OP"]) this.OriginPage = snapshot.queryParams["OP"];

        // Needed configuration for the bsDatepicker to accept dd/MM/yyyy formatting
        this.localeService.use("bootstrap-locale-nlbe");

        this.GVTForm = this.fb.group({
            TechnischVerslagId: [null, [Validators.required, Validators.min(100000), Validators.max(999999)]],
            ImmediateRequest: [false],
            KlantContactAchterNaam: ["", [Validators.required, Validators.maxLength(50)]],
            KlantContactVoorNaam: ["", [Validators.required, Validators.maxLength(50)]],
            KlantContactTelefoon: ["", [Validators.required, Validators.maxLength(50)]],
            KlantContactEmail: ["", [Validators.required, Validators.pattern("^([\\w+-.%]+@[\\w-.]+\\.[A-Za-z]{2,4};?)+$"), Validators.maxLength(50)]],
            KlantKenmerk: ["", [Validators.required, Validators.maxLength(50)]],
            KlantHerkomstTop: [-1],
            KlantGTMId: [0],
            StartDatum: ["", [Validators.required]],
            BestemmingId: [this.BestId],
            BestemmingAardId: [this.BestemmingsAardId],
            BestemmingEigenaar: ["", [Validators.required, Validators.maxLength(50)]],
            BestemmingAdres1: ["", Validators.maxLength(100)],
            BestemmingAdres2: ["", Validators.maxLength(100)],
            BestemmingPostcode: ["", Validators.maxLength(10)],
            BestemmingGemeente: ["", Validators.maxLength(50)],
            BestemmingContactPersoon: ["", [Validators.required, Validators.maxLength(50)]],
            BestemmingTelefoon: ["", Validators.maxLength(50)],
            BestemmingEmail: ["", [Validators.pattern("^([\\w+-.%]+@[\\w-.]+\\.[A-Za-z]{2,4};?)+$"), Validators.maxLength(50)]],
            BestemmingExplAdres1: ["", Validators.maxLength(100)],
            BestemmingExplAdres2: ["", Validators.maxLength(100)],
            BestemmingExplPostcode: ["", Validators.maxLength(10)],
            BestemmingExplGemeente: ["", Validators.maxLength(50)],
            BestemmingKadGemeente: ["", Validators.maxLength(30)],
            BestemmingKadAfdNummer: [null],
            BestemmingKadSectie: ["", Validators.maxLength(1)],
            BestemmingKadNummers: ["", Validators.maxLength(50)],
            BestemmingLambertX: [null, [Validators.min(20000), Validators.max(280000)]],
            BestemmingLambertY: [null, [Validators.min(150000), Validators.max(250000)]],
            BestemmingToepassing: ["", [Validators.required, Validators.maxLength(500)]],
            BestemmingGebruik: ["", Validators.maxLength(500)],
            BestemmingOpmerkingen: ["", Validators.maxLength(750)],
            BestemmingBodemStudie: ["2", Validators.required],
            BestemmingBodemNaam: ["", Validators.maxLength(50)],
            BestemmingBodemRapport: ["", Validators.maxLength(50)],
            BestemmingBodemRappDatum: [""],
            KwzBinnenBuiten: [this.TypeId],
            FileUploadIDs: [],

            lockMultiSave: [false, Validators.pattern("false")],
            tvVolumes: this.fb.array([])
        });

        if (this.TvId > 0) {
            this.GVTForm.patchValue({
                TechnischVerslagId: this.TvId,
                ImmediateRequest: true
            });
        }

        this.tvVolumes = this.GVTForm.get("tvVolumes") as FormArray;

        switch (this.TypeId) {
            case 1:
                this.GVTType = "Hergebruik binnen de werf";
                // this.isLokatieVisible = false;
                this.isKadastraleVisible = false;
                this.isLambertVisible = false;
                break;
            case 2:
                this.GVTType = "Gebruik buiten de werf";
                break;
            case 4:
                this.GVTType = "Gebruik buiten de werf - Kleine Hoeveelheden";
                break;
            default:
                break;
        }

        this.initialiseValueChangeHandlers();

        if (this.GVTForm.controls.TechnischVerslagId.value !== "") {
            this.tvChanged();
        }

        this.loadContactInfo();
        if (this.BestId > 0) {
            this.loadBestemmingInfo();
        }
    }

    initialiseValueChangeHandlers() {

        this.GVTForm.controls.BestemmingExplAdres1.valueChanges.subscribe(e => {
            this.isBestemmingLocationValid();
        });
        this.GVTForm.controls.BestemmingExplPostcode.valueChanges.subscribe(e => {
            this.isBestemmingLocationValid();
        });
        this.GVTForm.controls.BestemmingExplGemeente.valueChanges.subscribe(e => {
            this.isBestemmingLocationValid();
        });


        this.GVTForm.controls.BestemmingKadGemeente.valueChanges.subscribe(e => {
            this.isBestemmingLocationValid();
        });
        this.GVTForm.controls.BestemmingKadAfdNummer.valueChanges.subscribe(e => {
            this.isBestemmingLocationValid();
        });
        this.GVTForm.controls.BestemmingKadSectie.valueChanges.subscribe(e => {
            this.isBestemmingLocationValid();
        });
        this.GVTForm.controls.BestemmingKadNummers.valueChanges.subscribe(e => {
            this.isBestemmingLocationValid();
        });


        this.GVTForm.controls.BestemmingLambertX.valueChanges.subscribe(e => {
            this.isBestemmingLocationValid();
        });
        this.GVTForm.controls.BestemmingLambertY.valueChanges.subscribe(e => {
            this.isBestemmingLocationValid();
        });


        this.GVTForm.controls.StartDatum.valueChanges.subscribe(e => {
            const today = new Date();
            const value = new Date(e);

            today.setHours(0, 0, 0, 0);
            value.setHours(0, 0, 0, 0);

            if (value < today)
                this.showWarningToastWithoutTimeout(appLabels.RegularisatieGVT);
        });



        if (this.GVTForm) {
            if (this.GVTForm.get("TechnischVerslagId")) {
                const tvIdFormControl = this.GVTForm.get("TechnischVerslagId");
                tvIdFormControl!.valueChanges.subscribe(value => this.tvChanged());
            }
        }

        const emailElement1 = this.GVTForm.get("KlantContactEmail");
        if (emailElement1) {
            emailElement1.valueChanges.debounceTime(1000).subscribe(value => {
                this.klantemailValidationMessage = "";
                if ((emailElement1.touched || emailElement1.dirty) && emailElement1.errors) {
                    if (emailElement1.errors.pattern)
                        this.klantemailValidationMessage = "- Emailadres Aanvrager is niet geldig.";
                }
            });
        }
        const emailElement2 = this.GVTForm.get("BestemmingEmail");
        if (emailElement2) {
            emailElement2.valueChanges.debounceTime(1000).subscribe(value => {
                this.bestemailValidationMessage = "";
                if ((emailElement2.touched || emailElement2.dirty) && emailElement2.errors) {
                    if (emailElement2.errors.pattern)
                        this.bestemailValidationMessage = "- Emailadres Eigenaar/Exploitant is niet geldig.";
                }
            });
        }

        const toepElement = this.GVTForm.get("BestemmingToepassing");
        if (toepElement) {
            toepElement.valueChanges.subscribe(value => this.msgToepassing = (500 - String(toepElement.value).length) + " resterend");
        }

        const gebrElement = this.GVTForm.get("BestemmingGebruik");
        if (gebrElement) {
            gebrElement.valueChanges.subscribe(value => this.msgGebruik = (500 - String(gebrElement.value).length) + " resterend");
        }

        const opmElement = this.GVTForm.get("BestemmingOpmerkingen");
        if (opmElement) {
            opmElement.valueChanges.subscribe(value => this.msgOpmerkingen = (750 - String(opmElement.value).length) + " resterend");
        }
    }

    loadContactInfo() {
        this.httpBBR.BestemmingContactInfo().toPromise()
            .then((info: IContactInfo) => {
                if (info != null && info != undefined) {
                    this.GVTForm.patchValue({
                        KlantContactAchterNaam: info.klantContactAchterNaam,
                        KlantContactVoorNaam: info.klantContactVoorNaam,
                        KlantContactTelefoon: info.klantContactTelefoon,
                        KlantContactEmail: info.klantContactEmail
                    });
                }
            });
    }

    loadBestemmingInfo() {
        this.httpBBR.BestemmingPocoEntity(this.BestId).toPromise()
            .then((info: IBBRBestInfo) => {
                if (info != null && info != undefined) {
                    this.GVTForm.patchValue({
                        BestemmingEigenaar: info.eigenaar,
                        BestemmingAdres1: info.adres1,
                        BestemmingAdres2: info.adres2,
                        BestemmingPostcode: info.postcode,
                        BestemmingGemeente: info.plaats,
                        BestemmingContactPersoon: info.contactPersoon,
                        BestemmingTelefoon: info.telefoon,
                        BestemmingEmail: info.email,
                        BestemmingExplAdres1: info.afzetAdres1,
                        BestemmingExplAdres2: info.afzetAdres2,
                        BestemmingExplPostcode: info.afzetPostcode,
                        BestemmingExplGemeente: info.afzetPlaats,
                        BestemmingKadGemeente: info.kadAfdeling,
                        BestemmingKadAfdNummer: info.kadAfdelingsNr,
                        BestemmingKadSectie: info.kadSectie,
                        BestemmingKadNummers: info.kadNummers,
                        BestemmingGebruik: info.gebruikTerrein,
                        BestemmingLambertX: info.lx1,
                        BestemmingLambertY: info.ly1
                    });
                }
            });
    }

    onTVSelected(id: number) {
        this.GVTForm.patchValue({ TechnischVerslagId: id });
    }

    tvChanged() {
        this.clearTVVolumes();
        this.herkomstList = [];
        this.GVTForm.patchValue({ KlantGTMId: "" });
        this.GVTForm.patchValue({ KlantHerkomstTop: "-1" });
        this.herkomstIsSelectable = false;
        this.isGTMApproved = true;

        const tvId = this.GVTForm.controls.TechnischVerslagId.value;
        if (tvId === "")
            return;

        const id = +tvId;
        if (id < 100000 || id > 999999)
            return;

        if (this.TypeId === 1) {
            this.httpTV.Detail(id).toPromise()
                .then((data: ITVDetail) => {
                    if (data != null && data != undefined) {
                        this.GVTForm.patchValue({
                            BestemmingExplAdres1: data.titel2,
                            BestemmingExplGemeente: data.titel3
                        });
                    }
                })
                .catch(error => {
                    this.GVTForm.controls.TechnischVerslagId.setErrors({ NotOwnTv: true, message: error.error });
                });
        }

        this.httpTV.IsTopCgrIsBewerkt(id).toPromise()
            .then((data: boolean) => {
                this.isTopIsBewerkt = data;
                this.herkomstIsSelectable = true;
            });
    }

    herkomstChanged() {
        let herkomst = this.GVTForm.controls.KlantHerkomstTop.value;
        if (herkomst === "-1") {
            this.herkomstList = [];
            this.clearTVVolumes();
        }
        this.GVTForm.patchValue({ KlantGTMId: "" });
        this.isGTMApproved = true;


        this.herkomstIsSelectable = true;

        if (herkomst === "1" && this.isTopIsBewerkt) {
            this.GVTForm.patchValue({ KlantHerkomstTop: "0" });
            herkomst = "0";
            this.herkomstIsSelectable = false;
        }

        const tvId = Number(this.GVTForm.controls.TechnischVerslagId.value);

        switch (herkomst) {
            case "0":
                this.herkomstList = [];
                this.checkIs2008(tvId);
                this.loadToepassingenList();
                this.loadTVVolumes(tvId, null);
                break;
            case "1":
                this.clearTVVolumes();
                this.loadHerkomstData(tvId);
                break;
        }
    }

    gtmChanged() {
        const gtmId = +this.GVTForm.controls.KlantGTMId.value;
        if (gtmId === 0) {
            this.clearTVVolumes();
            return;
        }

        this.httpGTM.isVerklaringAfnemerFilledOnline(gtmId).toPromise()
            .then((isVerklaringAfnemerFilledOnline: boolean) => {
                if (isVerklaringAfnemerFilledOnline) {
                    const tvId = Number(this.GVTForm.controls.TechnischVerslagId.value);
                    const gtmIdValue = this.GVTForm.controls.KlantGTMId.value;
                    const gtmId = (this.isNullOrWhitespace(gtmIdValue) || gtmIdValue === "") ? null : Number(gtmIdValue);
                    this.loadTVVolumes(tvId, gtmId);
                    this.isGTMApproved = true;
                } else {
                    this.isGTMApproved = false;
                }
            })
            .catch(error => {
                this.handleError(error);
            });
    }

    studieOntvangendeGrondChanged() {
        const ddlId = +this.GVTForm.controls.BestemmingBodemStudie.value;
        this.isStudieNietNodig = (ddlId == 2) ? true : false;
        if (ddlId == 2) {
            this.GVTForm.patchValue({
                BestemmingBodemNaam: "",
                BestemmingBodemRapport: "",
                BestemmingBodemRappDatum: ""
            });
        }
    }

    isTvVolumesValid(): boolean {
        if (this.tvVolumes == null || this.tvVolumes == undefined || this.tvVolumes.length === 0 || this.isLoadingTVVolumes) return true;

        let i: number;
        for (i = 0; i < this.tvVolumes.controls.length; i++) {
            const tvVolume = this.tvVolumes.controls[i] as FormGroup;
            if (this.isNullOrUndefined(tvVolume.controls.geplandGebruik.value) || tvVolume.controls.geplandGebruik.value === "")
                continue;

            const geplandGebruik = Number(tvVolume.controls.geplandGebruik.value);
            if (geplandGebruik >= 0)
                return true;
        }

        return false;
    }

    checkIs2008(tvId: number) {
        this.httpTV.IsVlarebo2008(tvId).toPromise()
            .then((data: boolean) => {
                this.is2008 = data;
            });
    }

    loadToepassingenList() {
        this.httpBBR.ZonesList(this.is2008).toPromise()
            .then((data: any) => {
                this.toepassingenList = data;
            })
            .catch(error => {
                this.handleError(error);
            });
    }

    loadHerkomstData(tvId: number) {
        this.httpGTM.HerkomstList(tvId).toPromise()
            .then((data: any) => {
                this.herkomstList = [...data];
            })
            .catch(error => {
                this.handleError(error);
            });
    }

    loadTVVolumes(tvId: number, gtmId?: number) {
        this.isLoadingTVVolumes = true;
        this.clearTVVolumes();

        if (this.OriginPage == "nav") {
            this.httpZone.FillTVZones(tvId).toPromise()
                .then((data: any) => {
                    // data is not used, FillTVZones is only called to validate the TV Status by the Controller
                    this.isTVConform = true;
                    this.httpZone.ZonesList(tvId, gtmId).toPromise()
                        .then((data: ITVVolume[]) => {
                            if (data != null && data.length > 0) {
                                data.forEach((vol: ITVVolume) => {
                                    this.tvVolumes.push(this.createTVVolume(vol));
                                });
                            }
                            this.isLoadingTVVolumes = false;
                        })
                        .catch(error => {
                            this.handleError(error);
                        });
                })
                .catch(error => {
                    this.isTVConform = false;
                    this.showWarningToast((error.status === 500 && error.error && error.error > "") ? error.error : error.message);
                }
                );
        } else if (this.OriginPage == "tv") {
            this.isTVConform = true;
            this.httpZone.ZonesList(tvId, gtmId).toPromise()
                .then((data: ITVVolume[]) => {
                    if (data != null && data.length > 0) {
                        data.forEach((vol: ITVVolume) => {
                            this.tvVolumes.push(this.createTVVolume(vol));
                        });
                    }
                    this.isLoadingTVVolumes = false;
                })
                .catch(error => {
                    this.handleError(error);
                });
        }
    }

    createTVVolume(vol: ITVVolume): FormGroup {
        return this.fb.group({
            tvZoneNr: [vol.tvZoneNr],
            beschrijving: [vol.beschrijving],
            kgbuOmschrijving: [vol.kgbuOmschrijving],
            kgbiOmschrijving: [vol.kgbiOmschrijving],
            kgboOmschrijving: [vol.kgboOmschrijving],
            toepassing: [""],
            beschikbaar: [vol.beschikbaar],
            geplandGebruik: [null],
            tvZoneId: [vol.tvZoneID]
        });
    }

    clearTVVolumes() {
        while (this.tvVolumes.length !== 0) { this.tvVolumes.removeAt(0) }
    }

    verder() {
        if (this.isContinued) {
            this.isContinued = false;
            return;
        }

        if (!this.isKlantSectionValid()) {
            return;
        }

        this.isContinued = true;
        setTimeout(() => { this.GVTForm.controls.BestemmingExplAdres1.updateValueAndValidity({ emitEvent: true }); }); // Trigger the extra location checks

        // Gtm approved/online ?
        if (this.OriginPage == 'nav') {
            const gtmId = +this.GVTForm.controls.KlantGTMId.value;
            if (gtmId !== 0) {
                this.httpGTM.isVerklaringAfnemerFilledOnline(gtmId).toPromise()
                    .then((data: boolean) => {
                        if (!data) {
                            this.isGTMApproved = false;
                        }
                    })
                    .catch(error => {
                        this.handleError(error);
                    });
            }
        }
        //else {
        //    this.isGTMApproved = false;
        //}
    }

    toGeopunt() {
        const x = this.GVTForm.controls.BestemmingLambertX.value;
        const y = this.GVTForm.controls.BestemmingLambertY.value;
        const street = this.GVTForm.controls.BestemmingExplAdres1.value;
        const city = this.GVTForm.controls.BestemmingExplGemeente.value;

        const geopunt = new GeopuntScripts(this.sanitizer);
        const url = geopunt.getGeopuntUrl(x, y, street, city);

        window.open(url);
    }

    linkToVerklaringAfnemer() {
        const id = this.GVTForm.controls.KlantGTMId.value;
        this.router.navigate(["/transport-top-cgr-verklaring", id]);
        return false;
    }

    queueCountChanged(queueLength: number) {
        this.uploadQueueCount = queueLength;
    }

    uploadFiles() {
        this.uploadStatus = "upload";
    }

    allIsValid(): boolean {

        return this.isKlantSectionValid()
            && this.isValid(this.GVTForm.controls.BestemmingEigenaar)
            && this.isValid(this.GVTForm.controls.BestemmingContactPersoon)
            && this.isValid(this.GVTForm.controls.BestemmingEmail)
            && this.bestemailValidationMessage === ""
            && this.isBestemmingLocationValid()
            && this.isBestEmailTelValid()
            && this.isValid(this.GVTForm.controls.BestemmingLambertX)
            && this.isValid(this.GVTForm.controls.BestemmingLambertY)
            && this.isValid(this.GVTForm.controls.BestemmingToepassing)
            && this.isBestemmingBodemStudieValid()
            && this.GVTForm.controls.lockMultiSave.valid;
    }

    isBestemmingLocationValid(): boolean {
        if (this.TypeId === 4 || !this.isLokatieVisible || this.BestId !== 0) {
            this.clearBestemmingLocationErrors();
            return true;
        }

        if (!this.isNullOrWhitespace(this.GVTForm.controls.BestemmingExplAdres1.value)
            && !this.isNullOrWhitespace(this.GVTForm.controls.BestemmingExplPostcode.value)
            && !this.isNullOrWhitespace(this.GVTForm.controls.BestemmingExplGemeente.value)) {
            this.clearBestemmingLocationErrors();
            return true;
        }

        if (!this.isNullOrWhitespace(this.GVTForm.controls.BestemmingKadGemeente.value)
            && !this.isNullOrWhitespace(this.GVTForm.controls.BestemmingKadAfdNummer.value)
            && !this.isNullOrWhitespace(this.GVTForm.controls.BestemmingKadSectie.value)
            && !this.isNullOrWhitespace(this.GVTForm.controls.BestemmingKadNummers.value)) {
            this.clearBestemmingLocationErrors();
            return true;
        }

        if (!this.isNullOrWhitespace(this.GVTForm.controls.BestemmingLambertX.value)
            && !this.isNullOrWhitespace(this.GVTForm.controls.BestemmingLambertY.value)) {
            this.clearBestemmingLocationErrors();
            this.GVTForm.controls.BestemmingLambertX.updateValueAndValidity({ emitEvent: false });
            this.GVTForm.controls.BestemmingLambertY.updateValueAndValidity({ emitEvent: false });
            return true;
        }

        this.setBestemmingLocationErrors();
        return false;
    }

    private clearBestemmingLocationErrors() {
        this.GVTForm.controls.BestemmingExplAdres1.setErrors(null);
        this.GVTForm.controls.BestemmingExplPostcode.setErrors(null);
        this.GVTForm.controls.BestemmingExplGemeente.setErrors(null);
        this.GVTForm.controls.BestemmingKadGemeente.setErrors(null);
        this.GVTForm.controls.BestemmingKadAfdNummer.setErrors(null);
        this.GVTForm.controls.BestemmingKadSectie.setErrors(null);
        this.GVTForm.controls.BestemmingKadNummers.setErrors(null);
        this.GVTForm.controls.BestemmingLambertX.setErrors(null);
        this.GVTForm.controls.BestemmingLambertY.setErrors(null);
    }

    private setBestemmingLocationErrors() {
        this.setMandatoryError(this.GVTForm.controls.BestemmingExplAdres1);
        this.setMandatoryError(this.GVTForm.controls.BestemmingExplPostcode);
        this.setMandatoryError(this.GVTForm.controls.BestemmingExplGemeente);
        this.setMandatoryError(this.GVTForm.controls.BestemmingKadGemeente);
        this.setMandatoryError(this.GVTForm.controls.BestemmingKadAfdNummer);
        this.setMandatoryError(this.GVTForm.controls.BestemmingKadSectie);
        this.setMandatoryError(this.GVTForm.controls.BestemmingKadNummers);
        this.setMandatoryError(this.GVTForm.controls.BestemmingLambertX);
        this.setMandatoryError(this.GVTForm.controls.BestemmingLambertY);
    }

    private setMandatoryError(control: AbstractControl): void {
        control.setErrors({ required: true, message: "Verplicht veld" });
    }

    isKlantSectionValid(): boolean {
        const herkomstTop: string = this.GVTForm.controls.KlantHerkomstTop.value;
        let herkomstTopvalid: boolean = true;

        switch (herkomstTop) {
            case "-1":
                herkomstTopvalid = false;
                break;
            case "1":
                herkomstTopvalid = this.GVTForm.controls.KlantGTMId.value !== "" && this.isTvVolumesValid();
                break;
            case "0":
                herkomstTopvalid = this.isTvVolumesValid() && this.isTVConform;
                break;
        }

        return this.GVTForm.controls.KlantContactAchterNaam.valid
            && this.GVTForm.controls.KlantContactVoorNaam.valid
            && this.GVTForm.controls.KlantContactTelefoon.valid
            && this.GVTForm.controls.KlantContactEmail.valid && this.klantemailValidationMessage === ""
            && this.GVTForm.controls.KlantKenmerk.valid
            && this.GVTForm.controls.TechnischVerslagId.valid
            && this.GVTForm.controls.StartDatum.valid
            && herkomstTopvalid;
    }

    private isValid(control: AbstractControl): boolean {
        if (this.TypeId === 4) // Kleine hoeveelheid
            return true;

        return control.valid;
    }

    private isBestEmailTelValid(): boolean {
        if (this.TypeId === 4) // Kleine hoeveelheid
            return true;

        const bestTel = this.GVTForm.controls.BestemmingTelefoon.value;
        const bestEmail = this.GVTForm.controls.BestemmingEmail.value;
        return (bestEmail != null && bestEmail !== undefined && bestTel != null && bestTel !== undefined && bestEmail + bestTel !== "");
    }

    private isBestemmingBodemStudieValid() {
        if (this.TypeId !== 2)
            return true;

        return this.GVTForm.controls.BestemmingBodemStudie.value !== "0";
    }



    filesUploaded(fileIDs: number[]) {
        this.GVTForm.patchValue({ FileUploadIDs: fileIDs });
        // ... this is the trigger to upload your form data to the backend
        this.sendFormData();
    }

    indienen() {
        if (this.GVTForm.controls.BestemmingBodemStudie.value === "5") {
            // Initialise Array & Upload the Files
            this.GVTForm.patchValue({ FileUploadIDs: [] });
            this.uploadStatus = "upload";
        }
        else {
            this.sendFormData();
        }
    }

    sendFormData() {
        this.GVTForm.controls.lockMultiSave.setValue(true); // this will prevent multiple save clicks
        this.httpGVT.Insert(this.GVTForm.value).toPromise()
            .then((bbrId: number) => {
                this.showSuccesToast("De gegevens werden opgeslagen als nieuw Bodem Beheer Rapport");
                this.router.navigate(["/grondverzettoelating-aanvraagok", bbrId]);
            })
            .catch(error => {
                this.handleError(error);
                if (this.GVTForm.controls.FileUploadIDs.value.length > 0) {
                    this.uploadStatus = "clean";
                }
                this.GVTForm.controls.lockMultiSave.setValue(false);
            });
    }
}