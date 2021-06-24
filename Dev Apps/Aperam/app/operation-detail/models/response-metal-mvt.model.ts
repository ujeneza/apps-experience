
import MiniValidationError from './mini-validation-error-model';
import MetalMovementUnit from './metal-movement-unit-model';

export interface ResponseMetalMvt{
    metalMovement: MetalMovementUnit, 
    metalMovementRelatedItemsValidationErrors: MiniValidationError,
    successfullySavedAndChecked: boolean,
    metalMovementValidationResults:any[];
}