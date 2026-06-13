import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgendaSaúde — Agende sua consulta",
  description: "Encontre médicos e agende consultas em segundos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-mist min-h-screen">{children}</body>
    </html>
  );
}
