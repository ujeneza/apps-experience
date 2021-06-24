import { Component, Input } from "@angular/core";
import { TableScripts } from "../scripts/table.scripts";

@Component({
    selector: "table-pager",
    templateUrl: "./table-pager.component.html",
    styleUrls: ["./table-pager.component.css"]
})
/** transport-top-cgr-status component*/
export class TablePagerComponent {
    
    @Input() tbl: TableScripts;

    constructor() { }

}

