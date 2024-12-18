export type TJobItem = {
  id: number;
  company: string;
  badgeLetters: string;
  title: string;
  daysAgo: number;
  relevanceScore: number;
};

export type TJobItemExpanded = TJobItem & {
  description: string;
  qualifications: string[];
  reviews: string[];
  duration: string;
  location: string;
  salary: string;
  coverImgURL: string;
  companyURL: string;
};

export type TSortBy = 'relevant' | 'recent';
export type TDirection = 'next' | 'previous';
