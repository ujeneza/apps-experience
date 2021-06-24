import { Component, Inject, EventEmitter, Output, forwardRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { GeneralScripts } from '../../scripts/general.scripts';
import { SelectControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'inschrijven-beroepsorganisatie',
    templateUrl: './beroepsorganisatie.component.html',
    styleUrls: ['./beroepsorganisatie.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => BeroepsorganisatieComponent),
            multi: true
        }
    ]
})

export class BeroepsorganisatieComponent extends GeneralScripts {

    @Output() onValueChanged = new EventEmitter<number>();

    onChange: any = () => { };
    onTouched: any = () => { };

    selectedValue: any;
    beroepsorganisaties: any;

    constructor(private readonly _http: HttpClient, @Inject('BASE_URL') private readonly _baseUrl: string, private readonly _toastr: ToastrService) {
        super(_toastr);
        this._http.get(this._baseUrl + 'api/Inschrijvingen/GetBeroepsorganisatie').toPromise()
            .then(result => {
                this.beroepsorganisaties = result;
                this.selectedValue = 3;
                this.valueChanged();
            }).catch(error => {
                this.handleError(error);
            });
    }

    valueChanged() {
        this.onValueChanged.emit(this.selectedValue);
        this.onChange(this.selectedValue);
    }

    writeValue(value: any) {
        this.selectedValue = value;
    }

    registerOnChange(fn: any) {
        this.onChange = () => {
            fn(this.selectedValue);
        }
    }

    registerOnTouched(fn: any) {
        this.onTouched = fn;
    }
}