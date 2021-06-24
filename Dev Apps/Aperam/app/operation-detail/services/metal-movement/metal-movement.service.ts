
import { MetalUnitService } from './../metal-unit/metal-unit.service';
import { Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { HttpClient, HttpRequest } from '@angular/common/http';
import MetalMovement from '../../models/metal-movement-unit-model';
import { EventEmitter } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import MiniValidationError from '../../models/mini-validation-error-model';

import { environment } from 'src/environments/environment';
import { RelatedMetalUnits } from '../../models/related-metal-units';
import { HttpAuthService } from 'src/app/auth/http/http-auth.service';
import { SiteProductionOperationModel } from '../../models/site-production-Operation.model';




const BACKEND_URL_MVT_DETAIL = environment.APIurl + "/api/SIPDiPMetalMovement/";
const BACKEND_URL_OPERATION_PRODUCTIONLINE = environment.APIurl + "/api/filteroptions/sitesproductionlinesoperations";

@Injectable({
  providedIn: 'root'
})
export class MetalMovementService {


  // listen the response from saving data
  private metalMvtChangeActionSource = new BehaviorSubject<any>(null);
  metalMvtChangeActionItem = this.metalMvtChangeActionSource.asObservable();

  private metalMvtLoadingSource = new BehaviorSubject<any>(null);
  metalMvtLoadingActionItem = this.metalMvtLoadingSource.asObservable();

  private mvtLoadingSource = new BehaviorSubject<any>(null);
  mvtLoadingItem = this.mvtLoadingSource.asObservable();

  private mvtCopySource = new BehaviorSubject<any>(null);
  mvtCopyItem = this.mvtCopySource.asObservable();

  private metalUnitValidationResultSource = new BehaviorSubject<any>(null);
  metalUnitValidationResultItem = this.metalUnitValidationResultSource.asObservable();

  private responseMetalMovement: any;

  // site and production line filters variables
  siteProductionOperation: SiteProductionOperationModel[] = [];
  private siteProductionOperationUpdated = new Subject<SiteProductionOperationModel[]>();

  constructor(private http: HttpAuthService,
    private httpClient: HttpClient, private metalUnitService: MetalUnitService) { }


  // save a metal movement

  saveMetalMovement(
    id: number,
    endDate: Date | string,
    comment:string
    ) {

    const metalUnit = {
      id: this.metalUnitService.currentMetalUnitId,
      partNumber: this.metalUnitService.metalUnitSectionFormData.partNumber,
      width: this.metalUnitService.metalUnitSectionFormData.width,
      length: this.metalUnitService.metalUnitSectionFormData.length,
      thickness: this.metalUnitService.metalUnitSectionFormData.thickness,
      weight: this.metalUnitService.metalUnitSectionFormData.weight,
      finishing: this.metalUnitService.metalUnitSectionFormData.finishing,
      shape: this.metalUnitService.metalUnitSectionFormData.shape,
      hotWeight: this.metalUnitService.metalUnitSectionFormData.hotWeight,
      comment: "first line",
    }
    const metalMovementBody = {
      id: id,
      endDate: endDate,
      metalUnit: metalUnit,
      comment: comment
    }


    this.httpClient.put(BACKEND_URL_MVT_DETAIL + id, metalMovementBody).subscribe(response => {
      this.responseMetalMovement = response;
      this.metalMvtChangeActionSource.next(this.responseMetalMovement);
    });
  }
  // copy metalMovement

  copyMetalMovement(
    id,
    endDate,
    rot,
    uot,
    ft,
    otForActivity,
    speedSetpoint,
    speedRealised,
    operationId,
    productionLineId,
    sequenceNumberLocal,
    comment, 
    duplicateAfter,
    ) {

    const metalUnit = {
      id: this.metalUnitService.currentMetalUnitId,
      partIndex: this.metalUnitService.metalUnitSectionFormData.partNumber,
      partNumber: this.metalUnitService.metalUnitSectionFormData.partNumber,
      width: this.metalUnitService.metalUnitSectionFormData.width,
      length: this.metalUnitService.metalUnitSectionFormData.length,
      thickness: this.metalUnitService.metalUnitSectionFormData.thickness,
      weight: this.metalUnitService.metalUnitSectionFormData.weight,
      finishing: this.metalUnitService.metalUnitSectionFormData.finishing,
      shape: this.metalUnitService.metalUnitSectionFormData.shape,
      hotWeight: this.metalUnitService.metalUnitSectionFormData.hotWeight,
      packageType: this.metalUnitService.metalUnitSectionFormData.type,
      packageNo: this.metalUnitService.metalUnitSectionFormData.no,
      packageClass: this.metalUnitService.metalUnitSectionFormData.class,
      comment: "first line",
    }

    const metalMovementBody = {
      id: id,
      endDate: endDate,
      productionLineId: productionLineId,
      sequenceNumberLocal: sequenceNumberLocal,
      operationId: operationId,
      rot: rot,
      uot: uot,
      ft: ft,
      // otForActivity:otForActivity,
      speedSetpoint: speedSetpoint,
      speedRealised: speedRealised,
      metalUnit: metalUnit,
      comment: comment, 
      duplicateAfter: duplicateAfter,

    }

    this.httpClient.post(BACKEND_URL_MVT_DETAIL + id, metalMovementBody).subscribe(response => {
      this.responseMetalMovement = response;
      this.metalMvtChangeActionSource.next(this.responseMetalMovement);
    }, error =>{
      this.setMetalMvtLoading(true);
    });
  }

  // delete a metalMovement 

  deleteMetalMovement(deleteData, id) {
    console.log(deleteData, "deleteData");
    let req = new HttpRequest('DELETE', BACKEND_URL_MVT_DETAIL + id);
    let newReq = req.clone({ body: deleteData });
    return this.httpClient.request(newReq);
  }


 

  getEmptyMetalMovement(): MetalMovement {
    var x: MetalMovement = {
      metalMovementId: 0,
      operation: "",
      hasValidationErrors: false,
      coilPartNumber: "",
      packageNo: null,
      endDate: null,
      duration: {
        rot: null,
        uot: null,
        ft: null,
        otForActivity: null
      },
      speed: {
        setpoint: 0,
        realised: 0
      },
      metalUnit: null
    } as MetalMovement;
    return x;
  }

  // get the data that will be updated later on. 

  getMetalMovementByMetalMovementId(metalMovementId: number, metalUnitId: number): Observable<MetalMovement> {
    if (metalMovementId) {
      return this.http.get(`${environment.APIurl}/api/SIPDiPMetalMovement/${metalMovementId}`);
    }
    else {
      return this.http.get(`${environment.APIurl}/api/SIPDiPMetalMovement?metalUnitId=${metalUnitId}`);
    }
  }

  // get metal unit validation error => yellow box on metal movement screen
  getMetalMovementValidationErrors(metalMovementId: number, metalUnitId: number): Observable<MiniValidationError[]> {
    if (metalMovementId) {
      return this.http.get(`${environment.APIurl}/api/SIPDiPMetalMovement/${metalMovementId}/validationerrors`);
    }
    else {
      return this.http.get(`${environment.APIurl}/api/SIPDiPMetalMovement/validationerrors?metalUnitId=${metalUnitId}`);
    }
  }

  // get metal unit validation error => yellow box on metal unit screen

  getMetalUnitValidationErrors(metalMovementId: number, metalUnitId: number, ): Observable<MiniValidationError[]> {
    if (metalUnitId) {
      return this.http.get(`${environment.APIurl}/api/SIPDiPMetalMovement/unitsvalidationerrors?metalUnitId=${metalUnitId}`);
    }
    else {
      return this.http.get(`${environment.APIurl}/api/SIPDiPMetalMovement/${metalMovementId}/unitsvalidationerrors`);
    }
  }

  // get the output data 
  getRelatedMetalUnits(metalMovementId: number, metalUnitId: number, ): Observable<RelatedMetalUnits> {
    if (metalMovementId) {
      return this.http.get(`${environment.APIurl}/api/SIPDiPMetalMovement/${metalMovementId}/relatedmetalunits`);
    }
    else {
      return this.http.get(`${environment.APIurl}/api/SIPDiPMetalMovement/relatedmetalunits?metalUnitId=${metalUnitId}`);
    }
  }

  setMetalMvtLoading(mvtLoading) {
    console.log(mvtLoading, "mvtLoading");
    this.mvtLoadingSource.next(mvtLoading)
  }

  // is metal movement copied
  setMetalMvtCopied(isMvtCopied) {
    this.mvtCopySource.next(isMvtCopied);
  }

  // is metal movement copied


  setMetalMovementLoaded(mvtLoaded) {
    this.metalMvtLoadingSource.next(mvtLoaded);
  }

  setMetalUnitValidationResultLoaded(validationResults) {
    this.metalUnitValidationResultSource.next(validationResults);
  }

  // get operation and production line

  // get sitem Prodduction line and production from the backend
  getSiteProductionOperationFilters() {
    this.httpClient.get<SiteProductionOperationModel[]>(
      BACKEND_URL_OPERATION_PRODUCTIONLINE
    )
      .subscribe(transformedSiteProductionLines => {
        this.siteProductionOperation = transformedSiteProductionLines;
        this.siteProductionOperationUpdated.next([...this.siteProductionOperation]);
      });
  }
  getSiteProdOperationListener() {
    return this.siteProductionOperationUpdated.asObservable();
  }
}
