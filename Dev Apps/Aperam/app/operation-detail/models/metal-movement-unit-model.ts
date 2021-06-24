// Metal mouvement 
export default interface MetalMovementUnit {
    metalMovementId: number,
    operation: string,
    hasValidationErrors: boolean,
    coilPartNumber: string,
    coilNumber: string,
    partNumber: string,
    packageNo: string,
    sequenceNumber: number,
    endDate: Date,
    duration: Duration,
    speed: Speed,
    metalUnit: MetalUnit
}

interface Duration{
    rot: number,
    uot: number,
    ft: number,
    otForActivity: number
}

interface Speed{
    setpoint: number,
    realised: number
}

export interface MetalUnit{
    metalUnitId: number,
    metalUnit: string,
    partIndex: string,
    sequenceNumber: number,
    hasValidationErrors: boolean,
    coilPartNumber: string, 
    coilNumber: string,
    partNumber: string,
    batchName: string,
    operation: string,
    macroArticle: string,
    weight: number,
    hotWeight: number,
    characteristics: Characteristics,
    dimensions: Dimensions,
    package: Package,
    nextMetalMovementId: number
}

interface Characteristics{
    steelgrade: string,
    finishing: string,
    shape: string
}

interface Dimensions{
    length: number,
    width: number,
    thickness: number
}

interface Package{
    no: string,
    type: string,
    class: string
}

// interface MetalMovementIdentification{
//     siteId: number,
//     site: string,
//     productionLineId: number,
//     productionLine: string,
//     operationNameLocal: string,
//     operationNameFinance: string
// }

// interface MetalUnit{

// }