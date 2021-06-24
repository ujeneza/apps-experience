import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { OutputMetalUnit, RelatedMetalUnits } from '../../models/related-metal-units';
import { takeLast } from 'rxjs/operators';
import { MetalUnitModel } from '../../models/metal-unit-section.model';
//import { HttpAuthService } from 'src/app/auth/http/http-auth.service';

const BACKEND_URL_METALUNIT_DETAIL = environment.APIurl + "/api/SIPDiPMetalUnit/";

@Injectable({
  providedIn: 'root'
})
export class OutputSectionService {

constructor(private http: HttpClient) {}

  outputMetalUnits: OutputMetalUnit[] = [];
  deleteLoadingMetalUnitsIds: number[] = [];
  isLoading = true;
  activeMetalUnit: number = 0;

  public activeMetalUnitChanged = new Subject<number>();
  public copyMetalUnitClicked = new Subject<number>();
  public totalWeight = new Subject<number>();

  setActiveMetalUnit(metalUnitId: number){
    this.activeMetalUnit = metalUnitId;
  }

  sendActiveMetalUnit(metalUnitId: number){
    this.activeMetalUnit = metalUnitId;
    this.activeMetalUnitChanged.next(this.activeMetalUnit);
  }

  sendCopyClicked(metalUnitId: number){
    this.copyMetalUnitClicked.next(metalUnitId);
  }

  getOutputMetalUnitsCount(): number {
    if (this.outputMetalUnits)
      return this.outputMetalUnits.length;
    else
      return 0;
  }

  // get the output metal units 
  getOutputMetalUnits(metalUnitId: number, metalMovementId: number) {
    this.isLoading = true;
    this.getAllOutputMetalUnits(metalUnitId, metalMovementId)
       .subscribe({
         next: value => {
            this.outputMetalUnits = this.relatedMetalUnitsLoaded(value);
            this.removeMetalUnitDeleteLoadingWichArntShown();
            this.calculateOutputMetalUnitsWeight();
            this.isLoading = false;
          },
         error: msg => {
          this.isLoading = false; 
          console.log(`Error getting produced metalUnits.`);
         }
    });
  }

  private calculateOutputMetalUnitsWeight(){
    this.totalWeight.next(this.outputMetalUnits.reduce((a, b) => +a + +b.weight, 0));
  }

  deleteMetalUnit(metalUnitId: number, comment: string){
    this.setMetalUnitDeleteLoading(metalUnitId);
    if (!!this.outputMetalUnits && this.outputMetalUnits.length > 1){
      this.deleteMetalUnitCall(metalUnitId, comment)
        .pipe(takeLast(1))
        .subscribe({
          next: value => {
            // There should always be one metalunit left in the list;
            var loadUsingItemId = this.activeMetalUnit;
            if (metalUnitId == this.activeMetalUnit)
              loadUsingItemId = this.outputMetalUnits.filter(x => x.metalUnitId != metalUnitId)[0].metalUnitId;
            this.getOutputMetalUnits(loadUsingItemId, null);
            this.sendActiveMetalUnit(loadUsingItemId);

            // remove metal munit from array
            let currentMetalUnit = this.outputMetalUnits.filter(metalUnit => metalUnit.metalUnitId === metalUnitId)[0];
            this.outputMetalUnits.splice(this.outputMetalUnits.indexOf(currentMetalUnit),1);
            // to prevent the isloadingArray to contain unknown metalUnitId's.
            this.stopMetalUnitDeleteLoading(metalUnitId);
          },
          error: msg => {
            this.stopMetalUnitDeleteLoading(metalUnitId);
            console.log(`Error deleting produced metalUnit.`);
          }
        });
    }
  }
  
  // delete metalUnit
  private deleteMetalUnitCall(id: number, comment: string) {
    let req = new HttpRequest('DELETE', BACKEND_URL_METALUNIT_DETAIL+id);
    var commentJsonObject = {comment: comment};
    let newReq = req.clone({body: commentJsonObject});
    return this.http.request(newReq);
  }

  private relatedMetalUnitsLoaded(relatedMetalUnits: RelatedMetalUnits): OutputMetalUnit[]{
    let outputMetalUnits: OutputMetalUnit[] = [];
    outputMetalUnits = relatedMetalUnits.outputMetalUnits;
    return outputMetalUnits;
  }  

  private getAllOutputMetalUnits(metalUnitId: number, metalMovementId: number): Observable<RelatedMetalUnits> {
    if (metalMovementId){
      return this.http.get<RelatedMetalUnits>(`${environment.APIurl}/api/SIPDiPMetalMovement/${metalMovementId}/relatedmetalunits`);
    }
    else{
      return this.http.get<RelatedMetalUnits>(`${environment.APIurl}/api/SIPDiPMetalMovement/relatedmetalunits?metalUnitId=${metalUnitId}`);
    }
  }

  private setMetalUnitDeleteLoading(metalUnitId: number){
    this.deleteLoadingMetalUnitsIds.push(metalUnitId);
  }

  private stopMetalUnitDeleteLoading(metalUnitId: number){
    this.deleteLoadingMetalUnitsIds.splice(this.deleteLoadingMetalUnitsIds.indexOf(metalUnitId), 1);
  }

  private removeMetalUnitDeleteLoadingWichArntShown(){
    this.deleteLoadingMetalUnitsIds = this.deleteLoadingMetalUnitsIds.filter(loadingMetalUnitId => {
      this.outputMetalUnits.filter(outputMetalUnit => outputMetalUnit.metalUnitId === loadingMetalUnitId).length > 0;
    });
  }

  public isMetalUnitDeleteLoading(metalUnitId: number): boolean{
    return this.deleteLoadingMetalUnitsIds.indexOf(metalUnitId) > -1;
  }

  public updateUpdatedMetalUnit(metalUnit: MetalUnitModel){
    var changedMetalUnits = this.outputMetalUnits.filter(outputMetalUnit => outputMetalUnit.metalUnitId == metalUnit.metalUnitId);
    if (metalUnit && changedMetalUnits && changedMetalUnits.length > 0 && changedMetalUnits[0]){
      changedMetalUnits[0].hasValidationErrors = metalUnit.hasValidationErrors;
      changedMetalUnits[0].nextMetalMovementId = metalUnit.nextMetalMovementId;
      changedMetalUnits[0].packageNo = metalUnit.packageNo;
      changedMetalUnits[0].weight = metalUnit.weight;
      
      this.calculateOutputMetalUnitsWeight();
    }
  }

}
