import { HttpClient, HttpParams } from "@angular/common/http";
import { ToastrService } from "ngx-toastr";
import { GeneralScripts } from "./general.scripts";

export class TableScripts extends GeneralScripts {

    private tcontent: any[];
    private recPerPage: number = 10;
    private pageNo: number = 1;

    constructor(private readonly _http: HttpClient, private readonly _baseUrl: string, public sortField: string, public isASC: boolean, public getListURL: string, private readonly _toastr: ToastrService) {
        super(_toastr);
        this.isASC = !this.isASC;
        this.getList();
    }

    public isTableEmpty(): boolean {
        return (!this.tcontent || this.tcontent.length == 0);
    }

    private getList() {
        this._http.get(this._baseUrl + this.getListURL).toPromise()
            .then((data: any) => {
                this.tcontent = data;
                this.sort(this.sortField);
            })
            .catch(error => {
                this.handleError(error);
            });
    }

    public sort(sortFieldToSet: string) {
        this.isASC = (sortFieldToSet == this.sortField) ? !this.isASC : true;
        this.sortField = sortFieldToSet;
        var isASC: boolean = this.isASC;
        var sortedcontent = this.tcontent.sort((a, b) => {
            return a[sortFieldToSet] > b[sortFieldToSet] ? ((isASC) ? 1 : -1) : a[sortFieldToSet] < b[sortFieldToSet] ? ((isASC) ? -1 : 1) : 0;
        });
        this.tcontent = sortedcontent;
        this.setPageNo(1);
    }

    public nPages(): number {
        return Math.ceil(this.tcontent.length / this.recPerPage);
    }

    public setPageNo(pageNoToSet: number) {
        this.pageNo = Math.min(Math.max(1, pageNoToSet), this.nPages());
    }

    public getPage() {
        return this.tcontent.slice((this.pageNo - 1) * this.recPerPage, this.pageNo * this.recPerPage);
    }
}