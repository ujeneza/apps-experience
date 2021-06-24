import { ValidationErrorsViewModel } from "./validation-errors-view.model";

export interface ValidationErrorsViewApiModel {
    hasNext: boolean;
    hasPrevious: boolean;
    count: number;
    entities: ValidationErrorsViewModel[];
    }