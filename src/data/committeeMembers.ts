export interface CommitteeMember {
  id: string;
  nameBn: string;
  nameEn: string;
  designationBn: string;
  designationEn: string;
  roleGroup: 'leadership' | 'executive' | 'cultural' | 'youth' | 'advisory';
  experienceYears: number;
  phone?: string;
  email?: string;
  quoteBn: string;
  quoteEn: string;
  badgeBn: string;
}

export const COMMITTEE_METADATA = {
  committeeNameBn: 'দুয়েরপল্লী সার্ব্বজনীন দুর্গাপূজা কমিটি',
  committeeNameEn: 'Duyerpally Sarbojanin Durgotsav Samiti',
  establishedYear: 1956,
  celebratingYear: 70, // 70 years complete (1956 - 2026)
  themeYear: '২০২৬ · ৭০তম বর্ষপূর্তি উৎসব (১৯৫৬ - ২০২৬)',
  taglineBn: 'সপ্ততিবর্ষের ঐতিহ্য, সম্প্রীতি ও আলোর মহাযজ্ঞে সবাইকে সাদর আমন্ত্রণ',
  taglineEn: 'Celebrating 70 Years of Sacred Heritage, Harmony & Devotion (1956 - 2026)',
  venueBn: 'দুয়েরপল্লী প্রাঙ্গণ, কাশীপুর রোড, কলকাতা - ৭০০০৩৬',
  venueEn: 'Duyerpally Grounds, Cossipore Road, Kolkata - 700036',
  contactPhone: '+91 98830 26857',
  contactEmail: 'contact@duyerpallypujo.org',
  registeredRegNo: 'WB/ACT/1956/7021',
  pathGuideBn: 'শ্রী গৌতম রায় চৌধুরী',
  pandalVendorBn: 'মিন্টু ডেকরেটার্স',
  lightingVendorBn: 'কল্পনা এন্টারপ্রাইজ (বরাহনগর)',
  idolArtistBn: 'শ্রী কেষ্ট দাস (নিমতা)',
  priestsBn: 'শ্রী শক্তি বন্দ্যোপাধ্যায়, তরুণ বন্দ্যোপাধ্যায়',
  auditorsBn: 'শ্রী অম্বর ঘোষ, কাঞ্চন মিত্র',
};

export const COMMITTEE_MEMBERS: CommitteeMember[] = [
  {
    id: 'president',
    nameBn: 'শ্রী গোপাল ব্যানার্জী (খোকন দা)',
    nameEn: 'Shri Gopal Banerjee (Khokon Da)',
    designationBn: 'সভাপতি (President)',
    designationEn: 'President',
    roleGroup: 'leadership',
    experienceYears: 40,
    phone: '+91 98830 26857',
    quoteBn: '১৯৫৬ থেকে ২০২৬ — দুয়েরপল্লীর এই ৭০ বছরের গৌরবময় যাত্রা এলাকার প্রতিটি মানুষের একতা ও ভালোবাসার ফসল।',
    quoteEn: 'From 1956 to 2026, Duyerpally’s 70-year milestone is powered by neighbourhood unity and devotion.',
    badgeBn: 'সভাপতি',
  },
  {
    id: 'advisor',
    nameBn: 'শ্রী শান্তনু সরকার (রাজু দা)',
    nameEn: 'Shri Shantanu Sarkar (Raju Da)',
    designationBn: 'প্রধান উপদেষ্টা (Chief Advisor)',
    designationEn: 'Chief Advisor',
    roleGroup: 'advisory',
    experienceYears: 35,
    quoteBn: 'ঐতিহ্যের শিকড় শক্ত রেখে নতুন প্রজন্মের হাত ধরে আমরা উৎসবের শৃঙ্খলা ও আনন্দ আরও উন্নত করেছি।',
    quoteEn: 'Deep-rooted tradition guided forward by the dynamic youth ensures safety and festivity.',
    badgeBn: 'প্রধান উপদেষ্টা',
  },
  {
    id: 'general-sec',
    nameBn: 'শ্রী হিমাদ্রী শেখর নন্দী (বুবাই)',
    nameEn: 'Shri Himadri Sekhar Nandi (Bubai)',
    designationBn: 'সাধারণ সম্পাদক (General Secretary)',
    designationEn: 'General Secretary',
    roleGroup: 'leadership',
    experienceYears: 25,
    phone: '+91 98830 26857',
    quoteBn: '৭০ বছরে পদার্পণ করলো আমাদের পুজো। আসুন সকলে মিলে একসাথে বাঙালির শ্রেষ্ঠ উৎসবকে প্রকৃত মিলন উৎসবে পরিণত করি।',
    quoteEn: 'Entering our 70th milestone, we invite all families and youth to transform this Puja into a grand festival of unity.',
    badgeBn: 'সাধারণ সম্পাদক',
  },
  {
    id: 'treasurer',
    nameBn: 'শ্রী শুভদীপ চক্রবর্ত্তী (টিকলু)',
    nameEn: 'Shri Subhadeep Chakraborty (Tiklu)',
    designationBn: 'কোষাধ্যক্ষ (Treasurer)',
    designationEn: 'Treasurer & Accounts Lead',
    roleGroup: 'leadership',
    experienceYears: 20,
    quoteBn: 'প্রতিটি টাকার স্বচ্ছ ও নিখুঁত হিসাব জনগণের সামনে প্রকাশ করাই দুয়েরপল্লী পূজা কমিটির প্রধান গৌরব।',
    quoteEn: 'Complete financial transparency and audited accuracy is our unwavering promise to the community.',
    badgeBn: 'কোষাধ্যক্ষ',
  },
  {
    id: 'guide',
    nameBn: 'শ্রী গৌতম রায় চৌধুরী',
    nameEn: 'Shri Gautam Roy Chowdhury',
    designationBn: 'পথ প্রদর্শক ও সাংস্কৃতিক সমন্বয়ক',
    designationEn: 'Chief Guide & Cultural Coordinator',
    roleGroup: 'cultural',
    experienceYears: 28,
    phone: '+91 98830 26857',
    quoteBn: 'পঞ্চমীর দিন সন্ধ্যায় মায়ের আবরণ উন্মোচন এবং পল্লীর ছোটদের নিয়ে সাংস্কৃতিক অনুষ্ঠানের শুভ আয়োজন থাকবে।',
    quoteEn: 'Cultural program featuring local youth and children on Panchami evening alongside the divine unveiling.',
    badgeBn: 'পথ প্রদর্শক',
  },
  {
    id: 'priest-1',
    nameBn: 'শ্রী শক্তি বন্দ্যোপাধ্যায় ও তরুণ বন্দ্যোপাধ্যায়',
    nameEn: 'Pandit Shakti & Tarun Bandyopadhyay',
    designationBn: 'প্রধান পুরোহিতদ্বয় (Priests)',
    designationEn: 'Chief Priests & Ritual Masters',
    roleGroup: 'cultural',
    experienceYears: 30,
    quoteBn: 'বিশুদ্ধ সিদ্ধান্ত পঞ্জিকা মতে নিষ্ঠাভরে সপ্তমী থেকে দশমী ও কোজাগরী লক্ষ্মী পূজার পুণ্য বিধি সমাপন।',
    quoteEn: 'Strict adherence to Pure Siddhanta Panjika rituals from Shashthi to Dashami and Kojagari Lakshmi Puja.',
    badgeBn: 'শাস্ত্রীয় পুরোহিত',
  },
];

// Complete Executive Committee from 2026 Official Document
export const EXECUTIVE_BODY_NAMES: string[] = [
  'শঙ্খয়ন মাইতি (টুটু)',
  'শুভঙ্কর দত্ত',
  'সায়নাদিত্য পাল',
  'শুভম দাস (শুভ)',
  'অনিক মিত্র',
  'ভার্গব সাধুখাঁ',
  'সৌম্যদীপ দে',
  'নবমিত দত্ত',
  'সৃজন লাহা (জন)',
  'সৌম্যক দাস (ঝক)',
  'সুদীপ দাস',
  'সমরজিৎ মল্লিক',
  'স্নেহাংশু দাস (সোনাই)',
  'সৌমিক সাহা',
  'রমিত সাহা',
  'নিলাদ্রী শেখর নন্দী (বাবলু)',
  'বিশ্বজীত দাস (বাপি)',
  'সামন্তক ঘোষ (জীৎ)',
  'সৌরভ পাল (ভোম্বল)',
  'অভিজীৎ পাল (বুবাই)',
];

// Management Wing from Official Document
export const MANAGEMENT_BODY_NAMES: string[] = [
  'সৌম্যজিৎ রায় (সঞ্জু)',
  'সঞ্চারী সাহা',
  'পুষ্পাঙ্গী দত্ত',
  'সমপূর্ণা সাউ',
  'শুভদীপ সাধুখাঁ (ঋজু)',
  'প্রীতম সেন',
];

// Special Assistance from Official Document
export const SPECIAL_ASSISTANCE_NAMES: string[] = [
  'শ্রী পূর্ণেন্দু দত্ত',
  'শ্রী সুজিত ভড়',
  'শ্রী স্বপন শীল',
];

// Auditors from Official Document
export const AUDITORS_NAMES: string[] = [
  'শ্রী অম্বর ঘোষ',
  'কাঞ্চন মিত্র',
];
