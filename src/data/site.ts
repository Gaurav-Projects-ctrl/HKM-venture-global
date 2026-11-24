// ─────────────────────────────────────────────────────────────
//  HKM Venture Global — single source of truth for site content
//  Everything marked  ⚠ PLACEHOLDER  must be replaced with the
//  client's real details before the site goes live.
// ─────────────────────────────────────────────────────────────

export const company = {
  name: 'HKM Venture Global',
  tagline: 'Connecting Markets. Delivering Trust.',
  address: 'B-1104, Neptune Trion, Sarabhai Campus, Subhanpura, Vadodara, Gujarat, India',
  city: 'Vadodara, Gujarat, India',
  // ⚠ PLACEHOLDER — domain email, not Gmail
  email: 'info@hkmventureglobal.com',
  phone: '+91 96017 10900',
  // WhatsApp number: country code + number, digits only
  whatsapp: '919601710900',
  whatsappMessage: "Hello HKM Venture Global, I'd like to enquire about your products.",
  hours: 'Monday – Saturday, 9:00 AM – 6:00 PM IST',
  linkedin: 'https://www.linkedin.com/company/hkm-venture-global',
  web3formsKey: '72884102-36af-41f8-9214-3aec938ab1de',
};

// Google Ads conversion tracking settings live in ./tracking.ts
export { tracking } from './tracking';

// Government registrations — not shown on the site at the client's request (kept for internal reference).
// ⚠ PLACEHOLDER — fill in real numbers. Remove a line if not yet obtained.
export const registrations = [
  { label: 'IEC (Import Export Code)', value: '[IEC number]' },
  { label: 'GSTIN', value: '[GST number]' },
  { label: 'Drug Licence (Wholesale)', value: '[Drug licence no.]' },
  { label: 'RCMC — Pharmexcil', value: '[RCMC no. / Applied]' },
];

// Certifications held by HKM's manufacturing partners — shown in the certification carousel.
// `logo` lives in /public/certifications/; items without a logo show as a text badge.
export const certifications: { name: string; logo?: string; scope: string }[] = [
  { name: 'WHO-GMP', logo: '/certifications/who-gmp', scope: 'Pharmaceuticals' },
  { name: 'ISO 9001', logo: '/certifications/iso-9001', scope: 'Quality management' },
  { name: 'ISO 22000', logo: '/certifications/iso-22000', scope: 'Food safety' },
  { name: 'HACCP', logo: '/certifications/haccp', scope: 'Food safety' },
  { name: 'FSSC 22000', logo: '/certifications/fssc-22000', scope: 'Food safety' },
  { name: 'FSSAI', logo: '/certifications/fssai', scope: 'Frozen foods' },
  { name: 'Halal', logo: '/certifications/halal', scope: 'Frozen foods' },
];

// Global presence section — countries we ship to (flags drawn in GlobalPresence.astro)
export const presence = [
  { code: 'gh', name: 'Ghana' },
  { code: 'ng', name: 'Nigeria' },
  { code: 'ci', name: 'Côte d’Ivoire' },
  { code: 'sl', name: 'Sierra Leone' },
  { code: 'gn', name: 'Guinea' },
  { code: 'ml', name: 'Mali' },
  { code: 'ga', name: 'Gabon' },
];

// Founding members. Add a photo path (e.g. '/team/name.jpg' in /public/team/) or leave '' for a monogram.
// ⚠ Bios are short placeholders based on each role — replace with each person's own background.
export const founders = [
  {
    name: 'Dhruv Patel',
    role: 'Co-Founder & Director — Sales & Business Development',
    photo: '',
    bio: 'Leads sales and business development at HKM. Buyers work with Dhruv from their first enquiry through quotation, samples and order confirmation.',
    linkedin: 'https://www.linkedin.com/in/dhruv-patel0508/',
  },
  {
    name: 'Mahesh Jethava',
    role: 'Co-Founder & Director — Procurement & Supply Chain',
    photo: '',
    bio: 'Leads procurement and supply chain at HKM: selecting manufacturing partners, quality checks before dispatch, and getting every shipment out with its documents in order.',
    linkedin: 'https://www.linkedin.com/in/mahesh-jethava-418419332/',
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
  /** Optional link shown under the group, e.g. to a dedicated page */
  href?: string;
  linkLabel?: string;
}

export interface Vertical {
  slug: string;
  /** Fallback photo prefix in /public/images and /public/headers, used where the page has no photo of its own (defaults to slug) */
  image?: string;
  /** Short line under the name in the Products menu (defaults to the first three group names) */
  navDesc?: string;
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
  markets: { title: string; body: string; regions?: string[] };
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
    // No drug-class names here: this menu appears on the Google Ads landing pages too
    navDesc: 'Generic medicines · Healthcare products · APIs',
    metaTitle: 'Pharmaceutical Exporter from India | HKM Venture Global',
    metaDescription:
      'Generic medicines and healthcare products from WHO-GMP certified Indian manufacturers, with documents and registration support for importers in Africa.',
    cardBody:
      'Generic medicines and healthcare products sourced from WHO-GMP certified Indian manufacturers, with full documentation for registration and import.',
    heroSub:
      'Quality generic medicines from WHO-GMP certified Indian manufacturers — with the documents, samples and registration support importers in 10+ countries, and now across West and Central Africa, need to order with confidence.',
    intro: [
      'India supplies a large share of the world’s generic medicines, and much of its manufacturing base is right here in Gujarat. HKM Venture Global works as the sourcing and export partner between these manufacturers and importers, distributors and pharmacy chains abroad.',
      'We offer contract manufacturing. We don’t run our own plants — we select certified manufacturing partners on their certifications, audit history and export experience, get your products made to your specification and, where needed, under your brand, and stand between them and you on every order: quotation, samples, documents, quality checks, shipping and after-delivery support.',
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
        href: '/products/medical-supplies',
        linkLabel: 'Medical & surgical supplies',
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
        body: 'Most markets in Africa and the UAE require products to be registered before import — with Ghana’s Food and Drugs Authority, Nigeria’s NAFDAC, Kenya’s Pharmacy and Poisons Board, Tanzania’s TMDA, Uganda’s NDA, the UAE Ministry of Health and others. We coordinate the dossier, CoPP, samples and stability data with the manufacturer so your registration moves faster.',
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
      title: 'Markets We Serve',
      body: 'We export to importers, distributors and pharmacy chains in 10+ countries, and are expanding across West and Central Africa — learning each market’s registration rules, documentation and buyers in depth.',
      regions: ['West Africa', 'Central Africa'],
    },
    faqs: [
      {
        q: 'Are you a manufacturer?',
        a: 'We offer contract (third-party) manufacturing. We don’t run our own plants — we get your products made at selected WHO-GMP certified partner facilities, to your specification and, where needed, under your brand, and manage the full order for you: sourcing, quality checks, documentation and shipping.',
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
    metaTitle: 'Chemical Exporter from Gujarat, India | HKM Venture Global',
    metaDescription:
      'Specialty and industrial chemicals, solvents, castor derivatives and essential oils from Gujarat manufacturers, with COA, SDS and full export documents.',
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
      body: 'We supply chemical buyers across Africa, the Middle East, Asia and South & Central America. Tell us your destination port, and we will quote with freight and documentation included.',
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
    metaTitle: 'Frozen Food Exporter from India | HKM Venture Global',
    metaDescription:
      'Frozen vegetables, seafood, ready-to-cook Indian foods and snacks from certified Indian processors, shipped cold-chain with health and origin documents.',
    cardBody:
      'Frozen vegetables, seafood, gourmet and frozen Indian foods, and packaged snacks — cold chain managed from processor to port.',
    heroSub:
      'Frozen vegetables, seafood, gourmet foods, frozen Indian foods and packaged snacks from certified Indian processors — shipped at –18 °C with every health and origin document in order.',
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
        name: 'Gourmet Foods',
        items: ['Snacks — fried & steamed', 'Curries & dips', 'Flatbreads', 'Rice dishes', 'Ready meals'],
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

// ─────────────────────────────────────────────────────────────
//  Medical & Surgical Supplies — part of the Healthcare vertical,
//  with its own page at /products/medical-supplies
// ─────────────────────────────────────────────────────────────
// ⚠ Product groups are representative categories — confirm with the team what HKM can supply.
export const medicalSupplies: Vertical = {
  slug: 'medical-supplies',
  image: 'pharmaceuticals',
  index: '01',
  short: 'Medical & Surgical Supplies',
  title: 'Medical &',
  titleEm: 'Surgical Supplies',
  icon: '✚',
  metaTitle: 'Medical & Surgical Supplies Exporter | HKM Venture Global',
  metaDescription:
    'Wholesale medical supplies, hospital consumables and surgical products from certified Indian manufacturers, for distributors and hospitals across Africa.',
  cardBody:
    'Hospital consumables, surgical supplies and medical equipment from certified Indian manufacturers, supplied wholesale.',
  heroSub:
    'Hospital consumables, surgical supplies and medical equipment from certified Indian manufacturers — supplied wholesale to distributors, hospitals and importers, with the documents your market requires.',
  intro: [
    'Hospitals, clinics and distributors need steady supply of the basics: syringes, gloves, dressings and consumables used every day. India manufactures these at scale, and HKM Venture Global sources them from certified manufacturers and ships them in bulk.',
    'We source to your specification and pack sizes, combine medical supplies with medicines in one shipment where it helps, and handle the paperwork through to delivery.',
  ],
  groups: [
    {
      name: 'Syringes, Needles & Infusion',
      items: ['Disposable syringes', 'Hypodermic needles', 'IV sets & IV cannulas', 'Infusion accessories'],
    },
    {
      name: 'Gloves & Protective Wear',
      items: ['Examination gloves', 'Sterile surgical gloves', 'Face masks', 'Surgical gowns & caps'],
    },
    {
      name: 'Wound Care & Dressings',
      items: ['Gauze rolls & swabs', 'Bandages', 'Surgical dressings', 'Adhesive tapes & plasters'],
    },
    {
      name: 'Hospital Consumables',
      items: ['Cotton & absorbent products', 'Urine bags & catheters', 'Specimen containers', 'Other disposables on request'],
    },
    {
      name: 'Medical Equipment & Instruments',
      items: ['Surgical instruments', 'Diagnostic equipment', 'Medical & non-medical equipment', 'Specific models on request'],
    },
    {
      name: 'Healthcare Products',
      items: ['First aid kits', 'Hygiene & personal care products', 'Private label options'],
    },
  ],
  groupsNote:
    'Representative categories. Share the product, specification, pack size and quantity, and we will source and quote to your requirement.',
  documents: [
    { name: 'Manufacturer Certificates', detail: 'ISO 13485, CE or other quality certificates of the manufacturing site, where held, shared before you order.' },
    { name: 'Certificate of Analysis / Test Reports', detail: 'Batch test results, including sterility for sterile products.' },
    { name: 'Free Sale Certificate', detail: 'Where required by the importing country.' },
    { name: 'Product Specifications', detail: 'Technical details, materials and pack sizes for your registration and tenders.' },
    { name: 'Certificate of Origin', detail: 'Including preferential origin where applicable.' },
    { name: 'Export Documents', detail: 'Commercial invoice, packing list, bill of lading.' },
  ],
  services: [
    {
      title: 'Wholesale & Bulk Supply',
      body: 'Supply in the volumes distributors, hospital groups and tenders need, with pack sizes matched to your market.',
    },
    {
      title: 'One Shipment, Medicines Included',
      body: 'Combine medical supplies with generic medicines in one order and one container, with one contact for both.',
    },
    {
      title: 'Samples Before Orders',
      body: 'Samples and the supporting documents before your first order, so you can check quality on evidence.',
    },
    {
      title: 'Private Label',
      body: 'Selected consumables and healthcare products packed under your brand, to your market’s labelling rules.',
    },
  ],
  markets: {
    title: 'Markets We Serve',
    body: 'We export to distributors, hospitals and importers in 10+ countries, and are expanding across West and Central Africa.',
    regions: ['West Africa', 'Central Africa'],
  },
  faqs: [
    {
      q: 'Do you supply hospitals directly?',
      a: 'We supply hospitals, hospital groups, distributors and importers. Share your requirement and destination, and we will quote with freight and documents included.',
    },
    {
      q: 'Can medical supplies be shipped together with medicines?',
      a: 'Yes. Medical supplies and generic medicines can be combined in one order and one shipment.',
    },
    {
      q: 'What are your minimum order quantities?',
      a: 'MOQs depend on the product and pack size. We accept trial orders, so share your requirement and we will quote with the MOQ clearly stated.',
    },
    {
      q: 'Can we get samples before ordering?',
      a: 'Yes. Samples and supporting documents can be arranged before your first order. Sample terms depend on the product.',
    },
  ],
};

// ─────────────────────────────────────────────────────────────
//  Google Ads landing page for pharma — /pharmaceutical-wholesale
//  Same offer as /products/pharmaceuticals but WITHOUT prescription drug
//  names: Google Ads does not allow promoting prescription medicines in
//  most countries, so ads must point here, not to the product page.
//  The page is noindex, so it does not compete with the product page in search.
// ─────────────────────────────────────────────────────────────
const pharma = verticals.find((v) => v.slug === 'pharmaceuticals')!;
export const pharmaAds: Vertical = {
  ...pharma,
  slug: 'pharmaceutical-wholesale',
  image: 'pharmaceuticals',
  metaTitle: 'Pharmaceutical Wholesale Supplier | HKM Venture Global',
  metaDescription:
    'Wholesale generic medicines and healthcare products from WHO-GMP certified Indian manufacturers, with full documentation for importers and distributors.',
  title: 'Pharmaceutical',
  titleEm: 'Wholesale Supply',
  heroSub:
    'Generic medicines and healthcare products from WHO-GMP certified Indian manufacturers, supplied wholesale to importers, distributors and pharmacy chains — with samples, documents and registration support.',
  groups: [
    {
      name: 'Generic Medicines',
      items: ['Tablets & capsules', 'Oral liquids & dry syrups', 'Injectables', 'Creams & ointments', 'Major therapeutic categories — full list on request'],
    },
    {
      name: 'OTC & Healthcare Products',
      items: ['Oral rehydration salts', 'Pain and fever relief', 'Antacids & digestive care', 'Everyday healthcare products'],
    },
    {
      name: 'Vitamins & Nutraceuticals',
      items: ['Multivitamins', 'Iron & folic acid', 'Calcium & vitamin D3', 'Vitamin C'],
    },
    {
      name: 'Private Label & Third-Party Manufacturing',
      items: ['Your brand, your artwork', 'Labelling to your market’s rules', 'WHO-GMP partner facilities', 'Trial orders welcome'],
    },
    {
      name: 'APIs & Pharma Intermediates',
      items: ['Active pharmaceutical ingredients', 'Pharmaceutical intermediates', 'Excipients'],
    },
    {
      name: 'Medical & Surgical Supplies',
      items: ['Syringes & IV sets', 'Gloves', 'Gauze, bandages & dressings', 'Medical equipment'],
      href: '/products/medical-supplies',
      linkLabel: 'Medical & surgical supplies',
    },
  ],
  groupsNote:
    'Our full product list with strengths and pack sizes is shared on request — tell us what you import today and we will match it.',
};

export const getVertical = (slug: string) => verticals.find((v) => v.slug === slug)!;
