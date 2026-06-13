"use client";
import { useState } from "react";
import { Doctor, Patient, Slot } from "@/types";
import { formatBRL } from "@/services/doctor.service";
import { PrimaryButton } from "./ui";

interface Props {
  doctor: Doctor;
  slot: Slot;
  onBack: () => void;
  onConfirm: (patient: Patient) => void;
}

export function BookingScreen({ doctor, slot, onBack, onConfirm }: Props) {
  const [patient, setPatient] = useState<Patient>({ name: "", phone: "", reason: "" });
  const isValid = patient.name.trim().length >= 3 && patient.phone.trim().length >= 8;

  const set = (field: keyof Patient) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setPatient({ ...patient, [field]: e.target.value });

  const dateLabel = new Date(`${slot.day}T12:00:00`).toLocaleDateString("pt-BR", {
    weekday: "long", day: "numeric", month: "long",
  });

  return (
    <div className="px-5 pt-6 pb-10">
      <button onClick={onBack} className="text-sm mb-4 text-brand">← Voltar</button>
      <h1 className="text-xl font-bold text-ink">Confirmar agendamento</h1>

      <div className="mt-4 rounded-2xl p-4 border border-line bg-mist">
        <p className="font-semibold text-sm text-ink">{doctor.name}</p>
        <p className="text-sm text-gray-600">{doctor.specialty}</p>
        <p className="text-sm mt-1 capitalize text-petrol">🗓 {dateLabel} às {slot.time}</p>
        <p className="text-sm font-bold mt-1 text-brand">{formatBRL(doctor.price)}</p>
      </div>

      <div className="mt-6 space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-ink">Nome completo</span>
          <input
            value={patient.name}
            onChange={set("name")}
            placeholder="Seu nome"
            className="mt-1 w-full rounded-xl border border-line py-3 px-4 text-sm outline-none"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-ink">Telefone (WhatsApp)</span>
          <input
            value={patient.phone}
            onChange={set("phone")}
            placeholder="(11) 99999-9999"
            inputMode="tel"
            className="mt-1 w-full rounded-xl border border-line py-3 px-4 text-sm outline-none"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-ink">Motivo da consulta (opcional)</span>
          <textarea
            value={patient.reason}
            onChange={set("reason")}
            rows={3}
            placeholder="Descreva brevemente"
            className="mt-1 w-full rounded-xl border border-line py-3 px-4 text-sm outline-none resize-none"
          />
        </label>
        <PrimaryButton disabled={!isValid} onClick={() => onConfirm(patient)}>
          Confirmar agendamento
        </PrimaryButton>
      </div>
    </div>
  );
}
