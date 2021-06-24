import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { MatTabChangeEvent } from '@angular/material';


@Component({
  selector: 'app-financial-views',
  templateUrl: './financial-views.component.html',
  styleUrls: ['./financial-views.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FinancialViewsComponent implements OnInit {
  selectedButtonToggleChange: string; 
  selectedTabIndex: number;
  selectedTabIndexEvent: number;

  @Output() selectedTabChange: EventEmitter<MatTabChangeEvent> = new EventEmitter;
  
  constructor() {

   
  }
   

  ngOnInit() {
    this.selectedTabIndex = 0;
  }

    // emit data when ta change 
    onTabChandeClick(event: MatTabChangeEvent) {
      this.selectedTabIndexEvent = event.index;}
      

    // emit button filters change and default the related tab
    onSelectedButtonToggleChange(selectedButtonToggleChange: string){
      this.selectedButtonToggleChange = selectedButtonToggleChange;
      if(selectedButtonToggleChange === "productionView") {
        this.selectedTabIndex = 1;
      } 
      else if(selectedButtonToggleChange === "consumptionView") {
        this.selectedTabIndex = 2;
      }
      else if(selectedButtonToggleChange === "activityView") {
        this.selectedTabIndex = 3;
      }
      else {
        this.selectedTabIndex = 0;
      }    
    }


}
