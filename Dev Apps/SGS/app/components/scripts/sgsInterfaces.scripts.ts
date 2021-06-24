// BBR

export interface ISgsBBRItem {
    bbrnummer: string;
    naam: string;
    aanvraagDatum: Date | null;
    BodemBeheerRapportID: number;
    nietGoedGekeurd: string;
    technischVerslagID: number;
    adres1: string;
    adres2: string;
    postcode: string;
    plaats: string;
    beroepsorganisatiecode: string;
    statusDatum: Date | null;
    gefactureerd: string;
    indieningswijze: string;
    startDatumGrondwerken: Date | null;
    klantKenmerk: string;
    tvid: number | null; // 2 times in SELECT in Stored procedure
    bbrstatusID: number | null;
    status: string;
    adres: string;
    afzetadres: string;
    projects: number;
    fileType: string; // in stored procedure: NULL AS FileType
    hoeveelheid: number | null;
}

export interface SgsGvtJoinedData {

    bbrNummer: number;
    bestemmingsTypeID: number;
    studieBestemming: string;
    kadAfdeling: string;
    kadAfdelingsNr: number;
    kadSectie: string;
    kadNummers: string;
    adres1: string;
    adres2: string;
    postcode: string;
    plaats: string;
    lX1: number;
    lY1: number;
    gebruikTerrein: string;
    eigenaar: string;
    contactPersoon: string;
    telefoon: string;
    email: string;
    afzetAdres1: string;
    afzetAdres2: string;
    afzetPlaats: string;
    afzetPostcode: string;
    maximaleVerontreinigingsgraad: string;
    bestemmingsAard: string;
    bestemmingsAardId: string;
    klantNaam: string;
    klantContact: string;
    tvStatusID: number;
    opmerkingenTV: string;
    statusDescription: string;
    interneOpmerkingGTM: string;

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

export interface ISgsGvtDeelvolume {
    tvZoneID: number;
    technischVerslagID: number;
    technischVerslagZoneID: number;
    beschrijving: string;
    kadastraleGegevens: string;
    lx1: number;
    ly1: number;
    geplandGebruik: number;
    gebruik1: boolean;
    gebruik2: boolean;
    gebruik3: boolean;
    gebruik4: boolean;
    gebruik5: boolean;
    gebruik6: boolean;
    gebruik7: boolean;
    gebruik8: boolean;
    gebruik9: boolean;
    gebruik10: boolean;
    gebruik11: boolean;
    gebruik12: boolean;
    gebruik13: boolean;
    gebruik14: boolean;
    gebruik15: boolean;
    gebruik16: boolean;
    gehalteMaterialen: number;
    gehalteStenen: number;
    id: number;
    saldo: number;
    beschikbaar: number;
    tvZoneNr: string;
    kgbuOmschrijving: string;
    kgbiOmschrijving: string;
    kgboOmschrijving: string;
    akkoord: boolean;
    bodemBeheerRapportID: number;
    werkelijkeHoeveelheid: number; // isnull(BBRTVZones.WerkelijkeHoeveelheid,0)as WerkelijkeHoeveelheid 
    hoeveelheidGemeld: number;
    bbrTVZoneToepassingCode: string;
}

export interface iSgsTransportListItem {
        transportID: number;
        datum : Date;
        datumTot : Date;
        vervoerder: string;
        hoeveelheid: number;
        opmerkingen: string;
        tvNummer: string;

}

export interface ISgsCategorieItem {
    id: number;
    description: string;
}

export interface ISgsStudieBestemmingItem {
    studieBestemmingID: number;
    studieBestemming: string;
}

export interface ISgsBBRTypeItem {
    bestemmingsTypeID: number;
    bestemming: string;
    bestemmingsType: number;
}

export interface bbrStatusItem {
    bbrStatusID: number;
    status: string;
}


// Bestemming
export interface ISgsBestAardListItem {
    bestemmingsAardId: number;
    bestemmingsAard: string;
}

// Branche
export interface ISgsBrancheListItem {
    brancheID: number,
    branche: string
}

// Dossier
export interface ISgsDossierComboListItem {
    dossierBeheerderID: number;
    naam: string;
}


// GTM
export interface ISgsGTMStatusListItem {
    id: number;
    omschrijving: string;
}

export interface ISgsGTMStatus {
    grondtransportmeldingId: number;
    klantKenmerk: string;
    indieningsDatum: Date | null;
    klant: string;
    topCgr: string;
    herkomst: string;
    verklaringAfnemerOntvangen: boolean;
    emailSend: boolean;
}

export interface ISgsGtmMail {
    grondtransportmeldingId: number;
    organisatie: string;
    klantContactVoornaam: string;
    klantContactAchternaam: string;
    klantContactEmail: string;
    tVAdres: string;
    tVGemeente: string;
    topAdres: string;
    topPostcode: string;
    topGemeente: string;
    topOrganisatie: string;

}


export interface ISgsGTMVolumes {
    tvZoneNr: number;
    beschrijving: string;
    kgbuOmschrijving: string;
    kgbiOmschrijving: string;
    kgboOmschrijving: string;
    hoeveelheid: number | null;
    werkelijkeHoeveelheid: number | null;
    grondtransportmeldingZoneID: boolean;
    tvZoneId: number;
}

// mail 

export interface ISgsmail {
    from: string;
    to: string;
    subject: string;
    body: string;
    cc: string;
    datum: Date;
}

export interface IsgMailDataShared {
    id: number;
    type: string;
    action: string;
    mailId: number;
    statusId: number;
    mailFormatType: string;
}

export interface ISgsFullMail {
    id: number;
    type: string;
    from: string;
    to: string;
    cc: string;
    subject: string;
    body: string;
    datum: Date;
    uploadedIDs: number[];
    attachment?: string[];
    dossierBeheerder?: string;
}


export interface isgsMailHistory {
    datum: Date;
    emailID: number;
    subject: string;
    to: string
}

export interface ISgsKlantEmailHistory {
    emailID: number;
    subject: string;
    datum: Date | null;
    to: string;
}








// GVT

export interface ISgsGVTItem {
    bbrNummer: string;
    naam: string;
    aanvraagDatum: Date | null;
    BodemBeheerRapportID: number;
    nietGoedGekeurd: string;
    technischVerslagID: number;
    adres1: string;
    adres2: string;
    postcode: string;
    plaats: string;
    beroepsorganisatiecode: string;
    statusDatum: Date | null;
    gefactureerd: string;
    indieningswijze: string;
    startDatumGrondwerken: Date | null;
    klantKenmerk: string;
    tvid: number | null; // 2 times in SELECT in Stored procedure
    bbrstatusID: number | null;
    status: string;
    adres: string;
    afzetadres: string;
    projects: number;
    fileType: string; // in stored procedure: NULL AS FileType
    hoeveelheid: number | null;
}

export interface EvaluatieFormErrors {
    APosBesluitErrorMessage: string;
    BPosBesluitErrorMessage: string;
    CPosBesluitErrorMessage: string;
    DPosBesluitErrorMessage: string;
    EPosBesluitErrorMessage: string;
    FPosBesluitErrorMessage: string;
    GPosBesluitErrorMessage: string;
    HPosBesluitErrorMessage: string;
    IPosBesluitErrorMessage: string;
    JPosBesluitErrorMessage: string;
    KPosBesluitErrorMessage: string;
    LPosBesluitErrorMessage: string;
    datumDemonsteringErrorMessage: string;
    volumeErrorMessage: string;
    vlareboVolume: number;
    isBesluit: boolean
}

export interface ISgGvtMail {
    bBRStatusID: number;
    geslacht: string;
    bBRNummer: string;
    klantKenmerk: string;
    adres1: string;
    adres2: string;
    postcode: string;
    plaats: string;
    lX1: number;
    lY1: number;
    bestemmingsAardID: number;
    bestemmingsBeschrijving: string;
    afzetAdres1: string;
    afzetPlaats: string;
    titel: string;
    kenmerk: string;
    tVDatum: Date;
    klantContactAchterNaam: string;
    klantContactVoorNaam: string;
    klantContactEmail: string;
    email: string;
    achternaam: string;
    voornaam: string;
    telefoon: string;
    aantalDeelzones: string;
    grondtransportmeldingID: number;
    kadastraleWerkzone: number;

}


// Klant
export interface ISgsBeroepsorganisatieListItem {
    beroepsorganisatieID: number,
    beroepsorganisatie: string
}

export interface ISgsStatusGridItem {
    klantID: number;
    naam: string;
    email: string;
    voornaam: string;
    achternaam: string;
    organisatie: string;
    lidNummerBouwUnie: string;
    btwNummer: string;
    beroepsorganisatiecode: string;
    lidNummerBouwUnieIsOk: boolean;
    gefactureerd: string;
    inschrijvingsDatum: Date | null;
    datumActief: Date | null;
    usage: number;
    facturatieStartDatum: Date | null;
}

export interface ISgsKlantComboListItem {
    klantID: number;
    naam: string;
}

export interface ISgsKlantStatusListItem {
    klantStatusID: number,
    status: string
}


export interface ISgsKlantWijziging {
    id: number;
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
    factuurPlaats: string;
    factuurLand: string;
    fax: string;
    email: string;
    login: string;
    paswoord: string;
    btwNummer: string;
    idkaartNummer: string;
    lidnummerBouwunie: string;
    geslacht: string;
    brancheID: number | null;
    beroepsorganisatieID: number | null;
    inrichtingStraat: string;
    inrichtingStraat2: string;
    inrichtingPostcode: string;
    inrichtingGemeente: string;
    inrichtingBestemmingstype: string;
    inrichtingKadastraleGegevens: string;
    inrichtingLX: number | null;
    inrichtingLY: number | null;
    inrichtingDatumMilieuvergunning: Date | null;
    inrichtingVergunningverlenendeInstantie: string;
    inrichtingDatumBouwvergunning: Date | null;
    inrichtingHoeveelheidGrond: string;
    fk_Klant_Contractor: number | null;
    changesApproved: boolean | null;
    changesApprovedOrDeniedBy: number | null;
    changesApprovedOrDeniedOnUtc: Date | null;
}

export interface ISgsKlantMail {
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
    felefoon: string;
    fax: string;
    email: string;
    login: string;
    paswoord: string;
    geslacht: string;
    idKaartNummer: string;
    lidnummerBouwunie: string;
    beroepsorganisatie: string;
    branche: string;
    btwNummer: string;
    klantStatusID: number;
    status: string;
    brancheID: number;
    registratieCode: number;
    inrichtingStraat: string;
    inrichtingStraat2: string;
    inrichtingPostcode: string;
    inrichtingGemeente: string;

}


//Technisch Verslag Interfaces

export interface ISgsTVByStatus {
    technischVerslagID: number;
    titel: string;
    indieningswijze: string;
    indieningsDatum: Date | null;
    status: string;
    statusDatum: Date | null;
    naam: string;
    count: number;
    gefactureerd: string;
    gemeenteOnderzoekslocatie: string;
    isEvaluatieVlarebo2008: boolean | null;
    samengevoegdDoor: number | null;
    externTV: boolean | null;
}

export interface sgsTvJoinedData {
    klantId: number | null;
    technischVerslagID: number;
    voornaam: string;
    achternaam: string;
    functie: string;
    organisatie: string;
    adres1: string;
    adres2: string;
    postcode: string;
    plaats: string;
    land: string;
    telefoon: string;
    fax: string;
    titel: string;
    onderzoekslocatie_straat: string;
    onderzoekslocatie_gemeente: string;
    referentie: string;
    beschrijving: string;
    indieningsDatum: Date | null;
    indieningswijzeID: number | null;
    grondverzetTypeID: number | null;
    opmerkingen: string;
    tvDatum: Date | null;
    isTopCgr: boolean | null;
    isBewerktGemengd: boolean | null;
    referentieKlant: string;
    centraalPuntLX: number | null;
    centraalPuntLY: number | null;
    bestemmingsTypeID: number | null;
    bodemsaneringsdeskundige: string;
    dossierBeheerderID: number | null;
    isPubliekBeschikbaar: boolean | null;
    isExternTV: boolean | null;
    externTvGeldigTot: Date | null;
    isGefactureerd: boolean | null;
    dataAanvullingen: string;
    statusID: number | null;
    isEvaluatieVlarebo2008: boolean | null;
    status: string;
    flow: string;
    interneOpmerking: string;
    werfOpvolging: string;
    werfOpvolgingZonderGvt: string;
    onderzoekslocatieBetreftTopCgr: number | null;
    samengevoegdDoor: number | null;
    isAfgesloten: boolean;
    technischVerslagAfsluitRedenID: number | null;
    afsluitRedenVolume: string;
    afsluitRedenAfvoerNaarBrusselWallonie: boolean | null;
    afsluitRedenAfvoerNaarBrusselWallonieVolume: string;
    afsluitRedenToegepastZonderGvtBinnenDeWerf: boolean | null;
    afsluitRedenToegepastZonderGvtBinnenDeWerfVolume: string;
    afsluitRedenToegepastZonderGvtBuitenDeWerf: boolean | null;
    afsluitRedenToegepastZonderGvtBuitenDeWerfVolume: string;
    afsluitRedenAfgezeefdPuinTop: boolean | null;
    afsluitRedenAfgezeefdPuinTopVolume: string;
    afsluitRedenMinvolumeVanaf10pWegensNietUitgevoerd: boolean | null;
    afsluitRedenMinvolumeVanaf10pWegensNietUitgevoerdVolume: string;
    afsluitRedenMeervolumeVanaf10p: boolean | null;
    afsluitRedenMeervolumeVanaf10pVolume: string;
    afsluitRedenDeelsViaGb: boolean | null;
    afsluitRedenDeelsViaGbVolume: string;
    afsluitRedenDeelsOpDeWerfGeblevenVoorDeBouwheer: boolean | null;
    afsluitRedenDeelsOpDeWerfGeblevenVoorDeBouwheerVolume: string;
    afsluitRedenOverschattingInTv: boolean | null;
    afsluitRedenOverschattingInTvVolume: string;
    afsluitRedenZoneVoorGebruikTerPlaatse: boolean | null;
    afsluitRedenZoneVoorGebruikTerPlaatseVolume: string;
    afsluitRedenGtmNaarTopNieuwTv: boolean | null;
    afsluitRedenGtmNaarTopNieuwTvVolume: string;
    afsluitRedenGtmNaarCofETopCgr: boolean | null;
    afsluitRedenGtmNaarCofETopCgrVolume: string;
    afsluitRedenGedeelteNietDoorLidGwUitgevoerd: boolean | null;
    afsluitRedenGedeelteNietDoorLidGwUitgevoerdVolume: string;
    afsluitRedenBbrsGeweigerd: boolean | null;
    afsluitRedenBbrsGeweigerdVolume: string;
    afsluitRedenSamengevoegd: boolean | null;
    afsluitRedenSamengevoegdVolume: string;
    afsluitRedenNietGekend: boolean | null;
    afsluitRedenNietGekendVolume: string;
    afsluitRedenOverige: boolean | null;
    afsluitRedenOverigeVolume: string;
    checkA_01: number | null;
    checkB_01: number | null;
    checkB_Adm_01_Adres: number | null;
    checkB_Adm_02_LCoord: number | null;
    checkB_Adm_03_Kad: number | null;
    checkB_Adm_04_IdentInit: number | null;
    checkB_Adm_05_BestemTyp: number | null;
    checkB_Adm_06_VermeldLigging: number | null;
    checkB_His_01_terrein: number | null;
    checkB_His_02_Vlarebo: number | null;
    checkB_His_03_Vlarem: number | null;
    checkB_His_04_Organolep: number | null;
    checkB_His_05_Voormalig: number | null;
    checkB_His_06_Aanvullend: number | null;
    checkB_Typ_01_Algemeen: number | null;
    checkB_Typ_02_Volume: number | null; // Database allows for decimal values
    checkB_Typ_03_Diepte: number | null; // Database allows for decimal values
    checkB_Typ_04_Lenge: number | null; // Database allows for decimal values
    checkB_PosBesluit_01_Voorstudie: number | null;
    checkC_Typ_01_BouwPrj: number | null;
    checkC_Typ_02_LijnTrj: number | null;
    checkC_Typ_03_Hopen: number | null;
    checkC_Typ_04_HopenAnder: number | null;
    checkC_Typ_05_Deels: number | null;
    checkC_Mon_01_voldoende: number | null;
    checkC_Mon_02_Verdacht: number | null;
    checkC_Mon_03_Datum: Date | null;
    checkC_Mon_04_Verslag: number | null;
    checkC_Ana_01_Correct: number | null;
    checkC_Ana_02_Voldoende: number | null;
    checkC_Ana_03_Verdacht: number | null;
    checkC_Ana_04_SAP: number | null;
    checkC_Ana_05_ntGekend: number | null;
    checkC_Ana_06_Bijkomend: number | null;
    checkC_Ana_07_Schud: number | null;
    checkC_Ana_08_ErkendLab: number | null;
    checkC_Ana_09_CMA: number | null;
    checkC_Ana_10_Cert: number | null;
    checkC_PosBesluit_01_Strat: number | null;
    checkD_Eval_01_NormPrm: number | null;
    checkD_Eval_02_NtNormPrm: number | null;
    checkD_Eval_03_pH: number | null;
    checkD_Eval_04_toetsTbl: number | null;
    checkD_Eval_05_toetsing: number | null;
    checkD_Eval_06_ToetsMeth: number | null;
    checkD_Eval_07_Herbruik: number | null;
    checkD_Eval_08_BodemVrmdMat: number | null;
    checkD_Eval_Kad_00: number | null;
    checkD_Eval_Kad_01_Perceel: number | null;
    checkD_Eval_Kad_02_heterog: number | null;
    checkD_Eval_Kad_03_Homog: number | null;
    checkD_Eval_Rich_01_Grondwater: number | null;
    checkD_Eval_Rich_02_Bemaling: number | null;
    checkD_Eval_Rich_03_Blootst: number | null;
    checkD_Eval_Rich_04_TssTijds: number | null;
    checkD_Eval_11_PosBesluit: number | null;
    checkE_ZoneringsPlan: number | null;
    checkF_OpmetingsTabel: number | null;
    checkConclusion: number | null;
    statusDatum: Date | null;
    // New fields 2019
    checkB_His_03B_Lozing: number | null;
    checkB_Typ_02B_VlaremaVolume: number | null;
    checkC_Mon_01B_MinStrategie: number | null;
    checkC_Ana_04B_PCB: number | null;
    checkC_Ana_05B_SAPWater: number | null;
    checkD_Eval_09_Asbest: number | null;
    checkD_Eval_Kad_04_Waterloop: number | null;
    checkD_Eval_Rich_05_Milieu: number | null;
    checkD_Eval_Rich_06_Voorw: number | null;
    checkG_VolTabel: number | null;
    checkH_FotoRep: number | null;
    checkI_Bouwplan: number | null;
    checkJ_VolBerek: number | null;
    checkK_InfoVorige: number | null;
    checkL_Delfstof: number | null;
    checkL_GeologischeBeschrijvingID: number | null;
    checkL_PrimaireOppDelfstofID: number | null;
    checkL_Volume: number | null;

    checkC_Typ_06_OnbevLineair: number | null;
    checkC_Typ_07_OnbevBreder: number | null;
    checkC_Typ_08_OnbevGracht: number | null;
    checkC_Typ_09_BevaarMonster: number | null;


}

export interface sgsTvSaveJoinedData {
    klantId: number | null;
    technischVerslagID: number;
    voornaam: string;
    achternaam: string;
    functie: string;
    organisatie: string;
    adres1: string;
    adres2: string;
    postcode: string;
    plaats: string;
    land: string;
    telefoon: string;
    fax: string;
    titel: string;
    onderzoekslocatie_straat: string;
    onderzoekslocatie_gemeente: string;
    referentie: string;
    beschrijving: string;
    indieningsDatum: Date | null;
    indieningswijzeID: number | null;
    grondverzetTypeID: number | null;
    opmerkingen: string;
    tvDatum: Date | null;
    isTopCgr: boolean | null;
    isBewerktGemengd: boolean | null;
    referentieKlant: string;
    centraalPuntLX: number | null;
    centraalPuntLY: number | null;
    bestemmingsTypeID: number | null;
    bodemsaneringsdeskundige: string;
    dossierBeheerderID: number | null;
    isPubliekBeschikbaar: boolean | null;
    isExternTV: boolean | null;
    externTvGeldigTot: Date | null;
    isGefactureerd: boolean | null;
    dataAanvullingen: string;
    statusID: number | null;
    isEvaluatieVlarebo2008: boolean | null;
    status: string;
    flow: string;
    interneOpmerking: string;
    werfOpvolging: string;
    werfOpvolgingZonderGvt: string;
    onderzoekslocatieBetreftTopCgr: number | null;
    samengevoegdDoor: number | null;
    isAfgesloten: boolean;
    technischVerslagAfsluitRedenID: number | null;
}

export interface ISgsTvMail {
    geslacht: string;
    klantContactEmail: string;
    titel: string;
    kenmerk: string;
    tVDatum: Date;
    statusID: number;
    titel2: string;
    titel3: string;
    emailSend: boolean;
    dossierbeheerder: string;
    dossierBeheerderTitel: string;
    externTV: boolean;
    factuurReferentieKlant: string;
}

export interface sgsVolumes {
    tvZoneNr: number;
    tvZoneId: number;
    beschrijving: string;
    kgbuOmschrijving: string;
    kgbiOmschrijving: string;
    kgboOmschrijving: string;
    hoeveelheid: number | null; // Beschikbaar
    werkelijkeHoeveelheid?: number | null; // geplandGebruik?: number;
    grondtransportmeldingZoneID?: boolean;
    bBRTVZoneToepassingen?: {};
    cAkkoord?: boolean;

}


export interface ISgsTVAfsluitReden {
    id: number;
    description: string;
}

export interface ISgsGVTType {
    id: number;
    type: string;
}

export interface ISgsGeologischeBeschrijving {
    id: number;
    omschrijving: string;
}

export interface ISgsprimaireOppervlakte {
    id: number;
    omschrijving: string;
}




// dossierbeheerder

export interface ISgsDossierBeheerder {
    dossierBeheerderID: number;
    voornaam: string;
    achternaam: string;
    naam: string;
    login: string;
    paswoord: string;
    email: string;
    isActive: boolean
    passwordExpiresOn: Date;

}