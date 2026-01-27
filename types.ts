export interface DaySchedule {
  day: number;
  title: string;
  goal: string;
  practices: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  image?: string;
  isVideo?: boolean;
  videoUrl?: string;
}

export interface PricingOption {
  title: string;
  price: number;
  features: string[];
}

export interface UpcomingDate {
  month: string;
  dates: string[];
}