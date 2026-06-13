"use client";
import Image from "next/image";
import { Doctor } from "@/types";
import { Button, CameraIcon, StarIcon } from "./ui";

interface Props {
  doctor: Doctor;
  onSelect: (doctor: Doctor) => void;
}

export function DoctorCard({ doctor, onSelect }: Props) {
  const initials = doctor.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <article className="flex flex-col sm:flex-row gap-6 p-6 bg-white rounded-lg shadow-lg">
      {doctor.image ? (
        <Image
          src={doctor.image}
          alt={`Foto de ${doctor.name}`}
          width={100}
          height={100}
          className="rounded-full w-24 h-24 object-cover mx-auto sm:mx-0"
        />
      ) : (
        <div className="w-24 h-24 bg-petrol text-white text-3xl font-bold flex items-center justify-center rounded-full mx-auto sm:mx-0 flex-shrink-0">
          {initials}
        </div>
      )}

      <div className="flex-grow text-center sm:text-left">
        <h3 className="text-xl font-bold text-ink">{doctor.name}</h3>
        <p className="text-ink/80 mt-1">
          {doctor.specialty} · {doctor.location}
        </p>

        {doctor.availability === "online" && (
          <div className="mt-2 inline-flex items-center gap-2 bg-teal-50 text-brand font-semibold px-3 py-1 rounded-full text-sm">
            <CameraIcon className="w-4 h-4" />
            <span>Online</span>
          </div>
        )}

        <div className="flex items-center justify-center sm:justify-start gap-1 mt-3">
          <StarIcon className="w-5 h-5 text-amber" />
          <span className="font-bold text-ink">{doctor.rating.toFixed(1)}</span>
          <span className="text-ink/60">({doctor.reviews} avaliações)</span>
        </div>
      </div>

      <div className="flex flex-col items-center sm:items-end justify-between gap-4 pt-4 sm:pt-0 border-t sm:border-t-0 sm:border-l border-line/50 sm:pl-6">
        <div>
          <p className="text-sm text-ink/80">Valor da consulta</p>
          <p className="text-2xl font-bold text-ink">
            R$ {doctor.price.toFixed(2).replace(".", ",")}
          </p>
        </div>
        <Button onClick={() => onSelect(doctor)} className="w-full sm:w-auto">
          Ver perfil
        </Button>
      </div>
    </article>
  );
}
