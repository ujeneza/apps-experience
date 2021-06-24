/// <reference path="../gw-grid.module.ts" />
import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { ElementRef, Renderer2 } from "@angular/core";
import { GeneralScripts } from "../../scripts/general.scripts";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, FormControl, Validators, FormArray, AbstractControl } from "@angular/forms";
import { HttpKlantService } from "../../services/http-klant.service";
import { BsLocaleService } from "ngx-bootstrap/datepicker";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { AuthenticationService, UserRoles } from "../../services/authentication.service";
import { DatePipe, Location } from "@angular/common";
import { ISgsStatusGridItem, sgsVolumes, ISgsDossierComboListItem, ISgsTVAfsluitReden, ISgsGVTType, ISgsBrancheListItem, sgsTvJoinedData, EvaluatieFormErrors, sgsTvSaveJoinedData, IsgMailDataShared } from "../../scripts/sgsInterfaces.scripts";
import { DomSanitizer } from "@angular/platform-browser";
import { GeopuntScripts } from "../../scripts/geopunt.scripts";
import { DocumentTypes } from "../gw-documents/gw-documents.component";
import { ITVStatusDefinition, ITVZone, IKlantPoco } from "../../scripts/interfaces.scripts";
import { HttpTVService } from "../../services/http-tv.service";
import { HttpDossierService } from "../../services/http-dossier.service";
import { HttpFileService } from "../../services/http-file.service";
import { HttpTVZoneService } from "../../services/http-tvzone.service";
import { HttpGVTService } from "../../services/http-gvt.service";
import { HttpErrorResponse } from "@angular/common/http";
import { EmailHistoriekTypes } from "../gw-email-historiek-grid/gw-email-historiek-grid.component";
import { EventListenerService } from "../../services/event-listener.service";


@Component({
    selector: "gw-tv-edit",
    templateUrl: "./gw-tv-edit.component.html",
    styleUrls: ["./gw-tv-edit.component.css"],
    providers: [DatePipe]
})

export class gwTvEditComponent extends GeneralScripts implements OnInit {
    tvForm: FormGroup;

    // tv data
    tvId: number;
    tvJoinedData: sgsTvJoinedData;
    evaluatieFormValues: sgsTvJoinedData;
    afsluitenFormValues: sgsTvJoinedData;
    dossierBeheerderID: number;
    isConformiteitMailSend: number;
    isSaving: number;

    // Deelvolumes
    tvVolumes: ITVZone[];
    totalHoeveelheid: number = 0;

    // dropdowns
    tvStatusListItems: ITVStatusDefinition[];
    tvStatusListItemsCurrent: any[];
    dossierbeheerderListItems: ISgsDossierComboListItem[];
    afsluitRedenListItems: ISgsTVAfsluitReden[];
    grondVerzetTypesListItems: ISgsGVTType[];
    brancheListItems: ISgsBrancheListItem[];
    topCgrLocatieListItems: IKlantPoco[];



    // to clean up => check if they are required
    lidnummerBouwunieText = "Lidnummer bij koepel-organisatie";
    hasPendingChanges = false;
    showPasswordErrorMessage = false;
    actionSucceeded = false;
    actionSucceededMessage = "";
    msgGebruik: string = "500 resterend";

    // upload documents
    private uploadedIDs: number[] = [];
    uploadStatus: string = "selection";
    refreshDocumentsNeeded: boolean = false;

    // gw-Documents
    gwDocumentType: DocumentTypes = DocumentTypes.TechnischVerslag;
    canSendNewEmail: boolean = true;
    emailHistoriekType: EmailHistoriekTypes = EmailHistoriekTypes.gwTvEdit;


    // validations and errors handling
    isAfsluitRedenVolume = false;
    isAfsluitRedenDetails = false;
    isTopCgrSelected = false;
    selectedStatus: number;
    positivebesluitMessage: string;
    datumDemonsteringErrorMessage: string;
    volumeRequiredErrorMessage: string;
    currentStatusId: number;




    @ViewChild(DatatableComponent) table: DatatableComponent;


    constructor(
        private readonly _toastr: ToastrService,
        private readonly fb: FormBuilder,
        private readonly httpTv: HttpTVService,
        private readonly httpDossier: HttpDossierService,
        private readonly httpFile: HttpFileService,
        private readonly httpTvZone: HttpTVZoneService,
        private readonly httpGvt: HttpGVTService,
        private readonly httpKlant: HttpKlantService,
        private readonly eventListenerService: EventListenerService,
        private readonly router: Router,
        private readonly route: ActivatedRoute,
        private readonly auth: AuthenticationService,
        private readonly sanitizer: DomSanitizer,
        private readonly datePipe: DatePipe,
        private readonly localeService: BsLocaleService,
        private readonly el: ElementRef,
        private readonly location: Location,
        private readonly renderer: Renderer2) {
        super(_toastr);

    }

    ngOnInit(): void {
        this.localeService.use("bootstrap-locale-nlbe");
        const snapshot = this.route.snapshot;
        this.tvId = -1;
        if (snapshot.params["id"]) this.tvId = +snapshot.params["id"];
        this.formOnInit();
    }

    formOnInit() {
        this.loadEntity();
        this.loadIsConformiteitMailSend()
        this.initialiseForm();
        this.loadDropdowns()
        this.loadTvVolumes();
        this.initialiseValueChangeHandlers();
        this.getMailData();
    }

    initialiseForm() {
        this.tvForm = this.fb.group({
            isAfgesloten: [""],
            technischVerslagAfsluitRedenID: [""],
            afsluitRedenVolume: ["", [Validators.maxLength(50)]],
            // add afsluitRedenBijzonderheden

            // displaying data not need to be in  the form
            // technischVerslagID: [""],
            // klant: [""],
            // klantContact: [""],
            referentieKlant: ["", [Validators.maxLength(100)]],
            titel: ["", [Validators.maxLength(40)]],
            onderzoekslocatie_straat: ["", [Validators.required, Validators.maxLength(40)]],
            onderzoekslocatie_gemeente: ["", [Validators.required, Validators.maxLength(40)]],
            beschrijving: ["", [Validators.maxLength(50)]],
            grondverzetTypeID: [""],
            referentie: ["", [Validators.maxLength(50)]],
            tvDatum: ["", [Validators.required]],
            werfOpvolgingZonderGvt: ["", [Validators.maxLength(750)]],
            isTopCgr: [],
            onderzoekslocatieBetreftTopCgr: [""],
            isBewerktGemengd: [],
            centraalPuntLX: ["", [Validators.maxLength(6), Validators.min(20000), Validators.max(280000)]],
            centraalPuntLY: ["", [Validators.maxLength(6), Validators.min(150000), Validators.max(250000)]],
            bestemmingsTypeID: [""],
            bodemsaneringsdeskundige: ["", [Validators.maxLength(50)]],
            dossierBeheerderID: [""],
            isPubliekBeschikbaar: [],
            isExternTV: [],
            externTvGeldigTot: ["", [Validators.maxLength(100)]],
            interneOpmerking: ["", [Validators.maxLength(750)]],
            opmerkingen: ["", [Validators.maxLength(8000)]],
            statusID: [""],
            isGefactureerd: [],
            dataAanvullingen: [""],
            updateStatusDatum: [""],
            uploadedIDs: []
        });



    }



    // load data 
    loadDropdowns() {
        this.httpTv.StatusDefinitionList(false).toPromise().
            then((lst: ITVStatusDefinition[]) => {
                this.tvStatusListItems = [...lst];
            });

        this.httpDossier.sgsComboListItems().toPromise().
            then((lst: ISgsDossierComboListItem[]) => {
                this.dossierbeheerderListItems = [...lst];
            });

        this.httpTv.gwAfsluitReden().toPromise().
            then((lst: ISgsTVAfsluitReden[]) => {
                this.afsluitRedenListItems = [...lst];
            });

        this.httpGvt.gwGrondVerzetTypes().toPromise().
            then((lst: ISgsGVTType[]) => {
                this.grondVerzetTypesListItems = [...lst];
            });

        this.httpKlant.gwsTopCgrLocatie(1, true).toPromise().
            then((lst: IKlantPoco[]) => {
                this.topCgrLocatieListItems = [...lst];
            });
    }

    loadEntity() {
        if (this.tvId === -1) {
            return;
        }
        // Load data to edit
        this.httpTv.sgsTVJoinedData(this.tvId).subscribe((tvJoinedData: sgsTvJoinedData) => {
            this.tvJoinedData = tvJoinedData;
            if (!tvJoinedData) return;
            this.tvForm.patchValue({
                isAfgesloten: tvJoinedData.isAfgesloten,
                technischVerslagAfsluitRedenID: tvJoinedData.technischVerslagAfsluitRedenID,
                afsluitRedenVolume: tvJoinedData.afsluitRedenVolume,
                referentieKlant: tvJoinedData.referentieKlant,
                titel: tvJoinedData.titel,
                onderzoekslocatie_straat: tvJoinedData.onderzoekslocatie_straat,
                onderzoekslocatie_gemeente: tvJoinedData.onderzoekslocatie_gemeente,
                beschrijving: tvJoinedData.beschrijving,
                grondverzetTypeID: tvJoinedData.grondverzetTypeID,
                referentie: tvJoinedData.referentie,
                tvDatum: this.datePipe.transform(tvJoinedData.tvDatum, "dd/MM/yyyy"),
                werfOpvolgingZonderGvt: tvJoinedData.werfOpvolgingZonderGvt,
                isTopCgr: tvJoinedData.isTopCgr,
                onderzoekslocatieBetreftTopCgr: tvJoinedData.onderzoekslocatieBetreftTopCgr,
                isBewerktGemengd: tvJoinedData.isBewerktGemengd,
                centraalPuntLX: tvJoinedData.centraalPuntLX,
                centraalPuntLY: tvJoinedData.centraalPuntLY,
                bestemmingsTypeID: tvJoinedData.bestemmingsTypeID,
                bodemsaneringsdeskundige: tvJoinedData.bodemsaneringsdeskundige,
                dossierBeheerderID: tvJoinedData.dossierBeheerderID,
                isPubliekBeschikbaar: tvJoinedData.isPubliekBeschikbaar,
                isExternTV: tvJoinedData.isExternTV,
                externTvGeldigTot: this.datePipe.transform(tvJoinedData.externTvGeldigTot, "dd/MM/yyyy"),
                interneOpmerking: tvJoinedData.interneOpmerking,
                opmerkingen: tvJoinedData.opmerkingen,
                statusID: tvJoinedData.statusID,
                isGefactureerd: tvJoinedData.isGefactureerd,
                dataAanvullingen: tvJoinedData.dataAanvullingen,
                updateStatusDatum: null,
            });

        });

    }

    loadIsConformiteitMailSend() {
        this.httpTv.sgsIsEmailSend(this.tvId).toPromise().
            then((isSent: boolean) => {
                this.isConformiteitMailSend = (isSent === true) ? 1 : 0;
            });
    }

    // deelvolumes
    loadTvVolumes() {
        this.totalHoeveelheid = 0;
        this.httpTvZone.ListByTVId(this.tvId).toPromise()
            .then((lst: ITVZone[]) => {
                this.tvVolumes = [...lst];
                this.tvVolumes.forEach(item => {
                    this.totalHoeveelheid += item.hoeveelheid
                });
            });
    }


    addTvVolumes() {

        this.router.navigate(['/technisch-verslag-zone-registratie', 'gwTvEdit', this.tvId]);
    }

    editTvVolume(tvZoneId: number) {
        this.router.navigate(['/technisch-verslag-zone-registratie', 'gwTvEdit', this.tvId, tvZoneId]);
    }

    deleteTvVolume(tvZoneId: number) {
        this.httpTvZone.Delete(tvZoneId).toPromise().then(item => {

            this.loadTvVolumes();
            this.showSuccesToast("De gegevens werden opgeslagen als nieuw Technisch Verslag");
            this.totalHoeveelheid = 0;
        }).catch(error => {
            this.handleError(error);
        });

    }


    // errors handling and business rules
    initialiseValueChangeHandlers() {
        this.tvForm.get("technischVerslagAfsluitRedenID").valueChanges.subscribe(value => {
            const val: number = Number(value);
            switch (val) {
                case 1:
                    this.isAfsluitRedenVolume = true;
                    this.isAfsluitRedenDetails = false;
                    break;
                case 2:
                    this.isAfsluitRedenVolume = true;
                    this.isAfsluitRedenDetails = false;
                    break;
                case 3:
                    this.isAfsluitRedenVolume = false;
                    this.isAfsluitRedenDetails = false;
                    break;
                case 4:
                    this.isAfsluitRedenVolume = false;
                    this.isAfsluitRedenDetails = true;
                    break;
                default:
                    this.isAfsluitRedenVolume = false;
                    this.isAfsluitRedenDetails = false;
            }


        });

        this.tvForm.get("isTopCgr").valueChanges.debounceTime(1000).subscribe(value => {
            if (value === true) {
                this.isTopCgrSelected = true;
                this.tvForm.get("onderzoekslocatieBetreftTopCgr").setValidators([Validators.required]);
                this.tvForm.get("onderzoekslocatieBetreftTopCgr").updateValueAndValidity();
            }
            else {
                this.isTopCgrSelected = false;
                this.tvForm.get("onderzoekslocatieBetreftTopCgr").setValidators([]);
                this.tvForm.get("onderzoekslocatieBetreftTopCgr").updateValueAndValidity();

            }
        });



        this.tvForm.get("statusID").valueChanges.debounceTime(1000).subscribe(value => {

            // send status ID to evaluatie component
            switch (value) {
                case 1:
                case 3:
                case 4:
                    this.selectedStatus = value;
                    break;
                default:
                    this.currentStatusId = this.tvForm.get("statusID").value;
                    return
            }
            this.currentStatusId = this.tvForm.get("statusID").value;
        });

        this.tvForm.get("dossierBeheerderID").valueChanges.debounceTime(1000).subscribe(value => {
            this.dossierBeheerderID = value
        });

    }



    triggerBesluitChange(besluitConclusion: number) {
        if (this.evaluatieFormValues == undefined || besluitConclusion == undefined || this == undefined || this.tvJoinedData == undefined) {
            return;
        }

        // need to review the way "this isSaving" is implemented!!!!! 
        // meaning we are creating a loop between "triggerbesluit()" and the ngonchange in evaluatie component. 
        // we need to keep our functions simples
        

        // //this.isSaving = 1;

        //let besluit = this.tvForm.get("statusID").value;
        //            switch (besluitConclusion) {
        //                case 1:
        //                    besluit = 4;
        //                    break;
        //                case 2:
        //                    besluit = 3;
        //                    break;
        //                case 3:
        //                    besluit = 1;
        //                    break;
        //                default:
        //                    this.currentStatusId = this.tvForm.get("statusID").value;
        //                    return;
        //            }
        //            this.tvForm.patchValue({
        //                statusID: besluit
        //            });
        //            this.evaluatieFormValues.checkConclusion = besluitConclusion;
        //            this.currentStatusId = this.tvForm.get("statusID").value;

        //             // Make sure uploads, changes to Dossierbeheerder, etc. are saved as well
        //            if (!this.afsluitenFormValues) this.afsluitenFormValues = this.afsluitenRedenInit();

        //            let tvFormValues: sgsTvJoinedData = { ...this.getTvFormValues(), ...this.afsluitenFormValues, ...this.evaluatieFormValues };

        //            this.httpTv.sgsSaveTVJoinedData(tvFormValues).toPromise().then((docId: any) => {
        //                this.loadIsConformiteitMailSend();
        //                this.isSaving = 0;
        //            })
        //            .catch(error => {
        //                this.handleError(error);
        //               // this.isSaving = 0;
        //            });


      

        this.httpTv.sgsPersistConclusionChange(this.tvId, besluitConclusion).toPromise().
            then((isPersisted: boolean) => {
                if (isPersisted) {
                    let besluit = this.tvForm.get("statusID").value;
                    switch (besluitConclusion) {
                        case 1:
                            besluit = 4;
                            break;
                        case 2:
                            besluit = 3;
                            break;
                        case 3:
                            besluit = 1;
                            break;
                        default:
                            this.currentStatusId = this.tvForm.get("statusID").value;
                            return;
                    }
                    this.tvForm.patchValue({
                        statusID: besluit
                    });
                    this.evaluatieFormValues.checkConclusion = besluitConclusion;
                    this.currentStatusId = this.tvForm.get("statusID").value;

                    // Make sure uploads, changes to Dossierbeheerder, etc. are saved as well
                    if (!this.afsluitenFormValues) this.afsluitenFormValues = this.afsluitenRedenInit();

                    let tvFormValues: sgsTvJoinedData = { ...this.getTvFormValues(), ...this.afsluitenFormValues, ...this.evaluatieFormValues };

                    this.httpTv.sgsSaveTVJoinedData(tvFormValues).toPromise().then((docId: any) => {
                        this.loadIsConformiteitMailSend();
                        this.isSaving = 0;
                    })
                    .catch(error => {
                        this.handleError(error);
                        this.isSaving = 0;
                    });

                } else {
                    this.isSaving = 0;
                }
            });
    }


    evaluationFormErrorMessages(el: EvaluatieFormErrors) {
       
        this.datumDemonsteringErrorMessage = (el.datumDemonsteringErrorMessage !== null) ? el.datumDemonsteringErrorMessage : "";


        if (el.isBesluit !== true) {
            this.tvStatusListItemsCurrent = this.tvStatusListItems.filter(el => { return el.tvStatusID !== 4; });
        }
        else {
            this.tvStatusListItemsCurrent = this.tvStatusListItems.filter(el => { return el.tvStatusID === 4; });
        }


    }

    isConfomiteitMail() {
        return (this.positivebesluitMessage === '' &&
            Number(this.currentStatusId) === 4
        )
    }


    isDeelVolume() {
        return this.totalHoeveelheid !== 0;
    }

    sendConformiteitEmail(canComformiteitMail: boolean) {

        if (canComformiteitMail === true) {
            if (!this.afsluitenFormValues) this.afsluitenFormValues = this.afsluitenRedenInit();

            let tvFormValues: sgsTvJoinedData = { ...this.getTvFormValues(), ...this.afsluitenFormValues, ...this.evaluatieFormValues };

            this.httpTv.sgsSaveTVJoinedData(tvFormValues).toPromise().then((docId: any) => {
                this.ngOnInit();
                this.showSuccesToast("De gegevens werden opgeslagen");
                if (this.tvJoinedData.dossierBeheerderID !== null) {
                    this.router.navigate(['gw/email', "new", this.emailHistoriekType.toString(), this.tvId, -1, "comformiteit"]);
                } else {
                    this.showErrorToast("dossier not fount")
                }
            })
                .catch(error => {
                    this.handleError(error);
                });
        }

    }

    isTvFormValid() {
        return (
            this.tvForm.valid &&
            this.datumDemonsteringErrorMessage === "");
    }

    uploadFiles(fileIDs: number[]) {
        this.isSaving = 1;
        if (fileIDs != null) {
            this.httpFile.moveFilesFromTempToFinalLocationForKlant(this.tvId, this.tvJoinedData.klantId, [...fileIDs]).toPromise().then((docId: any) => {
                //this.ngOnInit();
                this.showSuccesToast("De bestanden werden opgeladen");
                this.isSaving = 0;
                this.refreshDocumentsNeeded = true;
            })
                .catch(error => {
                    this.handleError(error);
                    if (this.uploadedIDs.length > 0) {
                        this.uploadStatus = "clean";
                    }
                    this.isSaving = 0;
                });
        }
    }
    
    save() {
        if (!this.afsluitenFormValues) this.afsluitenFormValues = this.afsluitenRedenInit();

        let tvFormValues: sgsTvJoinedData = { ...this.getTvFormValues(), ...this.afsluitenFormValues, ...this.evaluatieFormValues };

        this.httpTv.sgsSaveTVJoinedData(tvFormValues).toPromise().then((docId: any) => {
            if (this.tvForm.value.updateStatusDatum === true) {
                this.httpTv.sgsSetEmailSend(this.tvId, 0).toPromise().then((docId: any) => {
                    this.isConformiteitMailSend = 0;
                    this.tvForm.patchValue({ updateStatusDatum: null });
                })
            }
            this.showSuccesToast("De gegevens werden opgeslagen");
            this.uploadStatus = "selection";
            this.isSaving = 0;
        })
            .catch(error => {
                this.handleError(error);
                if (this.uploadedIDs.length > 0) {
                    this.uploadStatus = "clean";
                }
                this.isSaving = 0;
            });
    }



    // listening data from other components

    getMailData() {
        this.eventListenerService.mailDataToTvChanged.subscribe(item => {
            console.log(item, "data from mail");
        });
    }



    // geopunt
    toGeopunt() {
        const x = this.tvForm.controls.centraalPuntLX.value;
        const y = this.tvForm.controls.centraalPuntLY.value
        const geopunt = new GeopuntScripts(this.sanitizer);
        const url = geopunt.getGeopuntUrl(x, y, null, null);

        window.open(url);
    }



    // othes || reusable components
    afsluitenRedenInit() {
        const afsluitenReden: sgsTvJoinedData = {
            afsluitRedenAfvoerNaarBrusselWallonie: this.tvJoinedData.afsluitRedenAfvoerNaarBrusselWallonie,
            afsluitRedenAfvoerNaarBrusselWallonieVolume: this.tvJoinedData.afsluitRedenAfvoerNaarBrusselWallonieVolume,
            afsluitRedenToegepastZonderGvtBinnenDeWerf: this.tvJoinedData.afsluitRedenToegepastZonderGvtBinnenDeWerf,
            afsluitRedenToegepastZonderGvtBinnenDeWerfVolume: this.tvJoinedData.afsluitRedenToegepastZonderGvtBinnenDeWerfVolume,
            afsluitRedenToegepastZonderGvtBuitenDeWerf: this.tvJoinedData.afsluitRedenToegepastZonderGvtBuitenDeWerf,
            afsluitRedenToegepastZonderGvtBuitenDeWerfVolume: this.tvJoinedData.afsluitRedenToegepastZonderGvtBuitenDeWerfVolume,
            afsluitRedenAfgezeefdPuinTop: this.tvJoinedData.afsluitRedenAfgezeefdPuinTop,
            afsluitRedenAfgezeefdPuinTopVolume: this.tvJoinedData.afsluitRedenAfgezeefdPuinTopVolume,
            afsluitRedenMinvolumeVanaf10pWegensNietUitgevoerd: this.tvJoinedData.afsluitRedenMinvolumeVanaf10pWegensNietUitgevoerd,
            afsluitRedenMinvolumeVanaf10pWegensNietUitgevoerdVolume: this.tvJoinedData.afsluitRedenMinvolumeVanaf10pWegensNietUitgevoerdVolume,
            afsluitRedenMeervolumeVanaf10p: this.tvJoinedData.afsluitRedenMeervolumeVanaf10p,
            afsluitRedenMeervolumeVanaf10pVolume: this.tvJoinedData.afsluitRedenMeervolumeVanaf10pVolume,
            afsluitRedenDeelsViaGb: this.tvJoinedData.afsluitRedenDeelsViaGb,
            afsluitRedenDeelsViaGbVolume: this.tvJoinedData.afsluitRedenDeelsViaGbVolume,
            afsluitRedenDeelsOpDeWerfGeblevenVoorDeBouwheer: this.tvJoinedData.afsluitRedenDeelsOpDeWerfGeblevenVoorDeBouwheer,
            afsluitRedenDeelsOpDeWerfGeblevenVoorDeBouwheerVolume: this.tvJoinedData.afsluitRedenDeelsOpDeWerfGeblevenVoorDeBouwheerVolume,
            afsluitRedenOverschattingInTv: this.tvJoinedData.afsluitRedenOverschattingInTv,
            afsluitRedenOverschattingInTvVolume: this.tvJoinedData.afsluitRedenOverschattingInTvVolume,
            afsluitRedenZoneVoorGebruikTerPlaatse: this.tvJoinedData.afsluitRedenZoneVoorGebruikTerPlaatse,
            afsluitRedenZoneVoorGebruikTerPlaatseVolume: this.tvJoinedData.afsluitRedenZoneVoorGebruikTerPlaatseVolume,
            afsluitRedenGtmNaarTopNieuwTv: this.tvJoinedData.afsluitRedenGtmNaarTopNieuwTv,
            afsluitRedenGtmNaarTopNieuwTvVolume: this.tvJoinedData.afsluitRedenGtmNaarTopNieuwTvVolume,
            afsluitRedenGtmNaarCofETopCgr: this.tvJoinedData.afsluitRedenGtmNaarCofETopCgr,
            afsluitRedenGtmNaarCofETopCgrVolume: this.tvJoinedData.afsluitRedenGtmNaarCofETopCgrVolume,
            afsluitRedenGedeelteNietDoorLidGwUitgevoerd: this.tvJoinedData.afsluitRedenGedeelteNietDoorLidGwUitgevoerd,
            afsluitRedenGedeelteNietDoorLidGwUitgevoerdVolume: this.tvJoinedData.afsluitRedenGedeelteNietDoorLidGwUitgevoerdVolume,
            afsluitRedenBbrsGeweigerd: this.tvJoinedData.afsluitRedenBbrsGeweigerd,
            afsluitRedenBbrsGeweigerdVolume: this.tvJoinedData.afsluitRedenBbrsGeweigerdVolume,
            afsluitRedenSamengevoegd: this.tvJoinedData.afsluitRedenSamengevoegd,
            afsluitRedenSamengevoegdVolume: this.tvJoinedData.afsluitRedenSamengevoegdVolume,
            afsluitRedenNietGekend: this.tvJoinedData.afsluitRedenNietGekend,
            afsluitRedenNietGekendVolume: this.tvJoinedData.afsluitRedenNietGekendVolume,
            afsluitRedenOverige: this.tvJoinedData.afsluitRedenOverige,
            afsluitRedenOverigeVolume: this.tvJoinedData.afsluitRedenOverigeVolume,
            afsluitRedenVolume: this.tvJoinedData.afsluitRedenVolume
        } as sgsTvJoinedData;
        return afsluitenReden;
    }

    getTvFormValues() {
        const statusMap: Map<number, string> = new Map([[1, "In behandeling"], [2, "Naar OVAM"], [3, "Afgekeurd"], [4, "Goedgekeurd"],]);
        const tvFormValue: sgsTvJoinedData = {
            isAfgesloten: this.tvForm.value.isAfgesloten,
            technischVerslagAfsluitRedenID: this.tvForm.value.technischVerslagAfsluitRedenID,
            afsluitRedenVolume: this.tvForm.value.afsluitRedenVolume,
            referentieKlant: this.tvForm.value.referentieKlant,
            titel: this.tvForm.value.titel,
            onderzoekslocatie_straat: this.tvForm.value.onderzoekslocatie_straat,
            onderzoekslocatie_gemeente: this.tvForm.value.onderzoekslocatie_gemeente,
            beschrijving: this.tvForm.value.beschrijving,
            grondverzetTypeID: this.tvForm.value.grondverzetTypeID,
            referentie: this.tvForm.value.referentie,
            tvDatum: this.stringToDate(this.tvForm.value.tvDatum),
            werfOpvolgingZonderGvt: this.tvForm.value.werfOpvolgingZonderGvt,
            isTopCgr: this.tvForm.value.isTopCgr,
            onderzoekslocatieBetreftTopCgr: this.tvForm.value.onderzoekslocatieBetreftTopCgr,
            isBewerktGemengd: this.tvForm.value.isBewerktGemengd,
            centraalPuntLX: this.tvForm.value.centraalPuntLX,
            centraalPuntLY: this.tvForm.value.centraalPuntLY,
            bestemmingsTypeID: this.tvForm.value.bestemmingsTypeID,
            bodemsaneringsdeskundige: this.tvForm.value.bodemsaneringsdeskundige,
            dossierBeheerderID: this.tvForm.value.dossierBeheerderID,
            isPubliekBeschikbaar: this.tvForm.value.isPubliekBeschikbaar,
            isExternTV: this.tvForm.value.isExternTV,
            externTvGeldigTot: this.stringToDate(this.tvForm.value.externTvGeldigTot),
            interneOpmerking: this.tvForm.value.interneOpmerking,
            opmerkingen: this.tvForm.value.opmerkingen,
            statusID: this.tvForm.value.statusID,
            isGefactureerd: this.tvForm.value.isGefactureerd,
            dataAanvullingen: this.tvForm.value.dataAanvullingen,
            achternaam: this.tvJoinedData.achternaam,
            adres1: this.tvJoinedData.adres1,
            adres2: this.tvJoinedData.adres2,

            fax: this.tvJoinedData.fax,
            flow: this.tvJoinedData.flow,
            functie: this.tvJoinedData.functie,

            indieningsDatum: this.tvJoinedData.indieningsDatum,
            indieningswijzeID: this.tvJoinedData.indieningswijzeID,

            isEvaluatieVlarebo2008: this.tvJoinedData.isEvaluatieVlarebo2008,
            klantId: this.tvJoinedData.klantId,
            land: this.tvJoinedData.land,
            organisatie: this.tvJoinedData.organisatie,
            plaats: this.tvJoinedData.plaats,
            postcode: this.tvJoinedData.postcode,
            samengevoegdDoor: this.tvJoinedData.samengevoegdDoor,
            status: statusMap.get(this.tvForm.value.statusID),
            technischVerslagID: this.tvJoinedData.technischVerslagID,
            telefoon: this.tvJoinedData.telefoon,
            voornaam: this.tvJoinedData.voornaam,
            werfOpvolging: this.tvJoinedData.werfOpvolging,
            statusDatum: (this.tvForm.value.updateStatusDatum === true) ? new Date() : null
        } as sgsTvJoinedData

        return tvFormValue
    }
    getEvaluatieFormValues(formValues: any) {
        this.evaluatieFormValues = formValues;

    }
    getAsluitenFormValues(formValues: any) {
        if (formValues) {
            this.afsluitenFormValues = formValues
        } else {
            this.afsluitenFormValues = this.afsluitenRedenInit();
        }

    }

    /////////////////////////////////////////////////
    // error handling
    /////////////////////////////////////////////////
    handleError(errorObject: any, prefix: string = "") {
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
}
