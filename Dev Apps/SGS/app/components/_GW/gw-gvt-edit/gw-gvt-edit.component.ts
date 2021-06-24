import { Component, OnInit, ViewChild, Input, EventEmitter, Output } from "@angular/core";
import { GeneralScripts } from "../../scripts/general.scripts";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, FormControl, Validators, FormArray, AbstractControl } from "@angular/forms";
import { HttpKlantService } from "../../services/http-klant.service";
import { BsLocaleService } from "ngx-bootstrap/datepicker";
import { appLabels } from "../../scripts/appLabels";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { AuthenticationService, UserRoles } from "../../services/authentication.service";
import { DatePipe } from "@angular/common";
import { sgsVolumes, SgsGvtJoinedData, ISgsGvtDeelvolume, bbrStatusItem, iSgsTransportListItem, ISgsBBRTypeItem, ISgsStudieBestemmingItem, ISgsCategorieItem, ISgsDossierComboListItem, ISgsBestAardListItem, ISgsBrancheListItem, sgsTvJoinedData } from "../../scripts/sgsInterfaces.scripts";
import { DomSanitizer } from "@angular/platform-browser";
import { GeopuntScripts } from "../../scripts/geopunt.scripts";
import { FilterTypes } from "../gw-klant-grid/gw-klant-grid.component";
import { DocumentTypes } from "../gw-documents/gw-documents.component";
import { fileTypes, HttpFileService } from "../../services/http-file.service";
import {IFile, ITVZone, ITVVolume, IKlantPoco } from "../../scripts/interfaces.scripts";
import { HttpTVZoneService } from "../../services/http-tvzone.service";
import { fakeAsync } from "@angular/core/testing";
import { EmailHistoriekTypes } from "../gw-email-historiek-grid/gw-email-historiek-grid.component";
import { HttpGVTService } from "../../services/http-gvt.service";
import { HttpBBRService } from "../../services/http-bbr.service";
import { HttpDossierService } from "../../services/http-dossier.service";
import { HttpBestemmingService } from "../../services/http-bestemming.service";



@Component({
    selector: "gw-gvt-edit",
    templateUrl: "./gw-gvt-edit.component.html",
    styleUrls: ["./gw-gvt-edit.component.css"], 
    providers: [DatePipe]
})

export class gwGvtEditComponent extends GeneralScripts implements OnInit {
    gvtForm: FormGroup;

    actionSucceeded = false;
    actionSucceededMessage = "";

    // gvt data

    gvtId: number;
    gvtVolumes: FormArray;
    gvtData: SgsGvtJoinedData;
    gvtStudieValue: SgsGvtJoinedData;




    // upload file
    private uploadedIDs: number[] = [];
    uploadStatus: string = "selection";

    // gw-Documents
    gwDocumentType: DocumentTypes = DocumentTypes.GrondVerzetToelating;
    canSendNewEmail: boolean = true;
    emailHistoriekType: EmailHistoriekTypes = EmailHistoriekTypes.gwGvtEdit;

    // validations
    isHavenBedrijfChecked: boolean;
    klantContactEmailId: number = 40;
    totalHoeveelheid: number = 0;
    isBBR = true;

    // dropdown list
    gvtTransportListItems: iSgsTransportListItem[];
    dossierbeheerderItems: ISgsDossierComboListItem[];
    bestemmingItems: ISgsBestAardListItem[];
    dopItems: IKlantPoco[];
    categorieListItems: ISgsCategorieItem[];
    statusListItems: bbrStatusItem[];
    studieListItems: ISgsStudieBestemmingItem[];
    typeListItems: ISgsBBRTypeItem[];
    opgeletListItems: number[];



    constructor( 
        private readonly _toastr: ToastrService,
        private readonly fb: FormBuilder,
        private readonly router: Router,
        private readonly route: ActivatedRoute,
        private readonly httpGvt: HttpGVTService,
        private readonly httpBBR: HttpBBRService,
        private readonly httpDossier: HttpDossierService,
        private readonly httpBestemming: HttpBestemmingService,
        private readonly httpKlant: HttpKlantService,
        private readonly httpZone: HttpTVZoneService,
        private readonly auth: AuthenticationService,
        private readonly sanitizer: DomSanitizer,
        private readonly datePipe: DatePipe,
        private readonly localeService: BsLocaleService) {
        super(_toastr);
    }

    ngOnInit(): void {
        const snapshot = this.route.snapshot;
        this.gvtId = -1;
        if (snapshot.params["id"]) this.gvtId = +snapshot.params["id"];
        // Needed configuration for the bsDatepicker to accept dd/MM/yyyy formatting
        this.localeService.use("bootstrap-locale-nlbe");

    
      
        this.formOnInit();
    }

    formOnInit() {
        this.loadEntity();
        this.loadGvtVolumes(this.gvtId);
        this.loadDropdowns();
        this.initialiseForm();
        
    }

    initialiseForm() {
        this.gvtForm = this.fb.group({

            klantContactAchterNaam: ["", [Validators.required, Validators.maxLength(50)]],
            klantContactVoorNaam: ["", [Validators.required, Validators.maxLength(50)]],
            klantContactTelefoon: ["", [Validators.required, Validators.maxLength(50)]],
            klantContactEmail: ["", [Validators.required, Validators.maxLength(50), Validators.pattern("^([\\w+-.%]+@[\\w-.]+\\.[A-Za-z]{2,4};?)+$")]],
            klantKenmerk: ["", [Validators.required, Validators.maxLength(50)]],


            eigenaar: ["", [Validators.maxLength(50)]],
            adres1: ["", [Validators.maxLength(100)]],
            adres2: ["", [Validators.maxLength(100)]],
            postcode: ["",[Validators.maxLength(10)]],
            plaats: ["", [Validators.maxLength(50)]],

            contactPersoon: ["", [Validators.maxLength(50)]],
            telefoon: ["", [Validators.maxLength(50)]],
            email: ["", [Validators.maxLength(50), Validators.pattern("^([\\w+-.%]+@[\\w-.]+\\.[A-Za-z]{2,4};?)+$")]],

            aanvraagDatum: [""],
            ontvangstDatumTransportVerklaring: [""],

            afzetAdres1: ["", [Validators.maxLength(100)]],
            afzetAdres2: ["", [Validators.maxLength(100)]],
            afzetPostcode: ["", [Validators.maxLength(10)]],
            afzetPlaats: ["", [Validators.maxLength(50)]],

            bestemmingsAardID: [""],
            bestemmingDopID: [""],
            bestemmingsBeschrijving: ["", [Validators.maxLength(100)]],
            bijkomendeOmschrijvingBestemming: ["", [Validators.maxLength(100)]],
            maximaleVerontreinigingsgraad: ["", [Validators.maxLength(100)]],
            kadastraleWerkzone: [""],
            categorieID: [""],

            gebruikTerrein: ["", [Validators.maxLength(500)]],
            kadAfdeling: ["", [Validators.maxLength(30)]],
            kadAfdelingsNr: ["", [Validators.min(0), Validators.max(99999)]],
            kadSectie: ["", [Validators.maxLength(1), Validators.pattern("^[a-zA-Z]{1}$")]],
            kadNummers: [""],  
            
            lX1: ["", [Validators.required,Validators.maxLength(6), Validators.min(20000), Validators.max(280000)]],
            lY1: ["", [Validators.required, Validators.maxLength(6), Validators.min(150000), Validators.max(250000)]],
            havenBedrijf: [""],


            studieBestemmingID: [""],
            ebsd: [""],
            rapportNummer: [""],
            rapportDatum: [""],
            toekenningKadOk: [""],

            toekomstigGebruik: [""],
            bestemmingsTypeID: [""],
            bestemmingGewestplan: [""],
            defAanwijzingBestemming: [""],
          

            tvid: [{ value: "", disabled: true }],
            grondtransportmeldingID: [{ value: "", disabled: true }],
            dossierbeheerderID: ["", [Validators.required]],
            datumEindGrondverzet: [""],
            datumStartGrondverzet: [""],
            aangevoerdeHoeveelheid: [""],

            transportVerklaringOK: [""],

            opmerkingenTV: [{ value: "", disabled: true }, [Validators.maxLength(8000)]],
            opmerkingenKlant: [{ value: "", disabled: true }, [Validators.maxLength(8000)]],
            interneOpmerkingGTM: [{ value: "", disabled: true }, [Validators.maxLength(750)]],
               
            opmerkingen: ["", [Validators.maxLength(8000)]],
            interneOpmerking: ["", [Validators.maxLength(8000)]],  
            geschiktVoorWerfbezoek: [""],

            startDatumGrondwerken: [""],
            besluitUitgegravenGrond: [""],
            actueleMilieuvergunningBeschikbaar: [""],
            bbrStatusID: [""],





            gvtVolumes: this.fb.array([])
        });
        this.gvtVolumes = this.gvtForm.get("gvtVolumes") as FormArray;
        this.initialValuesHandler();
    }

    // deelVolume

    createGvtVolume(vol: ISgsGvtDeelvolume): FormGroup {
        return this.fb.group({
            tvZoneNr: [vol.tvZoneNr],
            tvZoneID: [vol.tvZoneID],
            beschrijving: [vol.beschrijving],
            kgbuOmschrijving: [vol.kgbuOmschrijving],
            kgbiOmschrijving: [vol.kgbiOmschrijving],
            kgboOmschrijving: [vol.kgboOmschrijving],
            geplandGebruik: [vol.geplandGebruik,[Validators.required, Validators.min(0), Validators.max(999999)]],
            beschikbaar: [vol.beschikbaar],
            werkelijkeHoeveelheid: [vol.werkelijkeHoeveelheid],
      
            bbrTVZoneToepassingCode: [vol.bbrTVZoneToepassingCode],
            akkoord: [vol.akkoord], 
            technischVerslagZoneID: [vol.technischVerslagZoneID], 

            // others
            technischVerslagID: [vol.technischVerslagID], 
            kadastraleGegevens: [vol.kadastraleGegevens],
            lx1: [vol.lx1],
            ly1: [vol.ly1],
            gebruik1: [vol.gebruik1],
            gebruik2: [vol.gebruik2],
            gebruik3: [vol.gebruik3],
            gebruik4: [vol.gebruik4],
            gebruik5: [vol.gebruik5],
            gebruik6: [vol.gebruik6],
            gebruik7: [vol.gebruik7],
            gebruik8: [vol.gebruik8],
            gebruik9: [vol.gebruik9],
            gebruik10: [vol.gebruik10],
            gebruik11: [vol.gebruik11],
            gebruik12: [vol.gebruik12],
            gebruik13: [vol.gebruik13],
            gebruik14: [vol.gebruik14],
            gebruik15: [vol.gebruik15],
            gebruik16: [vol.gebruik16],
            gehalteMaterialen: [vol.gehalteMaterialen],
            gehalteStenen: [vol.gehalteStenen],
            id: [vol.id],
            saldo: [vol.saldo],          
            bodemBeheerRapportID: [vol.bodemBeheerRapportID],
            hoeveelheidGemeld: [vol.hoeveelheidGemeld],

        });

    }

  

    loadGvtVolumes(gvtId: number) {
        this.httpBBR.sgsGetDeelvolume(gvtId).toPromise()
            .then((data: ISgsGvtDeelvolume[]) => {
                if (data != null && data.length > 0) {
                    
                    data.forEach((vol: ISgsGvtDeelvolume) => {
                        this.gvtVolumes.push(this.createGvtVolume(vol));
                    });
                }
            })
            .catch(error => {
                this.handleError(error);
            });

     
    }


// errors handling

    initialValuesHandler() {
        this.gvtForm.get("havenBedrijf").valueChanges.debounceTime(500).subscribe(item => {
            this.isHavenBedrijfChecked = (item === true) ? true : false;
        });

        (this.gvtForm.get("gvtVolumes") as FormArray).valueChanges.subscribe(data => {
            this.totalHoeveelheid = 0;
            if (data != null && data.length > 0) {
                data.forEach((vol: ISgsGvtDeelvolume) => {
                    this.totalHoeveelheid += Number(vol.werkelijkeHoeveelheid);
                });
            }
        })
        
    }

    emailToHavenbedrijf() {
        console.log(this.getDeelvolume(), "deelvoulum");
    }


    openGtmToCopy() {
        console.log("open pop")
    }






    // load entity

    loadDropdowns() {
        this.httpBBR.sgsTransportListItem(this.gvtId).toPromise().
            then((lst: iSgsTransportListItem[]) => {
                this.gvtTransportListItems = [...lst];
                //empty
                console.log(this.gvtTransportListItems, "this.gvtTransportListItems");
            });

        this.httpDossier.sgsComboListItems().toPromise().
            then((lst: ISgsDossierComboListItem[]) => {
                this.dossierbeheerderItems = [...lst];
            });

        this.httpBestemming.sgsBestemmingListItems().toPromise().
            then((lst: ISgsBestAardListItem[]) => {
                this.bestemmingItems = [...lst];
            });

        this.httpKlant.gwsTopCgrLocatie(2,true).toPromise().
            then((lst: IKlantPoco[]) => {
                this.dopItems = [...lst];
            });
        this.httpBBR.sgsCategorieListItem().toPromise().
            then((lst: ISgsCategorieItem[]) => {
                this.categorieListItems = [...lst];          
            });

        this.httpBBR.sgsBBRsStatusListItem(this.gvtId).toPromise().
            then((lst: bbrStatusItem[]) => {
                this.statusListItems = [...lst];
            });

        this.httpBestemming.sgsTypeListItems().toPromise().
            then((lst: ISgsBBRTypeItem[]) => {
                this.typeListItems = [...lst];
            });


        this.httpBestemming.sgsStudieListItems().toPromise().
            then((lst: ISgsStudieBestemmingItem[]) => {
                this.studieListItems = [...lst];
            });


    }

    loadEntity() {
        if (this.gvtId === -1) {
            return;
        }
        this.httpBBR.sgsGetBBRJoinedData(this.gvtId).toPromise()
            .then((bbr: SgsGvtJoinedData) => {
                if (!bbr) {
                    this.showWarningToast("De BBR bestaat niet")
                    return;
                };
                console.log(bbr, "bbr data")
                this.gvtData = bbr;


                if (this.gvtData.bestemmingID) {
                    this.httpBBR.sgsOpgeletListItem(this.gvtData.bestemmingID).toPromise().
                        then((lst: number[]) => {
                            this.opgeletListItems = [...lst];
                            console.log(this.opgeletListItems, "   this.opgeletListItems");
                        });

                }
           


                this.gvtForm.patchValue({
                    klantContactAchterNaam: this.gvtData.klantContactAchterNaam ,
                    klantContactVoorNaam: this.gvtData.klantContactVoorNaam,
                    klantContactTelefoon: this.gvtData.klantContactTelefoon,
                    klantContactEmail: this.gvtData.klantContactEmail,
                    klantKenmerk: this.gvtData.klantKenmerk,

                    eigenaar: this.gvtData.eigenaar,                
                    adres1: this.gvtData.adres1,
                    adres2: this.gvtData.adres2,
                    postcode: this.gvtData.postcode,
                    plaats: this.gvtData.plaats,

                    contactPersoon: this.gvtData.contactPersoon,
                    telefoon: this.gvtData.telefoon, 
                    email: this.gvtData.email,

                    aanvraagDatum: this.datePipe.transform(this.gvtData.aanvraagDatum, "dd/MM/yyyy"),
                    ontvangstDatumTransportVerklaring: this.datePipe.transform(this.gvtData.ontvangstDatumTransportVerklaring, "dd/MM/yyyy"),

                    afzetAdres1: this.gvtData.afzetAdres1,
                    afzetAdres2: this.gvtData.afzetAdres2,
                    afzetPostcode: this.gvtData.afzetPostcode,
                    afzetPlaats: this.gvtData.afzetPlaats,

                    bestemmingsAardID: this.gvtData.bestemmingsAardID,
                    bestemmingDopID: this.gvtData.bestemmingDopID,
                    bestemmingsBeschrijving: this.gvtData.bestemmingsBeschrijving,
                    bijkomendeOmschrijvingBestemming: this.gvtData.bijkomendeOmschrijvingBestemming,
                    maximaleVerontreinigingsgraad: this.gvtData.maximaleVerontreinigingsgraad,// NO DATA oR FIELD FROM OLD 
                    kadastraleWerkzone: this.gvtData.kadastraleWerkzone,
                    categorieID: this.gvtData.categorieID,

                    gebruikTerrein: this.gvtData.gebruikTerrein,
                    kadAfdeling: this.gvtData.kadAfdeling,
                    kadAfdelingsNr: this.gvtData.kadAfdelingsNr,
                    kadSectie: this.gvtData.kadSectie,
                    kadNummers: this.gvtData.kadNummers,  

                    lX1: this.gvtData.lX1,
                    lY1: this.gvtData.lY1,

                    // havenBedrijf: [""],
                    studieBestemmingID: this.gvtData.studieBestemmingID,
                    ebsd: this.gvtData.ebsd,
                    rapportNummer: this.gvtData.rapportNummer,
                    rapportDatum: this.datePipe.transform(this.gvtData.rapportDatum, "dd/MM/yyyy"),
                    toekenningKadOk: this.gvtData.toekenningKadOk,


                    toekomstigGebruik: this.gvtData.toekomstigGebruik,
                    bestemmingsTypeID: this.gvtData.bestemmingsTypeID,
                    bestemmingGewestplan: this.gvtData.bestemmingGewestplan,
                    defAanwijzingBestemming: this.gvtData.defAanwijzingBestemming,


                    tvid: this.gvtData.tvid,
                    grondtransportmeldingID: this.gvtData.grondtransportmeldingID,
                    dossierbeheerderID: this.gvtData.dossierbeheerderID,
                    datumEindGrondverzet: this.datePipe.transform(this.gvtData.datumEindGrondverzet, "dd/MM/yyyy"),
                    datumStartGrondverzet: this.datePipe.transform(this.gvtData.datumStartGrondverzet, "dd/MM/yyyy"),
                    aangevoerdeHoeveelheid: this.gvtData.aangevoerdeHoeveelheid,

                    transportVerklaringOK: this.gvtData.transportVerklaringOK,

                    opmerkingenTV: this.gvtData.opmerkingenTV,
                    opmerkingenKlant: this.gvtData.opmerkingenKlant,
                    interneOpmerkingGTM: this.gvtData.interneOpmerkingGTM,
                    opmerkingen: this.gvtData.opmerkingen,
                    interneOpmerking: this.gvtData.interneOpmerking,
                    geschiktVoorWerfbezoek: this.gvtData.geschiktVoorWerfbezoek,

                    startDatumGrondwerken: this.datePipe.transform(this.gvtData.startDatumGrondwerken, "dd/MM/yyyy"), 
                    besluitUitgegravenGrond: this.gvtData.besluitUitgegravenGrond,
                   // actueleMilieuvergunningBeschikbaar: this.gvtData.actueleMilieuvergunningBeschikbaar,
                    bbrStatusID: this.gvtData.bbrStatusID,
               
                })



             
            }).catch(error => {
                this.showErrorToast(error);
            });
    }


    navigateToOpgelet(item: number) {
        this.router.navigate(['/gw', 'gvt-edit', item])
        this.ngOnInit();
    }


    sendData(fileIDs: number[]) {
        if (fileIDs != null) {
            this.uploadedIDs = [...fileIDs];
          //  this.gvtUpload.patchValue({ uploadedIDs: this.uploadedIDs });
        }

        const gvtFormvalues = { ...this.getGvtFormValues(), ...this.gvtStudieValue, ...this.getDeelvolume() };

        console.log(gvtFormvalues, "gvtFormvalues");

        //   const klantFormValues: IKlantPoco = this.getformValues();
        //this.httpKlant.sgsSave(klantFormValues).toPromise()
        //    .then((docId: any) => {
        //        this.showSuccesToast("De gegevens werden opgeslagen");
        //        this.router.navigate(["/gw-klant-grid"]);
        //    })
        //    .catch(error => {
        //        this.handleError(error);
        //        console.log(error, "error");
        //        if (this.uploadedIDs.length > 0) {
        //            this.uploadStatus = "clean";
        //        }
        //    });


    }

    save() {
        const gvtFormvalues = { ...this.getGvtFormValues(), ...this.gvtStudieValue, ...this.getDeelvolume() };
        this.httpBBR.sgsSaveGvtJoinedData(gvtFormvalues).toPromise().then((docId: any) => {
            this.showSuccesToast("De gegevens werden opgeslagen");
            this.uploadStatus = "selection";
        })
            .catch(error => {
                this.handleError(error);
                if (this.uploadedIDs.length > 0) {
                    this.uploadStatus = "clean";
                }
            });
        console.log(gvtFormvalues, "gvtFormvalues");
    }

    saveUpload() {
        // Upload the files first if any
        this.uploadStatus = "upload";
        // gw-documents component will trigger sendData with the ids of the uploaded files
    }


    toGeopunt() {
        const x = this.gvtForm.controls.lX1.value;
        const y = this.gvtForm.controls.lY1.value;
        //const street = this.gvtForm.controls.inrichtingStraat.value;
        //const city = this.gvtForm.controls.inrichtingGemeente.value;
        const geopunt = new GeopuntScripts(this.sanitizer);
        const url = geopunt.getGeopuntUrl(x, y, null, null);
        window.open(url);
    }

    // copy the GTM
    onGtmSelected(value: any) {
        
        
    }

    // get values from studie

    getGvtFormValues() {
        const gvtFromValues: SgsGvtJoinedData = {
           klantContactAchterNaam: this.gvtForm.value.klantContactAchterNaam,
            klantContactVoorNaam: this.gvtForm.value.klantContactVoorNaam,
            klantContactTelefoon: this.gvtForm.value.klantContactTelefoon,
            klantContactEmail: this.gvtForm.value.klantContactEmail,
            klantKenmerk: this.gvtForm.value.klantKenmerk,


            eigenaar: this.gvtForm.value.eigenaar,
            adres1: this.gvtForm.value.adres1,
            adres2: this.gvtForm.value.adres2,
            postcode: this.gvtForm.value.postcode,
            plaats: this.gvtForm.value.plaats,

            contactPersoon: this.gvtForm.value.contactPersoon,
            telefoon: this.gvtForm.value.telefoon,
            email: this.gvtForm.value.email,

            aanvraagDatum: this.stringToDate(this.gvtForm.value.aanvraagDatum),
            ontvangstDatumTransportVerklaring: this.stringToDate(this.gvtForm.value.ontvangstDatumTransportVerklaring),

            afzetAdres1: this.gvtForm.value.afzetAdres1,
            afzetAdres2: this.gvtForm.value.afzetAdres2,
            afzetPostcode: this.gvtForm.value.afzetPostcode,
            afzetPlaats: this.gvtForm.value.afzetPlaats,

            bestemmingsAardID: this.gvtForm.value.bestemmingsAardID,
            bestemmingDopID: this.gvtForm.value.bestemmingDopID,
            bestemmingsBeschrijving: this.gvtForm.value.bestemmingsBeschrijving,
            bijkomendeOmschrijvingBestemming: this.gvtForm.value.bijkomendeOmschrijvingBestemming,
            maximaleVerontreinigingsgraad: this.gvtForm.value.maximaleVerontreinigingsgraad,
            kadastraleWerkzone: this.gvtForm.value.kadastraleWerkzone,
            categorieID: this.gvtForm.value.categorieID,

            gebruikTerrein: this.gvtForm.value.gebruikTerrein,
            kadAfdeling: this.gvtForm.value.kadAfdeling,
            kadAfdelingsNr: this.gvtForm.value.kadAfdelingsNr,
            kadSectie: this.gvtForm.value.kadSectie,
            kadNummers: this.gvtForm.value.kadNummers,

            lX1: this.gvtForm.value.lX1,
            lY1: this.gvtForm.value.lY1,
            //havenBedrijf: this.gvtForm.value.havenBedrijf,


            studieBestemmingID: this.gvtForm.value.studieBestemmingID,
            ebsd: this.gvtForm.value.ebsd,
            rapportNummer: this.gvtForm.value.rapportNummer,
            rapportDatum: this.stringToDate(this.gvtForm.value.rapportDatum),
            toekenningKadOk: this.gvtForm.value.toekenningKadOk,

            toekomstigGebruik: this.gvtForm.value.toekomstigGebruik,
            bestemmingsTypeID: this.gvtForm.value.bestemmingsTypeID,
            bestemmingGewestplan: this.gvtForm.value.bestemmingGewestplan,
            defAanwijzingBestemming: this.gvtForm.value.defAanwijzingBestemming,


            tvid: this.gvtForm.value.tvid,
            grondtransportmeldingID: this.gvtForm.value.grondtransportmeldingID,
            dossierbeheerderID: this.gvtForm.value.dossierbeheerderID,
            datumEindGrondverzet: this.stringToDate(this.gvtForm.value.datumEindGrondverzet),
            datumStartGrondverzet: this.stringToDate(this.gvtForm.value.datumStartGrondverzet),
            aangevoerdeHoeveelheid: this.gvtForm.value.aangevoerdeHoeveelheid,

            transportVerklaringOK: this.gvtForm.value.transportVerklaringOK,

            opmerkingenTV: this.gvtForm.value.opmerkingenTV,
            opmerkingenKlant: this.gvtForm.value.opmerkingenKlant,
            interneOpmerkingGTM: this.gvtForm.value.interneOpmerkingGTM,

            opmerkingen: this.gvtForm.value.opmerkingen,
            interneOpmerking: this.gvtForm.value.interneOpmerking,
            geschiktVoorWerfbezoek: this.gvtForm.value.geschiktVoorWerfbezoek,

            startDatumGrondwerken: this.stringToDate(this.gvtForm.value.startDatumGrondwerken),
            besluitUitgegravenGrond: this.gvtForm.value.besluitUitgegravenGrond,
            actueleMilieuvergunningBeschikbaar: this.gvtForm.value.actueleMilieuvergunningBeschikbaar,
            bbrStatusID: this.gvtForm.value.bbrStatusID,


            // fields not used in the form
            aanvulPlanOntvangen: this.gvtData.aanvulPlanOntvangen,
            afnemersverklaringOntvangen: this.gvtData.afnemersverklaringOntvangen,
            afnemersverklaringOntvangenDatum: this.gvtData.afnemersverklaringOntvangenDatum,
            afnemersVerklaringToesturen: this.gvtData.afnemersVerklaringToesturen,
            bbrGefactureerd: this.gvtData.bbrGefactureerd,
            besluitStudieBouwStof: this.gvtData.besluitStudieBouwStof,
            bestemmingID: this.gvtData.bestemmingID,
            bestemmingsAard: this.gvtData.bestemmingsAard,
            bestemmingsAardId: this.gvtData.bestemmingsAardId,
            betalingOK: this.gvtData.betalingOK,
            bijzonderPlanAanleg: this.gvtData.bijzonderPlanAanleg,
            bodemBeheerRapportID: this.gvtData.bodemBeheerRapportID,
            bpaOK: this.gvtData.bpaOK,
            datumBBRHerinnering: this.gvtData.datumBBRHerinnering,
            dossierbeheerderID_BBR: this.gvtData.dossierbeheerderID_BBR,
            emailSend: this.gvtData.emailSend,
            factuurExportDatum: this.gvtData.factuurExportDatum,
            finaalBBRAfgeven: this.gvtData.finaalBBRAfgeven,
            finalEmailSend: this.gvtData.finalEmailSend,
            finaleOpmerkingen: this.gvtData.finaleOpmerkingen,
            fysiekeScheiding: this.gvtData.fysiekeScheiding,
            gewestPlanOK: this.gvtData.gewestPlanOK,
            goedkeuringTransportGefactureerd: this.gvtData.goedkeuringTransportGefactureerd,
            indieningswijzeAanvulplan: this.gvtData.indieningswijzeAanvulplan,
            klantContact: this.gvtData.klantContact,
            klantID: this.gvtData.klantID,
            klantNaam: this.gvtData.klantNaam,
            lijstBestemmingenBeschikbaar: this.gvtData.lijstBestemmingenBeschikbaar,
            situatieSchetsOK: this.gvtData.situatieSchetsOK,
            statusDatum: this.gvtData.statusDatum,
            statusDatumBBR: this.gvtData.statusDatumBBR,
            statusDescription: this.gvtData.statusDescription,
            studieBestemming: this.gvtData.studieBestemming,
            studieBouwstof: this.gvtData.studieBouwstof,
            studieBouwstofDatum: this.gvtData.studieBouwstofDatum,
            studieBouwstofEBSD: this.gvtData.studieBouwstofEBSD,
            studieBouwstofNummer: this.gvtData.studieBouwstofNummer,
            toepassingAls: this.gvtData.toepassingAls,
            tvStatusID: this.gvtData.tvStatusID,
            werfOpvolging: this.gvtData.werfOpvolging,
            zintuiglijkeWaarnemingenOK: this.gvtData.zintuiglijkeWaarnemingenOK,
            bbrNummer: this.gvtData.bbrNummer,
        } as SgsGvtJoinedData;


        return gvtFromValues
    }

    getDeelvolume() {
       return (this.gvtForm.get("gvtVolumes") as FormArray).value;


    }


    getStudieValues(item: SgsGvtJoinedData) {
        this.gvtStudieValue = item;
    }
 
}
