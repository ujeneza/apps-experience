import { Directive, ElementRef, HostListener, Input } from "@angular/core";
import { NgControl } from "@angular/forms";
import { AbstractControl } from "@angular/forms/src/model";

@Directive({
    selector: "[AllowOnlyNumbers]"
})
export class AllowOnlyNumbersDirective {

    constructor(private readonly el: ElementRef, private readonly control: NgControl) { }

    @Input() OnlyNumber = true;
    @Input() Minimum: number | null = null;
    @Input() Maximum: number | null = null;

    @HostListener("keydown", ["$event"]) onKeyDown(event: any) {
        if (!this.OnlyNumber) {
            return;
        }

        const e = <KeyboardEvent>event;        
        //if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
        //    // Allow: Ctrl+A
        //    (e.keyCode === 65 && e.ctrlKey) ||
        //    // Allow: Ctrl+V
        //    (e.keyCode === 86 && e.ctrlKey) ||
        //    // Allow: Ctrl+C
        //    (e.keyCode === 67 && e.ctrlKey) ||
        //    // Allow: Ctrl+X
        //    (e.keyCode === 88 && e.ctrlKey) ||
        //    // Allow: home, end, left, right
        //    (e.keyCode >= 35 && e.keyCode <= 39)) {
        //    // let it happen, don't do anything
        //    return;
        //}

        if ([46, 8, 9].indexOf(e.keyCode) !== -1 || // delete en backspace en tab
            // Allow: Ctrl+A
            (e.keyCode === 65 && e.ctrlKey) ||
            // Allow: Ctrl+V
            (e.keyCode === 86 && e.ctrlKey) ||
            // Allow: Ctrl+C
            (e.keyCode === 67 && e.ctrlKey) ||
            // Allow: Ctrl+X
            (e.keyCode === 88 && e.ctrlKey) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }

        if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].indexOf(e.key) === -1) {
            e.preventDefault();
        }
    }




    @HostListener("paste", ["$event"]) onPaste(event: any) {
        if (!this.OnlyNumber) {
            return;
        }

        var control = this.control.control;
        var el = this.el;
        var setValue = this.setValue;

        setTimeout(() => {
                var data = el.nativeElement.value;
                var numericData = data.replace(/\D/g, "");
                if (data.length !== numericData.length) {
                    setValue(control, el, numericData);
                }
            },
            0);
    }




    @HostListener("blur", ["$event"]) onBlur(event: any) {
        let data: any;
        let value: number;
        if (this.Minimum != null) {
            data = this.el.nativeElement.value;
            value = parseInt(data);
            if (value < this.Minimum && this.control.control != null) {
                this.control.control.setErrors({ 'belowMin': true });
                //this.setValue(this.control.control, this.el, this.Minimum);
            }
        }

        if (this.Maximum != null) {
            data = this.el.nativeElement.value;
            value = parseInt(data);
            if (value > this.Maximum && this.control.control != null) {
                this.control.control.setErrors({ 'aboveMax': true });
                //this.setValue(this.control.control, this.el, this.Maximum);
            }
        }
    }

    private setValue(control: AbstractControl | null, el: ElementRef, value: number): void {
        if (control != null)
            //control.setValue(value); 
            //VM: changed to patchValue (setvalue doesn't work)
            control.patchValue(value);
        else
            el.nativeElement.value = value;
    }
}
