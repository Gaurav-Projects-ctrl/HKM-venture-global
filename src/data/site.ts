// ─────────────────────────────────────────────────────────────
//  HKM Venture Global — single source of truth for site content
//  Everything marked  ⚠ PLACEHOLDER  must be replaced with the
//  client's real details before the site goes live.
// ─────────────────────────────────────────────────────────────

export const company = {
  name: 'HKM Venture Global',
  tagline: 'Connecting Markets. Delivering Trust.',
  // ⚠ PLACEHOLDER — full registered address
  address: '[Registered office address], Vadodara, Gujarat, India',
  city: 'Vadodara, Gujarat, India',
  // ⚠ PLACEHOLDER — domain email, not Gmail
  email: 'info@hkmventureglobal.com',
  // ⚠ PLACEHOLDER — phone shown on site (display format)
  phone: '+91 00000 00000',
  // ⚠ PLACEHOLDER — WhatsApp number: country code + number, digits only (e.g. 919876543210)
  whatsapp: '910000000000',
  whatsappMessage: "Hello HKM Venture Global, I'd like to enquire about your products.",
  hours: 'Monday – Saturday, 9:00 AM – 6:00 PM IST',
  linkedin: 'https://www.linkedin.com/company/hkm-venture-global',
  // ⚠ PLACEHOLDER — replace /public/brochure/hkm-venture-global-brochure.pdf with the real brochure
  brochureUrl: '/brochure/hkm-venture-global-brochure.pdf',
  web3formsKey: '72884102-36af-41f8-9214-3aec938ab1de',
};

// Government registrations — shown on About + footer.
// ⚠ PLACEHOLDER — fill in real numbers. Remove a line if not yet obtained.
export const registrations = [
  { label: 'IEC (Import Export Code)', value: '[IEC number]' },
  { label: 'GSTIN', value: '[GST number]' },
  { label: 'Drug Licence (Wholesale)', value: '[Drug licence no.]' },
  { label: 'RCMC — Pharmexcil', value: '[RCMC no. / Applied]' },
];

// ⚠ PLACEHOLDER — founding members. Add a photo path (e.g. '/team/name.jpg' in /public/team/) or leave '' for a monogram.
export const founders = [
  {
    name: '[Founder Name]',
    role: 'Founder & Managing Director',
    photo: '',
    bio: '[2–3 lines: background, years in trade or industry, what they personally oversee at HKM — e.g. manufacturer partnerships and quality.]',
    linkedin: '',
  },
  {
    name: '[Co-Founder Name]',
    role: 'Co-Founder & Director — Business Development',
    photo: '',
    bio: '[2–3 lines: background, markets they handle (e.g. Ghana & West Africa), and how buyers work with them directly.]',
    linkedin: '',
  },
  {
    name: '[Co-Founder Name]',
    role: 'Co-Founder & Director — Operations',
    photo: '',
    bio: '[2–3 lines: background in logistics, documentation or regulatory affairs, and their role in getting every shipment out on time.]',
    linkedin: '',
  },
];

export const waLink = (msg = company.whatsappMessage) =>
  `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(msg)}`;

// ─────────────────────────────────────────────────────────────
//  Verticals (each gets its own page at /products/<slug>)
// ─────────────────────────────────────────────────────────────

export interface ProductGroup {
  name: string;
  note?: string;
  items: string[];
}

export interface Vertical {
  slug: string;
  index: string;
  short: string;
  title: string;
  titleEm: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
  cardBody: string;
  heroSub: string;
  intro: string[];
  groups: ProductGroup[];
  groupsNote: string;
  forms?: string[];
  documents: { name: string; detail: string }[];
  services: { title: string; body: string }[];
  markets: { title: string; body: string };
  faqs: { q: string; a: string }[];
}

export const verticals: Vertical[] = [
  {
    slug: 'pharmaceuticals',
    index: '01',
    short: 'Healthcare & Pharmaceuticals',
    title: 'Healthcare &',
    titleEm: 'Pharmaceuticals',
    icon: '✦',
    metaTitle: 'Pharmaceutical Exporter from India — Generic Medicines for Ghana & Africa | HKM Venture Global',
    metaDescription:
      'Generic medicines, anti-malarials, antibiotics and healthcare products sourced from WHO-GMP certified Indian manufacturers. Full documentation and registration support for importers in Ghana and Africa.',
    cardBody:
      'Generic medicines and healthcare products sourced from WHO-GMP certified Indian manufacturers, with full documentation for registration and import.',
    heroSub:
      'Quality generic medicines from WHO-GMP certified Indian manufacturers — with the documents, samples and registration support importers in Ghana and across Africa need to order with confidence.',
    intro: [
      'India supplies a large share of the world’s generic medicines, and much of its manufacturing base is right here in Gujarat. HKM Venture Global works as the sourcing and export partner between these manufacturers and importers, distributors and pharmacy chains abroad.',
      'We do not manufacture. We select manufacturing partners on their certifications, audit history and export experience, and we stand between them and you on every order: quotation, samples, documents, quality checks, shipping and after-delivery support.',
    ],
    groups: [
      {
        name: 'Anti-Malarials',
        items: [
          'Artemether + Lumefantrine tablets',
          'Artesunate injection',
          'Artesunate + Amodiaquine tablets',
          'Dihydroartemisinin + Piperaquine tablets',
          'Sulfadoxine + Pyrimethamine tablets',
        ],
      },
      {
        name: 'Antibiotics & Anti-Infectives',
        items: [
          'Amoxicillin capsules & dry syrup',
          'Amoxicillin + Clavulanate tablets',
          'Azithromycin tablets & suspension',
          'Ciprofloxacin tablets',
          'Ceftriaxone injection',
          'Metronidazole tablets & suspension',
        ],
      },
      {
        name: 'Analgesics & Anti-Inflammatory',
        items: [
          'Paracetamol tablets & syrup',
          'Ibuprofen tablets & suspension',
          'Diclofenac tablets & gel',
          'Aceclofenac + Paracetamol tablets',
        ],
      },
      {
        name: 'Chronic Care — Cardiac & Diabetes',
        items: [
          'Amlodipine tablets',
          'Losartan tablets',
          'Atorvastatin tablets',
          'Metformin tablets',
          'Glimepiride tablets',
        ],
      },
      {
        name: 'Gastrointestinal',
        items: [
          'Oral Rehydration Salts (ORS)',
          'ORS + Zinc co-packs',
          'Omeprazole capsules',
          'Antacid suspensions',
          'Ondansetron tablets',
        ],
      },
      {
        name: 'Anthelmintics & Antifungals',
        items: [
          'Albendazole tablets & suspension',
          'Mebendazole tablets',
          'Fluconazole capsules',
          'Clotrimazole cream',
        ],
      },
      {
        name: 'Vitamins, Haematinics & Nutraceuticals',
        items: [
          'Ferrous + Folic Acid tablets',
          'Multivitamin syrups & tablets',
          'Calcium + Vitamin D3 tablets',
          'Vitamin C tablets',
        ],
      },
      {
        name: 'Medical & Surgical Supplies',
        items: [
          'Disposable syringes & IV sets',
          'Examination & surgical gloves',
          'Gauze, bandages & dressings',
          'Medical & non-medical equipment',
        ],
      },
      {
        name: 'APIs & Pharma Intermediates',
        items: [
          'Active Pharmaceutical Ingredients',
          'Pharmaceutical intermediates',
          'Pharmaceutical extracts',
          'Excipients',
        ],
      },
    ],
    groupsNote:
      'Representative products. Strengths, pack sizes and our full product list are shared on request — tell us what you import today and we will match it.',
    forms: ['Tablets', 'Capsules', 'Oral liquids & syrups', 'Dry syrups', 'Injectables', 'Creams & ointments', 'Sachets'],
    documents: [
      { name: 'WHO-GMP Certificate', detail: 'Of the manufacturing site, shared before you place an order.' },
      { name: 'Certificate of Analysis (COA)', detail: 'For every batch shipped.' },
      { name: 'Certificate of Pharmaceutical Product (CoPP)', detail: 'WHO-format CoPP for product registration.' },
      { name: 'Product Dossier (CTD / ACTD)', detail: 'Registration dossier support, including stability data.' },
      { name: 'Free Sale Certificate', detail: 'Where required by the importing country.' },
      { name: 'Export Documents', detail: 'Commercial invoice, packing list, certificate of origin, bill of lading.' },
    ],
    services: [
      {
        title: 'Registration Support',
        body: 'Most African markets require products to be registered before import — in Ghana, with the Food and Drugs Authority. We coordinate the dossier, CoPP, samples and stability data with the manufacturer so your registration moves faster.',
      },
      {
        title: 'Samples Before Orders',
        body: 'We arrange product samples and the full document set before your first order, so your regulatory and quality teams can approve us on evidence, not promises.',
      },
      {
        title: 'Private Label & Third-Party Manufacturing',
        body: 'Build your own brand. We arrange manufacturing under your label, packaging and artwork, to your market’s labelling rules.',
      },
      {
        title: 'Trial Orders Welcome',
        body: 'Start small. We accept trial orders so you can test our quality, documentation and delivery before committing to volume.',
      },
    ],
    markets: {
      title: 'Focused on Ghana & West Africa',
      body: 'Our first focus market is Ghana, with supply to other West and East African markets on request. A focused market means we learn its regulations, documentation and buyers in depth — rather than claiming to serve everyone.',
    },
    faqs: [
      {
        q: 'Are you a manufacturer?',
        a: 'No. We are a sourcing and export partner. We work with WHO-GMP certified manufacturers in India and manage the full order for you — sourcing, quality checks, documentation and shipping.',
      },
      {
        q: 'Can you help register products in Ghana?',
        a: 'Yes. We coordinate the documents registration needs — product dossier, CoPP, COA, samples and stability data — with the manufacturer. Registration itself is filed through your local entity or agent with the Ghana FDA.',
      },
      {
        q: 'Can we get samples before ordering?',
        a: 'Yes. Samples and the supporting documents are arranged before the first order. Sample terms depend on the product.',
      },
      {
        q: 'What are your minimum order quantities?',
        a: 'MOQs depend on the product and pack size. We accept trial orders, so share your requirement and we will quote with the MOQ clearly stated.',
      },
      {
        q: 'What payment and shipping terms do you offer?',
        a: 'We quote FOB or CIF, and work with advance payment or Letters of Credit. Final terms are agreed on each quotation.',
      },
    ],
  },
  {
    slug: 'chemicals',
    index: '02',
    short: 'Chemicals',
    title: 'Chemicals &',
    titleEm: 'Raw Materials',
    icon: '⬡',
    metaTitle: 'Chemical Exporter from Gujarat, India — Specialty & Industrial Chemicals | HKM Venture Global',
    metaDescription:
      'Specialty chemicals, industrial chemicals, solvents, castor derivatives, essential oils and agrochemicals sourced from manufacturers in Gujarat’s chemical belt, with COA, SDS and full export documentation.',
    cardBody:
      'Specialty and industrial chemicals sourced from manufacturers in Gujarat’s chemical belt, with full technical and safety documentation.',
    heroSub:
      'Specialty and industrial chemicals sourced directly from manufacturers in Gujarat — India’s chemical hub — with COA, SDS and dangerous-goods documentation handled for every shipment.',
    intro: [
      'Gujarat is India’s largest chemical-exporting state, and the industrial estates of Ankleshwar, Vapi, Dahej and Jhagadia are within a short drive of our Vadodara office. That proximity lets us visit manufacturers, inspect material and stay close to every order.',
      'We source to your specification — grade, purity, packing and quantity — and manage testing, documentation and dangerous-goods compliance through to shipment.',
    ],
    groups: [
      {
        name: 'Specialty Chemicals',
        items: ['Performance & additive chemicals', 'Pigments & dye intermediates', 'Water treatment chemicals', 'Custom specifications on request'],
      },
      {
        name: 'Industrial Chemicals',
        items: ['Acids & alkalis', 'Inorganic salts', 'Industrial process chemicals', 'Bulk commodity chemicals'],
      },
      {
        name: 'Solvents',
        items: ['Alcohols', 'Ketones & esters', 'Aromatic solvents', 'Industrial & laboratory grades'],
      },
      {
        name: 'Chemical Raw Materials',
        items: ['Intermediates for pharma & agro', 'Raw materials for coatings & plastics', 'Laboratory reagents'],
      },
      {
        name: 'Castor Derivatives',
        note: 'Gujarat produces most of the world’s castor seed.',
        items: ['Castor oil (commercial & first special grade)', 'Hydrogenated castor oil', '12-Hydroxystearic acid', 'Ricinoleic acid'],
      },
      {
        name: 'Essential Oils',
        items: ['Mint oils & menthol', 'Eucalyptus oil', 'Lemongrass & citronella oil', 'Other natural oils on request'],
      },
      {
        name: 'Agrochemicals & Related Products',
        items: ['Crop protection products', 'Plant growth nutrients', 'Agro intermediates'],
      },
    ],
    groupsNote:
      'Representative categories. Share the product name, CAS number, grade and quantity, and we will source and quote to your specification.',
    documents: [
      { name: 'Certificate of Analysis (COA)', detail: 'Batch-level test results against your specification.' },
      { name: 'Safety Data Sheet (SDS / MSDS)', detail: 'For every product shipped.' },
      { name: 'Technical Data Sheet (TDS)', detail: 'Product specification and grade details.' },
      { name: 'Dangerous Goods Declaration', detail: 'IMDG-compliant packing and labelling for hazardous cargo.' },
      { name: 'Certificate of Origin', detail: 'Including preferential origin where applicable.' },
      { name: 'Export Documents', detail: 'Commercial invoice, packing list, bill of lading.' },
    ],
    services: [
      {
        title: 'Sourced to Specification',
        body: 'Grade, purity, packing and labelling matched to your requirement — technical, industrial or pharma grades where applicable.',
      },
      {
        title: 'Pre-Shipment Testing',
        body: 'Material tested against specification before dispatch, with third-party inspection arranged on request.',
      },
      {
        title: 'Hazmat Compliance',
        body: 'UN-approved packaging, labelling and dangerous-goods documentation handled for every hazardous shipment.',
      },
      {
        title: 'Close to Source',
        body: 'Our team can visit manufacturers in Ankleshwar, Vapi, Dahej and Jhagadia in person — inspecting material and resolving issues on site.',
      },
    ],
    markets: {
      title: 'Serving Buyers Worldwide',
      body: 'We supply chemical buyers across Africa, the Middle East and beyond. Tell us your destination port, and we will quote with freight and documentation included.',
    },
    faqs: [
      {
        q: 'Can you source a chemical that is not listed here?',
        a: 'Most likely, yes. Send us the product name, CAS number, grade, quantity and destination, and we will confirm availability and quote.',
      },
      {
        q: 'Do you handle hazardous chemicals?',
        a: 'Yes. We manage UN-approved packaging, labelling and IMDG dangerous-goods documentation for hazardous cargo.',
      },
      {
        q: 'Can we get a sample before ordering?',
        a: 'Yes. Samples with a COA can be arranged for most products before your first order.',
      },
      {
        q: 'What packing options are available?',
        a: 'Drums, carboys, bags, jumbo bags, IBCs and ISO tanks depending on the product. Tell us your preference and we will match it.',
      },
    ],
  },
  {
    slug: 'frozen-foods',
    index: '03',
    short: 'Frozen Foods',
    title: 'Frozen &',
    titleEm: 'Packaged Foods',
    icon: '◈',
    metaTitle: 'Frozen Food Exporter from India — Frozen Vegetables, Seafood & Indian Snacks | HKM Venture Global',
    metaDescription:
      'Frozen vegetables, seafood, frozen Indian foods and packaged snacks from certified Indian processors, shipped in temperature-controlled containers with full health and origin documentation.',
    cardBody:
      'Frozen vegetables, seafood, frozen Indian foods and packaged snacks — cold chain managed from processor to port.',
    heroSub:
      'Frozen vegetables, seafood, frozen Indian foods and packaged snacks from certified Indian processors — shipped at –18 °C with every health and origin document in order.',
    intro: [
      'Food imports are won and lost on consistency and paperwork. We work with certified Indian food processors and manage the cold chain from their facility to your port, so product arrives frozen, labelled and cleared.',
      'Whether you are a retailer, distributor or food-service buyer, we source to your pack sizes, labelling and certification needs.',
    ],
    groups: [
      {
        name: 'Frozen Vegetables',
        items: ['Green peas', 'Sweet corn', 'Mixed vegetables', 'Okra & drumstick', 'Cut vegetables to order'],
      },
      {
        name: 'Seafood',
        items: ['Frozen shrimp', 'Fish fillets & steaks', 'Whole frozen fish', 'Processed seafood'],
      },
      {
        name: 'Frozen Indian & Multicuisine Foods',
        items: ['Parathas & flatbreads', 'Samosas & snacks', 'Ready-to-cook meals', 'Multicuisine frozen foods'],
      },
      {
        name: 'Meat & Processed Food Products',
        items: ['Frozen meat products', 'Processed & ready-to-eat foods', 'Halal-certified options'],
      },
      {
        name: 'Packaged Indian Snacks',
        items: ['Namkeen & savoury snacks', 'Ready-to-eat foods', 'Sweets & confectionery', 'Private label options'],
      },
    ],
    groupsNote:
      'Representative categories. Pack sizes, brands and private-label options are shared on request.',
    documents: [
      { name: 'Health Certificate', detail: 'Issued by the competent Indian authority for each shipment.' },
      { name: 'Phytosanitary Certificate', detail: 'For plant-origin products where required.' },
      { name: 'Certificate of Origin', detail: 'Including preferential origin where applicable.' },
      { name: 'Halal Certificate', detail: 'For meat and other products where required.' },
      { name: 'Processor Certifications', detail: 'FSSAI and other plant certifications shared on request.' },
      { name: 'Export Documents', detail: 'Commercial invoice, packing list, bill of lading, temperature records.' },
    ],
    services: [
      {
        title: 'Cold Chain Managed',
        body: 'Reefer containers at –18 °C from processor to port, with temperature records available for every shipment.',
      },
      {
        title: 'Your Pack, Your Label',
        body: 'Retail, catering or bulk packs, labelled to your market’s requirements — or under your own brand.',
      },
      {
        title: 'Mixed Containers',
        body: 'Combine several products in one reefer container to keep your order size practical.',
      },
      {
        title: 'Certified Processors',
        body: 'We work only with processors holding the certifications your market requires, and share them before you order.',
      },
    ],
    markets: {
      title: 'Serving Food Importers Worldwide',
      body: 'We supply importers, distributors and food-service buyers across Africa, the Middle East and the Indian diaspora markets. Share your destination and requirements to receive a quote.',
    },
    faqs: [
      {
        q: 'Can I order a mixed container?',
        a: 'Yes. You can combine several frozen products in one reefer container, subject to compatible storage temperatures.',
      },
      {
        q: 'Do you offer private label?',
        a: 'Yes. We can arrange packing under your brand with your artwork and your market’s labelling rules.',
      },
      {
        q: 'What certifications do your processors hold?',
        a: 'Our processors hold FSSAI registration and the export certifications required for your market. We share them before you place an order.',
      },
    ],
  },
];

export const getVertical = (slug: string) => verticals.find((v) => v.slug === slug)!;
