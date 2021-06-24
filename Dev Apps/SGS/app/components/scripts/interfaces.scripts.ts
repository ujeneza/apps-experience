// Common Interface

export interface IContactInfo {
    klantContactAchterNaam: string;
    klantContactVoorNaam: string;
    klantContactEmail: string;
    klantContactTelefoon: string;
    ebsd: string;
}

export interface IQGebruik {
    id: number | null;
    code: string;
    omschrijving: string;
}

// BBR Interfaces

export interface IBBRBestInfo {
    bestemmingID: number;
    adres1: string;
    adres2: string;
    postcode: string;
    plaats: string;
    beschrijving: string;
    lx1: number | null;
    ly1: number | null;
    bestemmingsTypeID: number | null;
    opmerkingen: string;
    kadAfdeling: string;
    kadAfdelingsNr: number | null;
    kadSectie: string;
    kadGrondNr: number | null;
    kadBisNr: number | null;
    kadExponent1: string;
    kadExponent2: number | null;
    grondverzetKwz: number | null;
    gebruikTerrein: string;
    eigenaar: string;
    contactPersoon: string;
    telefoon: string;
    email: string;
    bestemmingsAardID: number | null;
    explAdres1: string;
    explAdres2: string;
    explPostcode: string;
    explPlaats: string;
    kadNummers: string;
    afzetAdres1: string;
    afzetAdres2: string;
    afzetPostcode: string;
    afzetPlaats: string;
    maximaleVerontreinigingsgraad: string;
}

export interface IBBRIndieningsWijze {
    indieningswijzeID: number;
    indieningswijze: string;
}

export interface IBBRRecord {
    bodemBeheerRapportID: number;
    klantID: number | null;
    tvid: number | null;
    bestemmingID: number | null;
    gewestPlanOK: boolean | null;
    bpaOK: number | null;
    betalingOK: boolean | null;
    transportVerklaringOK: boolean | null;
    situatieSchetsOK: boolean | null;
    studieOntvangendeGrondOK: number | null;
    zintuiglijkeWaarnemingenOK: boolean | null;
    bbrStatusID: number | null;
    aanvraagDatum: Date | null;
    dossierbeheerderID: number | null;
    opmerkingen: string;
    factuurExportDatum: Date | null;
    statusDatum: Date | null;
    fysiekeScheiding: boolean | null;
    toekenningKadOk: boolean | null;
    toepassingAls: number | null;
    toekomstigGebruik: number | null;
    bestemmingGewestplan: number | null;
    bijzonderPlanAanleg: number | null;
    besluitUitgegravenGrond: number | null;
    studieDetail1: number | null;
    studieDetail2: number | null;
    studieDetail3: number | null;
    studieDetail4: number | null;
    studieDetail5: number | null;
    studieDetail6: number | null;
    studieDetail7: number | null;
    studieDetail8: number | null;
    studieDetail9: number | null;
    studieDetail10: number | null;
    studieDetail11: number | null;
    studieDetail12: number | null;
    studieDetail13: number | null;
    studieDetail14: number | null;
    studieDetail15: number | null;
    studieDetail16: number | null;
    studieDetail17: number | null;
    defAanwijzingBestemming: number | null;
    klantContactAchterNaam: string;
    klantContactVoorNaam: string;
    klantContactEmail: string;
    klantContactTelefoon: string;
    finaleOpmerkingen: string;
    ontvangstDatumTransportVerklaring: Date | null;
    finaalBBRAfgeven: boolean | null;
    emailSend: boolean | null;
    klantKenmerk: string;
    studieBestemmingID: number | null;
    ebsd: string;
    rapportNummer: string;
    rapportDatum: Date | null;
    datumEindGrondverzet: Date | null;
    datumStartGrondverzet: Date | null;
    aangevoerdeHoeveelheid: number | null;
    studieBouwstof: number | null;
    studieBouwstofEBSD: string;
    studieBouwstofNummer: string;
    studieBouwstofDatum: Date | null;
    besluitStudieBouwStof: number | null;
    indieningswijzeAanvulplan: number | null;
    statusDatumBBR: Date | null;
    goedkeuringTransportGefactureerd: boolean | null;
    bbrGefactureerd: boolean | null;
    finalEmailSend: boolean | null;
    grondtransportmeldingID: number | null;
    afnemersverklaringOntvangen: boolean | null;
    afnemersverklaringOntvangenDatum: Date | null;
    actueleMilieuvergunningBeschikbaar: boolean | null;
    bijkomendeOmschrijvingBestemming: string;
    afnemersVerklaringToesturen: boolean | null;
    datumBBRHerinnering: Date | null;
    startDatumGrondwerken: Date | null;
    aanvulPlanOntvangen: boolean | null;
    lijstBestemmingenBeschikbaar: boolean | null;
    categorieID: number | null;
    bestemmingDopID: number | null;
    interneOpmerking: string;
    werfOpvolging: string;
    geschiktVoorWerfbezoek: boolean | null;
    opmerkingenKlant: string;
    kadastraleWerkzone: number | null;
    bestemmingsAardID: number | null;
    bestemmingsBeschrijving: string;
    dossierbeheerderID_BBR: number | null;
}




export interface IBBROntvangstVerklaring {
    //id: number;
    technischVerslagID: number;
    tvZoneID: number;
    bodemBeheerRapportID: number;
    tvZoneNummer: string;
    startDateAsDate: string;
    endDateAsDate: string;
    realquantity: number;
    // submittedAt: Date;
}

export interface IBBROntvangstVerklaringOnlineIngevuld {
    bodemBeheerRapportId: number;
    mailTo: string;
    mailTo2: string;
    deelvolumes: IBBROntvangstVerklaring[];
    aangeverANDafnemer: boolean;
}

export interface IBBROntvangstVerklaringScreen {
    herkomstStraat: string;
    herkomstGemeente: string;
    herkomstTvEbsd: string;
    herkomstTvDatum: Date | null;
    herkomstKenmerk: string;
    herkomstCvNummer: number | null;
    herkomstDeelVolumes: string;
    bestemmingAdres: string;
    bestemmingAdres2: string;
    bestemmingPostcodeGemeente: string;
    bestemmingKadastraleGegevens: string;
    bestemmingLambert: string;
    bestemmingToepassing: string;
    bestemmingType: number;
}

export interface IBBROntvangstVerklaringPDF {
    technischVerslagID: number;
    titel: string;
    titel2: string;
    titel3: string;
    kenmerk: string;
    tvdatum: Date | null;
    ebsd: string;
    tvlambert1: string;
    tvZoneID: number;
    tvZoneNr: string;
    bodemBeheerRapportID: number;
    bestemmingGewestplan: number | null;
    toekomstigGebruik: number | null;
    fysiekeScheiding: boolean | null;
    opmerkingen: string;
    klantContactAchterNaam: string;
    klantContactVoorNaam: string;
    defAanwijzingBestemming: number | null;
    bestemmingsAardID: number | null;
    bbradres: string;
    bbrgemeente: string;
    kadastraleGegevens: string;
    lambert1: string;
    bestemming: string;
    llantNr: number | null;
    bknaam: string;
    knaam: string;
    bkorganisatie: string;
    bkadres1: string;
    bkadres2: string;
    bkgemeente: string;
    hoeveelheidGemeld: number | null;
    deelVolumes: string;
    studieEBSD: string;
    studieRapportNr: string;
    studieDatum: Date | null;
    studieBouwstof: number | null;
    studieBouwstofEBSD: string;
    studieBouwstofDatum: Date | null;
    studieBouwstofNummer: string;
    bbrkenmerk: string;
    studieBestemming: number | null;
    topNaam: string;
    topAdres: string;
    topGemeente: string;
    afzetAdres1: string;
    afzetAdres2: string;
    afzetPlaats: string;
    afzetPostcode: string;
    gtmZoneId: string;
    tvZoneKwaliteitGebruikBinnen: number | null;
    tvZoneKwaliteitGebruikBuiten: number | null;
    tvZoneKwaliteitGebruikBouwstof: number | null;
    tvZoneBeschrijving: string;
}

export interface IBBRStatus {
    bbrStatusID: number;
    status: string;
    flow: string;
}

export interface IBBRStatusGridRecord {
    bbrNummer: number;
    aanvraagDatum: Date | null;
    bbrStatusID: number | null;
    status: string;
    adres: string;
    afzetadres: string;
    plaats: string;
    bodemBeheerRapportID: number;
    klantKenmerk: string;
    projects: string;
    fileType: string;
    tvid: number | null;
    technischVerslagOwner: number | null;
}

// File Interface

export interface IFile {
    id: number;
    fileName: string;
    type: number;
}

export interface IFullFile extends IFile {
    userID: number | null;
    documentID: number | null;
    emailID: number | null;
    originalFolder: string;
    addedAtUtc: Date;
    file: any;
}


// GVT Interfaces

export interface IGvtBestemming {
    bestemmingID: number;
    adres: string | null;
    bestemmingsAard: string | null;
    lambert: string | null;
    plaats: string | null;
}

export interface IGVTEntity {
    grondtransportmeldingID: number;
    organisatie: string;
    indieningsDatum: Date | null;
    referentie: string;
    technischVerslagID: number | null;
    adres: string;
    projects: string;
    transportEindeDatum: Date | null;
    werkelijkeHoeveelheid: number | null;
    klantId: number | null;
}

export interface IGvtListItem {
    grondtransportmeldingId: number;
    beschrijving: string;
}

export interface IGVTStatus {
    bbrStatusID: number;
    status: string;
    flow: string;
}

//Klant Interfaces
export interface IBranche {
    brancheID: number;
    branche: string;
    magFinaalBBRAanvragen: boolean;
    registratieCode: number;
    isTopCgr: boolean | null;
    brancheNew: string;
    visibleOnSite: boolean;
    guiType: number | null;
    isDop: boolean | null;
}

export interface IKlantPoco {
    klantID: number;
    voornaam: string;
    achternaam: string;
    functie: string;
    organisatie: string;
    adres1: string;
    adres2: string;
    postcode: string;
    plaats: string;
    land: string;
    factuurAdres1: string;
    factuurAdres2: string;
    factuurPostcode: string;
    factuurLand: string;
    factuurPlaats: string;
    telefoon: string;
    fax: string;
    email: string;
    login: string;
    paswoord: string;
    contractOK: boolean | null;
    btwNummer: string;
    idkaartNummer: string;
    lidnummerBouwunie: string;
    geslacht: string;
    factuurExportDatum: Date | null;
    inschrijvingsDatum: Date | null;
    brancheID: number | null;
    beroepsorganisatieID : number | null;
    klantStatusID : number | null;
    lidNummerBouwUnieIsOk: boolean | null;
    datumActief: Date | null;
    gefactureerd: boolean | null;
    fk_Klant_Contractor : number | null;
    inrichtingStraat: string;
    inrichtingStraat2: string;
    inrichtingPostcode: string;
    inrichtingGemeente: string;
    inrichtingBestemmingstype: string;
    inrichtingKadastraleGegevens: string;
    inrichtingLX : number | null;
    inrichtingLY : number | null;
    inrichtingDatumMilieuvergunning: Date | null;
    inrichtingVergunningverlenendeInstantie: string;
    inrichtingDatumBouwvergunning: Date | null;
    inrichtingHoeveelheidGrond: string;
    facturatieStartDatum: Date | null;
    ebsdDetails: string;
    isGwCustomer: boolean | null;
    isVisibleForCustomers: boolean | null;
    aannemerLidNummer : number | null;
    aannemerEmail: string;
    statusDescription: string;
    uploadedIDs: number[];
}

//Kleine Werven Interfaces
export interface IKWDetail {
    kleineWervenMeldingID: number;
    isEigenGrondwerker: boolean;
    kleineWervenGrondwerkerPartijID: number | null;
    isEigenTransporteur: boolean;
    kleineWervenTranporteurPartijID: number | null;
    kleineWervenHerkomstLokatieID: number;
    kleineWervenBestemmingLokatieID: number;
    kleineWervenTopLokatieID: number;
    klantID: number;
    klantReferentie: string;
    geplandVolume: number;
    geplandeStartDatum: Date;
    werkelijkVolume: number | null;
    werkelijkeStartDatum: Date | null;
    werkelijkeEindDatum: Date | null;
    wervenVerklaringOntvangen: boolean;
    emailSend: boolean;
    creatieDatum: Date;
    statusID: number;
    status: string;
    isTop: boolean;
    klantVoornaam: string;
    klantAchternaam: string;
    klantFunctie: string;
    klantOrganisatie: string;
    klantAdres1: string;
    klantAdres2: string;
    klantPostCode: string;
    klantPlaats: string;
    klantLand: string;
    klantTelefoon: string;
    klantEmail: string;
    herkAdres1: string;
    herkAdres2: string;
    herkAfzetAdres1: string;
    herkAfzetAdres2: string;
    herkAfzetPlaats: string;
    herkAfzetPostCode: string;
    herkBeschrijving: string;
    herkContactPersoon: string;
    herkContainerBedrijfNaam: string;
    herkEigenaar: string;
    herkEmail: string;
    herkExplAdres1: string;
    herkExplAdres2: string;
    herkExplPlaats: string;
    herkExplPostcode: string;
    herkIsContainerBedrijf: boolean;
    herkIsContainerPark: boolean;
    herkKadAfdeling: string;
    herkKadAfdelingsNr : number | null;
    herkKadBisNr : number | null;
    herkKadExponent1: string;
    herkKadExponent2: number | null;
    herkKadGrondNr : number | null;
    herkKadNummers: string;
    herkKadSectie: string;
    herkKleineWervenLokatieType: string;
    herkLX1: number | null;
    herkLY1 : number | null;
    herkOpmerkingen: string;
    herkPlaats: string;
    herkPostcode: string;
    herkTelefoon: string;
    herkAdresCode: string;
    herkKadCode: string;
    herkLambCode: string;
    bestAdresCode: string;
    bestKadCode: string;
    bestLambCode: string;
    bestAchternaam: string;
    bestAdres1: string;
    bestAdres2: string;
    bestAfzetAdres1: string;
    bestAfzetAdres2: string;
    bestAfzetPlaats: string;
    bestAfzetPostCode: string;
    bestBtwNummer: string;
    bestContactPersoon: string;
    bestContainerBedrijfNaam: string;
    bestEigenaar: string;
    bestEmail: string;
    bestExplAdres1: string;
    bestExplAdres2: string;
    bestExplPlaats: string;
    bestExplPostcode: string;
    bestFaktuurAdres1: string;
    bestFaktuurAdres2: string;
    bestFaktuurLand: string;
    bestFaktuurPlaats: string;
    bestFaktuurPostcode: string;
    bestFunctie: string;
    bestIsContainerBedrijf: boolean;
    bestIsContainerPark: boolean;
    bestKadAfdeling: string;
    bestKadAfdelingsNr: number | null;
    bestKadBisNr : number | null;
    bestKadExponent1: string;
    bestKadExponent2: number | null;
    bestKadGrondNr : number | null;
    bestKadNummers: string;
    bestKadSectie: string;
    bestKleineWervenLokatieType: string;
    bestLX1: number | null;
    bestLY1 : number | null;
    bestOpmerkingen: string;
    bestOrganisatie: string;
    bestPlaats: string;
    bestPostcode: string;
    bestTelefoon: string;
    bestVoornaam: string;
    gwAchternaam: string;
    gwEmail: string;
    gwFirmaNaam: string;
    gwKleineWervenPartijType: string;
    gwPlaats: string;
    gwPostcode: string;
    gwStraat1: string;
    gwStraat2: string;
    gwTelefoon: string;
    gwVoornaam: string;
    tptAchternaam: string;
    tptEmail: string;
    tptFirmaNaam: string;
    tptKleineWervenPartijType: string;
    tptPlaats: string;
    tptPostcode: string;
    tptStraat1: string;
    tptStraat2: string;
    tptTelefoon: string;
    tptVoornaam: string;
}

export interface IKWGridItem {
    meldingID: number;
    isEigenGrondwerker: boolean;
    grondwerker: string;
    isEigenTransporteur: boolean;
    transporteur: string;
    herkomstID: number;
    herkomst: string;
    bestemmingID: number;
    bestemming: string;
    isTop: boolean;
    klantId: number;
    klantReferentie: string;
    geplandVolume: number;
    geplandeStartDatum: Date;
    werkelijkVolume: number | null;
    werkelijkeStartDatum: Date | null;
    werkelijkeEindDatum: Date | null;
    startDatum: Date | null;
    statusID: number;
    status: string;
}

// Puin

export interface IPuinBestInfo {
    bestemmingID: number;
    adres1: string;
    adres2: string;
    postcode: string;
    plaats: string;
    beschrijving: string;
    lx1: number | null;
    ly1: number | null;
    bestemmingsTypeID: number | null;
    opmerkingen: string;
    kadAfdeling: string;
    kadAfdelingsNr: number | null;
    kadSectie: string;
    kadGrondNr: number | null;
    kadBisNr: number | null;
    kadExponent1: string;
    kadExponent2: number | null;
    grondverzetKwz: number | null;
    gebruikTerrein: string;
    eigenaar: string;
    contactPersoon: string;
    telefoon: string;
    email: string;
    bestemmingsAardID: number | null;
    explAdres1: string;
    explAdres2: string;
    explPostcode: string;
    explPlaats: string;
    kadNummers: string;
    afzetAdres1: string;
    afzetAdres2: string;
    afzetPostcode: string;
    afzetPlaats: string;
    maximaleVerontreinigingsgraad: string;
    brekerCertificaatNummer: string;
}

//Technisch Verslag Interfaces

export interface ITVBbr {
    statusDescription: string;
    bodemBeheerRapportID: number | null;
    klantID: number | null;
    tvid: number | null;
    bestemmingID: number | null;
    gewestPlanOK: boolean | null;
    bpaOK: number | null;
    betalingOK: boolean | null;
    transportVerklaringOK: boolean | null;
    situatieSchetsOK: boolean | null;
    studieOntvangendeGrondOK: number | null;
    zintuiglijkeWaarnemingenOK: boolean | null;
    bbrstatusID: number | null;
    aanvraagDatum: Date | null;
    dossierbeheerderID: number | null;
    opmerkingen: string;
    factuurExportDatum: Date | null;
    statusDatum: Date | null;
    fysiekeScheiding: boolean | null;
    toekenningKadOk: boolean | null;
    toepassingAls: number | null;
    toekomstigGebruik: number | null;
    bestemmingGewestplan: number | null;
    bijzonderPlanAanleg: number | null;
    besluitUitgegravenGrond: number | null;
    studieDetail1: number | null;
    studieDetail2: number | null;
    studieDetail3: number | null;
    studieDetail4: number | null;
    studieDetail5: number | null;
    studieDetail6: number | null;
    studieDetail7: number | null;
    studieDetail8: number | null;
    studieDetail9: number | null;
    studieDetail10: number | null;
    studieDetail11: number | null;
    studieDetail12: number | null;
    studieDetail13: number | null;
    studieDetail14: number | null;
    studieDetail15: number | null;
    studieDetail16: number | null;
    studieDetail17: number | null;
    defAanwijzingBestemming: number | null;
    klantContactAchterNaam: string;
    klantContactVoorNaam: string;
    klantContactEmail: string;
    klantContactTelefoon: string;
    finaleOpmerkingen: string;
    ontvangstDatumTransportVerklaring: Date | null;
    finaalBBRAfgeven: boolean | null;
    emailSend: boolean | null;
    klantKenmerk: string;
    studieBestemmingID: number | null;
    ebsd: string;
    rapportNummer: string;
    rapportDatum: Date | null;
    datumStartGrondverzet: Date | null;
    datumEindGrondverzet: Date | null;
    aangevoerdeHoeveelheid: number | null;
    studieBouwstof: number | null;
    studieBouwstofEBSD: string;
    studieBouwstofNummer: string;
    studieBouwstofDatum: Date | null;
    besluitStudieBouwStof: number | null;
    indieningswijzeAanvulplan: number | null;
    statusDatumBBR: Date | null;
    goedkeuringTransportGefactureerd: boolean | null;
    bbrGefactureerd: boolean | null;
    finalEmailSend: boolean | null;
    grondtransportmeldingID: number | null;
    afnemersverklaringOntvangen: boolean | null;
    afnemersverklaringOntvangenDatum: Date | null;
    actueleMilieuvergunningBeschikbaar: boolean | null;
    bijkomendeOmschrijvingBestemming: string;
    afnemersVerklaringToesturen: boolean | null;
    datumBBRHerinnering: Date | null;
    startDatumGrondwerken: Date | null;
    aanvulPlanOntvangen: boolean | null;
    lijstBestemmingenBeschikbaar: boolean | null;
    categorieID: number | null;
    bestemmingDopID: number | null;
    interneOpmerking: string;
    werfOpvolging: string;
    geschiktVoorWerfbezoek: boolean | null;
    opmerkingenKlant: string;
    kadastraleWerkzone: number | null;
    bestemmingsAardID: number | null;
    bestemmingsBeschrijving: string;
    dossierbeheerderID_BBR: number | null;
}

export interface ITVDetail {
    technischVerslagID: number;
    factuurReferentieKlant: string;
    titel: string;
    kenmerk: string;
    ebsd: string;
    beschrijving: string;
    publiek: boolean | null;
    indieningsDatum: Date | null;
    indieningswijze: string;
    status: string;
    klantNaam: string;
    klantId: number | null;
    titel2: string;
    titel3: string;
    klantContactAchternaam: string;
    klantContactVoornaam: string;
    klantContactEmail: string;
    klantContactTelefoon: string;
    isEvaluatieVlarebo2008: boolean | null;
    zones: ITVZone[];
    gtm: ITVGtm[];
    bbr: ITVBbr[];
    tvFiles: IFile[];
    mailConformFiles: IFile[];
}

export interface ITVGtm {
    werkelijkeHoeveelheid: number | null;
    grondtransportmeldingId: number;
    klantID: number | null;
    klantContactAchternaam: string;
    klantContactVoornaam: string;
    klantContactTelefoon: string;
    klantContactEmail: string;
    klantKenmerk: string;
    topCrgId: number | null;
    grondtransportmeldingGebruikId: number | null;
    transportAanvangDatum: Date | null;
    transportEindeDatum: Date | null;
    technischVerslagID: number | null;
    herkomst: string;
    adres: string;
    postcode: string;
    plaats: string;
    lx: number | null;
    ly: number | null;
    indieningsDatum: Date | null;
    afgravingsplanOntvangen: boolean | null
    verklaringAfnemerOntvangen: boolean | null;
    gefactureerd: boolean | null;
    emailSend: boolean | null;
    interneOpmerking: string;
    werfOpvolging: string;
}

export interface ITVSearch {
    technischVerslagID: number;
    naam: string;
    titel: string;
    straat: string;
    gemeente: string;
    indieningsdatum: Date | null;
    status: string;
    ebsd: string;
}

export interface ITVStatus {
    technischVerslagID: number;
    factuurReferentieKlant: string;
    kenmerk: string;
    ligging: string;
    indieningsDatum: Date;
    status: string;
    samengevoegdDoor: number;
    externTV: boolean;
}

export interface ITVStatusDefinition {
    tvStatusID: number;
    status: string;
    flow: string;
}

export interface ITVVolume {
    tvZoneID: number;
    tvZoneNr: string;
    beschrijving: string;
    beschikbaar: number
    kgbuOmschrijving: string;
    kgbiOmschrijving: string;
    kgboOmschrijving: string;
}

export interface ITVZone {
    id: string;
    tvzoneID: number;
    technischVerslagZoneID: number;
    beschrijving: string;
    hoeveelheid: number | null;
    kadastraleGegevens: string;
    lx1: number | null;
    ly1: number | null;
    lx2: number | null;
    ly2: number | null;
    kgbuCode: number;
    kgbiCode: number;
    kgboCode: number;
    kwaliteitGebruikBuiten: number | null;
    kwaliteitGebruikBinnen: number | null;
    kwaliteitGebruikBouwstof: number | null;
    kgbuOmschrijving: string;
    kgbiOmschrijving: string;
    kgboOmschrijving: string;
    beschikbaar: number;
    saldo: number;
}

export interface ITVZoneDetail {
    tvZoneID: number;
    technischVerslagZoneID: number;
    technischVerslagID: number;
    beschrijving: string;
    hoeveelheid: number | null;
    kwaliteitGebruikBinnen: number | null;
    saldo: number;
    kgiKwaliteitGebruikID: number;
    kgiCode: number;
    kgiOmschrijving: string;
    kgiType: string;
    kguKwaliteitGebruikID: number;
    kguCode: number;
    kguOmschrijving: string;
    kguType: string;
    kgoKwaliteitGebruikID: number;
    kgoCode: number;
    kgoOmschrijving: string;
    kgoType: string;
    kwaliteitGebruikBuiten: number | null;
    kwaliteitGebruikBouwstof: number | null;
}

// puin interfaces
export interface IPuinIndexTechnischVerslag {
    index: number;
    tvId: number;
}