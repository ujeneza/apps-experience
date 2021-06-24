import { Time } from "@angular/common";

export interface OperationSection {
    id: number,
    coilNumber: string;
    coilPartNumber: string;
    endDate: Date | string;
    metalMovementId: number,
    operation: string;
    partNumber: string;
    sequenceNumber: number
    packageNo: string; 
    time:Date;
    speedSetpoint: number;
    speedRealised: number;
    operationId: number;
    productionLineId: number;
    sequenceNumberLocal: number;
    comment: string;
    rot: number,
    uot: number,
    ft: number,
    otForActivity: number
    duration: DurationModel;
    speed: SpeedModel;
    siteId: number;
    hasValidationErrors: boolean;
    metalUnit: any;
}