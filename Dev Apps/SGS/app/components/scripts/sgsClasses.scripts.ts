// BBR
export class SgsBBRZoekVelden {
    code: number | null;
    tvId: number | null;
    klantId: number | null;
    dossierBeheerderId: number | null;
    statusId: number | null;
    bestemmingsaardId: number | null;
    gefactureerd: number | null;
    straat: string;
    postcode: string;
    gemeente: string;
    lambertX: number | null;
    lambertY: number | null;
    lambertRange: number | null;
    vertrekStraat: string;
    vertrekGemeente: string;
    datVan: Date | null;
    datTot: Date | null;
}



// GTM
export class SgsGTMZoekVelden {
    gtmId: number | null;
    datVan: Date | null;
    datTot: Date | null;
    straat: string;
    gemeente: string;
    topId: number | null;
}





// GVT
export class SgsGVTZoekVelden {
    code: number | null;
    tvId: number | null;
    klantId: number | null;
    dossierBeheerderId: number | null;
    statusId: number | null;
    bestemmingsaardId: number | null;
    gefactureerd: number | null;
    straat: string;
    postcode: string;
    gemeente: string;
    lambertX: number | null;
    lambertY: number | null;
    lambertRange: number | null;
    vertrekStraat: string;
    vertrekGemeente: string;
    datVan: Date | null;
    datTot: Date | null;
}




// Klant
export class SgsKlantZoekVelden {
    klantId: number | null;
    organisatie: string | null;
    voornaam: string | null;
    achternaam: string | null;
    straat: string;
    gemeente: string;
}


// KW
export class SgsKWZoekVelden {
    klantId: number | null;
    referentie: string;
    verklaringontvangen: boolean | null;
    dossierBeheerderId: number | null;
}

// TV
export class SgsTVZoekVelden {
    tvId: number | null;
    klantId: number | null;
    factuurRef: string;
    adres: string;
    gemeente: string;
    titel: string;
    beschrijving: string;
    referentie: string;
    overname: boolean | null;
    samengevoegd: boolean | null;
    ebsd: string;
    indieningswijzeId: number | null;
    datum: Date | null;
    statusId: number | null;
    gefactureerd: number | null;
    dossierBeheerderId: number | null;
}
