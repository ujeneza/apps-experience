import { ConsumptionViewModel } from "./consumption-view.model";

export interface ConsumptionViewApiModel {
    hasNext: boolean;
    hasPrevious: boolean;
    count: number;
    entities: ConsumptionViewModel[];
    }