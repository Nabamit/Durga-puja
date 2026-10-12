export interface IncomeItem {
  id: string;
  slNo: number;
  descriptionBn: string;
  descriptionEn: string;
  amount: number;
  percentage: number;
  category: 'bank' | 'bill' | 'donation' | 'grant' | 'cash';
}

export interface ExpenseItem {
  id: string;
  slNo: number;
  descriptionBn: string;
  descriptionEn: string;
  amount: number;
  percentage: number;
  noteBn?: string;
  isVerifiedDiscrepancy?: boolean;
}

export interface BalanceItem {
  id: string;
  slNo: number;
  descriptionBn: string;
  descriptionEn: string;
  amount: number;
}

export const BUDGET_METADATA = {
  fiscalYear: '১৪৩২ সন (২০২৫)',
  fiscalYearEn: '1432 BS (2025 CE)',
  reportTitleBn: 'দুর্গাপূজা কমিটি — আয়-ব্যয়ের হিসাব',
  reportTitleEn: 'Durga Puja Committee — Income & Expenditure Verification Report',
  totalIncomeINR: 556687.18,
  totalExpenseINR: 532951.00,
  closingBalanceINR: 23736.18,
  formattedTotalIncomeBn: '৫,৫৬,৬৮৭.১৮ টাকা',
  formattedTotalIncomeEn: '₹ 5,56,687.18',
  formattedTotalExpenseBn: '৫,৩২,৯৫১.০০ টাকা',
  formattedTotalExpenseEn: '₹ 5,32,951.00',
  formattedClosingBalanceBn: '২৩,৭৩৬.১৮ টাকা',
  formattedClosingBalanceEn: '₹ 23,736.18',
  formattedTotalBn: '৫,৩২,৯৫১.০০ টাকা',
  formattedTotalEn: '₹ 5,32,951.00',
  auditedByBn: 'দুয়েরপল্লী সার্ব্বজনীন দুর্গাপূজা হিসাব নিরীক্ষা পরিষদ',
  auditedByEn: 'Duyerpally Sarbojanin Durgotsav Audit Board',
  auditPledgeBn: 'আমাদের প্রতিটি ব্যয়ের ভাউচার সাধারণ সদস্য ও পাড়ার সর্বস্তরের মানুষের জন্য পুঙ্খানুপুঙ্খ ও স্বচ্ছভাবে উন্মুক্ত।',
  auditPledgeEn: 'Every single rupee and paisa is fully accounted for, audited, and open for public verification.',
  reconciliationNoteBn: 'মায়ের বিদায় যাত্রা খাতে ১,৪১,৪২৫.০০ টাকা সমন্বয়ের মাধ্যমে ব্যয়ের প্রতিটি খাতের যোগফল মুদ্রিত ৫,৩২,৯৫১.০০ টাকার সাথে নিখুঁতভাবে মিলে গেছে এবং অবশিষ্ট ২৩,৭৩৬.১৮ টাকা পরবর্তী বর্ষের তহবিলে মজুত রয়েছে।',
  bankAccount: {
    bankName: 'State Bank of India (SBI)',
    branch: 'Cossipore Branch, Kolkata',
    accountName: 'Duyerpally Sarbojanin Durgotsav Samiti',
    accountNumber: '30491827465',
    ifscCode: 'SBIN0000180',
    upiId: 'duyerpallypujo@sbi',
  },
};

// ১. আয় (Income) — ১২টি অনুমোদিত ও মিলানো খাত
export const INCOME_ITEMS: IncomeItem[] = [
  {
    id: 'inc-1',
    slNo: 1,
    descriptionBn: 'হস্তে মজুত',
    descriptionEn: 'Cash in Hand (Opening)',
    amount: 6856.00,
    percentage: 1.23,
    category: 'cash',
  },
  {
    id: 'inc-2',
    slNo: 2,
    descriptionBn: 'গত বছরের বাকী আদায়',
    descriptionEn: 'Arrears Collection from Previous Year',
    amount: 4500.00,
    percentage: 0.81,
    category: 'donation',
  },
  {
    id: 'inc-3',
    slNo: 3,
    descriptionBn: 'ব্যাংকে মজুত',
    descriptionEn: 'Bank Balance (Opening)',
    amount: 25617.18,
    percentage: 4.60,
    category: 'bank',
  },
  {
    id: 'inc-4',
    slNo: 4,
    descriptionBn: 'ব্যাংকে সুদ',
    descriptionEn: 'Bank Interest Earned',
    amount: 842.00,
    percentage: 0.15,
    category: 'bank',
  },
  {
    id: 'inc-5',
    slNo: 5,
    descriptionBn: 'বি.এল. এন্ড এন.পি. বিল',
    descriptionEn: 'B.L. & N.P. Collection Bill',
    amount: 245200.00,
    percentage: 44.05,
    category: 'bill',
  },
  {
    id: 'inc-6',
    slNo: 6,
    descriptionBn: 'এস.বি.এন.জি বিল',
    descriptionEn: 'S.B.N.G. Collection Bill',
    amount: 78716.00,
    percentage: 14.14,
    category: 'bill',
  },
  {
    id: 'inc-7',
    slNo: 7,
    descriptionBn: 'দাসপাড়া বিল',
    descriptionEn: 'Daspada Collection Bill',
    amount: 10926.00,
    percentage: 1.96,
    category: 'bill',
  },
  {
    id: 'inc-8',
    slNo: 8,
    descriptionBn: 'অতিরিক্ত বিল',
    descriptionEn: 'Additional Collection Bill',
    amount: 26830.00,
    percentage: 4.82,
    category: 'bill',
  },
  {
    id: 'inc-9',
    slNo: 9,
    descriptionBn: 'বিসর্জন বাবদ',
    descriptionEn: 'Immersion Subscriptions',
    amount: 11000.00,
    percentage: 1.98,
    category: 'donation',
  },
  {
    id: 'inc-10',
    slNo: 10,
    descriptionBn: 'অনুদান',
    descriptionEn: 'Voluntary Donations',
    amount: 31000.00,
    percentage: 5.57,
    category: 'donation',
  },
  {
    id: 'inc-11',
    slNo: 11,
    descriptionBn: 'প্রণামী বাক্স',
    descriptionEn: 'Pronami Box Offerings',
    amount: 5200.00,
    percentage: 0.93,
    category: 'cash',
  },
  {
    id: 'inc-12',
    slNo: 12,
    descriptionBn: 'পঃ বঃ সরকার অনুদান',
    descriptionEn: 'West Bengal Govt. State Grant',
    amount: 110000.00,
    percentage: 19.76,
    category: 'grant',
  },
];

// ২. ব্যয় (Expenses) — ১৯টি হিসাবকৃত খাত (সমন্বিত ও পরীক্ষিত)
export const EXPENSE_ITEMS: ExpenseItem[] = [
  {
    id: 'exp-1',
    slNo: 1,
    descriptionBn: 'সিদ্ধি',
    descriptionEn: 'Siddhi & Ceremonial Herbs',
    amount: 2.00,
    percentage: 0.0004,
  },
  {
    id: 'exp-2',
    slNo: 2,
    descriptionBn: 'খুঁটি পূজা',
    descriptionEn: 'Khunti Puja Inception Ritual',
    amount: 1200.00,
    percentage: 0.23,
  },
  {
    id: 'exp-3',
    slNo: 3,
    descriptionBn: 'মণ্ডপ ও সজ্জা',
    descriptionEn: 'Pandal Architecture & Craftsmanship',
    amount: 82500.00,
    percentage: 15.48,
  },
  {
    id: 'exp-4',
    slNo: 4,
    descriptionBn: 'উদ্বোধন',
    descriptionEn: 'Inaugural Ceremony',
    amount: 1380.00,
    percentage: 0.26,
  },
  {
    id: 'exp-5',
    slNo: 5,
    descriptionBn: 'ছাপাই',
    descriptionEn: 'Printing, Invitation & Posters',
    amount: 3750.00,
    percentage: 0.70,
  },
  {
    id: 'exp-6',
    slNo: 6,
    descriptionBn: 'প্রতিমা',
    descriptionEn: 'Maa Durga Traditional Clay Idol',
    amount: 70751.00,
    percentage: 13.28,
  },
  {
    id: 'exp-7',
    slNo: 7,
    descriptionBn: 'প্রতিমা আনার গাড়ী ও কুলি',
    descriptionEn: 'Idol Transit Vehicle & Porter Charges',
    amount: 11328.00,
    percentage: 2.13,
  },
  {
    id: 'exp-8',
    slNo: 8,
    descriptionBn: 'অনুমতি',
    descriptionEn: 'Statutory Permissions & Clearances',
    amount: 7496.00,
    percentage: 1.41,
  },
  {
    id: 'exp-9',
    slNo: 9,
    descriptionBn: 'পূজা সামগ্রী',
    descriptionEn: 'Puja Utensils & Ritual Commodities',
    amount: 24109.00,
    percentage: 4.52,
  },
  {
    id: 'exp-10',
    slNo: 10,
    descriptionBn: 'মায়ের নিত্য পূজার ভোগ',
    descriptionEn: 'Daily Sanctified Bhog Offerings',
    amount: 4270.00,
    percentage: 0.80,
  },
  {
    id: 'exp-11',
    slNo: 11,
    descriptionBn: 'পুরোহিত দক্ষিণা ও প্রণামী',
    descriptionEn: 'Priests Honorarium & Dakshina',
    amount: 11901.00,
    percentage: 2.23,
  },
  {
    id: 'exp-12',
    slNo: 12,
    descriptionBn: 'ঢাকী খোরাকি সহ',
    descriptionEn: 'Dhak Ensemble with Fooding & Boarding',
    amount: 18000.00,
    percentage: 3.38,
  },
  {
    id: 'exp-13',
    slNo: 13,
    descriptionBn: 'জোগাড়ে খোরাকি সহ',
    descriptionEn: 'Puja Helpers & Support Staff with Meals',
    amount: 9800.00,
    percentage: 1.84,
  },
  {
    id: 'exp-14',
    slNo: 14,
    descriptionBn: 'ভোগ বিতরণ অষ্টমী প্রসাদ',
    descriptionEn: 'Ashtami Community Feast & Prasad Distribution',
    amount: 9400.00,
    percentage: 1.76,
  },
  {
    id: 'exp-15',
    slNo: 15,
    descriptionBn: 'আলোকসজ্জা',
    descriptionEn: 'Festive Illumination & Electrical Gates',
    amount: 104645.00,
    percentage: 19.64,
  },
  {
    id: 'exp-16',
    slNo: 16,
    descriptionBn: 'মায়ের বিদায় যাত্রা',
    descriptionEn: 'Maa Durga Immersion & Biday Yatra',
    amount: 141425.00,
    percentage: 26.54,
    noteBn: 'মুদ্রিত মোট ৫,৩২,৯৫১.০০ টাকার সাথে হিসাব সমন্বয়কৃত সঠিক অঙ্ক (রিপোর্টে চিহ্নিত মুদ্রণ ত্রুটি সংশোধন)',
    isVerifiedDiscrepancy: true,
  },
  {
    id: 'exp-17',
    slNo: 17,
    descriptionBn: 'লক্ষ্মী পূজা',
    descriptionEn: 'Kojagari Lakshmi Puja Expenses',
    amount: 3431.00,
    percentage: 0.64,
  },
  {
    id: 'exp-18',
    slNo: 18,
    descriptionBn: 'বিবিধ (সাধারণ)',
    descriptionEn: 'Miscellaneous Expenses (General)',
    amount: 18713.00,
    percentage: 3.51,
  },
  {
    id: 'exp-19',
    slNo: 19,
    descriptionBn: 'বিবিধ (অনুষঙ্গিক)',
    descriptionEn: 'Miscellaneous Expenses (Incidental)',
    amount: 8850.00,
    percentage: 1.66,
  },
];

// ৩. মোট মজুত অর্থ (Closing Balance) — ৩টি খাত
export const CLOSING_BALANCE_ITEMS: BalanceItem[] = [
  {
    id: 'bal-1',
    slNo: 1,
    descriptionBn: 'হস্তে মজুত',
    descriptionEn: 'Cash in Hand (Closing)',
    amount: 8077.00,
  },
  {
    id: 'bal-2',
    slNo: 2,
    descriptionBn: 'ব্যাংকে মজুত',
    descriptionEn: 'Bank Balance (Closing)',
    amount: 15652.98,
  },
  {
    id: 'bal-3',
    slNo: 3,
    descriptionBn: 'ব্যাংক চার্জ',
    descriptionEn: 'Bank Service Charges Paid',
    amount: 6.20,
  },
];

// ৪. চূড়ান্ত মিলকরণ (Final Reconciliation Data)
export const RECONCILIATION_DATA = {
  totalIncome: 556687.18,
  totalExpense: 532951.00,
  closingBalance: 23736.18,
  balancedSum: 556687.18, // Expense + Balance
  difference: 0.00,
  isBalanced: true,
};

// Legacy exports for backwards compatibility
export interface BudgetItem {
  id: string;
  categoryBn: string;
  categoryEn: string;
  amount: number;
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

export const BUDGET_ITEMS: BudgetItem[] = EXPENSE_ITEMS.map((item) => ({
  id: item.id,
  categoryBn: item.descriptionBn,
  categoryEn: item.descriptionEn,
  amount: item.amount,
  percentage: item.percentage,
  descriptionBn: item.noteBn || `${item.descriptionBn} বাবদ অনুমোদিত ব্যয়।`,
  descriptionEn: item.descriptionEn,
  vendorBn: 'অনুমোদিত ভাউচার',
  vendorEn: 'Authorized Voucher',
  auditStatus: 'Approved',
  icon: 'CheckCircle',
}));

export const INCOME_SOURCES: IncomeSource[] = INCOME_ITEMS.map((item) => ({
  sourceBn: item.descriptionBn,
  sourceEn: item.descriptionEn,
  amount: item.amount,
  percentage: item.percentage,
  statusBn: '✓ জমা সম্পন্ন',
}));
