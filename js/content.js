/* =====================================================================
   content.js : Most of the words on the website live here.
   (Page titles and short intro paragraphs are inside each .html file.)
   Teammates: you can edit this file right in GitHub (pencil icon).
   Rules of thumb:
     - Only change the text between the "quotation marks".
     - Don't delete commas, quotation marks, brackets [ ], or braces { }.
     - To use a quotation mark inside text, write \"like this\".
     - Write {{text}} to show a highlighted placeholder.
     - NEVER add prices or partner/company names (the CEO asked us not to
       publish them at this stage).
   ===================================================================== */
window.CONTENT = {

  /* ---------- Rules used by the cutoff planner ---------- */
  rules: { cutoffHours: 4, stagedHours: 1 },

  /* ---------- Home page: key facts ---------- */
  facts: [
    { icon: "clock", big: "4 hours", label: "Anticipated cargo cutoff before departure" },
    { icon: "package", big: "No minimum", label: "There is no minimum shipment size" },
    { icon: "calendar", big: "About 2 days a week", label: "Planned flight days at launch" },
    { icon: "send", big: "Pay at handover", label: "Payment is due when you hand over your cargo" }
  ],

  phases: [
    { id: "before", icon: "package", title: "Before you ship", text: "Know your cargo, pack it right, and get your paperwork ready.", stages: [1, 2] },
    { id: "fly", icon: "plane", title: "While it flies", text: "Your cargo is accepted, cleared for export, and flown through Barbados.", stages: [3, 4] },
    { id: "arrive", icon: "map-pin", title: "When it arrives", text: "Customs clears it, and your receiver collects it.", stages: [5] }
  ],

  /* ---------- Home page: "Not sure where you are?" helper ---------- */
  helper: [
    { q: "Do you know what you're shipping, and that it can be accepted?", title: "Start with your cargo", text: "Check what can and can't be carried, and how to pack it.", href: "cargo.html#checker", cta: "Check my product" },
    { q: "Do you have a flight day in mind?", title: "Pick a flight day", text: "Plan backwards from the cutoff so your cargo stays fresh.", href: "schedules.html#planner", cta: "Open the planner" },
    { q: "Are your documents ready?", title: "Get your paperwork ready", text: "The checklist shows exactly what you need and when.", href: "checklist.html", cta: "Open the checklist" }
  ],

  /* ---------- The five journey stages ---------- */
  stages: [
    {
      short: "Cargo Preparation", phase: "before", phaseLabel: "Before you ship",
      title: "Prepare your cargo and paperwork",
      summary: "Know what you're shipping, pack and label it, and get your paperwork in order before you book.",
      what: [
        "Confirm your route, flight date, and available capacity",
        "Check that your goods are accepted for transportation (see Cargo Rules)",
        "Pack and label the cargo, prebuilt on pallets where applicable",
        "Declare any dry ice, and identify storage or special handling needs",
        "Complete the required shipment documents"
      ],
      who: ["Shipper / exporter (that's you)", "Freight forwarder or customs broker, if you use one"],
      need: [
        "Description of goods, number of packages, weight, and dimensions",
        "Origin, final destination, and shipper and receiver contact details",
        "Commercial invoice and packing list",
        "Export declaration (a forwarder or broker can file it)",
        "Any regulatory markings and labels your product requires",
        "{{Any additional shipper documents to be confirmed}}"
      ],
      risks: [
        "Paperwork that doesn't match (descriptions, weights, receiver details)",
        "Goods that can't be accepted, like electronics or restricted items",
        "Packaging that can't protect perishable cargo",
        "Dry ice or special handling that wasn't declared in advance"
      ],
      checkpoint: { q: "Documents complete?", fail: "Fix and resubmit before you book." },
      detail: [
        "Shipments should arrive packaged and, where applicable, prebuilt on pallets. Smaller shipments may be consolidated into larger loads at the cargo house.",
        "You can use your own labels. Required regulatory markings and labels must still be provided.",
        "The air waybill is prepared during shipment processing after your cargo is scanned, generally by the airline or a freight forwarder, so you don't need to create it yourself."
      ]
    },
    {
      short: "Booking & Acceptance", phase: "before", phaseLabel: "Before you ship",
      title: "Request a quote, book, and get accepted",
      summary: "Request a quote, reserve space on a flight, and get your cargo accepted for transport.",
      what: [
        "Request a quote based on weight and any special handling",
        "Book space on a flight day that fits your inventory",
        "Confirm the quote, payment, and insurance arrangements",
        "The airline reviews your cargo and paperwork before accepting it"
      ],
      who: ["Shipper / exporter", "Airline, together with the cargo handler"],
      need: [
        "Your quote and booking confirmation",
        "Confirmation of the flight date and available capacity",
        "Payment: due when you start the shipment and hand over the cargo",
        "Insurance: cargo should be insured, and liability limits apply. {{Insurance and liability details to be confirmed}}"
      ],
      risks: [
        "Treating a booking as acceptance. The carrier may still inspect your cargo and review its paperwork",
        "Booking a flight day that doesn't fit your harvest, catch, or production",
        "No capacity left on your preferred flight"
      ],
      checkpoint: { q: "Booking accepted?", fail: "Fix the issue, or rebook on another flight." },
      detail: [
        "Pricing is based on weight, with additional charges for special handling. Prices are not listed on this site, so request a quote.",
        "The airline verifies your documentation as part of acceptance and screening."
      ]
    },
    {
      short: "Origin Clearance & Departure", phase: "fly", phaseLabel: "While it flies",
      title: "Deliver, clear export, and depart",
      summary: "Deliver your cargo by the cutoff. It is accepted, screened, cleared for export, and loaded.",
      what: [
        "Deliver the cargo to the cargo facility before the cutoff",
        "Cargo is accepted: packaging checked, weighed, and screened",
        "The air waybill is prepared and the cargo is staged",
        "The export declaration and departure formalities are completed in the origin country",
        "Cargo is loaded and flies to Barbados"
      ],
      who: ["Shipper", "Cargo handler", "Customs (origin country)", "Airline"],
      need: [
        "Cargo packed, labeled, and ready for inspection",
        "All required documents on hand",
        "Export declaration completed",
        "To arrive before the cutoff. {{Final cutoff to be confirmed}}"
      ],
      risks: [
        "Missing the cutoff. Cargo moves to the next available flight, subject to capacity",
        "Cargo held for inspection, or missing export paperwork",
        "Perishables waiting without proper storage"
      ],
      checkpoint: { q: "Export cleared?", fail: "Cargo is held until the issue is resolved." },
      detail: [
        "The anticipated cutoff is four hours before departure, with cargo ready and staged at least one hour before departure. Requirements may vary by shipment size.",
        "The general acceptance process is: cargo acceptance, packaging verification, weighing, screening, air waybill preparation, staging, and aircraft loading."
      ]
    },
    {
      short: "Barbados Transit", phase: "fly", phaseLabel: "While it flies",
      title: "Through the Barbados hub",
      summary: "Your cargo is received at the Barbados hub, stored if needed, and transferred to its onward flight.",
      what: [
        "Cargo arrives and is received at the Barbados hub",
        "Cargo is stored if needed, with cold storage for perishables",
        "Cargo that ends in Barbados clears customs there",
        "Connecting cargo moves under bonded or duty-free transit (subject to approval) and transfers to its onward flight"
      ],
      who: ["Barbados hub handler", "Airline", "Customs (Barbados)"],
      need: [
        "Storage needs identified in advance",
        "Paperwork for through cargo. {{Transit forms and responsible parties to be confirmed}}"
      ],
      risks: [
        "Storage needs that weren't identified in advance",
        "Incomplete transit paperwork",
        "Spoilage if the connection takes too long"
      ],
      checkpoint: null,
      detail: [
        "The goal is a same-day transfer when schedules and processing allow. When that isn't possible, a defined connection period will apply. {{Connection period to be confirmed}}",
        "The detailed transfer sequence for connecting cargo at the hub is still being confirmed."
      ]
    },
    {
      short: "Final Clearance & Delivery", phase: "arrive", phaseLabel: "When it arrives",
      title: "Clear import and collect your cargo",
      summary: "Customs clears your cargo at its destination, and your receiver collects it.",
      what: [
        "Customs reviews the import declaration and documents",
        "The receiver pays duties and taxes (timing and procedures to be confirmed)",
        "Customs releases the cargo",
        "The receiver, or a representative, collects the cargo at the final location"
      ],
      who: ["Customs (destination country)", "Receiver / importer", "Destination cargo handler, with cold storage where needed"],
      need: [
        "Import documents and declaration",
        "Funds for duties and taxes",
        "The receiver informed of the shipment in advance",
        "Collection arranged by the receiver or its representative"
      ],
      risks: [
        "Different rules in different CARICOM countries",
        "Unexpected or unpaid duties and taxes",
        "A receiver who isn't ready to collect, especially for perishables"
      ],
      checkpoint: { q: "Import cleared?", fail: "Cargo is held until documents are corrected or duties are paid." },
      detail: [
        "Destination-country requirements currently differ. The goal is a more streamlined process, but country-specific requirements may apply, so check the rules for your destination.",
        "The receiver is generally responsible for duties and taxes. {{Payment timing and procedures to be confirmed}}"
      ]
    }
  ],

  /* ---------- Process map (swimlane) ----------
     One list per lane, one inner list per stage. A "?" at the start
     marks a decision checkpoint. */
  lanes: ["Shipper / exporter", "Freight forwarder / customs broker (if used)", "Airline", "Cargo handler", "Customs authorities", "Receiver / importer"],
  map: [
    [["Confirm route, date & capacity", "Pack & label cargo", "Prepare documents", "?Documents complete?"], ["Request a quote & book", "Confirm payment & insurance"], ["Deliver cargo by the cutoff"], [], []],
    [["Advise & coordinate documents"], ["Book on your behalf"], ["File export declaration"], [], ["Help with import clearance"]],
    [[], ["Review booking", "?Booking accepted?"], ["Verify documents at acceptance", "Load & fly to Barbados"], ["Onward flight to final destination"], []],
    [[], [], ["Accept, check packaging, weigh & screen", "Prepare air waybill, stage & load"], ["Receive at the Barbados hub", "Cold storage if needed", "Transfer to onward flight"], ["Hold cargo (cold storage if needed) until collection"]],
    [[], [], ["Export declaration & departure formalities", "?Export cleared?"], ["Bonded transit (subject to approval)", "Cargo ending in Barbados clears customs there"], ["Import clearance", "?Import cleared?"]],
    [["Be informed of the shipment"], [], [], [], ["Pay duties & taxes", "Collect cargo (or send a representative)"]]
  ],

  /* ---------- Who's involved ---------- */
  path: [
    { t: "Shipper", c: "blue" }, { t: "Export customs", c: "red" }, { t: "Airline: flight to Barbados", c: "navy" }, { t: "Barbados hub", c: "green" },
    { t: "Airline: onward flight", c: "navy" }, { t: "Import customs", c: "red" }, { t: "Receiver", c: "blue" }
  ],
  stakeholders: [
    { icon: "package", name: "Shipper / exporter", tag: "That's you",
      does: ["Prepares, packs, and labels the goods", "Provides accurate cargo information and documents", "Requests a quote, books, and pays when handing over the cargo"],
      when: "From planning through handover", needs: "A clear idea of your product, route, and flight day." },
    { icon: "file-text", name: "Freight forwarder / customs broker", tag: "Only if you use one",
      does: ["Helps arrange bookings and coordinate transport", "May prepare the air waybill or file customs declarations on your behalf"],
      when: "Before booking through clearance", needs: "Complete shipment details, and your authorization to act for you.",
      note: "Approved forwarders are expected, but there is no final list yet. {{List of approved forwarders}}" },
    { icon: "plane", name: "Airline", tag: "Flies your cargo",
      does: ["Accepts and transports the cargo", "Verifies documentation during acceptance and screening", "Manages transport and security requirements"],
      when: "Booking, acceptance, and the flights", needs: "Cargo that meets the acceptance rules, with accurate documents." },
    { icon: "warehouse", name: "Cargo handler / Barbados hub", tag: "Looks after cargo on the ground",
      does: ["Accepts, weighs, and screens cargo", "Stores cargo, including cold storage, and stages it for loading", "Transfers connecting cargo at the Barbados hub", "Holds cargo at the final location until collection"],
      when: "Handover, Barbados transit, and arrival", needs: "Labeled cargo, plus storage or special handling needs identified in advance.",
      note: "{{Handling organizations to be confirmed before publication}}" },
    { icon: "shield", name: "Customs authorities", tag: "Check and clear cargo",
      does: ["Review export and import declarations", "Inspect cargo when necessary", "Calculate duties and taxes", "Release cargo once requirements are met"],
      when: "Export (origin country) and import (destination)", needs: "Accurate declarations and any required certificates." },
    { icon: "map-pin", name: "Receiver / importer", tag: "Collects the cargo",
      does: ["Arranges destination clearance", "Generally pays duties and taxes", "Collects the cargo, or sends a representative"],
      when: "Final clearance and collection", needs: "Advance notice of the shipment, import documents, and funds for duties and taxes." }
  ],
  handoffs: [
    ["Shipper", "Cargo handler", "Packaged cargo and shipment documents, delivered before the cutoff"],
    ["Cargo handler", "Airline", "Accepted, screened, staged cargo and its air waybill"],
    ["Customs (origin)", "Airline", "Export clearance. Cargo can't leave until it is cleared"],
    ["Airline", "Barbados hub", "Cargo and manifest, with cold storage for perishables"],
    ["Barbados hub", "Airline", "Sorted connecting cargo, ready for its onward flight"],
    ["Airline", "Destination handler", "Cargo and manifest, held in cold storage if needed until collection"],
    ["Destination handler", "Customs (import)", "Cargo, import declaration, and documents for review"],
    ["Customs (import)", "Receiver", "Release once duties and taxes are paid. The receiver collects the cargo"]
  ],

  /* ---------- Cargo rules ---------- */
  cargo: [
    { id: "pack", types: ["perishable", "non"], icon: "package", title: "Packaging",
      points: ["Ship cargo packaged and, where applicable, prebuilt on pallets", "Use durable packaging that prevents contamination, leakage, and damage", "Smaller shipments may be consolidated into larger loads at the cargo house", "Wooden pallets used in international shipping may need to meet ISPM 15 rules. {{Pallet standards to be confirmed}}"] },
    { id: "fresh", types: ["perishable"], icon: "thermometer", title: "Keeping perishables fresh",
      points: ["Cargo may move fresh, or in suitable packaging such as insulated containers or ice chests", "Tell us about storage or special handling needs in advance", "Keep raw animal products separate from other foods", "Check packaging for damage, leakage, and spoilage before handover"] },
    { id: "dry-ice", types: ["perishable", "non"], icon: "snowflake", title: "Dry ice",
      points: ["Declare dry ice in advance", "Acceptance depends on carrier approval", "Packaging, marking, labeling, and quantity requirements apply", "Final guidance for our routes and carrier. {{To be confirmed}}"] },
    { id: "labels", types: ["perishable", "non"], icon: "file-text", title: "Labels and markings",
      points: ["You may use your own labels", "Show shipper and receiver details, the destination, and handling instructions on every package", "The air waybill and shipment documents are prepared during processing, after your cargo is scanned", "Any required regulatory markings and labels must also be provided"] },
    { id: "dry", types: ["non"], icon: "shield", title: "Protecting dry and packaged goods",
      points: ["Canned food, dry goods, and packaged products need no refrigeration", "Use sturdy cartons and secure the contents", "Protect cargo from moisture and damage", "Label each package with the correct destination and receiver"] },
    { id: "spoil", types: ["perishable"], icon: "alert-triangle", title: "If cargo spoils",
      points: ["Spoiled or unusable cargo is intended to be disposed of", "Cargo that is still suitable for sale may potentially be sold at a reduced price", "Assessment, authorization, notification, and disposal procedures. {{To be confirmed}}"] }
  ],
  checker: [
    { name: "Fresh fruit or vegetables", status: "ok", label: "Ordinary food cargo", text: "Generally accepted, subject to inspection at acceptance. Tell us about storage or special handling needs in advance." },
    { name: "Fresh or frozen seafood or meat", status: "ok", label: "Ordinary food cargo", text: "Generally accepted, subject to inspection at acceptance. Identify storage and handling needs in advance, and use suitable insulated packaging." },
    { name: "Dry, canned, or packaged food", status: "ok", label: "Ordinary cargo", text: "Generally accepted. Protect it from moisture and damage, and label every package." },
    { name: "Electronics", status: "no", label: "Not accepted", text: "Electronics are not accepted under the initial service." },
    { name: "Dry ice (to keep cargo cold)", status: "warn", label: "Declare in advance", text: "Dry ice must be declared in advance. Acceptance depends on carrier approval and on packaging, marking, labeling, and quantity requirements." },
    { name: "Lithium batteries", status: "warn", label: "Restricted: special approval needed", text: "Not ordinary cargo. Acceptance depends on applicable regulations and the carrier's authorization and restrictions. Contact us before you plan this shipment." },
    { name: "Fireworks or explosives", status: "warn", label: "Restricted: special approval needed", text: "Not ordinary cargo. Acceptance depends on applicable regulations and the carrier's authorization and restrictions. Contact us before you plan this shipment." },
    { name: "Fuel, lighter fluid, or other flammable liquids", status: "warn", label: "Restricted: special approval needed", text: "Not ordinary cargo. Acceptance depends on applicable regulations and the carrier's authorization and restrictions. Contact us before you plan this shipment." },
    { name: "Aerosols or compressed gas", status: "warn", label: "Restricted: special approval needed", text: "Not ordinary cargo. Acceptance depends on applicable regulations and the carrier's authorization and restrictions. Contact us before you plan this shipment." },
    { name: "Chemicals (flammable solids, oxidizers, corrosives)", status: "warn", label: "Restricted: special approval needed", text: "Not ordinary cargo. Acceptance depends on applicable regulations and the carrier's authorization and restrictions. Contact us before you plan this shipment." },
    { name: "Toxic, infectious, or radioactive materials", status: "warn", label: "Restricted: special approval needed", text: "Not ordinary cargo. Acceptance depends on applicable regulations and the carrier's authorization and restrictions. Contact us before you plan this shipment." },
    { name: "Something else", status: "warn", label: "Ask us first", text: "If your product isn't on this list, contact us before you plan the shipment. {{Contact details}}" }
  ],
  restricted: ["Explosives and fireworks", "Fuels, lighter fluids, and other flammable accelerants", "Compressed gases and aerosols", "Flammable solids", "Oxidizers", "Toxic or infectious materials", "Radioactive materials", "Corrosives", "Lithium batteries"],

  /* ---------- Schedules ---------- */
  routes: {
    origins: ["Guyana", "Brazil"], plannedOrigins: ["Panama", "Venezuela", "Suriname"],
    hub: "Barbados", destinations: ["Saint Lucia"]
  },
  schedule: [
    { day: "{{Day}}", depart: "{{Departure time}}", route: "{{Origin}} \u2192 Barbados \u2192 Saint Lucia", status: "Schedule being finalized" },
    { day: "{{Day}}", depart: "{{Departure time}}", route: "{{Origin}} \u2192 Barbados \u2192 Saint Lucia", status: "Schedule being finalized" }
  ],
  capacity: [
    { label: "Initial large aircraft (Boeing 737-800)", value: "About 45,000 lb" },
    { label: "Two smaller aircraft", value: "About 15,000 lb each" },
    { label: "Small shipments on existing scheduled flights", value: "About 100\u2013500 lb" }
  ],
  tips: [
    "Plan your harvest, catch, or production around flight days, not the other way around",
    "Book capacity early. Space is limited and not guaranteed",
    "Have your cargo packed, labeled, and staged before the cutoff",
    "Tell us about storage needs in advance, so cold storage can be arranged",
    "Have a plan for a missed cutoff: cargo moves on the next available flight, subject to capacity",
    "Coordinate with your receiver so cargo is collected promptly after clearance"
  ],
  policies: [
    { icon: "clock", title: "If you miss the cutoff", text: "Your cargo moves on the next available flight, subject to available capacity and our ability to maintain any required refrigeration or other storage conditions." },
    { icon: "plane", title: "If a flight is cancelled", text: "If the airline cancels a flight, arranging the next available transportation is our responsibility, subject to the same capacity and cargo-care requirements." }
  ],

  /* ---------- Checklist ---------- */
  checklistQuick: [
    { id: "q1", text: "Confirm the route, flight date, and available capacity", why: "Your flight day decides when your cargo must be ready. Check the schedule and capacity first.", href: "schedules.html", link: "See the schedules" },
    { id: "q2", text: "Confirm that your goods are accepted for transportation", why: "Electronics aren't accepted, and dangerous goods are restricted.", href: "cargo.html#checker", link: "Check my product" },
    { id: "q3", text: "Prepare the packaging and labels", why: "Good packaging protects your cargo and keeps it moving.", href: "cargo.html", link: "See the packaging rules" },
    { id: "q4", text: "Declare any dry ice, and identify storage or special handling needs", why: "Dry ice must be declared in advance, and storage needs must be identified before the flight.", href: "cargo.html#dry-ice", link: "Read about dry ice" },
    { id: "q5", text: "Complete the required shipment documents", why: "Descriptions, weights, and receiver details must match on every document.", href: "#documents", link: "See the documents table" },
    { id: "q6", text: "Confirm the quote, payment, and insurance arrangements", why: "Payment is due when you start the shipment and hand over the cargo. Cargo should be insured.", href: "quote.html", link: "Request a quote" },
    { id: "q7", text: "Deliver cargo before the cutoff", why: "The anticipated cutoff is four hours before departure.", href: "schedules.html#planner", link: "Open the cutoff planner" },
    { id: "q8", text: "Arrange destination clearance and collection", why: "Your receiver handles import clearance, duties and taxes, and collects the cargo.", href: "who.html", link: "See who handles what" }
  ],
  checklistGroups: [
    { title: "Shipment details", items: [
      { id: "d1", text: "Cargo type, description, and order details confirmed" },
      { id: "d2", text: "Packages, weight, and dimensions recorded" },
      { id: "d3", text: "Receiver and destination details confirmed" },
      { id: "d4", text: "Product restrictions and handling needs checked", why: "Check the Cargo Rules page before you plan.", href: "cargo.html#checker", link: "Check my product" }
    ] },
    { title: "Booking and packaging", items: [
      { id: "b1", text: "Cargo reservation confirmed" },
      { id: "b2", text: "Flight schedule and acceptance cutoff confirmed" },
      { id: "b3", text: "Goods securely packed, prebuilt on pallets where applicable" },
      { id: "b4", text: "Shipping labels and any regulatory markings on every package" },
      { id: "b5", text: "Dry ice declared, and temperature or storage needs identified, if applicable" }
    ] },
    { title: "Paperwork", items: [
      { id: "p1", text: "Commercial invoice and packing list prepared" },
      { id: "p2", text: "Air waybill information confirmed", why: "The airline or a forwarder generally prepares the air waybill from your details." },
      { id: "p3", text: "Export declaration arranged" },
      { id: "p4", text: "Certificates or permits obtained, if applicable" },
      { id: "p5", text: "Information matches on every document" }
    ] },
    { title: "Before handover", items: [
      { id: "h1", text: "Quote, payment, and insurance confirmed" },
      { id: "h2", text: "Cargo ready for inspection, with all documents on hand" },
      { id: "h3", text: "Delivery to the cargo facility arranged before the cutoff" },
      { id: "h4", text: "Receiver informed of the shipment, and ready to clear and collect" },
      { id: "h5", text: "Contact details for shipment questions saved. {{Call center contact}}" }
    ] }
  ],
  documents: [
    ["Commercial invoice", "Identifies the goods, their value, and the parties involved", "Shipper"],
    ["Packing list", "What is in each package: quantities, weights, and dimensions", "Shipper"],
    ["Air waybill (AWB)", "Records the shipment details and the air transport arrangement", "Prepared during processing, generally by the airline or a forwarder, and verified at acceptance"],
    ["Cargo manifest", "Lists the cargo carried on the flight", "Airline"],
    ["Export declaration", "Customs information for the country the cargo is leaving", "Shipper, forwarder, or customs broker"],
    ["Import declaration", "Customs information for the destination country", "Receiver or customs broker"],
    ["Certificate of origin (when required)", "Shows where the goods originated", "Shipper"],
    ["Product certificates or permits", "None identified so far for ordinary food cargo. {{Commodity-specific requirements to be confirmed}}", "Shipper"],
    ["Labels and regulatory markings", "Your own labels are fine. Required regulatory markings must also be provided", "Shipper"],
    ["Additional documents", "{{Additional required shipper documents to be confirmed}}", "\u2014"]
  ],

  /* ---------- Common mistakes ---------- */
  mistakes: [
    { tag: "Planning", stage: 2, title: "Not planning inventory around flights", what: "Products wait for a flight and spoil. This is the most common problem for new shippers.", fix: "Plan harvest, catch, or production around flight days, and book capacity early." },
    { tag: "Planning", stage: 3, title: "Missing the cutoff", what: "Cargo moves to the next available flight, subject to capacity and cold storage.", fix: "Be staged well before the cutoff. Use the cutoff planner." },
    { tag: "Planning", stage: 2, title: "Treating a booking as acceptance", what: "The carrier may still inspect your cargo and review its paperwork before accepting it.", fix: "Pack and document as if an inspection is certain." },
    { tag: "Paperwork", stage: 1, title: "Mismatched or incomplete paperwork", what: "Descriptions, weights, or receiver details that don't match can cause delays at acceptance or customs.", fix: "Use one set of shipment details on every document, and run through the checklist." },
    { tag: "Packaging", stage: 1, title: "Not declaring dry ice or special handling", what: "Dry ice needs advance declaration and carrier approval. Storage needs must be identified in advance.", fix: "Declare dry ice and tell us about storage needs when you book." },
    { tag: "Packaging", stage: 1, title: "Shipping goods that can't be accepted", what: "Electronics aren't accepted, and fireworks, aerosols, lithium batteries, and other dangerous goods are restricted.", fix: "Check your product in the Cargo Rules tool before you plan." },
    { tag: "Packaging", stage: 1, title: "Weak packaging or labeling", what: "Loose, leaking, or unlabeled cartons can be damaged, delayed, or refused.", fix: "Use durable packaging, prebuilt pallets where applicable, and clear labels." },
    { tag: "Customs", stage: 5, title: "Assuming every CARICOM country has the same rules", what: "Destination-country requirements currently differ.", fix: "Check the requirements for your destination early." },
    { tag: "Customs", stage: 5, title: "Leaving the receiver out of the loop", what: "Cargo can wait after clearance if the receiver isn't ready to pay duties and taxes and collect it.", fix: "Share the shipment details and arrange collection before the cargo arrives." },
    { tag: "Support", stage: 3, title: "Not knowing who to call", what: "Questions during a shipment slow everything down.", fix: "Save the call center contact before you ship. {{Call center contact}}" }
  ],

  /* ---------- FAQ ---------- */
  faq: [
    { cat: "Booking and schedules", q: "How much does it cost?", a: "Pricing is based on weight, with additional charges for special handling. Prices are not published on this site, so please request a quote." },
    { cat: "Booking and schedules", q: "When do I pay?", a: "Shippers pay when they start the shipment and hand over the cargo. {{Payment timing and procedures to be confirmed}}" },
    { cat: "Booking and schedules", q: "Is there a minimum shipment size?", a: "No. There is currently no minimum. The maximum depends on aircraft loading capability, shipment dimensions, and available capacity." },
    { cat: "Booking and schedules", q: "Which routes are available?", a: "Initially, cargo originates in Guyana and Brazil, moves through Barbados, and continues to Saint Lucia. Panama, Venezuela, and Suriname are expected to be added as origins, with more westbound destinations as the network develops." },
    { cat: "Booking and schedules", q: "How often do flights run?", a: "We plan about two flight days a week at first. Specific operating days and schedules are still being finalized. See the Schedules page." },
    { cat: "Booking and schedules", q: "What is the cargo cutoff?", a: "The anticipated cutoff is four hours before departure, with cargo ready and staged at least one hour before departure. Requirements may vary by shipment size, and the final cutoff will be confirmed." },
    { cat: "Booking and schedules", q: "What if I miss the cutoff?", a: "Your cargo moves on the next available flight, subject to available capacity and our ability to maintain any required refrigeration or other storage conditions." },
    { cat: "Booking and schedules", q: "What if a flight is cancelled?", a: "If the airline cancels a flight, arranging the next available transportation is our responsibility, subject to the same capacity and cargo-care requirements." },
    { cat: "Cargo", q: "What can't I ship?", a: "Electronics are not accepted under the initial service. Explosives, fireworks, fuels, compressed gases, aerosols, flammable solids, oxidizers, toxic or infectious materials, radioactive materials, corrosives, and lithium batteries are restricted and are not ordinary cargo. See the Cargo Rules page." },
    { cat: "Cargo", q: "Can I ship with dry ice?", a: "Dry ice must be declared in advance. Acceptance depends on carrier approval and on packaging, marking, labeling, and quantity requirements." },
    { cat: "Cargo", q: "Do I need to control the temperature myself?", a: "Products may move fresh or in suitable packaging, such as insulated containers or ice chests. Identify any storage or special handling requirements in advance." },
    { cat: "Cargo", q: "How should I pack my cargo?", a: "Ship cargo packaged and, where applicable, prebuilt on pallets. Smaller shipments may be consolidated into larger loads at the cargo house. {{Specific packaging and pallet standards to be confirmed}}" },
    { cat: "Cargo", q: "Can I use my own labels?", a: "Yes. The air waybill and shipment documents are prepared during processing, after your cargo is scanned. Any required regulatory markings and labels must also be provided." },
    { cat: "Cargo", q: "What if my cargo spoils or is damaged?", a: "Spoiled or unusable cargo is intended to be disposed of. Cargo that is still suitable for sale may potentially be sold at a reduced price. {{Assessment, authorization, notification, and disposal procedures to be confirmed}}" },
    { cat: "Documents and customs", q: "Which documents do I need?", a: "Typically a commercial invoice, a packing list, and an export declaration, plus any product certificates. See the documents table on the Checklist page. {{Additional shipper documents to be confirmed}}" },
    { cat: "Documents and customs", q: "Who prepares the air waybill?", a: "The airline or a freight forwarder generally prepares it, depending on the operating arrangements. The airline verifies the documentation as part of acceptance and screening." },
    { cat: "Documents and customs", q: "Do I need special certificates?", a: "No additional certification requirements have been identified for the ordinary food cargo currently planned. Commodity-specific requirements will be confirmed. Cargo needing special approval, including dry ice, must meet the requirements before acceptance." },
    { cat: "Documents and customs", q: "How does customs work?", a: "The export declaration and departure formalities are completed in the origin country. Cargo ending in Barbados clears customs there. Connecting cargo is intended to stay under a duty-free or bonded transit arrangement in Barbados, subject to approval, and then clears import customs at its final destination." },
    { cat: "Documents and customs", q: "Do the rules differ between CARICOM countries?", a: "Yes, destination-country requirements currently differ. We are working toward a more streamlined process, but country-specific requirements may apply." },
    { cat: "Documents and customs", q: "Who pays duties and taxes?", a: "The receiver is generally responsible. {{Payment timing and procedures to be confirmed}}" },
    { cat: "Partners and handling", q: "Do I need a freight forwarder?", a: "A forwarder can help with bookings and paperwork. We expect to establish approved forwarders, but there is no final list yet. {{List of approved forwarders}}" },
    { cat: "Partners and handling", q: "How long does cargo stay in Barbados?", a: "The goal is a same-day transfer when schedules and processing allow. When that isn't possible, a defined connection period will apply. {{Connection period to be confirmed}}" },
    { cat: "Partners and handling", q: "Who collects the cargo at the end?", a: "The receiver, or its designated representative, collects the cargo at the final location." },
    { cat: "Risk and support", q: "Is my cargo insured?", a: "Cargo should be insured, and liability limits apply. {{Insurance arrangements, liability terms, and claims process to be confirmed}}" },
    { cat: "Risk and support", q: "Can I track my shipment?", a: "We intend to provide tracking, with visibility similar to what customers get from major express carriers. The system, tracking milestones, and who updates them are still being finalized." },
    { cat: "Risk and support", q: "Who do I contact with questions?", a: "A call center will be the main contact for shipment questions and operational issues. {{Call center phone number and hours}}" },
    { cat: "Risk and support", q: "What problems do new shippers run into most?", a: "Spoilage, when products can't be moved quickly enough. Plan your inventory around the flight schedule, and use the cutoff planner on the Schedules page." }
  ],

  /* ---------- Glossary ("match" = words that get a hover definition) ---------- */
  glossary: [
    { term: "Air waybill (AWB)", def: "The shipping document that records the cargo and the air transport arrangement.", match: ["air waybill"] },
    { term: "Bonded transit", def: "Cargo passes through a country under customs control, without paying import duties, on its way to another destination.", match: ["bonded transit", "duty-free transit"] },
    { term: "Cargo house", def: "The facility where cargo is accepted, checked, and stored before it is loaded.", match: ["cargo house", "cargo facility"] },
    { term: "Cargo manifest", def: "The list of cargo carried on a flight.", match: ["manifest"] },
    { term: "Cold storage", def: "Refrigerated or frozen storage that keeps perishable cargo at the right temperature.", match: ["cold storage"] },
    { term: "Commercial invoice", def: "A document that lists the goods, their value, and the parties involved in the sale.", match: ["commercial invoice"] },
    { term: "Consolidation", def: "Combining smaller shipments into one larger load.", match: ["consolidated"] },
    { term: "Customs broker", def: "A professional who handles customs declarations and clearance for shippers and receivers.", match: ["customs broker"] },
    { term: "Cutoff", def: "The last time cargo can be accepted for a flight.", match: ["cutoff"] },
    { term: "Dry ice", def: "Frozen carbon dioxide used to keep cargo cold. It is regulated and must be declared in advance.", match: ["dry ice"] },
    { term: "Export declaration", def: "Customs information filed in the country the cargo is leaving.", match: ["export declaration"] },
    { term: "Freight forwarder", def: "A company that arranges shipping for a shipper: bookings, paperwork, and coordination. Think of a travel agent for cargo.", match: ["freight forwarder", "forwarder"] },
    { term: "Ground handler", def: "The company that physically receives, stores, loads, and unloads cargo at the airport.", match: ["ground handler", "cargo handler"] },
    { term: "Import declaration", def: "Customs information filed in the country the cargo is entering.", match: ["import declaration"] },
    { term: "Packing list", def: "A document that lists what is inside each package, with quantities, weights, and dimensions.", match: ["packing list"] },
    { term: "Perishable cargo", def: "Goods that can spoil, such as fresh produce, seafood, meat, and refrigerated products.", match: [] },
    { term: "Screening", def: "Security checks on cargo before it is loaded.", match: ["screened", "screening"] },
    { term: "Staging", def: "Placing cargo in a ready area, packed and labeled, before it is loaded.", match: ["staged", "staging"] },
    { term: "Tender", def: "To formally hand cargo over to the carrier for transport.", match: ["tender"] }
  ],

  /* ---------- Resources page ---------- */
  resources: [
    { icon: "check-square", title: "First-time shipper checklist", desc: "Tick off every step before you ship. Print it or save a copy.", status: "available", actions: [{ label: "Open the checklist", href: "checklist.html" }, { label: "Download as text", type: "download" }] },
    { icon: "alert-triangle", title: "Prohibited and restricted cargo", desc: "What can't be shipped, and what needs special approval.", status: "available", actions: [{ label: "View the list", href: "cargo.html#restricted" }] },
    { icon: "clock", title: "Cutoff planner", desc: "Enter a departure time and see when your cargo must be ready.", status: "available", actions: [{ label: "Open the planner", href: "schedules.html#planner" }] },
    { icon: "help-circle", title: "Glossary", desc: "Plain-English definitions of shipping terms.", status: "available", actions: [{ label: "Open the glossary", href: "faq.html#glossary" }] },
    { icon: "calendar", title: "Flight schedule (PDF)", desc: "Operating days and departure times.", status: "soon", actions: [] },
    { icon: "file-text", title: "Rate information", desc: "How pricing works, once finalized.", status: "soon", actions: [] },
    { icon: "file-text", title: "Sample air waybill", desc: "An example of a completed air waybill.", status: "soon", actions: [] },
    { icon: "users", title: "Partner materials", desc: "Guides from handling and forwarding partners.", status: "soon", actions: [] }
  ]
};
