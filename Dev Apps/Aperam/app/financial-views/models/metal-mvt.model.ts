import { MetalUnitModel } from "./metal-unit.model";

export interface MetalMvtModel {
  metalMovementId: number,
  site: string;
  coilNo: string;
  consumedWeight: number;
  producedWeight: number;
  operation:number;
  operationEnd: Date;
  hasValidationErrors: boolean;
  metalUnits: MetalUnitModel[];
  actions: string;
  }