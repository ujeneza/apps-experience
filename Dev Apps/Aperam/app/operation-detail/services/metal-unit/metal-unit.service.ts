import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { environment } from 'src/environments/environment';
import { MetalUnitModel } from '../../models/metal-unit-section.model';
import { Subject } from 'rxjs';
import MiniValidationError from '../../models/mini-validation-error-model';

const BACKEND_URL_METALUNIT_DETAIL = environment.APIurl + "/api/SIPDiPMetalUnit/";

@Injectable({
  providedIn: 'root'
})
export class MetalUnitService {
  public metalUnitSectionFormData: any;
  public metalUnitChanged = new Subject<MetalUnitModel>();
  public validationResultsChanged = new Subject<MiniValidationError[]>();
  public currentMetalMovementId = 0;
  public currentMetalUnitId = 0;

  constructor(
    private http: HttpClient
  )
  {  }
  
// save data in the backend
  saveMetalUnit(comment: string){
    const metalUnitSaved= {
        id: this.currentMetalUnitId,
        partNumber: this.metalUnitSectionFormData.partNumber,
        width: this.metalUnitSectionFormData.width, 
        length: this.metalUnitSectionFormData.length, 
        thickness: this.metalUnitSectionFormData.thickness,
        weight: this.metalUnitSectionFormData.weight,
        finishing: this.metalUnitSectionFormData.finishing,
        shape: this.metalUnitSectionFormData.shape,
        hotWeight: this.metalUnitSectionFormData.hotWeight,
        comment: comment,
      } as MetalUnitModel; 
   
    return this.http.put(BACKEND_URL_METALUNIT_DETAIL+this.currentMetalUnitId, metalUnitSaved);
  }

  // delete metalUnit
  deleteMetalUnit(comment) {
    let req = new HttpRequest('DELETE', BACKEND_URL_METALUNIT_DETAIL+this.currentMetalUnitId);
    let newReq = req.clone({body: comment});
    return this.http.request(newReq);
  }

  // copy metalUnit
  copyMetalUnit( comment: string, consumedBySameMetalMovement:boolean ) {
      const metalUnitCopied: MetalUnitModel = {
        id: this.currentMetalUnitId,
        partNumber: this.metalUnitSectionFormData.partNumber,
        width: this.metalUnitSectionFormData.width, 
        length: this.metalUnitSectionFormData.length, 
        thickness: this.metalUnitSectionFormData.thickness,
        weight: this.metalUnitSectionFormData.weight,
        finishing: this.metalUnitSectionFormData.finishing,
        shape: this.metalUnitSectionFormData.shape,
        hotWeight: this.metalUnitSectionFormData.hotWeight,
        packageType: this.metalUnitSectionFormData.packageType,
        packageNo: this.metalUnitSectionFormData.packageNo,
        packageClass: this.metalUnitSectionFormData.packageClass,
        partIndex: this.metalUnitSectionFormData.partIndex,
        comment: comment, 
        consumedBySameMetalMovement:consumedBySameMetalMovement
       
        
      } as MetalUnitModel; 

      console.log(metalUnitCopied, "metalUnitCopied");
      return this.http.post(BACKEND_URL_METALUNIT_DETAIL+this.currentMetalUnitId, metalUnitCopied);
  }

  // After loading data, trigger the observable to let subscribers know it's loaded.
  setMetalUnit(metalMovementData){
    this.metalUnitChanged.next(this.defineMetalUnitSection(metalMovementData));
  }

  // After loading data, trigger the observable to let subscribers know it's loaded
  setMetalUnitValidationResult(metalUnitValidationResult){
    this.validationResultsChanged.next(metalUnitValidationResult);
  }

  //  define the object metalUnitSection
  private defineMetalUnitSection(metalMovmentData) {
    this.currentMetalUnitId = metalMovmentData.metalUnit.metalUnitId;
    this.currentMetalMovementId = metalMovmentData.metalMovementId;
    var metalUnit = {
      id: metalMovmentData.metalUnit.metalUnitId,
      metalUnitId:metalMovmentData.metalUnit.metalUnitId,
      metalUnit: metalMovmentData.metalUnit.metalUnit,
      partIndex: metalMovmentData.metalUnit.partIndex,
      sequenceNumber: metalMovmentData.metalUnit.sequenceNumber,
      hasValidationErrors: metalMovmentData.metalUnit.hasValidationErrors,
      coilPartNumber:metalMovmentData.metalUnit.coilPartNumber,
      coilNumber: metalMovmentData.metalUnit.coilNumber,
      partNumber: metalMovmentData.metalUnit.partNumber,
      batchName: metalMovmentData.metalUnit.batchName,
      operation: metalMovmentData.metalUnit.operation,
      macroArticle: metalMovmentData.metalUnit.macroArticle,
      weight: metalMovmentData.metalUnit.weight,
      hotWeight: metalMovmentData.metalUnit.hotWeight,
      steelgrade: metalMovmentData.metalUnit.characteristics.steelgrade,
      finishing: metalMovmentData.metalUnit.characteristics.finishing,
      shape: metalMovmentData.metalUnit.characteristics.shape,
      nextMetalMovementId: metalMovmentData.metalUnit.nextMetalMovementId,
      length: metalMovmentData.metalUnit.dimensions.length,
      width: metalMovmentData.metalUnit.dimensions.width,
      thickness: metalMovmentData.metalUnit.dimensions.thickness,
      no: metalMovmentData.metalUnit.package.no,
      type: metalMovmentData.metalUnit.package.type,
      packageClass: metalMovmentData.metalUnit.package.class,
    } as MetalUnitModel;

    return metalUnit;
  }

}
