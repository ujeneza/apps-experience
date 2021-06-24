import { DomSanitizer } from "@angular/platform-browser";
import { GeneralScripts } from "./general.scripts";
import { SecurityContext } from "@angular/core";

export class GeopuntScripts {

    constructor(private readonly sanitizer: DomSanitizer) {
    }

    getGeopuntUrl(x: string | null, y: string | null, street: string | null, city: string | null) {
        const generalScripts = new GeneralScripts(null);
        const url = "http://www.geopunt.be/kaart";

        if (!generalScripts.isNullOrWhitespace(x) && !generalScripts.isNullOrWhitespace(y)) {
            return this.sanitizer.sanitize(SecurityContext.URL, `${url}?app=geopunt-kaart_app&coordinaten=${x} ${y}`);
        }

        if (!generalScripts.isNullOrWhitespace(street) && !generalScripts.isNullOrWhitespace(city)) {
            return this.sanitizer.sanitize(SecurityContext.URL, `${url}?app=Geopunt-kaart_app&adres=${street} ${city}`);
        }

        return url;
    }

}