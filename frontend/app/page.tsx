"use client";
import { useState } from "react";
import { Doctor, Patient, Slot } from "@/types";
import { SearchScreen } from "@/components/SearchScreen";
import { ProfileScreen } from "@/components/ProfileScreen";
import { BookingScreen } from "@/components/BookingScreen";
import { ConfirmationScreen } from "@/components/ConfirmationScreen";

type Route =
  | { screen: "search" }
  | { screen: "profile"; doctor: Doctor }
  | { screen: "booking"; doctor: Doctor; slot: Slot }
  | { screen: "confirmed"; doctor: Doctor; slot: Slot; patient: Patient };

export default function Home() {
  const [route, setRoute] = useState<Route>({ screen: "search" });

  return (
    <main className="bg-mist">
      <div className="max-w-6xl mx-auto p-4 lg:p-8">
        {route.screen === "search" && (
          <SearchScreen onSelect={(doctor) => setRoute({ screen: "profile", doctor })} />
        )}
        {route.screen === "profile" && (
          <ProfileScreen
            doctor={route.doctor}
            onBack={() => setRoute({ screen: "search" })}
            onBook={(slot) => setRoute({ screen: "booking", doctor: route.doctor, slot })}
          />
        )}
        {route.screen === "booking" && (
          <BookingScreen
            doctor={route.doctor}
            slot={route.slot}
            onBack={() => setRoute({ screen: "profile", doctor: route.doctor })}
            onConfirm={(patient) => setRoute({ ...route, screen: "confirmed", patient })}
          />
        )}
        {route.screen === "confirmed" && (
          <ConfirmationScreen
            doctor={route.doctor}
            slot={route.slot}
            patient={route.patient}
            onRestart={() => setRoute({ screen: "search" })}
          />
        )}
      </div>
    </main>
  );
}
