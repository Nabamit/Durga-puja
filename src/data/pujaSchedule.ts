export interface Ritual {
  time: string;
  ritualBn: string;
  ritualEn: string;
  descriptionBn: string;
  descriptionEn: string;
  isKeyHighlight?: boolean;
}

export interface DaySchedule {
  id: string;
  tithiBn: string;
  tithiEn: string;
  date: string;
  taglineBn: string;
  taglineEn: string;
  significanceBn: string;
  significanceEn: string;
  petals: number;
  rituals: Ritual[];
  specialAttractionBn: string;
  specialAttractionEn: string;
}

export const PUJA_SCHEDULE: DaySchedule[] = [
  {
    id: 'panchami',
    tithiBn: 'মহাপঞ্চমী · সাংস্কৃতিক সন্ধ্যা ও মুখ উন্মোচন',
    tithiEn: 'Maha Panchami · Cultural Evening & Unveiling',
    date: '১৫ই অক্টোবর, ২০২৬ (২৭শে আশ্বিন, ১৪৩৩)',
    taglineBn: 'মায়ের আবরণ উন্মোচন এবং পল্লীর ছোটদের নিয়ে আনন্দমুখর সাংস্কৃতিক সন্ধ্যা।',
    taglineEn: 'Unveiling of the divine deity and neighbourhood children cultural festival.',
    significanceBn: 'বিশুদ্ধ সিদ্ধান্ত পঞ্জিকা অনুসারে দেবীর আগমন বার্তা ও উৎসবের সূচনা। পল্লীর অধিবাসীদের ও ছোটদের সমবেত আনন্দ অনুষ্ঠান।',
    significanceEn: 'Auspicious inauguration, veil unveiling, and cultural performances featuring local talent.',
    petals: 6,
    specialAttractionBn: 'পঞ্চমীর দিন সন্ধ্যায় মায়ের আবরণ উন্মোচন এবং পল্লীর অধিবাসীদের ও ছোটোদের নিয়ে সাংস্কৃতিক অনুষ্ঠান (যোগাযোগ: গৌতম দা, মোবাইল: ৯৮৮৩০২৬৮৫৭)।',
    specialAttractionEn: 'Grand cultural opening and idol unveiling coordinated by Gautam Da (+91 98830 26857).',
    rituals: [
      {
        time: '০৫:৩০ PM',
        ritualBn: 'মায়ের আবরণ উন্মোচন ও মঙ্গল প্রদীপ প্রজ্জ্বলন',
        ritualEn: 'Sacred Unveiling of Devi & Lamp Lighting',
        descriptionBn: '৭০তম বর্ষপূর্তির পুণ্যলগ্নে সমবেত পল্লীবাসীদের উপস্থিতিতে দেবীর মুখাবরণ উন্মোচন।',
        descriptionEn: 'Solemn unveiling of the divine idol in the presence of neighbourhood families.',
        isKeyHighlight: true,
      },
      {
        time: '০৬:৩০ PM',
        ritualBn: 'পল্লীর ছোটদের সাংস্কৃতিক অনুষ্ঠান (সংগীত ও আবৃত্তি)',
        ritualEn: 'Children & Youth Cultural Performance',
        descriptionBn: 'ছোটদের সংগীত, আবৃত্তি ও বাদ্য সংগীতের মনোজ্ঞ পরিবেশনা।',
        descriptionEn: 'Neighbourhood children present devotional songs and poetry recitation.',
        isKeyHighlight: true,
      },
    ],
  },
  {
    id: 'shashthi',
    tithiBn: 'মহাষষ্ঠী · বোধন ও কল্পারম্ভ',
    tithiEn: 'Maha Shashthi · Bodhon & Adhivas',
    date: '১৬ই অক্টোবর, ২০২৬ (২৮শে আশ্বিন, ১৪৩৩, শুক্রবার)',
    taglineBn: 'সকাল ৭:০০ টায় ষষ্ঠী পূজা শুরু, পুষ্পাঞ্জলি ৮:০০ টায় এবং সায়ংকালে দেবীর বোধন।',
    taglineEn: 'Shashthi Puja begins at 7:00 AM, Pushpanjali at 8:00 AM, Bodhon at twilight.',
    significanceBn: 'বিশুদ্ধ সিদ্ধান্ত পঞ্জিকা মতে শুক্রবার ষষ্ঠী অহোরাত্র। সায়ংকালে শ্রীশ্রী দুর্গাদেবীর বোধন ও অধিবাস বিধি সমাপন।',
    significanceEn: 'Pure Siddhanta Panjika timings: Day-long Shashthi with evening awakening ritual.',
    petals: 8,
    specialAttractionBn: 'সকাল ৮:০০ টায় প্রথম পুষ্পাঞ্জলি ও সায়ংকালে ঢাকের বোলে সান্ধ্য বোধন আরতি।',
    specialAttractionEn: 'First community Pushpanjali at 8:00 AM followed by evening Bodhon Aarti.',
    rituals: [
      {
        time: '০৭:০০ AM',
        ritualBn: 'মহাষষ্ঠী পূজা আরম্ভ',
        ritualEn: 'Commencement of Shashthi Puja',
        descriptionBn: 'বিশুদ্ধ সিদ্ধান্ত পঞ্জিকা মতে সকাল ৭:০০ মিনিটে ষষ্ঠী পূজা আরম্ভ হইবে।',
        descriptionEn: 'Ritual invocation commences at 7:00 AM sharp as per sacred almanac.',
        isKeyHighlight: true,
      },
      {
        time: '০৮:০০ AM',
        ritualBn: 'পুষ্পাঞ্জলি প্রদান',
        ritualEn: 'Maha Shashthi Pushpanjali',
        descriptionBn: 'সকাল ৮:০০ টায় ভক্তবৃন্দের সমবেত পুষ্পাঞ্জলি অর্পণ।',
        descriptionEn: 'Flower offerings and mantras recited by assembled devotees.',
        isKeyHighlight: true,
      },
      {
        time: 'সায়ংকালে (Twilight)',
        ritualBn: 'শ্রীশ্রী দুর্গাদেবীর বোধন ও আমন্ত্রণ',
        ritualEn: 'Bodhon & Divine Invocation',
        descriptionBn: 'বিল্ববৃক্ষ মূলে দেবীর বোধন ও সপরিবারে আগমন বন্দনা।',
        descriptionEn: 'Sacred twilight Bodhon welcoming the Divine Mother.',
        isKeyHighlight: true,
      },
    ],
  },
  {
    id: 'saptami',
    tithiBn: 'মহাসপ্তমী · নবপত্রিকা প্রবেশ ও সপ্তমী পূজা',
    tithiEn: 'Maha Saptami · Arrival of Nabapatrika',
    date: '১৮ই অক্টোবর, ২০২৬ (৩০শে আশ্বিন, ১৪৩৩, রবিবার)',
    taglineBn: 'ভোর ৪:০০ টায় নবপত্রিকা প্রবেশ স্থাপন, সপ্তমী দিবা ৮:২৯ মিনিট পর্যন্ত।',
    taglineEn: 'Nabapatrika entry and Kalparambha at 4:00 AM, Saptami tithi lasts till 8:29 AM.',
    significanceBn: 'বিশুদ্ধ সিদ্ধান্ত পঞ্জিকা মতে ২৯শে আশ্বিন (১৭ই অক্টোবর, শনিবার) সকাল ৫:০০ মিনিটে অধিক পূজা (অধিবাস) এবং ৩০শে আশ্বিন ভোর ৪:০০ মিনিটে নবপত্রিকা প্রবেশ স্থাপন।',
    significanceEn: 'Adhivas observed on Saturday 5:00 AM followed by sacred Nabapatrika installation at 4:00 AM Sunday.',
    petals: 10,
    specialAttractionBn: 'ভোর ৪:০০ টায় নবপত্রিকা প্রবেশ এবং সকাল ১০:০০ টায় সর্বজনীন ভোগ বিতরণ।',
    specialAttractionEn: 'Pre-dawn Nabapatrika entry and morning community bhog distribution.',
    rituals: [
      {
        time: '০৪:০০ AM',
        ritualBn: 'নবপত্রিকা প্রবেশ স্থাপন ও সপ্তম্যানি কল্পারম্ভ',
        ritualEn: 'Nabapatrika Entry & Kalparambha',
        descriptionBn: 'সকাল ৪/০০ মিনিটে নবপত্রিকা প্রবেশ স্থাপন সপ্তম্যানি কল্পারম্ভ সমাপন।',
        descriptionEn: 'Sacred bath and installation of Kola Bou and nine plants.',
        isKeyHighlight: true,
      },
      {
        time: 'দিবা ০৮:২৯ মিনিট পর্যন্ত',
        ritualBn: 'মহাসপ্তমী পূজা সমাপন',
        ritualEn: 'Maha Saptami Puja Completion',
        descriptionBn: 'সপ্তমী তিথির মধ্যে বিহিত পূজা ও পুষ্পাঞ্জলি সম্পন্ন।',
        descriptionEn: 'Consecration concluded within the Saptami auspicious window.',
      },
      {
        time: '১২:৩০ PM',
        ritualBn: 'মায়ের ভোগরাগ ও সর্বজনীন অন্নপ্রসাদ',
        ritualEn: 'Midday Bhog & Prasadam',
        descriptionBn: 'গোবিন্দভোগ চালের খিচুড়ি, লাবড়া ও পায়েস অন্নসেবা।',
        descriptionEn: 'Sanctified bhog offered to deities and distributed to devotees.',
      },
    ],
  },
  {
    id: 'ashtami',
    tithiBn: 'মহাষ্টমী ও সন্ধিপূজা · ১০৮ পদ্ম ও দীপ',
    tithiEn: 'Maha Ashtami & Sacred Sandhi Puja',
    date: '১৯শে অক্টোবর, ২০২৬ (১লা কার্ত্তিক, ১৪৩৩, সোমবার)',
    taglineBn: 'সকাল ৬:০০ টায় মহাষ্টমী পূজা শুরু, পুষ্পাঞ্জলি সকাল ৭:৩০ থেকে ১০:০০ টা পর্যন্ত।',
    taglineEn: 'Ashtami Puja starts at 6:00 AM, Pushpanjali 7:30 to 10:00 AM, Sandhi Puja 10:28 to 11:16 AM.',
    significanceBn: 'অষ্টমী দিবা ১০:৫২ মিনিট পর্যন্ত। দিবা ১০:২৮ গতে সন্ধিপূজারম্ভ এবং দিবা ১১:১৬ মিনিটের মধ্যে সন্ধিপূজা সমাপন।',
    significanceEn: 'Peak devotional fervor: Sandhi Puja solemnized strictly between 10:28 AM and 11:16 AM.',
    petals: 12,
    specialAttractionBn: 'সন্ধিপূজার ১০৮ মাটির প্রদীপ প্রজ্বলন, ১০৮ পদ্মার্ঘ্য এবং মহাধুনুচি আরতি।',
    specialAttractionEn: 'Sandhi Puja illuminated with 108 earthen lamps, 108 blue lotuses, and master Dhunuchi aarti.',
    rituals: [
      {
        time: '০৬:০০ AM',
        ritualBn: 'মহাষ্টমী পূজা আরম্ভ',
        ritualEn: 'Commencement of Maha Ashtami Puja',
        descriptionBn: 'সকাল ৬/০০ মিনিটে মহাষ্টমী পূজা শুরু হইবে (অষ্টমী দিবা ১০/৫২ পর্যন্ত)।',
        descriptionEn: 'Ashtami worship initiates at sunrise.',
      },
      {
        time: '০৭:৩০ AM - ১০:০০ AM',
        ritualBn: 'মহাষ্টমী পুষ্পাঞ্জলি (৪টি পর্যায়)',
        ritualEn: 'Maha Ashtami Pushpanjali Sessions',
        descriptionBn: 'সকাল ৭/৩০ মিনিটে শুরু হইতে ১০/০০ টার পর্যন্ত অবিচ্ছিন্ন পুষ্পাঞ্জলি।',
        descriptionEn: 'Devotees gather in consecutive batches for the sacred Ashtami prayer.',
        isKeyHighlight: true,
      },
      {
        time: '১০:২৮ AM - ১১:১৬ AM',
        ritualBn: 'পবিত্র সন্ধিপূজা (১০৮ প্রদীপ ও পদ্ম)',
        ritualEn: 'Sandhi Puja Consecration',
        descriptionBn: 'দিবা ১০/২৮ গতে সন্ধিপূজারম্ভ এবং দিবা ১১/১৬ মিনিটের মধ্যে সন্ধিপূজা সমাপন।',
        descriptionEn: 'The climactic transition ritual commemorating the slaying of Chanda and Munda.',
        isKeyHighlight: true,
      },
    ],
  },
  {
    id: 'navami',
    tithiBn: 'মহানবমী · হোম ও নবমী যজ্ঞ',
    tithiEn: 'Maha Navami · Sacred Homa Fire',
    date: '২০শে অক্টোবর, ২০২৬ (২রা কার্ত্তিক, ১৪৩৩, মঙ্গলবার)',
    taglineBn: 'দিবা সকাল ৮:০৭ মিনিটে নবমী পূজা শুরু, নবমী দিবা ১২:৫১ মিনিট পর্যন্ত।',
    taglineEn: 'Navami Puja starts at 8:07 AM, tithi continues till 12:51 PM followed by Maha Yajna.',
    significanceBn: 'বিশুদ্ধ সিদ্ধান্ত পঞ্জিকা মতে নবমী দিবা ১২/৫১ মিনিট পর্যন্ত। মহাযজ্ঞ, পূর্ণাহুতি ও আরতি সমাপন।',
    significanceEn: 'Navami sacred fire rituals, concluding purnahuti, and grand midday offerings.',
    petals: 8,
    specialAttractionBn: 'দুপুর ১২:০০ টায় নবমী মহাযজ্ঞের পূর্ণাহুতি এবং ৩,০০০ ভক্তের সমবেত মহাপ্রসাদ সেবা।',
    specialAttractionEn: 'Grand sacred yajna fire purnahuti followed by mass community feast.',
    rituals: [
      {
        time: '০৮:০৭ AM',
        ritualBn: 'মহানবমী পূজা আরম্ভ',
        ritualEn: 'Maha Navami Puja Commencement',
        descriptionBn: 'দিবা সকাল ৮/৭ মিনিটে নবমী পূজা শুরু হইবে।',
        descriptionEn: 'Morning worship commences at 8:07 AM.',
        isKeyHighlight: true,
      },
      {
        time: '১০:৩০ AM',
        ritualBn: 'মহানবমী পুষ্পাঞ্জলি ও হোম যজ্ঞ',
        ritualEn: 'Pushpanjali & Fire Oblation',
        descriptionBn: 'বেলকাঠ, ঘি ও সমিধ সহযোগে শাস্ত্রীয় মহাযজ্ঞ সম্পাদন।',
        descriptionEn: 'Vedic fire ritual performed by the revered priests.',
      },
      {
        time: '০৮:০০ PM',
        ritualBn: 'ঐতিহ্যবাহী ধুনুচি নৃত্য ও ঢাক প্রতিযোগিতা',
        ritualEn: 'Dhunuchi Dance & Dhak Rhythms',
        descriptionBn: 'পাড়ার তরুণ ও প্রবীণদের সমবেত ধুনুচি আরতি ও উল্লাস।',
        descriptionEn: 'Spirited festive celebration with earthen censers.',
      },
    ],
  },
  {
    id: 'dashami',
    tithiBn: 'বিজয়া দশমী · বিসর্জন ও অপরাজিতা পূজা',
    tithiEn: 'Vijaya Dashami · Immersion & Sindoor Khela',
    date: '২১শে অক্টোবর, ২০২৬ (৩রা কার্ত্তিক, ১৪৩৩, বুধবার)',
    taglineBn: 'সকাল ৬:৩০ এ পূজা শুরু, ৮:৩০ এ সমাপন। দশমী দিবা ২:১২ মিনিট পর্যন্ত।',
    taglineEn: 'Puja begins 6:30 AM, concludes 8:30 AM. Immersion and traditional farewell.',
    significanceBn: 'দেবী প্রতিমার দর্পণ বিসর্জন, অপরাজিতা পূজা এবং অশ্রুসজল নয়নে মায়ের বিদায় সম্ভাষণ।',
    significanceEn: 'Darpan Visarjan, Aparajita prayers, and the tearful farewell until next autumn.',
    petals: 14,
    specialAttractionBn: 'বিকেল ০৪:৩০ এ ঐতিহ্যবাহী সিঁদুর খেলা এবং রাত ০৮:০০ টায় রতন বাবুর ঘাট আলোকময় ভাসান শোভাযাত্রা।',
    specialAttractionEn: 'Sindoor Khela at 04:30 PM followed by illuminated river procession to Ratan Babu Ghat at 08:00 PM.',
    rituals: [
      {
        time: '০৬:৩০ AM - ০৮:৩০ AM',
        ritualBn: 'বিজয়া দশমী পূজা ও দর্পণ বিসর্জন',
        ritualEn: 'Dashami Puja & Darpan Visarjan',
        descriptionBn: 'সকাল ৬/৩০ মিনিটে পূজা শুরু এবং ৮/৩০ মিনিটের মধ্যে পূজা ও দর্পণ বিসর্জন সমাপ্ত হইবে।',
        descriptionEn: 'Sacred ritual mirror immersion concluded before 8:30 AM.',
        isKeyHighlight: true,
      },
      {
        time: '০৪:৩০ PM',
        ritualBn: 'ঐতিহ্যবাহী সিঁদুর খেলা ও দেবী বরণ',
        ritualEn: 'Sacred Sindoor Khela & Baran',
        descriptionBn: 'মায়েদের পানপাতা ও মিষ্টিমুখে দেবী বরণ এবং সমবেত সিঁদুর খেলা।',
        descriptionEn: 'Revered vermilion ritual celebrating womanhood and marital auspiciousness.',
        isKeyHighlight: true,
      },
      {
        time: '০৮:০০ PM',
        ritualBn: 'রতন বাবুর ঘাট আলোকময় ভাসান শোভাযাত্রা',
        ritualEn: 'Illuminated Immersion at Ratan Babu Ghat',
        descriptionBn: 'ঢাকের বাদ্য ও আলোকসজ্জা সহযোগে রতন বাবুর ঘাটে মায়ের ভাসান শোভাযাত্রা।',
        descriptionEn: 'Grand riverbank farewell procession to Ratan Babu Ghat.',
        isKeyHighlight: true,
      },
    ],
  },
];
