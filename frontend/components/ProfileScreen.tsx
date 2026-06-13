"use client";
import { useMemo, useState } from "react";
import { Doctor, Slot } from "@/types";
import { formatBRL, getNextDays, SLOT_TIMES } from "@/services/doctor.service";
import { Avatar, Stars, PrimaryButton } from "./ui";

interface Props {
  doctor: Doctor;
  onBack: () => void;
  onBook: (slot: Slot) => void;
}

export function ProfileScreen({ doctor, onBack, onBook }: Props) {
  const days = useMemo(() => getNextDays(5), []);
  const [selectedDay, setSelectedDay] = useState(days[0].key);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  return (
    <div className="pb-28">
      <header className="px-5 pt-6 pb-6 bg-petrol">
        <button onClick={onBack} className="text-white/80 text-sm mb-4">← Voltar</button>
        <div className="flex gap-4 items-center">
          <Avatar name={doctor.name} size={72} />
          <div>
            <h1 className="text-white text-xl font-bold">{doctor.name}</h1>
            <p className="text-white/70 text-sm">{doctor.specialty} · {doctor.crm}</p>
            <div className="mt-1"><Stars rating={doctor.rating} /></div>
          </div>
        </div>
      </header>

      <section className="px-5 py-5 space-y-4">
        <p className="text-sm leading-relaxed text-gray-700">{doctor.bio}</p>
        <div className="text-sm text-gray-600">📍 {doctor.address} — {doctor.city}</div>

        <div>
          <h2 className="font-bold text-sm mb-3 text-ink">Escolha a data</h2>
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {days.map((d) => (
              <button
                key={d.key}
                onClick={() => { setSelectedDay(d.key); setSelectedTime(null); }}
                className={`flex flex-col items-center px-4 py-2 rounded-xl border min-w-[64px] ${
                  selectedDay === d.key ? "bg-brand border-brand text-white" : "border-line bg-white text-ink"
                }`}
              >
                <span className="text-xs opacity-70">{d.weekday}</span>
                <span className="font-bold">{d.day}</span>
                <span className="text-xs opacity-70">{d.month}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-bold text-sm mb-3 text-ink">Horários disponíveis</h2>
          <div className="grid grid-cols-3 gap-2">
            {SLOT_TIMES.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTime(t)}
                className={`py-2.5 rounded-xl border text-sm font-medium ${
                  selectedTime === t ? "bg-amber border-amber text-white" : "border-line bg-white text-ink"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      <footer className="fixed bottom-0 left-0 right-0 mx-auto max-w-md px-5 py-4 bg-white border-t border-line flex items-center gap-4">
        <div>
          <p className="text-xs text-gray-500">Consulta</p>
          <p className="font-bold text-ink">{formatBRL(doctor.price)}</p>
        </div>
        <div className="flex-1">
          <PrimaryButton
            disabled={!selectedTime}
            onClick={() => selectedTime && onBook({ day: selectedDay, time: selectedTime })}
          >
            {selectedTime ? `Agendar ${selectedTime}` : "Escolha um horário"}
          </PrimaryButton>
        </div>
      </footer>
    </div>
  );
}
