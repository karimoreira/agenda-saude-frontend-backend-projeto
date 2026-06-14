"use client";
import { useMemo, useState } from "react";
import { Doctor } from "@/types";
import { DOCTORS, SPECIALTIES } from "@/data/doctors";
import { filterDoctors } from "@/services/doctor.service";
import { DoctorCard } from "./DoctorCard";
import { Button, Input, SearchIcon } from "./ui";

const specialties = [
  "Cardiologia",
  "Dermatologia",
  "Ginecologia",
  "Neurologia",
  "Oftalmologia",
  "Ortopedia",
  "Pediatria",
  "Psicologia",
  "Psiquiatria",
  "Reumatologia",
  "Urologia",
];

export function SearchScreen({ onSelect }: { onSelect: (doctor: Doctor) => void }) {
  const [query, setQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);

  const results = useMemo(
    () => filterDoctors(DOCTORS, { query, specialty: selectedSpecialty }),
    [query, selectedSpecialty]
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8">
      <aside className="lg:col-span-4 xl:col-span-3 p-6 bg-white rounded-lg shadow-lg h-fit">
        <h1 className="text-2xl font-bold text-ink">AgendaSaúde</h1>
        <p className="mt-2 text-ink/80">Encontre seu médico e agende em segundos</p>

        <div className="relative mt-6">
          <Input
            placeholder="Especialidade, nome ou cidade"
            className="pl-10"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-ink/50" />
        </div>

        <div className="mt-8">
          <h3 className="font-bold text-ink">Especialidades</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button
              variant={!selectedSpecialty ? "primary" : "secondary"}
              onClick={() => setSelectedSpecialty(null)}
            >
              Todas
            </Button>
            {specialties.map((s) => (
              <Button
                key={s}
                variant={selectedSpecialty === s ? "primary" : "secondary"}
                onClick={() => setSelectedSpecialty(s)}
              >
                {s}
              </Button>
            ))}
          </div>
        </div>
      </aside>

      <main className="lg:col-span-8 xl:col-span-9 mt-8 lg:mt-0">
        <p className="text-ink/80">
          {results.length} profissionais encontrados
        </p>
        <div className="mt-6 grid grid-cols-1 gap-6">
          {results.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} onSelect={onSelect} />
          ))}
        </div>
      </main>
    </div>
  );
}
