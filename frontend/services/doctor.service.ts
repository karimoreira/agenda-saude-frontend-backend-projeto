import { Doctor, DayOption, SearchFilter } from "@/types";

export const formatBRL = (value: number): string =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export const filterDoctors = (doctors: Doctor[], { query, specialty }: SearchFilter): Doctor[] =>
  doctors.filter((d) => {
    const matchesSpecialty = specialty === "Todas" || d.specialty === specialty;
    const q = query.trim().toLowerCase();
    const matchesQuery =
      !q ||
      d.name.toLowerCase().includes(q) ||
      d.specialty.toLowerCase().includes(q) ||
      d.city.toLowerCase().includes(q);
    return matchesSpecialty && matchesQuery;
  });

const WEEKDAY_LABELS = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];

export const getNextDays = (count = 5): DayOption[] =>
  Array.from({ length: count }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return {
      key: d.toISOString().slice(0, 10),
      weekday: WEEKDAY_LABELS[d.getDay()],
      day: d.getDate(),
      month: d.toLocaleDateString("pt-BR", { month: "short" }).replace(".", ""),
    };
  });

export const SLOT_TIMES = ["08:00", "09:30", "11:00", "14:00", "15:30", "17:00"];
