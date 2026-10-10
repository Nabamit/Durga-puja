export interface BudgetItem {
  id: string;
  categoryBn: string;
  categoryEn: string;
  amount: number; // in INR
  percentage: number;
  descriptionBn: string;
  descriptionEn: string;
  vendorBn: string;
  vendorEn: string;
  auditStatus: 'Approved' | 'Committed' | 'Disbursed';
  icon: string;
}

export interface IncomeSource {
  sourceBn: string;
  sourceEn: string;
  amount: number;
  percentage: number;
  statusBn: string;
}

export const BUDGET_METADATA = {
  fiscalYear: '2026-2027',
  totalBudgetINR: 2850000,
  formattedTotalBn: '২৮,৫০,০০০ টাকা',
  formattedTotalEn: '₹ 28,50,000 (28.5 Lakhs)',
  auditedByBn: 'শ্রী অম্বর ঘোষ ও কাঞ্চন মিত্র (হিসাব পরীক্ষক)',
  auditedByEn: 'Shri Ambar Ghosh & Kanchan Mitra (Official Auditors)',
  bankAccount: {
    bankName: 'State Bank of India (SBI)',
    branch: 'Cossipore Branch, Kolkata',
    accountName: 'Duyerpally Sarbojanin Durgotsav Samiti',
    accountNumber: '30491827465',
    ifscCode: 'SBIN0000180',
    upiId: 'duyerpallypujo@sbi',
  },
  auditPledgeBn: 'আমাদের প্রতিটি ব্যয়ের ভাউচার সাধারণ সদস্য ও আয়কর দপ্তর দ্বারা পুঙ্খানুপুঙ্খ নিরীক্ষিত।',
  auditPledgeEn: 'Every rupee spent is verified with authorized GST receipts and audited by certified CAs.',
};

export const BUDGET_ITEMS: BudgetItem[] = [
  {
    id: 'pandal',
    categoryBn: 'মণ্ডপ নির্মাণ ও পরিবেশবান্ধব স্থাপত্য',
    categoryEn: 'Pandal Architecture & Craftsmanship',
    amount: 850000,
    percentage: 29.8,
    descriptionBn: 'বাঁশ, চট, টেরাকোটা ও কাঠের কাজ সহযোগে ৭০তম বর্ষের ঐতিহ্যবাহী পরিবেশবান্ধব মণ্ডপ। অগ্নিনির্বাপক বিশেষ রাসায়নিক প্রলেপযুক্ত।',
    descriptionEn: 'Eco-friendly bamboo, jute, and terracotta temple design treated with certified fire-retardant solution for 70th milestone.',
    vendorBn: 'মিন্টু ডেকরেটার্স',
    vendorEn: 'Mintu Decorators',
    auditStatus: 'Approved',
    icon: 'Hammer',
  },
  {
    id: 'lighting',
    categoryBn: 'ঐতিহ্যবাহী আলোকসজ্জা ও তোরণ',
    categoryEn: 'Illumination & Thematic Light Arches',
    amount: 480000,
    percentage: 16.8,
    descriptionBn: 'পৌরাণিক গল্পগাথা ভিত্তিক আলোক তোরণ এবং বিদ্যুৎ সাশ্রয়ী পরিবেশবান্ধব এলইডি নেটওয়ার্ক।',
    descriptionEn: 'Thematic dynamic light gates depicting Maa Durga triumph, powered by eco-efficient LEDs.',
    vendorBn: 'কল্পনা এন্টারপ্রাইজ (বরাহনগর)',
    vendorEn: 'Kalpana Enterprise (Baranagar)',
    auditStatus: 'Committed',
    icon: 'Sparkles',
  },
  {
    id: 'idol',
    categoryBn: 'মায়ের সনাতনী সাবেক প্রতিমা রূপদান',
    categoryEn: 'Traditional Idol Sculpting & Shola Saaj',
    amount: 420000,
    percentage: 14.7,
    descriptionBn: 'মাটির প্রতিমায় ঐতিহ্যবাহী শান্ত একচালা রূপ, ডাকের সাজ ও স্বর্ণাভ বর্ণে সুশোভিত মৃন্ময়ী রূপ।',
    descriptionEn: 'Traditional Ekchala clay deity adorned with intricate shola daker saaj and non-toxic natural pigments.',
    vendorBn: 'শ্রী কেষ্ট দাস (নিমতা)',
    vendorEn: 'Shri Keshto Das (Nimta)',
    auditStatus: 'Approved',
    icon: 'Crown',
  },
  {
    id: 'bhog',
    categoryBn: 'সর্বজনীন অন্নভোগ ও মহাপ্রসাদ উৎসব',
    categoryEn: 'Community Bhog & Sacred Feasts',
    amount: 390000,
    percentage: 13.7,
    descriptionBn: 'সপ্তমী, অষ্টমী ও নবমীর দিন ৪,০০০ জনের বেশি মানুষের জন্য নিখরচায় গোবিন্দভোগ চালের খিচুড়ি, লাবড়া ও পায়েস। শালপাতার পাত্রে পরিবেশন।',
    descriptionEn: 'Daily sanctified feast serving 4,000+ local residents on eco-friendly sal leaves with pure ghee and dry fruits.',
    vendorBn: 'দুয়েরপল্লী অন্নসেবা দল (পাড়ার স্বেচ্ছাসেবকবৃন্দ)',
    vendorEn: 'Duyerpally Community Seva Kitchen',
    auditStatus: 'Committed',
    icon: 'Utensils',
  },
  {
    id: 'dhak',
    categoryBn: 'ঐতিহ্যবাহী ঢাক ও সান্ধ্য আবহ সঙ্গীত',
    categoryEn: 'Dhak Ensemble & Acoustic Symphony',
    amount: 220000,
    percentage: 7.7,
    descriptionBn: 'মুর্শিদাবাদ ও কাশিপুর থেকে আগত ১২ জন প্রখ্যাত ঢাকি দলের বাদ্য এবং পরিবেশবান্ধব ডেসিবেল সীমার সাউন্ড সিস্টেম।',
    descriptionEn: '12-member master Dhaki ensemble with ceremonial Kansor bells complying strictly with pollution board decibel norms.',
    vendorBn: 'কাশীপুরী শ্রী শ্রী ঢাকি সম্প্রদায়',
    vendorEn: 'Kashipuri Master Dhak Troupe',
    auditStatus: 'Approved',
    icon: 'Music',
  },
  {
    id: 'social',
    categoryBn: 'সমাজকল্যাণ, রক্তদান ও দুঃস্থদের বস্ত্রদান',
    categoryEn: 'Social Welfare & Community Health Drive',
    amount: 210000,
    percentage: 7.4,
    descriptionBn: 'বাৎসরিক স্বেচ্ছায় রক্তদান শিবির, ৭০তম বর্ষ উপলক্ষে দুঃস্থ শিশুদের নতুন জামাকাপড় বিতরণ এবং প্রবীণদের নিখরচায় চক্ষু পরীক্ষা।',
    descriptionEn: 'Annual pre-puja blood donation camp, new festive clothes for children, and free cataract screenings for 70th year.',
    vendorBn: 'দুয়েরপল্লী সমাজসেবা ট্রাস্ট',
    vendorEn: 'Duyerpally Social Welfare Trust',
    auditStatus: 'Disbursed',
    icon: 'HeartHandshake',
  },
  {
    id: 'security',
    categoryBn: 'নিরাপত্তা, সিসিটিভি ও অগ্নিনির্বাপক ব্যবস্থা',
    categoryEn: 'Security, 32 CCTV Grid & Medical Kiosk',
    amount: 160000,
    percentage: 5.6,
    descriptionBn: '৩২টি হাই-ডেফিনিশন সিসিটিভি ক্যামেরা, মেটাল ডিটেক্টর গেট, সার্বক্ষণিক অ্যাম্বুলেন্স এবং অগ্নিনির্বাপক সিলিন্ডার।',
    descriptionEn: '32-channel HD surveillance, fire safety cylinders, wheelchair assistance, and round-the-clock emergency medical kiosk.',
    vendorBn: 'কলকাতা সিকিউরিটি সলিউশনস',
    vendorEn: 'Kolkata Safety & First-Aid Systems',
    auditStatus: 'Approved',
    icon: 'ShieldCheck',
  },
  {
    id: 'immersion',
    categoryBn: 'পরিবেশবান্ধব বিসর্জন ও গঙ্গা পরিচ্ছন্নতা',
    categoryEn: 'Eco-Friendly Immersion & River Cleanliness',
    amount: 120000,
    percentage: 4.2,
    descriptionBn: 'রতন বাবুর ঘাটে পুরসভার ক্রেন সহযোগে বিসর্জন এবং নদীর জলে কাঠামো দ্রুত উদ্ধার করে গঙ্গা দূষণমুক্ত রাখা।',
    descriptionEn: 'Crane-assisted ceremonial immersion at Ratan Babu Ghat ensuring immediate retrieval of clay frames to protect the holy river.',
    vendorBn: 'রতন বাবুর ঘাট ব্যবস্থাপনা সমন্বয়',
    vendorEn: 'Ratan Babu Ghat Riverfront Conservancy',
    auditStatus: 'Approved',
    icon: 'Waves',
  },
];

export const INCOME_SOURCES: IncomeSource[] = [
  {
    sourceBn: 'কর্পোরেট স্পনসরশিপ ও ব্র্যান্ড অংশীদারিত্ব',
    sourceEn: 'Corporate Sponsorships & Brand Co-partners',
    amount: 1450000,
    percentage: 50.9,
    statusBn: 'চুক্তি সম্পন্ন',
  },
  {
    sourceBn: 'পাড়ার স্থানীয় পরিবারবর্গের স্বেচ্ছাপ্রদত্ত চাঁদা',
    sourceEn: 'Local Residents & Neighbourhood Voluntary Subscriptions',
    amount: 720000,
    percentage: 25.3,
    statusBn: 'সংগ্রহাধীন (৮২% সম্পন্ন)',
  },
  {
    sourceBn: 'দেশ ও বিদেশের প্রবাসী শুভানুধ্যায়ীদের অনুদান',
    sourceEn: 'Diaspora & Global Well-wishers Donations',
    amount: 380000,
    percentage: 13.3,
    statusBn: 'ব্যাংক মারফত জমা',
  },
  {
    sourceBn: 'বাৎসরিক স্যুভেনির ও স্মরণিকা বিজ্ঞাপন',
    sourceEn: 'Annual Souvenir Magazine Advertisements',
    amount: 300000,
    percentage: 10.5,
    statusBn: 'প্রকাশনা চলমান',
  },
];
