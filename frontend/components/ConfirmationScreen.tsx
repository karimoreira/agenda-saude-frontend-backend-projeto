"use client";
import { Doctor, Patient, Slot } from "@/types";

interface Props {
  doctor: Doctor;
  slot: Slot;
  patient: Patient;
  onRestart: () => void;
}

export function ConfirmationScreen({ doctor, slot, patient, onRestart }: Props) {
  const dateLabel = new Date(`${slot.day}T12:00:00`).toLocaleDateString("pt-BR", {
    weekday: "long", day: "numeric", month: "long",
  });

  return (
    <div className="px-5 pt-16 pb-10 text-center">
      <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-4xl bg-[#E2F2EF]">✓</div>
      <h1 className="text-2xl font-bold mt-5 text-ink">Consulta agendada!</h1>
      <p className="text-sm text-gray-600 mt-2">
        {patient.name.split(" ")[0]}, enviamos a confirmação por WhatsApp.
      </p>
      <div className="mt-6 rounded-2xl p-5 text-left border border-line bg-mist">
        <p className="font-semibold text-ink">{doctor.name}</p>
        <p className="text-sm text-gray-600">{doctor.specialty} · {doctor.crm}</p>
        <p className="text-sm mt-2 capitalize text-petrol">🗓 {dateLabel} às {slot.time}</p>
        <p className="text-sm text-gray-600 mt-1">📍 {doctor.address}</p>
      </div>
      <button onClick={onRestart} className="mt-8 text-sm font-semibold text-brand">
        Agendar outra consulta
      </button>
    </div>
  );
}
