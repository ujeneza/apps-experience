import { ProductionViewModel } from "./production-view.model";

export interface ProductionViewApiModel {
    hasNext: boolean;
    hasPrevious: boolean;
    count: number;
    entities: ProductionViewModel[];
    }