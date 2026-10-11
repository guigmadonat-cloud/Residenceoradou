/* Nederlands (nl). Wordt na content-more.js geladen. */
LANGS.push({ c: "nl", n: "Nederlands", loc: "nl-NL" });

UI.nl = {
  howTitle: "Zo werkt het",
  how1: "Kies rechtsboven uw taal.",
  how2: "Filter: in Parijs, vlak bij de residentie of gratis.",
  how3: "Tik op “Route” om er vanaf uw locatie naartoe te gaan.",
  picksTitle: "Onze 3 favorieten",
  picksLede: "Geen tijd om alles te lezen? Begin hier.",
  book: "Vooraf reserveren",
  seeCard: "Bekijk de fiche",
  h1: "Wat te doen tijdens uw verblijf",
  lede: "Onze adressen in Parijs en vlak bij het appartement. Elke fiche vermeldt de prijs, de openingstijden en een knop die de route vanaf uw locatie start.",
  gTitle: "Met de trein naar Parijs",
  r1: "Van station Sartrouville naar Paris Saint-Lazare, lijn L (8 haltes).",
  r2: "Van station Argenteuil naar Paris Saint-Lazare, lijn J.",
  r3: "Vanaf Saint-Lazare brengt de metro u naar de meeste bezienswaardigheden hieronder. Controleer uw reistijden bij Île-de-France Mobilités voordat u vertrekt.",
  metro: "Metro",
  eTitle: "Wat is er te doen", eLede: "Komende tentoonstellingen en evenementen, een selectie die regelmatig wordt bijgewerkt.", now: "Nu bezig", noEvents: "Momenteel geen evenementen.",
  fAll: "Alles", fParis: "In Parijs", fLocal: "Vlak bij de residentie", fFree: "Gratis",
  one: "uitstap", many: "uitstapjes",
  paris: "Parijs", near: "In de buurt", free: "Gratis", closed: "Vandaag gesloten",
  route: "Route", dPrice: "Prijs", dHours: "Openingstijden", dTip: "Tip",
  contact: "Advies nodig? Schrijf ons:",
  note: "Prijzen en openingstijden overgenomen van de officiële websites op %d. Ze kunnen wijzigen: controleer ze voordat u op pad gaat.",
  langLabel: "Taal", official: "Officiële website", moreInfo: "Meer info", venueTbc: "locatie nog te bevestigen",
  k_monument: "Monument", k_museum: "Museum", k_walk: "Wandeling", k_trip: "Dagtocht", k_heritage: "Erfgoed", k_outing: "Uitstap", k_exhibition: "Tentoonstelling", k_fair: "Beurs", k_concert: "Concert",
  priceSite: "Prijzen op de officiële website.", hoursSite: "Openingstijden op de officiële website.",
  closedMon: "Meestal gesloten op maandag. Openingstijden op de officiële website.",
  hoursLabel: "Openingstijden", notStated: "Niet vermeld.", askOnSite: "Niet vermeld: vraag het ter plaatse.",
  hours2025: "Openingstijden genoteerd in 2025: controleer ze voordat u gaat.",
  freeP: "Gratis.", freeOutdoor: "Gratis, buiten.", openAccess: "Vrij toegankelijk.",
  perProgram: "Afhankelijk van het programma.", checkCalendar: "Raadpleeg de agenda voordat u komt.", program: "Programma"
};

GUIDE.nl = {
  ui: {
    brand: "Résidence Oradou", sub: "Argenteuil / Sartrouville", langLabel: "Taal",
    welcome: "Welkom", welcomeLede: "Alles wat u moet weten voor uw verblijf. Tik op een onderwerp.",
    menu: "Menu", back: "Terug naar het menu", host: "Uw gastheer", callUs: "Contact",
    route: "Route", away: "Op", distance: "Afstand", price: "Prijs per persoon",
    note: "Informatie uit het welkomstboekje van de residentie.",
    codesTitle: "Toegangscodes", codesBody: "De codes voor de deuren, de sleutelkluis en de lift ontvangt u vóór uw aankomst in uw Airbnb-bericht. Ze staan hier niet, voor de veiligheid van de residentie.",
    hostTitle: "Uw gastheer", hostBody: "Ik ben de gastheer van residentie Oradou en een groot liefhebber van koken. Bezoek gerust mijn Instagram-pagina: ",
    hostBody2: "Ik ontvang graag gasten en doe mijn best om uw verblijf zo aangenaam mogelijk te maken.",
    reachUs: "Wilt u ons bereiken?", phone: "Telefoon", email: "E-mail",
    kitchenH: "De keuken", linenH: "Linnengoed", shopsH: "Boodschappen", restoH: "Restaurants", fastH: "Fastfood", fastNote: "Adressen uit het welkomstboekje. De knop Route toont de exacte afstand vanaf uw locatie."
  },
  sections: [
    { id: "arrival", t: "Aankomst en vertrek", d: "Tijden, sleutels, parkeren", blocks: [
      { k: "facts", rows: [["Aankomst", "Vanaf 16.00 uur"], ["Vertrek", "Voor 12.00 uur"]] },
      { k: "h", t: "Naar binnen" },
      { k: "p", t: "Het adres van de woning en de toegangsinstructies ontvangt u in uw Airbnb-bericht. Ga naar het opgegeven adres en voer de code in die u is doorgegeven." },
      { k: "route", dest: "6-8 rue de Lutèce, 95100 Argenteuil", label: "Appartement" },
      { k: "route", dest: "27 route de Pontoise, 95100 Argenteuil", label: "Sleutelkluis en parkeergarage" },
      { k: "video", url: "https://lesresidencesoradou.my.canva.site/lesresidencesoradou-video-accueil", label: "Welkomstvideo: stap voor stap de weg vinden" },
      { k: "codes" },
      { k: "h", t: "Voor uw vertrek" },
      { k: "list", items: ["Doe de lichten uit", "Knoop de vuilniszakken dicht", "Doe de afwas", "Laat de handdoeken op de vloer liggen", "Sluit de ramen en deuren", "Leg de sleutels terug in de sleutelkluis"] },
    ] },
    { id: "stay", t: "Tijdens uw verblijf", d: "Diensten, voorzieningen", blocks: [
      { k: "h", t: "Goed om te weten" },
      { k: "list", items: [
        "In de koelkast staan flessen water en panaché (shandy).",
        "Een vaatwasser staat tot uw beschikking.",
        "Handdoeken zijn aanwezig.",
        "Overal in het appartement vindt u stopcontacten voor uw elektronische apparaten.",
        "De prullenbak is automatisch: houd gewoon uw hand erboven om hem te openen.",
        "In de woonkamer en in de slaapkamers staat een televisie (Prime Video en Netflix)."
      ] },
      { k: "h", t: "Het appartement" },
      { k: "p", t: "Een gezellig appartement in een rustige omgeving: 2 ruime slaapkamers, 1 moderne badkamer en een apart toilet. Terras, parkeerplaats, vaatwasser, wasmachine en droger." }
    ] },
    { id: "house", t: "Keuken en linnengoed", d: "Oven, magnetron, wasmachine", blocks: [
      { k: "h", t: "De keuken" },
      { k: "list", items: [
        "Oven: boven- en onderwarmte, heteluchtoven en pyrolyse.",
        "Magnetron: grote knop om te openen, kleine knop rechts om aan te zetten, kleine knop links om uit te zetten.",
        "Koelkast: koud water, flessen panaché en boter in portieverpakking.",
        "Nespresso-koffiemachine."
      ] },
      { k: "h", t: "Linnengoed" },
      { k: "list", items: [
        "Grote en kleine handdoeken liggen voor u klaar.",
        "De bedden zijn al opgemaakt, voor uw comfort.",
        "Wasmachine: wasmiddelcapsules en wasverzachter zijn aanwezig.",
        "De wasmachine droogt de was ook. Een strijkijzer en een kledingstomer staan tot uw beschikking.",
        "Een haardroger en een stijltang staan tot uw beschikking."
      ] }
    ] },
    { id: "rules", t: "Huisregels", d: "Een paar eenvoudige regels", blocks: [
      { k: "list", items: [
        "Respect voor de accommodatie: ga zorgvuldig om met het huis en de buitenruimtes en voorkom schade.",
        "Feesten en bijeenkomsten: geen grote feesten, en beperk het geluid na 22.00 uur.",
        "Huisdieren: wij zijn dol op dieren, maar ze zijn tijdens uw verblijf niet toegestaan.",
        "Extra persoon: een onverwachte extra gast is niet toegestaan zonder dat u ons dat vooraf hebt laten weten.",
        "Niet roken binnen: op het zuidterras staat een overdekte rookruimte tot uw beschikking.",
        "Veiligheid: houd u aan de veiligheidsregels en gebruik geen gevaarlijke elektrische apparaten."
      ] }
    ] },
    { id: "nearby", t: "Rond de residentie", d: "Boodschappen en restaurants", blocks: [
      { k: "places", ref: "shops", h: "shopsH" },
      { k: "places", ref: "restaurants", h: "restoH" },
      { k: "places", ref: "fastfood", h: "fastH", note: "fastNote" }
    ] },
    { id: "activities", t: "Wat te doen", d: "Parijs en omgeving, dagelijks bijgewerkt", special: "activities" },
    { id: "emergency", t: "Noodgevallen en gezondheid", d: "Ziekenhuis, huisarts, apotheek", blocks: [
      { k: "facts", rows: [["Ambulance (SAMU)", "15"], ["Brandweer", "18"], ["Europees noodnummer", "112"], ["Politie", "17"]] },
      { k: "contact3", items: [
        { h: "Ziekenhuis", n: "Centre Hospitalier Victor Dupouy", addr: "69 Rue du Lieutenant-Colonel Prudhon, 95100 Argenteuil", tel: "01 34 23 24 25", t: "Spoedeisende hulp, 24 uur per dag open." },
        { h: "Huisarts", n: "Maison de Santé du Val Notre-Dame", addr: "Secteur Val Notre-Dame, 95100 Argenteuil", t: "De eerste keuze voor consulten in de buurt. U kunt ook een afspraak maken via Doctolib, of bij een medisch noodgeval 15 bellen." },
        { h: "Apotheek", n: "Pharmacie du Val d'Argent", addr: "9 bis Place d'Alembert, 95100 Argenteuil", tel: "01 39 82 64 83" }
      ] }
    ] },
    { id: "leave", t: "Voor uw vertrek", d: "Uitchecken en beoordeling", blocks: [
      { k: "list", items: ["Knoop de vuilniszakken dicht", "Ruim de vaatwasser uit", "Controleer de kasten en lades", "Sluit de ramen en de deur", "Leg de sleutels in de sleutelkluis"] },
      { k: "h", t: "Uw beoordeling" },
      { k: "p", t: "Uw tevredenheid is ook de onze! Als u van uw verblijf hebt genoten, laat dan gerust een beoordeling achter." },
      { k: "p", t: "Bedankt dat u voor onze accommodatie hebt gekozen. Wij hopen u binnenkort weer te mogen verwelkomen en wensen u een goede thuisreis." }
    ] }
  ]
};

(function () {
  var N = {
    eiffel: { n: "Eiffeltoren", b: "Klim via de trap of neem de lift naar de 2e verdieping, of helemaal naar de top.", p: "Trap naar de 2e verdieping: 14,80 €. Lift naar de 2e verdieping: 23,50 €. Lift naar de top: 36,70 €. Kinderen van 4 tot 11 jaar: 3,80 € tot 9,20 €. Gratis onder de 4 jaar.", h: "Elke dag, 9.00 tot 23.45 uur tot 31 december. Laatste toegang om 22.45 uur.", t: "Reserveer online een tijdslot. De rijen zijn korter vóór 10.30 uur of na 17.00 uur.", u: "Reserveren" },
    louvre: { n: "Louvre", b: "De Mona Lisa, de Venus van Milo en meer dan acht eeuwen geschiedenis van het paleis.", p: "22 € voor inwoners van de Europese Economische Ruimte, 32 € voor andere bezoekers. Gratis onder de 18 jaar, en voor iedereen op de eerste vrijdag van de maand na 18.00 uur (behalve in juli en augustus).", h: "Maandag, donderdag, zaterdag, zondag 9.00 tot 18.00 uur. Woensdag en vrijdag 9.00 tot 21.00 uur. Dinsdag gesloten.", t: "Reserveer online een tijdslot, ook als u gratis naar binnen mag. De nabijgelegen Tuilerieëntuin is gratis.", u: "Openingstijden en tickets" },
    sacre: { n: "Sacré-Cœur en Montmartre", b: "De basiliek kijkt vanaf de heuvel Montmartre uit over Parijs. De wijk verkent u het best te voet.", p: "Gratis toegang tot de basiliek. De koepel is betaald: de prijs staat op de officiële website.", h: "Basiliek elke dag open van 6.30 tot 22.30 uur. De koepel opent rond 10.15 uur en sluit, afhankelijk van de dag, tussen 17.00 en 20.00 uur.", t: "Ga aan het eind van de dag naar boven voor het uitzicht over de stad." },
    arc: { n: "Arc de Triomphe", b: "Een terras op de top kijkt uit over de twaalf avenues van de Étoile en de Champs-Élysées.", p: "De website vermeldt een tarief van 16 €. Gratis onder de 26 jaar.", h: "Openingstijden staan op de officiële website.", t: "Op het moment van de update was de lift in onderhoud: de klim gaat alleen via de trap." },
    orsay: { n: "Musée d'Orsay", b: "De grote impressionistische collectie, in een voormalig treinstation aan de Seine. Monet schilderde Argenteuil, en zijn “Regatta’s bij Argenteuil” maakt deel uit van de collectie.", t: "Reserveer online een tijdslot. Een bezoek is een mooi vervolg op het Impressionistenhuis in Argenteuil." },
    notredame: { n: "Kathedraal Notre-Dame de Paris", b: "Heropend na de restauratie, staat ze op het Île de la Cité.", p: "Controleer op de officiële website de toegangs- en reserveringsvoorwaarden.", t: "De nabijgelegen Seine-oevers zijn te voet goed te verkennen." },
    versailles: { n: "Kasteel van Versailles", b: "Spiegelgalerij, koninklijke vertrekken en tuinen. Reken op een hele dag.", t: "Reserveer vooraf, vooral in het weekend." },
    monet: { n: "Impressionistenhuis Claude Monet", b: "Het huis waar Monet van 1874 tot 1878 woonde, toen hij 156 schilderijen van Argenteuil maakte. Geen originele schilderijen: projecties, het verhaal van zijn leven en een theesalon met uitzicht op de tuin.", p: "5 €, verlaagd tarief 3,50 €, gratis onder de 12 jaar.", h: "Ze verschillen per seizoen: raadpleeg de website voordat u gaat.", t: "Wilt u originele werken zien, plan dan een bezoek aan Orsay." },
    basilique: { n: "Basiliek Saint-Denys van Argenteuil", b: "De basiliek bewaart al ongeveer 1200 jaar de Heilige Tunica, een relikwie die volgens de overlevering verband houdt met het gewaad van Christus. Ze wordt alleen bij uitzonderlijke tentoonstellingen aan het publiek getoond.", t: "De tuinen van de voormalige abdij liggen er direct achter." },
    abbaye: { n: "Abdijtuinen en L'Atelier", b: "Tuinen op de plek van een voormalige benedictijnenabdij, met zichtbare archeologische resten. L'Atelier, de tentoonstellingsruimte van de stad, toont gratis tentoonstellingen.", h: "L'Atelier: woensdag en zaterdag 11.00 tot 13.00 en 14.00 tot 19.00 uur, zondag 14.00 tot 19.00 uur." },
    streetart: { n: "Streetart in Argenteuil", b: "Grootschalige muurschilderingen door de hele stad, onder meer van C215, Hopare, Jérôme Mesnager en Nexer.", t: "De kaart met de werken staat online op de website van de stad.", u: "Kaart van de muurschilderingen" },
    cave: { n: "La Cave, concertzaal", b: "Een zaal met 145 plaatsen in een voormalige gewelfde kelder uit de 13e eeuw. Jazz, rock, chanson, wereldmuziek, elektro en stand-up.", p: "15 € volledig tarief, 12 € onder de 26 jaar, 5 € kinderen." }
  };
  var P = {
    "Le Jardin du Val": "Supermarkt, gewaardeerd om de verse producten, de slagerij en het verse fruit en de groenten.",
    "Lidl": "Handig voor de dagelijkse boodschappen.",
    "Aldi": "Discountsupermarkt met verse producten en een bakkerij.",
    "Carrefour Sartrouville": "Grote hypermarkt met winkelgalerij en tankstation.",
    "Luci": "Verfijnde Italiaanse keuken.",
    "California Sushi": "Japans restaurant en sushi.",
    "Anatolie": "Turkse specialiteiten en gegrild vlees.",
    "Babamour": "Gezellig restaurant met gourmetburgers en huisgemaakte gerechten.",
    "Medley Restaurant": "Moderne keuken in een elegante setting."
  };
  var id, i, k, list, p;
  for (i = 0; i < SPOTS.length; i++) {
    id = SPOTS[i].id;
    if (T[id] && N[id]) { T[id].nl = N[id]; }
  }
  list = [PLACES.shops, PLACES.restaurants, PLACES.fastfood];
  for (k = 0; k < list.length; k++) {
    for (i = 0; i < list[k].length; i++) {
      p = list[k][i];
      if (p.t && P[p.n]) { p.t.nl = P[p.n]; }
    }
  }
})();
