import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { FormGroup, FormArray, FormBuilder, Validators } from "@angular/forms";
import { GeneralScripts } from "../../scripts/general.scripts";
import { HttpTVService } from "../../services/http-tv.service";
import { HttpTVZoneService } from "../../services/http-tvzone.service";
import { HttpGTMService } from "../../services/http-gtm.service";
import { ToastrService } from "ngx-toastr";
import { ITVVolume, IPuinIndexTechnischVerslag } from "../../scripts/interfaces.scripts";
import { Router } from "@angular/router";

@Component({
    selector: "puin-technisch-verslag-data-item",
    templateUrl: "./puin-technisch-verslag-data-item.component.html",
    styleUrls: ["./puin-technisch-verslag-data-item.component.css"]
})

export class PuinTechnischVerslagDataItemComponent extends GeneralScripts implements OnInit {

    @Input() parentForm: FormGroup;
    @Input() index = 0;
    @Input() showAddRemoveOptions = false;

    @Output() technischVerslagNumberChanged = new EventEmitter<IPuinIndexTechnischVerslag>();
    @Output() removeTechnischVerslag = new EventEmitter<number>();
    @Output() technischVerslagSearchClicked = new EventEmitter<number>();

    dataForm: FormGroup;
    tvVolumes: FormArray;

    isLoadingTvVolumes: boolean = false;
    isGtmApproved: boolean = true;
    isTopIsBewerkt: boolean = false;
    herkomstList: any[] = [];

    constructor(private readonly toastr: ToastrService, private readonly router: Router, private readonly fb: FormBuilder, private readonly httpTvService: HttpTVService, private readonly httpZoneService: HttpTVZoneService, private readonly httpGtmService: HttpGTMService) {
        super(toastr);
    }

    ngOnInit() {
        //this.tvData = this.fb.array([]);
        this.dataForm = this.parentForm as FormGroup;

        this.tvVolumes = this.dataForm.get("tvVolumes") as FormArray;

        this.dataForm.controls.tvId.valueChanges.subscribe(value => this.tvChanged());
    }

    public setTvNumber(tvNumber: number) {
        this.dataForm.patchValue({ tvId: tvNumber });
    }

    removeTv() {
        this.removeTechnischVerslag.next(this.index);
    }

    tvSearchClicked() {
        this.technischVerslagSearchClicked.next(this.index);
    }

    private tvChanged() {
        this.clearTvVolumes();
        this.herkomstList = [];
        this.dataForm.patchValue({ grondtransportmeldingID: "", klantHerkomstTop: "-1" });
        //this.herkomstIsSelectable = false;
        this.isGtmApproved = true;

        const tvId = this.dataForm.controls.tvId.value;
        if (tvId === "")
            return;

        const id = +tvId;
        if (id < 100000 || id > 999999)
            return;

        this.httpTvService.IsTopCgrIsBewerkt(id).toPromise()
            .then((data: boolean) => {
                this.isTopIsBewerkt = data;
                //this.herkomstIsSelectable = true;
            });

        this.technischVerslagNumberChanged.next({ index: this.index, tvId: tvId });
    }

    private loadTvVolumes(tvId: number, gtmId?: number) {
        this.isLoadingTvVolumes = true;
        this.clearTvVolumes();
        this.httpZoneService.ZonesList(tvId, gtmId).toPromise()
            .then((data: ITVVolume[]) => {
                if (data != null && data.length > 0) {
                    data.forEach((vol: ITVVolume) => {
                        this.tvVolumes.push(this.createTvVolume(vol));
                    });
                }
                this.isLoadingTvVolumes = false;
            })
            .catch(error => {
                this.handleError(error);
                this.isLoadingTvVolumes = false;
            });
    }

    private createTvVolume(vol: ITVVolume): FormGroup {
        return this.fb.group({
            tvZoneNr: [vol.tvZoneNr],
            beschrijving: [vol.beschrijving],
            kgbuOmschrijving: [vol.kgbuOmschrijving],
            kgbiOmschrijving: [vol.kgbiOmschrijving],
            kgboOmschrijving: [vol.kgboOmschrijving],
            beschikbaar: [vol.beschikbaar],
            geplandGebruik: [null],
            tvZoneId: [vol.tvZoneID],
        });
    }

    private clearTvVolumes() {
        if (this.tvVolumes === null)
            return;

        while (this.tvVolumes.length !== 0) { this.tvVolumes.removeAt(0) }
    }

    isTvVolumesValid(): boolean {
        if (this.tvVolumes == null || this.tvVolumes == undefined || this.tvVolumes.length === 0 || this.isLoadingTvVolumes) return true;

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



    herkomstChanged() {
        let herkomst = this.dataForm.controls.klantHerkomstTop.value;

        if (herkomst === "-1") {
            this.herkomstList = [];
            this.clearTvVolumes();
        }
        this.dataForm.patchValue({ grondtransportmeldingID: "" });
        this.isGtmApproved = true;


        //this.herkomstIsSelectable = true;

        if (herkomst === "1" && this.isTopIsBewerkt) {
            this.dataForm.patchValue({ klantHerkomstTop: "0" });
            herkomst = "0";
            //this.herkomstIsSelectable = false;
        }

        const tvId = Number(this.dataForm.controls.tvId.value);

        switch (herkomst) {
            case "0":
                this.herkomstList = [];
                //this.checkIs2008(tvId);
                //this.loadToepassingenList();
                this.loadTvVolumes(tvId, null);
                break;
            case "1":
                this.clearTvVolumes();
                this.loadHerkomstData(tvId);
                break;
        }
    }

    loadHerkomstData(tvId: number) {
        this.httpGtmService.HerkomstList(tvId).toPromise()
            .then((data: any) => {
                this.herkomstList = data;
            })
            .catch(error => {
                this.handleError(error);
            });
    }


    gtmChanged() {
        const gtmId = +this.dataForm.controls.grondtransportmeldingID.value;
        if (gtmId === 0) {
            this.clearTvVolumes();
            return;
        }

        this.httpGtmService.isVerklaringAfnemerFilledOnline(gtmId).toPromise()
            .then((isVerklaringAfnemerFilledOnline: boolean) => {
                if (isVerklaringAfnemerFilledOnline) {
                    const tvId = Number(this.dataForm.controls.tvId.value);
                    const gtmIdValue = this.dataForm.controls.grondtransportmeldingID.value;
                    const gtmId = (this.isNullOrWhitespace(gtmIdValue) || gtmIdValue === "") ? null : Number(gtmIdValue);
                    this.loadTvVolumes(tvId, gtmId);
                    this.isGtmApproved = true;
                } else {
                    this.isGtmApproved = false;
                }
            }).catch(error => {
                this.handleError(error);
            });;
    }

    linkToVerklaringAfnemer() {
        const id = this.dataForm.controls.grondtransportmeldingID.value;
        this.router.navigate(["/transport-top-cgr-verklaring", id]);
        return false;
    }

    public isValid(): boolean {
        if (!this.dataForm.valid) {
            return false;
        }

        if (!this.isGtmApproved) {
            return false;
        }

        const herkomstTop: string = this.dataForm.controls.klantHerkomstTop.value;
        let herkomstTopvalid: boolean = true;

        switch (herkomstTop) {
        case "-1":
            herkomstTopvalid = false;
            break;
        case "1":
                herkomstTopvalid = this.dataForm.controls.grondtransportmeldingID.value !== "" && this.isTvVolumesValid();
            break;
        case "0":
            herkomstTopvalid = this.isTvVolumesValid();
            break;
        }

        return this.dataForm.controls.tvId.valid && herkomstTopvalid;
    }
}