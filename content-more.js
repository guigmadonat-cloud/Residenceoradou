/* Guide d'accueil : allemand, portugais, italien. */
GUIDE.de = {
  ui: {
    brand: "Résidence Oradou", sub: "Argenteuil / Sartrouville", langLabel: "Sprache",
    welcome: "Herzlich willkommen", welcomeLede: "Alles Wichtige für Ihren Aufenthalt. Tippen Sie auf ein Thema.",
    menu: "Menü", back: "Zurück zum Menü", host: "Ihr Gastgeber", callUs: "Kontakt",
    route: "Route", away: "In", distance: "Entfernung", price: "Preis pro Person",
    note: "Angaben aus dem Willkommensbuch der Residenz.",
    codesTitle: "Zugangscodes", codesBody: "Die Codes für die Türen, den Schlüsselkasten und den Aufzug erhalten Sie vor Ihrer Ankunft in Ihrer Airbnb-Nachricht. Aus Sicherheitsgründen stehen sie hier nicht.",
    hostTitle: "Ihr Gastgeber", hostBody: "Ich bin der Gastgeber der Residenz Oradou und ein großer Kochliebhaber. Besuchen Sie gern meine Instagram-Seite: ",
    hostBody2: "Ich empfange gern Gäste und tue mein Bestes, damit Ihr Aufenthalt so angenehm wie möglich wird.",
    reachUs: "Sie möchten uns erreichen?", phone: "Telefon", email: "E-Mail",
    kitchenH: "Die Küche", linenH: "Wäsche", shopsH: "Einkaufen", restoH: "Restaurants", fastH: "Fast Food", fastNote: "Adressen aus dem Willkommensbuch. Die Schaltfläche Route zeigt die genaue Entfernung von Ihrem Standort."
  },
  sections: [
    { id: "arrival", t: "An- und Abreise", d: "Zeiten, Schlüssel, Parkplatz", blocks: [
      { k: "facts", rows: [["Anreise", "Ab 16 Uhr"], ["Abreise", "Bis 12 Uhr"]] },
      { k: "h", t: "So kommen Sie hinein" },
      { k: "p", t: "Die Adresse der Unterkunft und die Zugangshinweise erhalten Sie in Ihrer Airbnb-Nachricht. Begeben Sie sich zur mitgeteilten Adresse und geben Sie den Code ein, der Ihnen mitgeteilt wurde." },
      { k: "route", dest: "6-8 rue de Lutèce, 95100 Argenteuil", label: "Wohnung" },
      { k: "route", dest: "27 route de Pontoise, 95100 Argenteuil", label: "Schlüsselkasten und Parkplatz" },
      { k: "video", url: "https://lesresidencesoradou.my.canva.site/lesresidencesoradou-video-accueil", label: "Willkommensvideo: Schritt für Schritt zur Unterkunft" },
      { k: "codes" },
      { k: "h", t: "Vor der Abreise" },
      { k: "list", items: ["Lichter ausschalten", "Müllsäcke zubinden", "Geschirr abspülen", "Handtücher auf den Boden legen", "Fenster und Türen schließen", "Schlüssel in den Schlüsselkasten legen"] },
    ] },
    { id: "stay", t: "Während Ihres Aufenthalts", d: "Services, Ausstattung", blocks: [
      { k: "h", t: "Gut zu wissen" },
      { k: "list", items: [
        "Wasserflaschen und Panaché (Radler) stehen im Kühlschrank bereit.",
        "Eine Spülmaschine steht zur Verfügung.",
        "Handtücher werden gestellt.",
        "Steckdosen gibt es überall in der Wohnung für Ihre elektronischen Geräte.",
        "Der Mülleimer ist automatisch: Einfach die Hand darüberhalten.",
        "Im Wohnzimmer und in den Schlafzimmern gibt es einen Fernseher (Prime Video und Netflix)."
      ] },
      { k: "h", t: "Die Wohnung" },
      { k: "p", t: "Eine gemütliche Wohnung in ruhiger Umgebung: 2 geräumige Schlafzimmer, 1 modernes Badezimmer und ein separates WC. Terrasse, Parkplatz, Spülmaschine, Waschmaschine und Trockner." }
    ] },
    { id: "house", t: "Küche und Wäsche", d: "Backofen, Mikrowelle, Waschmaschine", blocks: [
      { k: "h", t: "Die Küche" },
      { k: "list", items: [
        "Backofen: Ober-/Unterhitze, Heißluft und Pyrolyse.",
        "Mikrowelle: großer Knopf zum Öffnen, kleiner Knopf rechts zum Einschalten, kleiner Knopf links zum Ausschalten.",
        "Kühlschrank: frisches Wasser, Flaschen mit Panaché und Butter in Einzelportionen.",
        "Nespresso-Kaffeemaschine."
      ] },
      { k: "h", t: "Wäsche" },
      { k: "list", items: [
        "Große und kleine Handtücher stehen bereit.",
        "Die Betten sind für Ihren Komfort bereits bezogen.",
        "Waschmaschine: Waschmittelkapseln und Weichspüler sind vorhanden.",
        "Die Waschmaschine trocknet auch. Ein Bügeleisen und ein Dampfglätter stehen zur Verfügung.",
        "Ein Haartrockner und ein Glätteisen stehen zur Verfügung."
      ] }
    ] },
    { id: "rules", t: "Hausregeln", d: "Ein paar einfache Regeln", blocks: [
      { k: "list", items: [
        "Respekt vor der Unterkunft: Bitte gehen Sie sorgsam mit dem Haus und den Außenbereichen um und vermeiden Sie Schäden.",
        "Feiern und Empfänge: keine großen Feiern, nach 22 Uhr bitte Lärm vermeiden.",
        "Haustiere: Wir lieben Tiere, aber sie sind während Ihres Aufenthalts nicht erlaubt.",
        "Zusätzliche Personen: Bitte informieren Sie uns vorher, wenn eine weitere Person mitkommt.",
        "Nicht im Haus rauchen: Auf der Südterrasse steht ein überdachter Raucherbereich zur Verfügung.",
        "Sicherheit: Bitte beachten Sie die Sicherheitsregeln und benutzen Sie keine gefährlichen Elektrogeräte."
      ] }
    ] },
    { id: "nearby", t: "In der Umgebung", d: "Einkaufen und Restaurants", blocks: [
      { k: "places", ref: "shops", h: "shopsH" },
      { k: "places", ref: "restaurants", h: "restoH" },
      { k: "places", ref: "fastfood", h: "fastH", note: "fastNote" }
    ] },
    { id: "activities", t: "Ausflugstipps", d: "Paris und Umgebung, täglich aktualisiert", special: "activities" },
    { id: "emergency", t: "Notfälle und Gesundheit", d: "Krankenhaus, Arzt, Apotheke", blocks: [
      { k: "facts", rows: [["Rettungsdienst (SAMU)", "15"], ["Feuerwehr", "18"], ["Europäischer Notruf", "112"], ["Polizei", "17"]] },
      { k: "contact3", items: [
        { h: "Krankenhaus", n: "Centre Hospitalier Victor Dupouy", addr: "69 Rue du Lieutenant-Colonel Prudhon, 95100 Argenteuil", tel: "01 34 23 24 25", t: "Notaufnahme rund um die Uhr." },
        { h: "Arzt", n: "Maison de Santé du Val Notre-Dame", addr: "Secteur Val Notre-Dame, 95100 Argenteuil", t: "Erste Wahl für Sprechstunden in der Nähe. Sie können auch über Doctolib einen Termin buchen oder bei einem medizinischen Notfall die 15 anrufen." },
        { h: "Apotheke", n: "Pharmacie du Val d'Argent", addr: "9 bis Place d'Alembert, 95100 Argenteuil", tel: "01 39 82 64 83" }
      ] }
    ] },
    { id: "leave", t: "Vor der Abreise", d: "Check-out und Bewertung", blocks: [
      { k: "list", items: ["Müllsäcke zubinden", "Spülmaschine ausräumen", "Schränke und Schubladen kontrollieren", "Fenster und Tür schließen", "Schlüssel in den Schlüsselkasten legen"] },
      { k: "h", t: "Ihre Bewertung" },
      { k: "p", t: "Ihre Zufriedenheit ist unsere Zufriedenheit! Wenn Ihnen Ihr Aufenthalt gefallen hat, freuen wir uns über eine Bewertung." },
      { k: "p", t: "Vielen Dank, dass Sie sich für unsere Unterkunft entschieden haben. Wir hoffen, Sie bald wieder begrüßen zu dürfen, und wünschen Ihnen eine gute Heimreise." }
    ] }
  ]
};

GUIDE.pt = {
  ui: {
    brand: "Résidence Oradou", sub: "Argenteuil / Sartrouville", langLabel: "Idioma",
    welcome: "Bem-vindos", welcomeLede: "Tudo o que precisa de saber para a sua estadia. Toque numa secção.",
    menu: "Menu", back: "Voltar ao menu", host: "O seu anfitrião", callUs: "Contacto",
    route: "Itinerário", away: "Em", distance: "Distância", price: "Preço por pessoa",
    note: "Informações retiradas do livro de boas-vindas da residência.",
    codesTitle: "Códigos de acesso", codesBody: "Os códigos das portas, da caixa de chaves e do elevador são enviados na sua mensagem do Airbnb antes da chegada. Não são mostrados aqui, por segurança da residência.",
    hostTitle: "O seu anfitrião", hostBody: "Sou o anfitrião da residência Oradou e um grande apreciador de cozinha. Convido-o a visitar a minha página de Instagram: ",
    hostBody2: "Adoro receber e faço o melhor possível para que a sua estadia seja a mais agradável possível.",
    reachUs: "Precisa de nos contactar?", phone: "Telefone", email: "E-mail",
    kitchenH: "A cozinha", linenH: "A roupa", shopsH: "Compras", restoH: "Restaurantes", fastH: "Fast food", fastNote: "Moradas do livro de boas-vindas. O botão Itinerário indica a distância exata a partir da sua localização."
  },
  sections: [
    { id: "arrival", t: "Chegada e partida", d: "Horários, chaves, estacionamento", blocks: [
      { k: "facts", rows: [["Chegada", "A partir das 16h00"], ["Partida", "Até às 12h00"]] },
      { k: "h", t: "Para entrar" },
      { k: "p", t: "A morada do alojamento e as instruções de acesso são enviadas na sua mensagem do Airbnb. Dirija-se à morada indicada e introduza o código que lhe foi comunicado." },
      { k: "route", dest: "6-8 rue de Lutèce, 95100 Argenteuil", label: "Apartamento" },
      { k: "route", dest: "27 route de Pontoise, 95100 Argenteuil", label: "Caixa de chaves e estacionamento" },
      { k: "video", url: "https://lesresidencesoradou.my.canva.site/lesresidencesoradou-video-accueil", label: "Vídeo de boas-vindas: guia passo a passo" },
      { k: "codes" },
      { k: "h", t: "Antes de partir" },
      { k: "list", items: ["Apague as luzes", "Ate os sacos do lixo", "Lave a loiça", "Deixe as toalhas no chão", "Feche as janelas e as portas", "Deixe as chaves na caixa de chaves"] },
    ] },
    { id: "stay", t: "Durante a sua estadia", d: "Serviços, equipamentos", blocks: [
      { k: "h", t: "Bom saber" },
      { k: "list", items: [
        "Há garrafas de água e panaché no frigorífico.",
        "Tem à sua disposição uma máquina de lavar loiça.",
        "Tem toalhas à sua disposição.",
        "Há tomadas por todo o apartamento para os seus aparelhos eletrónicos.",
        "O caixote do lixo é automático: basta passar a mão para o abrir.",
        "Há televisão na sala e nos quartos (Prime Video e Netflix)."
      ] },
      { k: "h", t: "O apartamento" },
      { k: "p", t: "Um apartamento aconchegante num ambiente sereno: 2 quartos espaçosos, 1 casa de banho moderna e uma toalete separada. Terraço, estacionamento, máquina de lavar loiça, máquina de lavar roupa e secar." }
    ] },
    { id: "house", t: "Cozinha e roupa", d: "Forno, micro-ondas, máquina de lavar", blocks: [
      { k: "h", t: "A cozinha" },
      { k: "list", items: [
        "Forno: calor estático, calor rotativo (ventilado) e pirólise.",
        "Micro-ondas: botão grande para abrir, botão pequeno à direita para ligar, botão pequeno à esquerda para desligar.",
        "Frigorífico: água fresca, garrafas de panaché e manteiga individual.",
        "Máquina de café Nespresso."
      ] },
      { k: "h", t: "A roupa" },
      { k: "list", items: [
        "Tem toalhas grandes e pequenas à sua disposição.",
        "As camas já estão feitas para o seu conforto.",
        "Máquina de lavar roupa: cápsulas de detergente e amaciador fornecidos.",
        "A máquina de lavar também seca a roupa. Tem ferro de engomar e vaporizador à sua disposição.",
        "Tem secador de cabelo e alisador à sua disposição."
      ] }
    ] },
    { id: "rules", t: "Regras da casa", d: "Algumas regras simples", blocks: [
      { k: "list", items: [
        "Respeito pelo alojamento: cuide da casa e dos espaços exteriores e evite quaisquer danos.",
        "Festas e receções: não são permitidas festas de grande dimensão e pedimos que limite o ruído depois das 22h00.",
        "Animais: adoramos animais, mas não são aceites durante a sua estadia.",
        "Pessoa adicional: não é aceite um hóspede adicional imprevisto sem nos ter informado.",
        "Proibido fumar no interior: tem à disposição uma zona de fumadores coberta no terraço sul.",
        "Segurança: respeite as regras de segurança e não utilize equipamento elétrico perigoso."
      ] }
    ] },
    { id: "nearby", t: "À volta da residência", d: "Compras e restaurantes", blocks: [
      { k: "places", ref: "shops", h: "shopsH" },
      { k: "places", ref: "restaurants", h: "restoH" },
      { k: "places", ref: "fastfood", h: "fastH", note: "fastNote" }
    ] },
    { id: "activities", t: "O que fazer", d: "Paris e arredores, atualizado todos os dias", special: "activities" },
    { id: "emergency", t: "Urgências e saúde", d: "Hospital, médico, farmácia", blocks: [
      { k: "facts", rows: [["SAMU (ambulância)", "15"], ["Bombeiros", "18"], ["Emergência europeia", "112"], ["Polícia", "17"]] },
      { k: "contact3", items: [
        { h: "Hospital", n: "Centre Hospitalier Victor Dupouy", addr: "69 Rue du Lieutenant-Colonel Prudhon, 95100 Argenteuil", tel: "01 34 23 24 25", t: "Serviço de urgências 24 horas por dia." },
        { h: "Médico", n: "Maison de Santé du Val Notre-Dame", addr: "Secteur Val Notre-Dame, 95100 Argenteuil", t: "A preferir para consultas de proximidade. Também pode marcar consulta pelo Doctolib, ou ligar para o 15 em caso de urgência médica." },
        { h: "Farmácia", n: "Pharmacie du Val d'Argent", addr: "9 bis Place d'Alembert, 95100 Argenteuil", tel: "01 39 82 64 83" }
      ] }
    ] },
    { id: "leave", t: "Antes de partir", d: "Partida e avaliação", blocks: [
      { k: "list", items: ["Ate os sacos do lixo", "Esvazie a máquina de lavar loiça", "Verifique os armários e as gavetas", "Feche as janelas e a porta", "Deixe as chaves na caixa de chaves"] },
      { k: "h", t: "A sua avaliação" },
      { k: "p", t: "A sua satisfação é a nossa satisfação! Se gostou da estadia, não hesite em deixar-nos uma avaliação." },
      { k: "p", t: "Obrigado por ter escolhido o nosso alojamento. Esperamos recebê-lo novamente muito em breve e desejamos-lhe uma boa viagem de regresso." }
    ] }
  ]
};

GUIDE.it = {
  ui: {
    brand: "Résidence Oradou", sub: "Argenteuil / Sartrouville", langLabel: "Lingua",
    welcome: "Benvenuti", welcomeLede: "Tutto ciò che serve per il suo soggiorno. Tocchi una sezione.",
    menu: "Menu", back: "Torna al menu", host: "Il suo host", callUs: "Contatti",
    route: "Itinerario", away: "A", distance: "Distanza", price: "Prezzo a persona",
    note: "Informazioni tratte dal libretto di benvenuto della residenza.",
    codesTitle: "Codici di accesso", codesBody: "I codici delle porte, della cassetta delle chiavi e dell'ascensore le vengono inviati nel messaggio di Airbnb prima dell'arrivo. Non sono mostrati qui per la sicurezza della residenza.",
    hostTitle: "Il suo host", hostBody: "Sono l'host della residenza Oradou e un grande appassionato di cucina. La invito a visitare la mia pagina Instagram: ",
    hostBody2: "Amo ricevere ospiti e faccio del mio meglio perché il suo soggiorno sia il più piacevole possibile.",
    reachUs: "Ha bisogno di contattarci?", phone: "Telefono", email: "E-mail",
    kitchenH: "La cucina", linenH: "La biancheria", shopsH: "Spesa", restoH: "Ristoranti", fastH: "Fast food", fastNote: "Indirizzi tratti dal libretto. Il pulsante Itinerario indica la distanza esatta dalla sua posizione."
  },
  sections: [
    { id: "arrival", t: "Arrivo e partenza", d: "Orari, chiavi, parcheggio", blocks: [
      { k: "facts", rows: [["Arrivo", "Dalle 16:00"], ["Partenza", "Entro le 12:00"]] },
      { k: "h", t: "Per entrare" },
      { k: "p", t: "L'indirizzo dell'alloggio e le istruzioni di accesso le vengono inviati nel messaggio di Airbnb. Si rechi all'indirizzo indicato e inserisca il codice che le è stato comunicato." },
      { k: "route", dest: "6-8 rue de Lutèce, 95100 Argenteuil", label: "Appartamento" },
      { k: "route", dest: "27 route de Pontoise, 95100 Argenteuil", label: "Cassetta delle chiavi e parcheggio" },
      { k: "video", url: "https://lesresidencesoradou.my.canva.site/lesresidencesoradou-video-accueil", label: "Video di benvenuto: guida passo passo" },
      { k: "codes" },
      { k: "h", t: "Prima di partire" },
      { k: "list", items: ["Spenga le luci", "Chiuda i sacchi della spazzatura", "Lavi i piatti", "Lasci gli asciugamani a terra", "Chiuda finestre e porte", "Lasci le chiavi nella cassetta delle chiavi"] },
    ] },
    { id: "stay", t: "Durante il soggiorno", d: "Servizi, dotazioni", blocks: [
      { k: "h", t: "Da sapere" },
      { k: "list", items: [
        "Nel frigorifero trova bottiglie d'acqua e panaché.",
        "Ha a disposizione una lavastoviglie.",
        "Ha a disposizione degli asciugamani.",
        "Ci sono prese ovunque nell'appartamento per i suoi dispositivi elettronici.",
        "Il cestino è automatico: basta passare la mano per aprirlo.",
        "C'è un televisore in salotto e nelle camere (Prime Video e Netflix)."
      ] },
      { k: "h", t: "L'appartamento" },
      { k: "p", t: "Un appartamento accogliente in un contesto sereno: 2 camere spaziose, 1 bagno moderno e un WC separato. Terrazza, parcheggio, lavastoviglie, lavatrice e asciugatrice." }
    ] },
    { id: "house", t: "Cucina e biancheria", d: "Forno, microonde, lavatrice", blocks: [
      { k: "h", t: "La cucina" },
      { k: "list", items: [
        "Forno: statico, ventilato e pirolitico.",
        "Microonde: pulsante grande per aprire, pulsante piccolo a destra per accendere, pulsante piccolo a sinistra per spegnere.",
        "Frigorifero: acqua fresca, bottiglie di panaché e burro monodose.",
        "Macchina da caffè Nespresso."
      ] },
      { k: "h", t: "La biancheria" },
      { k: "list", items: [
        "Ha a disposizione asciugamani grandi e piccoli.",
        "I letti sono già fatti per il suo comfort.",
        "Lavatrice: capsule di detersivo e ammorbidente forniti.",
        "La lavatrice asciuga anche i capi. Ha a disposizione un ferro da stiro e uno stiratore a vapore.",
        "Ha a disposizione un asciugacapelli e una piastra per capelli."
      ] }
    ] },
    { id: "rules", t: "Regole della casa", d: "Poche regole semplici", blocks: [
      { k: "list", items: [
        "Rispetto dell'alloggio: abbia cura della casa e degli esterni ed eviti ogni danno.",
        "Feste e ricevimenti: niente feste di grandi dimensioni e rumore ridotto dopo le 22:00.",
        "Animali: amiamo gli animali, ma non sono ammessi durante il soggiorno.",
        "Persona in più: non è ammesso un ospite aggiuntivo imprevisto senza avercelo comunicato.",
        "Vietato fumare all'interno: sulla terrazza sud trova un'area fumatori coperta.",
        "Sicurezza: rispetti le regole di sicurezza e non usi apparecchi elettrici pericolosi."
      ] }
    ] },
    { id: "nearby", t: "Intorno alla residenza", d: "Spesa e ristoranti", blocks: [
      { k: "places", ref: "shops", h: "shopsH" },
      { k: "places", ref: "restaurants", h: "restoH" },
      { k: "places", ref: "fastfood", h: "fastH", note: "fastNote" }
    ] },
    { id: "activities", t: "Cosa fare", d: "Parigi e dintorni, aggiornato ogni giorno", special: "activities" },
    { id: "emergency", t: "Emergenze e salute", d: "Ospedale, medico, farmacia", blocks: [
      { k: "facts", rows: [["SAMU (ambulanza)", "15"], ["Vigili del fuoco", "18"], ["Emergenze europee", "112"], ["Polizia", "17"]] },
      { k: "contact3", items: [
        { h: "Ospedale", n: "Centre Hospitalier Victor Dupouy", addr: "69 Rue du Lieutenant-Colonel Prudhon, 95100 Argenteuil", tel: "01 34 23 24 25", t: "Pronto soccorso aperto 24 ore su 24." },
        { h: "Medico", n: "Maison de Santé du Val Notre-Dame", addr: "Secteur Val Notre-Dame, 95100 Argenteuil", t: "Da preferire per le visite di vicinato. Può anche prenotare tramite Doctolib, o chiamare il 15 in caso di emergenza medica." },
        { h: "Farmacia", n: "Pharmacie du Val d'Argent", addr: "9 bis Place d'Alembert, 95100 Argenteuil", tel: "01 39 82 64 83" }
      ] }
    ] },
    { id: "leave", t: "Prima di partire", d: "Partenza e recensione", blocks: [
      { k: "list", items: ["Chiuda i sacchi della spazzatura", "Svuoti la lavastoviglie", "Controlli armadi e cassetti", "Chiuda le finestre e la porta", "Lasci le chiavi nella cassetta"] },
      { k: "h", t: "La sua recensione" },
      { k: "p", t: "La sua soddisfazione è la nostra soddisfazione! Se il soggiorno le è piaciuto, non esiti a lasciarci una recensione." },
      { k: "p", t: "Grazie per aver scelto il nostro alloggio. Speriamo di riaccoglierla presto e le auguriamo un buon viaggio di ritorno." }
    ] }
  ]
};
