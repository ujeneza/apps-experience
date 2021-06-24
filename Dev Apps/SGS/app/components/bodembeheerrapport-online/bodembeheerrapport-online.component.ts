import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, FormArray, Validators, AbstractControl } from "@angular/forms";
import { Location } from "@angular/common";
import { HttpBBRService } from "../services/http-bbr.service";

import { appLabels } from "../scripts/appLabels";
import { GeneralScripts } from "../scripts/general.scripts";
import { ValidateRequired, ValidateDateNoHigherThan, ValidateDateNoLessThan } from "../scripts/validator.scripts";

import { ToastrService } from "ngx-toastr";
import { BsLocaleService } from "ngx-bootstrap/datepicker";
import { Router, ActivatedRoute } from "@angular/router";
import { IBBRRecord, IBBROntvangstVerklaring, IBBROntvangstVerklaringPDF, IBBROntvangstVerklaringScreen, IBBROntvangstVerklaringOnlineIngevuld } from "../scripts/interfaces.scripts";

@Component({
    selector: "bodembeheerrapport-online",
    templateUrl: "./bodembeheerrapport-online.component.html",
    styleUrls: ["./bodembeheerrapport-online.component.css"]
})
/** bodembeheerrapport-online*/
export class BodembeheerrapportOnlineComponent extends GeneralScripts implements OnInit {
    appLabels = appLabels;

    litHeader: string = "";

    BBRId: number = 0;
    hasData: boolean = false;
    hasRows: boolean = false;
    toonCheckBox: boolean = true;
    totaleHoeveelheid: number | null = 0;

    terugVisible = true;
    waitingMessageVisible = false;

    OForm: FormGroup;
    gridZones: FormArray;

    bbrDetail: IBBROntvangstVerklaringScreen;
    filledRows: IBBROntvangstVerklaring[];

    emailValidationMessage: string = "";
    email2ValidationMessage: string = "";

    constructor(private readonly httpBBR: HttpBBRService, private readonly toastr: ToastrService, private readonly fb: FormBuilder, private readonly location: Location, private readonly route: ActivatedRoute, private readonly localeService: BsLocaleService) {
        super(toastr);
    }

    ngOnInit(): void {
        if (this.route.snapshot.params["bbrId"]) this.BBRId = +this.route.snapshot.params["bbrId"];
        if (this.BBRId === 0)
            return;

        this.litHeader = "Ontvangstverklaring voor bodem beheer rapport " + this.BBRId.toString();

        // Needed configuration for the bsDatepicker to accept dd/MM/yyyy formatting
        this.localeService.use("bootstrap-locale-nlbe");

        this.OForm = this.fb.group({
            totaalGebruik: [0],
            gridZones: this.fb.array([]),
            mailTo: ["", [Validators.required, Validators.pattern("^([\\w+-.%]+@[\\w-.]+\\.[A-Za-z]{2,4};?)+$"), Validators.maxLength(50)]],
            mailTo2: ["", Validators.pattern("^([\\w+-.%]+@[\\w-.]+\\.[A-Za-z]{2,4};?)+$")],
            agreesThatAllIsCorrect: new FormControl(false, Validators.pattern("true")),
            aangeverANDafnemer: [false]
        });

        const ctlEmail = this.OForm.get("mailTo");
        if (ctlEmail) {
            ctlEmail.valueChanges.debounceTime(1000).subscribe(value => {
                this.emailValidationMessage = "";
                if ((ctlEmail.touched || ctlEmail.dirty) && ctlEmail.errors) {
                    if (ctlEmail.errors.pattern)
                        this.emailValidationMessage = "- Email Aanvrager is niet geldig.";
                }
            });
        }

        const ctlEmail2 = this.OForm.get("mailTo2");
        if (ctlEmail2) {
            ctlEmail2.valueChanges.debounceTime(1000).subscribe(value => {
                this.email2ValidationMessage = "";
                if ((ctlEmail2.touched || ctlEmail2.dirty) && ctlEmail2.errors) {
                    if (ctlEmail2.errors.pattern)
                        this.email2ValidationMessage = "- Email Afnemer is niet geldig.";
                }
            });
        }

        this.gridZones = this.OForm.get("gridZones") as FormArray;

        Promise.all([this.httpBBR.PocoEntity(this.BBRId).toPromise(), this.httpBBR.OntvangstVerklaringList(this.BBRId).toPromise()])
            .then((data) => {
                const record = data[0] as IBBRRecord;
                this.filledRows = data[1] as IBBROntvangstVerklaring[];

                const allowVerklaring = (record.bbrStatusID === 3);
                this.hasRows = (!(this.filledRows == undefined || this.filledRows == null) && this.filledRows.length > 0);

                if (!this.hasRows && !allowVerklaring) {
                    this.hasData = false;
                } else {
                    this.hasData = true;
                    this.httpBBR.TransportVerklaringPdfData(this.BBRId).toPromise()
                        .then((tvZones: IBBROntvangstVerklaringPDF[]) => {
                            if (tvZones == null || tvZones == undefined || tvZones.length === 0) {
                                // TODO: error message 'No data found for bbr ID'
                            } else {
                                this.bindForm(tvZones, ((this.hasRows) ? this.filledRows : null));
                            }
                        })
                        .catch(error => {
                            this.handleError(error);
                        });
                }
            })
            .catch(error => {
                this.handleError(error);
            });
    }

    invalidEmail(control: AbstractControl) {
        const pattern = new RegExp("^([\\w+-.%]+@[\\w-.]+\\.[A-Za-z]{2,4};?)+$");
        if (!pattern.test(control.value)) {
            return { invalidEmail: true };
        }
        else {
            return { invalidEmail: false };
        }
    }

    private goBack() {
        this.location.back();
    }

    private bindForm(tvZones: IBBROntvangstVerklaringPDF[], filledRows: IBBROntvangstVerklaring[]) {
        const record: IBBROntvangstVerklaringPDF = tvZones[0];
        this.bbrDetail = {
            herkomstStraat: record.titel2,
            herkomstGemeente: record.titel3,
            herkomstTvEbsd: record.ebsd,
            herkomstTvDatum: record.tvdatum,
            herkomstKenmerk: record.kenmerk,
            herkomstCvNummer: record.technischVerslagID,
            herkomstDeelVolumes: record.deelVolumes,
            bestemmingAdres: record.afzetAdres1,
            bestemmingAdres2: record.afzetAdres2,
            bestemmingPostcodeGemeente: (record.afzetPostcode + " " + record.afzetPlaats).trim(),
            bestemmingKadastraleGegevens: record.kadastraleGegevens,
            bestemmingLambert: record.lambert1,
            bestemmingToepassing: this.getBestemmingToepassing(record.bestemmingsAardID),
            bestemmingType: record.defAanwijzingBestemming,
        };

        this.OForm.patchValue({ totaalGebruik: 0 });

        if (tvZones != null && tvZones.length > 0) {
            tvZones.forEach((rec: IBBROntvangstVerklaringPDF) => {

                const newRowControls = this.createGridRecord(rec, filledRows);
                this.gridZones.push(newRowControls);

                newRowControls.controls.werkelijkGebruik.valueChanges.subscribe(e => {
                    this.validateDeelVolumes();

                    if (Number(e) <= 0) {
                        newRowControls.controls.datumVan.clearValidators();
                        newRowControls.controls.datumTot.clearValidators();
                        newRowControls.controls.datumVan.updateValueAndValidity({ emitEvent: false });
                        newRowControls.controls.datumTot.updateValueAndValidity({ emitEvent: false });
                        return;
                    }

                    newRowControls.controls.datumVan.setValidators([ValidateRequired("'Datum van' is verplicht wanneer er een hoeveelheid is ingevuld'"), ValidateDateNoHigherThan(), ValidateDateNoHigherThan("'Datum van' is later dan 'datum tot'", newRowControls.controls.datumTot)]);
                    newRowControls.controls.datumTot.setValidators([ValidateRequired("'Datum tot' is verplicht wanneer er een hoeveelheid is ingevuld'"), ValidateDateNoHigherThan(), ValidateDateNoLessThan("'Datum tot' is voor 'datum van'", newRowControls.controls.datumVan)]);
                    newRowControls.controls.datumVan.updateValueAndValidity({ emitEvent: false });
                    newRowControls.controls.datumTot.updateValueAndValidity({ emitEvent: false });
                });

                newRowControls.controls.datumVan.valueChanges.subscribe(_ => { newRowControls.controls.datumTot.updateValueAndValidity({ emitEvent: false }); this.validateDeelVolumes() });
                newRowControls.controls.datumTot.valueChanges.subscribe(_ => { newRowControls.controls.datumVan.updateValueAndValidity({ emitEvent: false }); this.validateDeelVolumes() });
            });
        }

        if (filledRows !== null && filledRows.length > 0) {
            this.gridZones.controls.forEach((x) => {
                x.get("datumVan").disable();
                x.get("datumTot").disable();
                x.get("werkelijkGebruik").disable();
            });
        }

        if (filledRows != null) this.toonCheckBox = false;
    }

    private validateDeelVolumes() {
        let valid = true;
        let hasNumber = false;
        this.gridZones.controls.forEach((zone: FormGroup) => {
            if (!zone.controls.datumVan.valid || !zone.controls.datumTot.valid) {
                valid = false;
            }
            if (zone.controls.werkelijkGebruik.value != null && zone.controls.werkelijkGebruik.value != "") {
                hasNumber = true;
            }
        });
        if (!valid || !hasNumber) {
            this.totaleHoeveelheid = null;
        } else {
            this.tvZonesCalculateTotal();
        }
    }

    private tvZonesCalculateTotal() {
        let totaal = 0;
        this.gridZones.controls.forEach((zone: FormGroup) => {
            const hoeveelheid = Number(zone.controls.werkelijkGebruik.value);
            totaal += hoeveelheid;
        });
        this.OForm.patchValue({ totaalGebruik: totaal });
        this.totaleHoeveelheid = totaal;
    }

    private getBestemmingToepassing(bestemmingAardId: number): string {
        switch (bestemmingAardId) {
            case 1:
                return "Gebruik als bodem of bouwkundig bodemgebruik in directe toepassing";
            case 2:
                return "Definitieve opslagplaats (heraanvulling van groeven, e.d.) of vergunde stortplaats";
            case 3:
                return "Gebruik als grondstof in produktieproces (steenbakkerijen, betoncentrales, ...)";
            default:
                return "";
        }
    }

    private createGridRecord(rec: IBBROntvangstVerklaringPDF, rows: IBBROntvangstVerklaring[]): FormGroup {
        let datumVan: string = "";
        let datumTot: string = "";
        let werkelijkGebruik: number = null;
        let totGebruik = (this.OForm.controls.totaalGebruik.value) ? +this.OForm.controls.totaalGebruik.value : 0;

        if (rows != null) {
            const row = rows.find(r => r.tvZoneID === rec.tvZoneID);
            if (row) {
                datumVan = row.startDateAsDate;
                datumTot = row.endDateAsDate;
                werkelijkGebruik = row.realquantity;
                totGebruik = totGebruik + werkelijkGebruik;
                this.OForm.patchValue({
                    totaalGebruik: totGebruik
                });
            }
        }
        if (totGebruik > 0) {
            this.OForm.controls.totaalGebruik.disable();
        }

        return this.fb.group({
            tvZoneNr: [rec.tvZoneNr],
            tvZoneBeschrijving: [rec.tvZoneBeschrijving],
            tvZoneKwaliteitGebruikBinnen: [rec.tvZoneKwaliteitGebruikBinnen],
            tvZoneKwaliteitGebruikBuiten: [rec.tvZoneKwaliteitGebruikBuiten],
            tvZoneKwaliteitGebruikBouwstof: [rec.tvZoneKwaliteitGebruikBouwstof],
            datumVan: [datumVan],
            datumTot: [datumTot],
            hoeveelheidGemeld: [rec.hoeveelheidGemeld],
            werkelijkGebruik: [werkelijkGebruik, [Validators.min(0), Validators.max(1000000)]],
            tvZoneID: [rec.tvZoneID],
            technischVerslagID: [rec.technischVerslagID]
        });
    }

    clearGridData() {
        while (this.gridZones.length !== 0) {
            this.gridZones.removeAt(0);
        }
    }

    formIsValid() {
        this.validateDeelVolumes();

        var bln1 = this.OForm.controls.agreesThatAllIsCorrect.valid;
        var bln2 = this.OForm.controls.mailTo.valid;
        var bln3 = this.OForm.controls.mailTo2.valid;

        return bln1 && bln2 && this.email2ValidationMessage == "";
    }

    send() {
        const deelvolumes = new Array<IBBROntvangstVerklaring>();
        const bbrId = this.BBRId;

        this.gridZones.controls.forEach((fg: FormGroup) => {
            if (!(fg.controls.werkelijkGebruik.value == null || fg.controls.werkelijkGebruik.value == undefined)) {
                const hoeveelheid = Number(fg.controls.werkelijkGebruik.value);
                const newItem: IBBROntvangstVerklaring = {
                    technischVerslagID: fg.controls.technischVerslagID.value,
                    tvZoneID: fg.controls.tvZoneID.value,
                    bodemBeheerRapportID: bbrId,
                    tvZoneNummer: fg.controls.tvZoneNr.value,
                    realquantity: hoeveelheid,
                    startDateAsDate: fg.controls.datumVan.value,
                    endDateAsDate: fg.controls.datumTot.value
                };
                deelvolumes.push(newItem);
            }
        });

        const data: IBBROntvangstVerklaringOnlineIngevuld =
        {
            bodemBeheerRapportId: bbrId,
            mailTo: this.OForm.controls.mailTo.value,
            mailTo2: this.OForm.controls.mailTo2.value,
            deelvolumes: deelvolumes,
            aangeverANDafnemer: this.OForm.controls.aangeverANDafnemer.value
        };

        this.hasRows = true;
        this.terugVisible = false;
        this.waitingMessageVisible = true;
        this.httpBBR.onlineOntvangstVerklaring(data)
            .then(() => {
                this.terugVisible = true;
                this.waitingMessageVisible = false;
                this.showSuccesToast(`De ontvangstverklaring is aangemaakt`);
            })
            .catch(() => {
                this.hasRows = false;
                this.terugVisible = true;
                this.waitingMessageVisible = false;
                this.showErrorToast("Probleem bij het aanmaken van de ontvangstverklaring");
            });
    }

    //AanvangDatumValidate() {
    //    setTimeout((OForm: FormGroup) => { OForm.controls['AanvangDatum'].updateValueAndValidity() }, 10, this.OForm)
    //}

    //EindeDatumValidate() {
    //    setTimeout((OForm: FormGroup) => { OForm.controls['EindeDatum'].updateValueAndValidity() }, 10, this.OForm)
    //}
}