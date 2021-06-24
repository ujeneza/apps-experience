import { Component, OnInit, Inject } from '@angular/core';

import { environment } from 'src/environments/environment';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import Closing from './Models/closing-model';
import ClosingSite from './Models/closing-site';
import { HttpAuthService } from '../auth/http/http-auth.service';
import FilterDataView from './Models/filter-data-view-model';

@Component({
  selector: 'app-closing',
  templateUrl: './closing.component.html',
  styleUrls: ['./closing.component.css']
})
export class ClosingComponent implements OnInit {

  selectedSiteId:number;
  options = [];
  closingSite:ClosingSite;
  closingMonth:string;
  closingType:string;
  APIurl:string;
  canClose:boolean;
  isSoftClose:boolean;

  constructor(private http: HttpAuthService, public dialog: MatDialog) {
    this.canClose = false;
    this.isSoftClose = false;
    this.closingMonth = '';
    this.closingType = '';
    this.APIurl =  environment.APIurl;
    this.options = [];
    this.GetSites();
  }

  ngOnInit() {

  }
  
  //get the detailed data for a certain MM and show it in the details dialog (to edit)
  GetSites(): void{
    this.http.get(this.APIurl + "/api/filteroptions/sites"
    ).subscribe((response: FilterDataView[]) => {
      this.options = response;
    }, err => {
      this.options = [];
      console.log(err)
    });
  }

  GetSite(): void{
    this.canClose = false
    this.http.get(`${this.APIurl}/api/closing/site/${this.selectedSiteId}`)
    .subscribe((response: ClosingSite) => {
      this.closingSite = response;
      this.closingMonth = this.closingSite && this.closingSite.month && this.closingSite.year?`${this.closingSite.month}/${this.closingSite.year}`:'';
      this.closingType = this.closingSite && this.closingSite.status?this.closingSite.status:'';
      this.isSoftClose = this.closingSite && this.closingType === 'Soft Closed';
      this.canClose = this.closingMonthLessThenCurrentDate(this.closingSite);
    }, err => {
      this.closingSite = {
        siteId: null,
        lastClosure: '',
        month: null,
        year: null,
        status: ''
      };
      this.closingMonth = '';
      this.closingType = '';
      this.isSoftClose = false;
      console.log(err);
    });
  }

  closingMonthLessThenCurrentDate(closingSite): boolean{
    if (!closingSite)
      return false;
    let today = new Date();
    let currentDate = (today.getFullYear() * 100) + (today.getMonth() + 1);
    let closingSiteDate = (closingSite.year * 100) + closingSite.month;

    return currentDate > closingSiteDate;
  }

  siteChanged(): void{
    this.GetSite();
  }

  Close(): void{
    this.openDialog();
  }
  SoftClose(): void{
    this.ClosePeriod("softclose");
  }
  Reopen(): void{
    this.ClosePeriod("reopen");
  }
  openDialog(): void {
    let selectedSiteOption = this.options.filter(option => {
      return option.id === this.selectedSiteId;
    });
    let selectedSiteName = selectedSiteOption[0]?selectedSiteOption[0].name:'';
    let month = this.closingSite?`${this.closingSite.month}/${this.closingSite.year}`:'';
    const dialogRef = this.dialog.open(ConfirmClosingDialog, {
      width: '250px',
      data: {
        site: selectedSiteName,
        month: month
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result === 'Yes')
        this.ClosePeriod("hardclose");
    });
  }
  
  ClosePeriod(endpoint:string): void{
    let closing:Closing = {
      SiteId: this.closingSite.siteId,
      Year: this.closingSite.year,
      Month: this.closingSite.month
    }

    this.http.post(`${this.APIurl}/api/closing/${endpoint}`, closing)
    .subscribe((response) => {
      console.log('VALIDATION HTTP POST Succes');
      this.GetSite();
    }, err => {
      console.log('VALIDATION HTTP POST Succes');
    });
  }

}

@Component({
  selector: 'app-closing-confirm-dialog',
  templateUrl: 'closing.confirm.dialog.component.html',
})
export class ConfirmClosingDialog {

  constructor(public dialogRef: MatDialogRef<ConfirmClosingDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }
}

export interface DialogData {
  site: string,
  month: string
}