import { Directive, ElementRef, Renderer2, AfterViewInit } from "@angular/core";

import { NgControl } from "@angular/forms";
import { GeneralScripts } from "../../scripts/general.scripts";

@Directive({
    selector: "[DottedBorderBelow]"
})
export class DottedBorderBelowDirective extends GeneralScripts implements AfterViewInit {

    constructor(private readonly el: ElementRef, private readonly renderer: Renderer2, private readonly control: NgControl) {
        super(null);
    }

    ngAfterViewInit() {
        this.addRemoveClass(this.control.value);

        if (this.control.valueChanges == null)
            return;

        this.control.valueChanges.subscribe((value) => {
            this.addRemoveClass(value);
        });
    }

    addRemoveClass(value: any) {
        if (this.isNullOrWhitespace(value)) {
            this.renderer.addClass(this.el.nativeElement, "dotted-border-below");
        } else {
            this.renderer.removeClass(this.el.nativeElement, "dotted-border-below");
        }
    }
}