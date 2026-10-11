/* Contenu du guide d'accueil. Langues : fr, en, es. Ajouter une langue = ajouter un bloc dans GUIDE et une entrée dans SITE_LANGS (app.js). */
var CONTACT = { phone: "+33 7 55 00 23 55", phoneRaw: "0033755002355", email: "lesresidencesoradou@gmail.com", instagram: "Frantzcooking" };

/* Lieux à proximité. d = distance indiquée dans le livret. Les prix sont ceux du livret. */
var PLACES = {
  shops: [
    { n: "Le Jardin du Val", addr: "25 Rue des Grives, 95100 Argenteuil", d: "300 m", t: { fr: "Supermarché apprécié pour ses produits frais, sa boucherie et ses fruits et légumes.", en: "Supermarket known for fresh produce, its butcher and fruit and vegetables.", es: "Supermercado apreciado por sus productos frescos, su carnicería y sus frutas y verduras.", de: "Supermarkt, geschätzt für frische Produkte, Metzgerei sowie Obst und Gemüse.", pt: "Supermercado apreciado pelos produtos frescos, talho e frutas e legumes.", it: "Supermercato apprezzato per i prodotti freschi, la macelleria e frutta e verdura." } },
    { n: "Lidl", addr: "Secteur du Val Notre-Dame, 78500 Sartrouville", d: "300 m", t: { fr: "Idéal pour les courses du quotidien.", en: "Handy for everyday shopping.", es: "Ideal para la compra diaria.", de: "Praktisch für den täglichen Einkauf.", pt: "Prático para as compras do dia a dia.", it: "Comodo per la spesa di ogni giorno." } },
    { n: "Aldi", addr: "60/70 Rue Jean-Pierre Timbaud, 78500 Sartrouville", d: "300 m", t: { fr: "Supermarché discount avec produits frais et boulangerie.", en: "Discount supermarket with fresh produce and a bakery.", es: "Supermercado de descuento con productos frescos y panadería.", de: "Discounter mit frischen Produkten und Bäckerei.", pt: "Supermercado de desconto com produtos frescos e padaria.", it: "Discount con prodotti freschi e panetteria." } },
    { n: "Carrefour Sartrouville", addr: "Avenue Robert Schuman, 78500 Sartrouville", d: "300 m", t: { fr: "Grand hypermarché avec galerie commerciale et station-service.", en: "Large hypermarket with a shopping arcade and a petrol station.", es: "Gran hipermercado con galería comercial y gasolinera.", de: "Großer Hypermarkt mit Einkaufspassage und Tankstelle.", pt: "Grande hipermercado com galeria comercial e posto de combustível.", it: "Grande ipermercato con galleria commerciale e stazione di servizio." } }
  ],
  restaurants: [
    { n: "Luci", addr: "152 Route de Pontoise, 95100 Argenteuil", d: "300 m", p: "30–70 €", t: { fr: "Cuisine italienne raffinée.", en: "Refined Italian cooking.", es: "Cocina italiana refinada.", de: "Gehobene italienische Küche.", pt: "Cozinha italiana requintada.", it: "Cucina italiana raffinata." } },
    { n: "California Sushi", addr: "262 Avenue Jean Jaurès, 95100 Argenteuil", d: "300 m", p: "15–35 €", t: { fr: "Restaurant japonais et sushis.", en: "Japanese restaurant and sushi.", es: "Restaurante japonés y sushi.", de: "Japanisches Restaurant und Sushi.", pt: "Restaurante japonês e sushi.", it: "Ristorante giapponese e sushi." } },
    { n: "Anatolie", addr: "61 Route de Pontoise, 95100 Argenteuil", d: "300 m", p: "15–35 €", t: { fr: "Spécialités turques et grillades.", en: "Turkish specialities and grills.", es: "Especialidades turcas y parrilladas.", de: "Türkische Spezialitäten und Grillgerichte.", pt: "Especialidades turcas e grelhados.", it: "Specialità turche e grigliate." } },
    { n: "Babamour", addr: "28 Boulevard des Martyrs de Châteaubriant, 95100 Argenteuil", d: "300 m", p: "15–35 €", t: { fr: "Restaurant convivial : burgers gourmets et plats maison.", en: "Friendly restaurant with gourmet burgers and home cooking.", es: "Restaurante acogedor con hamburguesas gourmet y platos caseros.", de: "Gemütliches Restaurant mit Gourmet-Burgern und Hausmannskost.", pt: "Restaurante acolhedor com hambúrgueres gourmet e pratos caseiros.", it: "Locale accogliente con hamburger gourmet e piatti casalinghi." } },
    { n: "Medley Restaurant", addr: "72 Route de Pontoise, 95100 Argenteuil", d: "300 m", p: "30–40 €", t: { fr: "Cuisine moderne et cadre élégant.", en: "Modern cooking in an elegant setting.", es: "Cocina moderna en un entorno elegante.", de: "Moderne Küche in elegantem Ambiente.", pt: "Cozinha moderna num ambiente elegante.", it: "Cucina moderna in un ambiente elegante." } }
  ],
  fastfood: [
    { n: "McDonald's", addr: "Avenue Maurice Berteaux, 78500 Sartrouville" },
    { n: "Quick Sartrouville", addr: "Avenue Robert Schuman, 78500 Sartrouville" },
    { n: "KFC", addr: "4 Rue de Pondichéry, 78500 Sartrouville" },
    { n: "Burger King", addr: "2 Allée des Coudrées, 95240 Cormeilles-en-Parisis" },
    { n: "Buffalo Grill", addr: "Zone des Bois Rochefort, 95240 Cormeilles-en-Parisis" },
    { n: "Hippopotamus Steakhouse", addr: "1 Boulevard du Parisis, 95240 Cormeilles-en-Parisis" }
  ]
};

var GUIDE = {
  fr: {
    ui: {
      brand: "Résidence Oradou", sub: "Argenteuil / Sartrouville", langLabel: "Langue",
      welcome: "Bienvenue chez nous", welcomeLede: "Tout ce qu'il faut savoir pour votre séjour. Touchez une rubrique.",
      menu: "Menu", back: "Retour au menu", host: "Votre hôte", callUs: "Nous contacter",
      route: "Itinéraire", away: "À", distance: "Distance", price: "Tarif par personne",
      note: "Informations relevées dans le livret d'accueil de la résidence.",
      codesTitle: "Codes d'accès", codesBody: "Les codes (portes, boîte à clés, ascenseur) vous sont envoyés dans votre message Airbnb avant votre arrivée. Ils ne sont pas affichés ici pour la sécurité de la résidence.",
      hostTitle: "Votre hôte", hostBody: "Je suis l'hôte de la résidence Oradou et un grand amateur de cuisine. Je vous invite à visiter ma page Instagram : ",
      hostBody2: "J'adore recevoir et je fais au mieux pour que votre séjour soit le plus agréable possible.",
      reachUs: "Besoin de nous joindre ?", phone: "Téléphone", email: "E-mail",
      kitchenH: "La cuisine", linenH: "Le linge", shopsH: "Courses", restoH: "Restaurants", fastH: "Fast-foods", fastNote: "Adresses du livret. Le bouton Itinéraire donne la distance exacte depuis votre position."
    },
    sections: [
      { id: "arrival", t: "Arrivée et départ", d: "Horaires, clés, parking", blocks: [
        { k: "facts", rows: [["Arrivée", "À partir de 16h"], ["Départ", "Avant 12h"]] },
        { k: "h", t: "Pour entrer" },
        { k: "p", t: "L'adresse du logement et les instructions d'accès vous sont communiquées dans votre message Airbnb. Rendez-vous à l'adresse indiquée et entrez le code qui vous a été communiqué." },
        { k: "route", dest: "6-8 rue de Lutèce, 95100 Argenteuil", label: "Appartement" },
        { k: "route", dest: "27 route de Pontoise, 95100 Argenteuil", label: "Boîte à clés et parking" },
        { k: "video", url: "https://canva.link/fe1tzseey39wb4p", label: "Vidéo d'accueil : se guider pas à pas" },
        { k: "codes" },
        { k: "h", t: "Avant de partir" },
        { k: "list", items: ["Éteignez les lumières", "Attachez les poubelles", "Faites votre vaisselle", "Laissez les serviettes au sol", "Fermez les fenêtres et les portes", "Laissez les clés dans la boîte à clés"] },
      ] },
      { id: "stay", t: "Pendant votre séjour", d: "Services, équipements", blocks: [
        { k: "h", t: "À savoir" },
        { k: "list", items: [
          "Des bouteilles d'eau et du panaché sont disponibles dans le réfrigérateur.",
          "Un lave-vaisselle est à votre disposition.",
          "Des serviettes sont à votre disposition.",
          "Vous trouverez des prises un peu partout dans l'appartement pour vos appareils électroniques.",
          "La poubelle est automatique : passez simplement la main pour l'ouvrir.",
          "Une télévision est installée dans le salon et dans les chambres (Prime Video et Netflix)."
        ] },
        { k: "h", t: "L'appartement" },
        { k: "p", t: "Un appartement cocooning dans un cadre serein : 2 chambres spacieuses, 1 salle de bains moderne et 1 toilette séparée. Terrasse, parking, lave-vaisselle, lave-linge et sèche-linge." }
      ] },
      { id: "house", t: "Cuisine et linge", d: "Four, micro-ondes, machine à laver", blocks: [
        { k: "h", t: "La cuisine" },
        { k: "list", items: [
          "Four : chaleur statique, chaleur tournante et pyrolyse.",
          "Micro-ondes : gros bouton pour ouvrir, petit bouton à droite pour allumer, petit bouton à gauche pour éteindre.",
          "Réfrigérateur : eau fraîche, bouteilles de panaché et beurre individuel.",
          "Machine à café Nespresso."
        ] },
        { k: "h", t: "Le linge" },
        { k: "list", items: [
          "Des grandes et des petites serviettes sont à votre disposition.",
          "Les lits sont déjà faits pour votre confort.",
          "Machine à laver : capsules de lessive et adoucissant fournis.",
          "La machine à laver sèche aussi le linge. Un fer à repasser et un défroisseur sont à votre disposition.",
          "Un sèche-cheveux et un lisseur sont à votre disposition."
        ] }
      ] },
      { id: "rules", t: "Règles de la maison", d: "Quelques règles simples", blocks: [
        { k: "list", items: [
          "Respect des lieux : respectez la maison et les extérieurs et évitez toute dégradation.",
          "Fêtes et réceptions : pas de fêtes de grande ampleur, et bruit limité après 22h.",
          "Animaux : nous adorons les animaux, mais ils ne sont pas acceptés pendant votre séjour.",
          "Personne supplémentaire : pas de voyageur supplémentaire imprévu sans nous en avoir informés.",
          "Ne pas fumer à l'intérieur : un fumoir abrité est à votre disposition sur la terrasse sud.",
          "Sécurité : respectez les règles de sécurité et n'utilisez pas de matériel électrique dangereux."
        ] }
      ] },
      { id: "nearby", t: "Autour de la résidence", d: "Courses et restaurants", blocks: [
        { k: "places", ref: "shops", h: "shopsH" },
        { k: "places", ref: "restaurants", h: "restoH" },
        { k: "places", ref: "fastfood", h: "fastH", note: "fastNote" }
      ] },
      { id: "activities", t: "Sorties", d: "Paris et alentours, mises à jour chaque jour", special: "activities" },
      { id: "emergency", t: "Urgences et santé", d: "Hôpital, médecin, pharmacie", blocks: [
        { k: "facts", rows: [["SAMU", "15"], ["Pompiers", "18"], ["Urgences européennes", "112"], ["Police", "17"]] },
        { k: "contact3", items: [
          { h: "Hôpital", n: "Centre Hospitalier Victor Dupouy", addr: "69 Rue du Lieutenant-Colonel Prudhon, 95100 Argenteuil", tel: "01 34 23 24 25", t: "Service des urgences 24h/24." },
          { h: "Médecin", n: "Maison de Santé du Val Notre-Dame", addr: "Secteur Val Notre-Dame, 95100 Argenteuil", t: "À privilégier pour les consultations de proximité. Vous pouvez aussi prendre rendez-vous via Doctolib, ou appeler le 15 en cas d'urgence médicale." },
          { h: "Pharmacie", n: "Pharmacie du Val d'Argent", addr: "9 bis Place d'Alembert, 95100 Argenteuil", tel: "01 39 82 64 83" }
        ] }
      ] },
      { id: "leave", t: "Avant de partir", d: "Départ et avis", blocks: [
        { k: "list", items: ["Attachez les poubelles", "Videz le lave-vaisselle", "Vérifiez les placards et les tiroirs", "Fermez les fenêtres et la porte", "Déposez les clés dans la boîte à clés"] },
        { k: "h", t: "Votre avis" },
        { k: "p", t: "Votre satisfaction est notre satisfaction ! Si vous avez apprécié votre séjour, n'hésitez pas à nous laisser un avis." },
        { k: "p", t: "Merci d'avoir choisi notre logement. Nous espérons vous accueillir à nouveau très bientôt et vous souhaitons un bon retour chez vous." }
      ] }
    ]
  },

  en: {
    ui: {
      brand: "Résidence Oradou", sub: "Argenteuil / Sartrouville", langLabel: "Language",
      welcome: "Welcome", welcomeLede: "Everything you need to know for your stay. Tap a topic.",
      menu: "Menu", back: "Back to menu", host: "Your host", callUs: "Contact us",
      route: "Directions", away: "At", distance: "Distance", price: "Price per person",
      note: "Information taken from the residence's welcome booklet.",
      codesTitle: "Access codes", codesBody: "The door codes, key box code, lift code are sent in your Airbnb message before you arrive. They are not shown here, to keep the residence secure.",
      hostTitle: "Your host", hostBody: "I am the host of the Oradou residence and a keen cook. Come and visit my Instagram page: ",
      hostBody2: "I love having guests and do my best to make your stay as pleasant as possible.",
      reachUs: "Need to reach us?", phone: "Phone", email: "Email",
      kitchenH: "The kitchen", linenH: "Linen", shopsH: "Shops", restoH: "Restaurants", fastH: "Fast food", fastNote: "Addresses from the booklet. The Directions button gives the exact distance from your location."
    },
    sections: [
      { id: "arrival", t: "Arrival and departure", d: "Times, keys, parking", blocks: [
        { k: "facts", rows: [["Check-in", "From 4 pm"], ["Check-out", "Before 12 noon"]] },
        { k: "h", t: "Getting in" },
        { k: "p", t: "The address of the apartment and the access instructions are sent in your Airbnb message. Go to the address you were given and enter the code that was sent to you." },
        { k: "route", dest: "6-8 rue de Lutèce, 95100 Argenteuil", label: "Apartment" },
        { k: "route", dest: "27 route de Pontoise, 95100 Argenteuil", label: "Key box and car park" },
        { k: "video", url: "https://canva.link/fe1tzseey39wb4p", label: "Welcome video: find your way step by step" },
        { k: "codes" },
        { k: "h", t: "Before you leave" },
        { k: "list", items: ["Switch off the lights", "Tie up the rubbish bags", "Do your dishes", "Leave the towels on the floor", "Close the windows and doors", "Leave the keys in the key box"] },
      ] },
      { id: "stay", t: "During your stay", d: "Services, equipment", blocks: [
        { k: "h", t: "Good to know" },
        { k: "list", items: [
          "Water bottles and panaché (shandy) are in the fridge.",
          "A dishwasher is available.",
          "Towels are provided.",
          "There are sockets throughout the apartment for your electronic devices.",
          "The bin is automatic: just wave your hand to open it.",
          "There is a TV in the living room and in the bedrooms (Prime Video and Netflix)."
        ] },
        { k: "h", t: "The apartment" },
        { k: "p", t: "A cosy apartment in a peaceful setting: 2 spacious bedrooms, 1 modern bathroom and a separate toilet. Terrace, parking, dishwasher, washing machine and dryer." }
      ] },
      { id: "house", t: "Kitchen and linen", d: "Oven, microwave, washing machine", blocks: [
        { k: "h", t: "The kitchen" },
        { k: "list", items: [
          "Oven: static heat, fan-assisted heat and pyrolytic cleaning.",
          "Microwave: big button to open, small button on the right to switch on, small button on the left to switch off.",
          "Fridge: cold water, bottles of panaché and individual butter portions.",
          "Nespresso coffee machine."
        ] },
        { k: "h", t: "Linen" },
        { k: "list", items: [
          "Large and small towels are provided.",
          "The beds are already made for your comfort.",
          "Washing machine: detergent capsules and fabric softener provided.",
          "The washing machine also dries clothes. An iron and a clothes steamer are available.",
          "A hair dryer and hair straighteners are available."
        ] }
      ] },
      { id: "rules", t: "House rules", d: "A few simple rules", blocks: [
        { k: "list", items: [
          "Respect the property: look after the house and the outdoor areas and avoid any damage.",
          "Parties and gatherings: no large parties, and please keep noise down after 10 pm.",
          "Pets: we love animals, but they are not allowed during your stay.",
          "Extra guests: please tell us in advance if an extra guest will be staying.",
          "No smoking indoors: a covered smoking area is available on the south terrace.",
          "Safety: please follow safety rules and do not use dangerous electrical equipment."
        ] }
      ] },
      { id: "nearby", t: "Around the residence", d: "Shops and restaurants", blocks: [
        { k: "places", ref: "shops", h: "shopsH" },
        { k: "places", ref: "restaurants", h: "restoH" },
        { k: "places", ref: "fastfood", h: "fastH", note: "fastNote" }
      ] },
      { id: "activities", t: "Things to do", d: "Paris and nearby, updated daily", special: "activities" },
      { id: "emergency", t: "Emergencies and health", d: "Hospital, doctor, pharmacy", blocks: [
        { k: "facts", rows: [["Ambulance (SAMU)", "15"], ["Fire brigade", "18"], ["European emergency number", "112"], ["Police", "17"]] },
        { k: "contact3", items: [
          { h: "Hospital", n: "Centre Hospitalier Victor Dupouy", addr: "69 Rue du Lieutenant-Colonel Prudhon, 95100 Argenteuil", tel: "01 34 23 24 25", t: "Emergency department open 24 hours a day." },
          { h: "Doctor", n: "Maison de Santé du Val Notre-Dame", addr: "Secteur Val Notre-Dame, 95100 Argenteuil", t: "Best choice for local consultations. You can also book through Doctolib, or call 15 for a medical emergency." },
          { h: "Pharmacy", n: "Pharmacie du Val d'Argent", addr: "9 bis Place d'Alembert, 95100 Argenteuil", tel: "01 39 82 64 83" }
        ] }
      ] },
      { id: "leave", t: "Before you leave", d: "Check-out and review", blocks: [
        { k: "list", items: ["Tie up the rubbish bags", "Empty the dishwasher", "Check the cupboards and drawers", "Close the windows and the door", "Drop the keys in the key box"] },
        { k: "h", t: "Your review" },
        { k: "p", t: "Your satisfaction is ours! If you enjoyed your stay, please leave us a review." },
        { k: "p", t: "Thank you for choosing our home. We hope to welcome you again very soon, and wish you a safe journey home." }
      ] }
    ]
  },

  es: {
    ui: {
      brand: "Résidence Oradou", sub: "Argenteuil / Sartrouville", langLabel: "Idioma",
      welcome: "Bienvenidos", welcomeLede: "Todo lo que necesita saber para su estancia. Pulse una sección.",
      menu: "Menú", back: "Volver al menú", host: "Su anfitrión", callUs: "Contacto",
      route: "Cómo llegar", away: "En", distance: "Distancia", price: "Precio por persona",
      note: "Información tomada del libro de bienvenida de la residencia.",
      codesTitle: "Códigos de acceso", codesBody: "Los códigos de las puertas, de la caja de llaves y del ascensor se envían en su mensaje de Airbnb antes de su llegada. No se muestran aquí por la seguridad de la residencia.",
      hostTitle: "Su anfitrión", hostBody: "Soy el anfitrión de la residencia Oradou y un gran aficionado a la cocina. Le invito a visitar mi página de Instagram: ",
      hostBody2: "Me encanta recibir y hago todo lo posible para que su estancia sea lo más agradable posible.",
      reachUs: "¿Necesita contactarnos?", phone: "Teléfono", email: "Correo electrónico",
      kitchenH: "La cocina", linenH: "La ropa", shopsH: "Compras", restoH: "Restaurantes", fastH: "Comida rápida", fastNote: "Direcciones del libro de bienvenida. El botón Cómo llegar indica la distancia exacta desde su ubicación."
    },
    sections: [
      { id: "arrival", t: "Llegada y salida", d: "Horarios, llaves, aparcamiento", blocks: [
        { k: "facts", rows: [["Llegada", "A partir de las 16:00"], ["Salida", "Antes de las 12:00"]] },
        { k: "h", t: "Para entrar" },
        { k: "p", t: "La dirección del alojamiento y las instrucciones de acceso se envían en su mensaje de Airbnb. Diríjase a la dirección indicada e introduzca el código que se le ha comunicado." },
        { k: "route", dest: "6-8 rue de Lutèce, 95100 Argenteuil", label: "Apartamento" },
        { k: "route", dest: "27 route de Pontoise, 95100 Argenteuil", label: "Caja de llaves y aparcamiento" },
        { k: "video", url: "https://canva.link/fe1tzseey39wb4p", label: "Vídeo de bienvenida: guía paso a paso" },
        { k: "codes" },
        { k: "h", t: "Antes de salir" },
        { k: "list", items: ["Apague las luces", "Ate las bolsas de basura", "Lave los platos", "Deje las toallas en el suelo", "Cierre ventanas y puertas", "Deje las llaves en la caja de llaves"] },
      ] },
      { id: "stay", t: "Durante su estancia", d: "Servicios, equipamiento", blocks: [
        { k: "h", t: "Conviene saber" },
        { k: "list", items: [
          "En el frigorífico hay botellas de agua y panaché.",
          "Dispone de lavavajillas.",
          "Dispone de toallas.",
          "Hay enchufes por todo el apartamento para sus aparatos electrónicos.",
          "El cubo de basura es automático: basta con pasar la mano para abrirlo.",
          "Hay televisión en el salón y en los dormitorios (Prime Video y Netflix)."
        ] },
        { k: "h", t: "El apartamento" },
        { k: "p", t: "Un apartamento acogedor en un entorno sereno: 2 dormitorios amplios, 1 cuarto de baño moderno y un aseo independiente. Terraza, aparcamiento, lavavajillas, lavadora y secadora." }
      ] },
      { id: "house", t: "Cocina y ropa", d: "Horno, microondas, lavadora", blocks: [
        { k: "h", t: "La cocina" },
        { k: "list", items: [
          "Horno: calor estático, calor con ventilador y pirólisis.",
          "Microondas: botón grande para abrir, botón pequeño a la derecha para encender, botón pequeño a la izquierda para apagar.",
          "Frigorífico: agua fresca, botellas de panaché y mantequilla individual.",
          "Cafetera Nespresso."
        ] },
        { k: "h", t: "La ropa" },
        { k: "list", items: [
          "Dispone de toallas grandes y pequeñas.",
          "Las camas ya están hechas para su comodidad.",
          "Lavadora: cápsulas de detergente y suavizante incluidos.",
          "La lavadora también seca la ropa. Dispone de plancha y de vaporizador.",
          "Dispone de secador de pelo y de plancha de pelo."
        ] }
      ] },
      { id: "rules", t: "Normas de la casa", d: "Unas normas sencillas", blocks: [
        { k: "list", items: [
          "Respeto del alojamiento: cuide la casa y los exteriores y evite cualquier daño.",
          "Fiestas y reuniones: no se admiten fiestas multitudinarias y se ruega limitar el ruido a partir de las 22:00.",
          "Animales: nos encantan los animales, pero no se admiten durante su estancia.",
          "Persona adicional: no se admite un viajero adicional imprevisto sin haberlo comunicado.",
          "No fumar en el interior: dispone de una zona de fumadores cubierta en la terraza sur.",
          "Seguridad: respete las normas de seguridad y no utilice material eléctrico peligroso."
        ] }
      ] },
      { id: "nearby", t: "Alrededor de la residencia", d: "Compras y restaurantes", blocks: [
        { k: "places", ref: "shops", h: "shopsH" },
        { k: "places", ref: "restaurants", h: "restoH" },
        { k: "places", ref: "fastfood", h: "fastH", note: "fastNote" }
      ] },
      { id: "activities", t: "Qué hacer", d: "París y alrededores, actualizado cada día", special: "activities" },
      { id: "emergency", t: "Urgencias y salud", d: "Hospital, médico, farmacia", blocks: [
        { k: "facts", rows: [["SAMU (ambulancia)", "15"], ["Bomberos", "18"], ["Emergencias europeas", "112"], ["Policía", "17"]] },
        { k: "contact3", items: [
          { h: "Hospital", n: "Centre Hospitalier Victor Dupouy", addr: "69 Rue du Lieutenant-Colonel Prudhon, 95100 Argenteuil", tel: "01 34 23 24 25", t: "Servicio de urgencias las 24 horas." },
          { h: "Médico", n: "Maison de Santé du Val Notre-Dame", addr: "Secteur Val Notre-Dame, 95100 Argenteuil", t: "Recomendado para consultas cercanas. También puede pedir cita por Doctolib, o llamar al 15 en caso de urgencia médica." },
          { h: "Farmacia", n: "Pharmacie du Val d'Argent", addr: "9 bis Place d'Alembert, 95100 Argenteuil", tel: "01 39 82 64 83" }
        ] }
      ] },
      { id: "leave", t: "Antes de salir", d: "Salida y opinión", blocks: [
        { k: "list", items: ["Ate las bolsas de basura", "Vacíe el lavavajillas", "Revise armarios y cajones", "Cierre las ventanas y la puerta", "Deje las llaves en la caja de llaves"] },
        { k: "h", t: "Su opinión" },
        { k: "p", t: "¡Su satisfacción es la nuestra! Si ha disfrutado de su estancia, no dude en dejarnos una opinión." },
        { k: "p", t: "Gracias por elegir nuestro alojamiento. Esperamos volver a recibirle muy pronto y le deseamos un buen regreso a casa." }
      ] }
    ]
  }
};
