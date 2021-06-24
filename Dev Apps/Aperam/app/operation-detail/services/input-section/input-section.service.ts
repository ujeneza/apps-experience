import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { environment } from 'src/environments/environment';
import { InputMetalUnit, RelatedMetalUnits } from '../../models/related-metal-units';
import { HttpAuthService } from 'src/app/auth/http/http-auth.service';
import { MetalMovementService } from '../metal-movement/metal-movement.service';

@Injectable({
  providedIn: 'root'
})
export class InputSectionService {


constructor(private http: HttpAuthService,

  ) { }

  inputMetalUnits: InputMetalUnit[] = [];
  isLoading = true;

  public totalWeight = new Subject<number>();

  // get the input metal units 
  getInputMetalUnits(metalUnitId: number, metalMovementId: number) {
    this.isLoading = true;
    this.getAllInputMetalUnits(metalUnitId, metalMovementId)
       .subscribe({
         next: value => {
            this.inputMetalUnits = this.relatedMetalUnitsLoaded(value);
            this.totalWeight.next(this.inputMetalUnits.reduce((a, b) => +a + +b.weight, 0));
            this.isLoading = false;
       
          },
         error: msg => {
          this.isLoading = false; 
          console.log(`Error getting consumed metalUnits.`)
         }
    });
  }

  private relatedMetalUnitsLoaded(relatedMetalUnits: RelatedMetalUnits): InputMetalUnit[]{
    let inputMetalUnits: InputMetalUnit[] = [];
    inputMetalUnits = relatedMetalUnits.inputMetalUnits;
    return inputMetalUnits;
  }  

  private getAllInputMetalUnits(metalUnitId: number, metalMovementId: number): Observable<RelatedMetalUnits> {
    if (metalMovementId){
      return this.http.get(`${environment.APIurl}/api/SIPDiPMetalMovement/${metalMovementId}/relatedmetalunits`);
    }
    else{
      return this.http.get(`${environment.APIurl}/api/SIPDiPMetalMovement/relatedmetalunits?metalUnitId=${metalUnitId}`);
    }
  }
}
