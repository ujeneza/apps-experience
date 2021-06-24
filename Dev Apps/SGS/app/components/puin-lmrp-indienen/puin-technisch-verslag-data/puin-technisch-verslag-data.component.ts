import { Component, Input, ViewChildren, QueryList, Output, EventEmitter, OnInit } from "@angular/core";
import { FormGroup, FormArray, FormBuilder, Validators } from "@angular/forms";
import { IPuinIndexTechnischVerslag } from "../../scripts/interfaces.scripts"
import { GeneralScripts } from "../../scripts/general.scripts";
import { ToastrService } from "ngx-toastr";
import { PuinAanvragenTypes } from "../../puin-lmrp-aanvragen/puin-lmrp-aanvragen.component";
import { PuinTechnischVerslagDataItemComponent } from "../puin-technisch-verslag-data-item/puin-technisch-verslag-data-item.component";

@Component({
    selector: "puintechnischverslagdata",
    templateUrl: "./puin-technisch-verslag-data.component.html",
    styleUrls: ["./puin-technisch-verslag-data.component.css"]
})
export class PuinTechnischVerslagDataComponent extends GeneralScripts implements OnInit { //implements OnChanges {

    @Input() parentForm: FormGroup;
    @Input() showAddRemoveOptions = false;
    @Input() indieningsTypeId: PuinAanvragenTypes;

    @Output() technischVerslagNumberChanged = new EventEmitter<IPuinIndexTechnischVerslag>();

    tvData: FormArray;
    selectedIndex = 0;

    @ViewChildren(PuinTechnischVerslagDataItemComponent)
    technischVerslagen: QueryList<PuinTechnischVerslagDataItemComponent>;

    constructor(private readonly toastr: ToastrService, private readonly fb: FormBuilder) {
        super(toastr);

        //this.tvData = this.fb.array([]);

        //this.technischVerslagToevoegen(); // initialize with 1 item because there is always at least 1 needed
    }

    ngOnInit() {
        //this.tvData = this.fb.array([]);
        this.tvData = this.parentForm.controls.technischVerslagData as FormArray;

        if (this.tvData.controls.length < 1) {
            this.technischVerslagToevoegen(); // initialize with 1 item because there is always at least 1 needed
        }
    }

    private technischVerslagToevoegen() {
        const newGroup = this.fb.group({
            tvId: [null, [Validators.required, Validators.min(100000), Validators.max(999999)]],
            klantHerkomstTop: [-1],
            grondtransportmeldingID: [0],
            isGtmApproved: [true],
            isTopIsBewerkt: [false],
            tvVolumes: this.fb.array([])
        });

        this.tvData.push(newGroup);

        if (this.technischVerslagen != undefined) {
            this.technischVerslagen.forEach(item => {
                console.log(item.dataForm);
            });
        }
    }

    tvNumberChanged(data: IPuinIndexTechnischVerslag) {
        this.technischVerslagNumberChanged.next(data);
    }

    removeTechnischVerslag(index: number) {
        this.tvData.removeAt(index);
    }

    technischVerslagSearchClicked(index: number) {
        this.selectedIndex = index;
        console.log(this.selectedIndex);
    }

    onTvSelected(id: number) {
        this.technischVerslagen.forEach(item => {
            if (item.index === this.selectedIndex) {
                item.setTvNumber(id);
            }
        });
    }

    public isValid(): boolean {
        if (this.technischVerslagen == undefined) {
            return true;
        }

        if (this.technischVerslagen.length <= 0) {
            return false;
        }

        const numbers = new Array<number>();
        let retval = true;
        this.technischVerslagen.forEach(item => {
            if (!item.isValid()) {
                retval = false;
            }

            const tvId = item.dataForm.controls.tvId.value;
            if (numbers.indexOf(tvId) > -1) { // dont allow double numbers
                retval = false;
            }
            numbers.push(tvId);
        });

        return retval;
    }
}