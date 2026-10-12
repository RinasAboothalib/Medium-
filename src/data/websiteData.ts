import { ServiceItem, FlagshipEvent, NewsArticle } from '../types';

export const COMPANY_DETAILS = {
  name: 'MEDIUM Events Pvt Ltd',
  shortName: 'MEDIUM',
  tagline: 'Full-Suite Creative Firm & Turnkey Event Management in Maldives',
  headline: 'Creating Lasting Impressions Through Vision, Precision & Scale',
  subheadline:
    'With over 60 years of combined industry expertise, MEDIUM delivers full-suite creative solutions, analytics-driven advertising, and high-impact flagship events across the Maldives.',
  address: 'Champa Building 4, 5th Floor, Orchid Magu, K. Malé, Maldives',
  altAddress: 'H. Huba (2nd Floor), Medhuziyaaraiy Magu, Malé, Maldives',
  phone: '+960 770-1090',
  secondaryPhone: '+960 799-7974',
  email: 'Operations@medium.mv',
  inquiryEmail: 'info@medium.mv',
  social: {
    facebook: 'https://www.facebook.com/MediumMv/',
    instagram: 'https://www.instagram.com/medium_mv/',
  },
  stats: [
    { value: '60+', label: 'Years Combined Experience', detail: 'Cumulative management team track record' },
    { value: '15+', label: 'Years Individual Leadership', detail: 'Seasoned directors in specialized domains' },
    { value: '6+', label: 'Flagship Annual Expos & Forums', detail: 'Including Maldives Marine Expo & CIF' },
    { value: '100+', label: 'Turnkey Productions', detail: 'Delivered for national associations & enterprises' },
  ],
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'events',
    title: 'Events & Turnkey Management',
    tagline: 'Events that are more than just events',
    description:
      'We curate immersive corporate events, multi-day exhibitions, and national industry forums that go far beyond standard networking. Our mission is to leave lasting impressions and indelible eventful memories through disciplined production, staging, and VIP delegate coordination.',
    features: [
      'Turnkey Expo & Conference Management',
      'VIP Protocol & Stage Architecture',
      'Technical Audio-Visual & Staging Integration',
      'Sponsorship Acquisition & Stakeholder Coordination',
      'Delegate Onboarding & Registration Systems',
      'Event Floorplan Engineering & Booth Fabrication',
    ],
    icon: 'CalendarDays',
    accentColor: '#E11D48',
    stat: '6+',
    statLabel: 'National Annual Forums & Expos',
  },
  {
    id: 'advertising',
    title: 'Advertising & Marketing',
    tagline: 'Advertising based on analytics & metrics',
    description:
      'Calculated, detailed marketing solutions tailored specifically for targeted niche markets. We construct long-term campaigns grounded in concrete performance metrics, consumer behavior analytics, and measurable revenue conversion.',
    features: [
      'Analytics-Driven Media Buying & Placements',
      'Niche Audience Targeting & Segmentation',
      'Comprehensive Multi-Channel Marketing Plans',
      'Conversion Rate Optimization & Performance Tracking',
      'Campaign Brand Storytelling & Content Strategy',
      'Cross-Platform Digital & OOH Advertising Execution',
    ],
    icon: 'TrendingUp',
    accentColor: '#FB923C',
    stat: '100%',
    statLabel: 'Data-Backed Strategy & Reporting',
  },
  {
    id: 'design',
    title: 'Design & Applications',
    tagline: 'A wide range of design and application solutions',
    description:
      'End-to-end creative styling from brand identity systems to custom physical installations. We combine high-fidelity video production, bespoke exhibition booth design, 3D spatial planning, and large-format print executions.',
    features: [
      'Commercial Video Production & Motion Graphics',
      'Exhibition Booth Engineering & Physical Installation',
      'Comprehensive Brand Identity & Corporate Systems',
      '3D Environmental Staging & Spatial Renderings',
      'Editorial, Print & Large-Format Production',
      'Digital Asset Design & Interactive Presentation Stacks',
    ],
    icon: 'Palette',
    accentColor: '#E11D48',
    stat: '360°',
    statLabel: 'Design-to-Build Execution',
  },
  {
    id: 'consultancy',
    title: 'Creative Consultancy',
    tagline: 'A pinch of creative professionalism',
    description:
      'Guiding brands to discover their transformative journey through our strategic vision for desirable solutions. We bring rigorous creative professionalism to position organizations ahead of evolving market dynamics in the Maldives and beyond.',
    features: [
      'Strategic Brand Positioning & Narrative Direction',
      'Executive Creative Direction & Advisory',
      'Go-To-Market Formulation for Island Markets',
      'Market Feasibility & Industry Roadmapping',
      'Partnership & Endorsement Ecosystem Development',
      'Sustainable Corporate Communication Frameworks',
    ],
    icon: 'Compass',
    accentColor: '#FB923C',
    stat: '15+',
    statLabel: 'Years Advisory Heritage per Lead',
  },
];

export const FLAGSHIP_EVENTS_DATA: FlagshipEvent[] = [
  {
    id: 'marine-expo',
    name: 'Maldives Marine Expo',
    tagline: 'The Official Flagship Exhibition of the Boating Industry',
    category: 'Flagship Marine Exhibition',
    year: '2025 – 2026',
    dateOrFrequency: 'Annual Showcase (February 5–8)',
    location: 'Central Park / Hulhumalé, Maldives',
    endorsements: ['National Boating Association of Maldives (NBAM)', 'Ministry of Transport'],
    description:
      'The premier marine industry exhibition of the Maldives, organized by MEDIUM on behalf of NBAM. Bringing together boat builders, engine manufacturers, water sports innovators, naval architects, and maritime service providers across the Indian Ocean.',
    highlights: [
      'Over 100+ national and international marine exhibitors',
      'Live in-water vessel trials and live demonstration zones',
      'High-level commercial deals and marine technology debuts',
      'Official endorsement and patronage by NBAM',
    ],
    attendees: '12,000+ Trade & Public Visitors',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    role: 'Turnkey Event Organizer & Producer',
  },
  {
    id: 'cif-2026',
    name: 'Construction Industry Forum (CIF 2026)',
    tagline: 'Driving Growth, Sustainability & Built Environment Innovation',
    category: 'National Industry Forum',
    year: '2026',
    dateOrFrequency: 'August 18, 2026',
    location: 'Grand Parkside, One Central Park, Hulhumalé',
    endorsements: ['Maldives National Association of Construction Industry (MNACI)', 'Ooredoo Maldives (Title Sponsor)'],
    description:
      'The definitive convention for the Maldivian construction and engineering fraternity. CIF 2026 convenes policymakers, Tier-1 contractors, architects, structural engineers, and international equipment manufacturers to steer infrastructure advancement.',
    highlights: [
      'Keynote panels featuring top ministry officials and MNACI leadership',
      'Strategic presentation sessions on sustainable building technologies',
      'B2B matchmaking suites for foreign building material suppliers',
      'Title partnership and digital connectivity powered by Ooredoo Maldives',
    ],
    attendees: '500+ Executive Delegates & C-Suite Leaders',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    role: 'Lead Organizer & Production Director',
  },
  {
    id: 'mmif',
    name: 'Maldives Marine Industry Forum (MMIF)',
    tagline: 'Strategic Dialogue for Sustainable Blue Economy Development',
    category: 'Policy & Maritime Conference',
    year: '3rd Edition (2025/2026)',
    dateOrFrequency: 'Annual Policy Summit',
    location: 'Malé, Maldives',
    endorsements: ['National Boating Association of Maldives (NBAM)', 'Indian Ocean Divers Association (IODA)'],
    description:
      'An authoritative intellectual forum addressing marine conservation, safety standards, decarbonization of island transportation, and regulatory progress. Attended by maritime legal specialists, fleet operators, and global environmental partners.',
    highlights: [
      'Comprehensive whitepapers on maritime safety standards in atolls',
      'International diving and eco-tourism roundtables with IODA',
      'Multi-stakeholder panels on blue carbon and clean marine propulsion',
    ],
    attendees: '350+ Senior Maritime Specialists',
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80',
    role: 'Curator & Conference Manager',
  },
  {
    id: 'build-expo',
    name: 'National Build Expo & Builder Awards',
    tagline: 'Celebrating Excellence in Architecture & Contracting',
    category: 'Exhibition & Gala Awards',
    year: 'Annual Benchmark',
    dateOrFrequency: 'Annual Multi-Day Expo',
    location: 'Dharubaaruge / Hulhumalé Exhibition Center',
    endorsements: ['MNACI', 'Ministry of National Planning, Housing & Infrastructure'],
    description:
      'A sprawling exhibition platform showcasing building automation, MEP solutions, luxury resort architectural materials, and heavy construction equipment, culminating in the prestigious Builder Awards ceremony.',
    highlights: [
      'Sprawling indoor & outdoor machinery display zones',
      'The prestigious Maldives National Builder Awards Gala evening',
      'Over 60 corporate partners and materials innovators',
    ],
    attendees: '8,000+ Trade Professionals',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80',
    role: 'Full-Scale Production & Awards Curator',
  },
  {
    id: 'aviation-forum',
    name: 'Aviation Forum – Connect Maldives (AF)',
    tagline: 'Uniting Island Air Transport, Fleet Operators & Logistics',
    category: 'Aviation Summit',
    year: 'Biennial Summit',
    dateOrFrequency: 'Biennial Industry Forum',
    location: 'Velana International Airport Hub / Malé',
    endorsements: ['Civil Aviation Authority', 'Regional Airlines Alliance'],
    description:
      'Conceived to explore seaplane network expansion, domestic runway safety, sustainable aviation fuels, and tourist air transfer logistics across the 26 atolls of the Maldives archipelago.',
    highlights: [
      'Seaplane operations and inter-island connectivity roadmaps',
      'Airport infrastructure development masterplans',
      'Aviation safety and international regulatory compliance sessions',
    ],
    attendees: '300+ Aviation & Travel Executives',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80',
    role: 'Founding Organizer & Program Manager',
  },
  {
    id: 'hosco',
    name: 'Hotel Supply Conference (HOSCO)',
    tagline: 'The Authoritative Hospitality Procurement & Resort Supply Summit',
    category: 'Procurement Conference',
    year: 'Annual Convention',
    dateOrFrequency: 'Annual Hospitality Forum',
    location: 'Malé / Resort Convention Centers',
    endorsements: ['Maldives Tourism Industry Partners', 'Resort Purchase Managers Alliance'],
    description:
      'Connecting global luxury suppliers with general managers, executive chefs, procurement heads, and chief engineers representing world-renowned Maldivian five-star and ultra-luxury island resorts.',
    highlights: [
      'Exclusive 1-on-1 procurement matchmaking meetings',
      'Sustainability and zero-waste resort supply chain workshops',
      'Curated showcase of high-end culinary and amenity brands',
    ],
    attendees: '400+ Resort Procurement Directors',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    role: 'Summit Producer & Delegate Director',
  },
];

export const NEWS_ARTICLES_DATA: NewsArticle[] = [
  {
    id: 'cif-2026-dates',
    title: 'Dates Announced for Construction Industry Forum (CIF 2026) at Grand Parkside Hulhumalé',
    category: 'Expos & Forums',
    date: 'February 2026',
    readTime: '3 min read',
    summary:
      'MEDIUM Events Pvt Ltd confirms August 18, 2026 for CIF 2026, endorsed by MNACI and sponsored by Ooredoo Maldives to advance sustainable construction across the islands.',
    fullContent: [
      'MEDIUM Events Pvt Ltd has officially confirmed that the Construction Industry Forum (CIF) 2026 will take place on August 18, 2026, hosted at the prestigious Grand Parkside, One Central Park, Hulhumalé.',
      'Endorsed by the Maldives National Association of Construction Industry (MNACI) and with telecommunications giant Ooredoo Maldives returning as Title Partner, CIF 2026 will gather key national builders, project developers, and international engineering suppliers.',
      '“With rapid infrastructure expansion taking place across Hulhumalé and outer atolls, CIF 2026 creates the high-level dialogue necessary for sustainable development, seismic and coastal resiliency, and technological adoption,” stated the organizing committee at MEDIUM.',
    ],
    tags: ['CIF 2026', 'MNACI', 'Ooredoo Maldives', 'Hulhumalé'],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'marine-expo-milestone',
    title: 'Maldives Marine Expo Secures Landmark Participation for Upcoming Edition',
    category: 'Expos & Forums',
    date: 'January 2026',
    readTime: '4 min read',
    summary:
      'The National Boating Association of Maldives and MEDIUM announce record exhibitor registrations for the flagship marine showcase, featuring top international naval brands.',
    fullContent: [
      'The National Boating Association of Maldives (NBAM) alongside turnkey event organizer MEDIUM Events Pvt Ltd announced an unprecedented surge in international and local exhibitor registrations for the Maldives Marine Expo.',
      'Covering in-water showcases, commercial vessel components, and cutting-edge marine electrification, the expo continues its tenure as the undisputed benchmark event in the region.',
      'Live product demonstrations and B2B procurement pacts will highlight the 4-day gathering at Hulhumalé.',
    ],
    tags: ['Maldives Marine Expo', 'NBAM', 'Boating', 'Exhibition'],
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'visiting-guide-appointment',
    title: 'MEDIUM Appointed by Maldives Publications to Spearhead the Maldives Visiting Guide',
    category: 'Company News',
    date: 'Late 2025',
    readTime: '3 min read',
    summary:
      'Maldives Publications Pvt Ltd entrusts MEDIUM with the end-to-end creative direction, conceptual design, and print engineering for the official Maldives Visiting Guide.',
    fullContent: [
      'Maldives Publications Pvt Ltd has formally appointed MEDIUM Events Pvt Ltd to direct the creative and publication design of the authoritative Maldives Visiting Guide.',
      'Leveraging over six decades of cumulative experience, MEDIUM’s creative unit will implement an elevated visual identity that captures the archipelago’s luxury, biodiversity, and cultural heritage.',
      'The guide will be distributed across resort terminals, international aviation lounges, and diplomatic embassies worldwide.',
    ],
    tags: ['Maldives Publications', 'Creative Consultancy', 'Editorial', 'Branding'],
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'mmif-blue-economy',
    title: 'Marine Industry Forum Dialogues Highlight Sustainable Island Fleet Modernization',
    category: 'Press Releases',
    date: 'Late 2025',
    readTime: '4 min read',
    summary:
      'Key recommendations from MMIF 2025 emphasize decarbonization roadmaps, maritime safety compliance, and deep cooperation with the Indian Ocean Divers Association.',
    fullContent: [
      'The third edition of the Maldives Marine Industry Forum (MMIF), curated and managed by MEDIUM Events Pvt Ltd, closed with pivotal resolutions regarding sustainable fuel transition in safari vessels and transport ferries.',
      'Delegates from NBAM, IODA, and state transport authorities examined fiscal incentives and battery-hybrid retrofitting suited to atoll geography.',
      'MEDIUM’s conference division has published the official post-show whitepaper, available for registered stakeholders and maritime delegates.',
    ],
    tags: ['MMIF', 'IODA', 'Sustainability', 'Policy'],
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80',
  },
];

export const CLIENT_PARTNERS = [
  { name: 'National Boating Association of Maldives (NBAM)', role: 'Flagship Event Partner' },
  { name: 'MNACI (Maldives National Association of Construction Industry)', role: 'Endorsing Association' },
  { name: 'Ooredoo Maldives', role: 'Title Forum Sponsor' },
  { name: 'Maldives Publications Pvt Ltd', role: 'Publishing Partner' },
  { name: 'Indian Ocean Divers Association (IODA)', role: 'Endorsing Body' },
  { name: 'Ministry of Transport & Civil Aviation', role: 'Governmental Endorsement' },
];
