export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  location: string;
  city: string;
  availability: string;
  rating: number;
  reviews: number;
  price: number;
  image?: string;
  crm: string;
  bio: string;
  address: string;
  telemedicine?: boolean;
}

export interface Slot {
  day: string;
  time: string;
}

export interface Patient {
  name: string;
  phone: string;
  reason?: string;
}

export interface DayOption {
  key: string;
  weekday: string;
  day: number;
  month: string;
}

export type SearchFilter = {
  query: string;
  specialty: string;
};
