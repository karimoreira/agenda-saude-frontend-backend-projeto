export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  city: string;
  rating: number;
  reviews: number;
  price: number;
  crm: string;
  telemedicine: boolean;
  bio: string;
  address: string;
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
