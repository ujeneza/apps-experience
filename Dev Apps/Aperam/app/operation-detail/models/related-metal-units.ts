export interface RelatedMetalUnits {
    inputMetalUnits: InputMetalUnit[],
    outputMetalUnits: OutputMetalUnit[]
}

export interface InputMetalUnit{
    metalUnitId: number,
    metalUnit: string,
    previousMetalMovementId: number,
    hasValidationErrors: boolean,
    length: number,
    width: number,
    thickness: number,
    weight: number
}

export interface OutputMetalUnit{
    metalUnitId: number,
    nextMetalMovementId: number,
    metalUnit: string,
    hasValidationErrors: boolean,
    packageNo: string,
    weight: number
}