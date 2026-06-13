import { Doctor, Patient, Slot } from "@/types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

export const api = {
  async getDoctors(): Promise<Doctor[]> {
    const res = await fetch(`${BASE_URL}/doctors`, { cache: "no-store" });
    if (!res.ok) throw new Error("Falha ao buscar médicos");
    return res.json();
  },

  async createAppointment(payload: { doctorId: number; slot: Slot; patient: Patient }) {
    const res = await fetch(`${BASE_URL}/appointments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error("Falha ao criar agendamento");
    return res.json();
  },
};
