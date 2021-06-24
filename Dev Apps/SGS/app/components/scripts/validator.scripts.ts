import { AbstractControl, Validators } from "@angular/forms";
import { GeneralScripts } from "../scripts/general.scripts";



export function ValidateRequired(messageToShow: string) {
    return function (control: AbstractControl) {
        const generalScript = new GeneralScripts(null);
        if (generalScript.isNullOrWhitespace(control.value)) {
            return { required: true, message: messageToShow };
        }
        return null;
    }
}

export function ValidateDateNoLessThan(messageToShow: string = "Datum kan niet voor vandaag liggen", dateFieldToCompare?: AbstractControl) {
    return function (control: AbstractControl) {
        const dateToCompare = (dateFieldToCompare == undefined) ? new Date() : dateFieldToCompare.value;
        try {
            if (control.value > "" && new Date(control.value.getFullYear(), control.value.getMonth(), control.value.getDate()) <
                new Date(dateToCompare.getFullYear(), dateToCompare.getMonth(), dateToCompare.getDate())
            ) {
                return { DateLessThanToday: true, message: messageToShow };
            }
        } catch (e) { }
        return null;
    }
}

export function ValidateDateNoHigherThan(messageToShow: string = "Datum kan niet na vandaag liggen", dateFieldToCompare?: AbstractControl) {
    return function (control: AbstractControl) {
        const dateToCompare = (dateFieldToCompare == undefined) ? new Date() : dateFieldToCompare.value;
        try {
            if (control.value > "" && new Date(control.value.getFullYear(), control.value.getMonth(), control.value.getDate()) >
                new Date(dateToCompare.getFullYear(), dateToCompare.getMonth(), dateToCompare.getDate())
            ) {
                return { DateHigherThanToday: true, message: messageToShow };
            }
        } catch (e) { }
        return null;
    }
}


export function ValidateEmailOrEmpty(messageToShow: string = "Email adres is ongeldig") {
    return (control: AbstractControl) => {
        const generalScript = new GeneralScripts(null);

        if (generalScript.isNullOrWhitespace(control.value))
            return null;

        return Validators.email(control);
    }
}