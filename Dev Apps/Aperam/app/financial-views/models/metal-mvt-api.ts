import { MetalMvtModel } from "./metal-mvt.model";


export interface MetalMvtViewApiModel {
    hasNext: boolean;
    hasPrevious: boolean;
    count: number;
    entities: MetalMvtModel[];
    }