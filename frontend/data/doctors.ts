import { Doctor } from "@/types";

export const SPECIALTIES = [
  "Todas",
  "Cardiologia",
  "Dermatologia",
  "Psicologia",
  "Ortopedia",
  "Pediatria",
  "Ginecologia",
] as const;

const cityFromLocation = (loc: string) => loc.split(",")[0].trim();

const baseDoctors: Omit<Doctor, "city" | "crm" | "bio" | "address">[] = [
  {
    id: "1",
    name: "Dra. Marina Lopes",
    specialty: "Cardiologia",
    location: "São Paulo, SP",
    availability: "online",
    rating: 4.9,
    reviews: 212,
    price: 350,
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: "2",
    name: "Dr. Rafael Andrade",
    specialty: "Dermatologia",
    location: "São Paulo, SP",
    availability: "online",
    rating: 4.8,
    reviews: 167,
    price: 290,
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: "3",
    name: "Dra. Camila Ferreira",
    specialty: "Psicologia",
    location: "Rio de Janeiro, RJ",
    availability: "online",
    rating: 5,
    reviews: 340,
    price: 220,
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: "4",
    name: "Dr. Bruno Carvalho",
    specialty: "Ortopedia",
    location: "Belo Horizonte, MG",
    availability: "online",
    rating: 4.7,
    reviews: 98,
    price: 310,
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: "5",
    name: "Dra. Juliana Mota",
    specialty: "Pediatria",
    location: "São Paulo, SP",
    availability: "online",
    rating: 4.9,
    reviews: 421,
    price: 280,
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    id: "6",
    name: "Dr. Fernando Martins",
    specialty: "Ginecologia",
    location: "Curitiba, PR",
    availability: "online",
    rating: 4.8,
    reviews: 189,
    price: 300,
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

export const DOCTORS: Doctor[] = baseDoctors.map((d) => ({
  ...d,
  city: cityFromLocation(d.location),
  crm: `${d.id.padStart(6, "0")}${d.specialty.slice(0, 2).toUpperCase()}`,
  bio: `Médico(a) especialista em ${d.specialty} com vasta experiência no atendimento humanizado. Atende presencialmente e por telemedicina.`,
  address: `${d.location.split(",")[0].trim()}, Centro`,
}));
