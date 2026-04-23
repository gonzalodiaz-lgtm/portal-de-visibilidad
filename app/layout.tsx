import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import "@/src/styles/global.css";

export const metadata: Metadata = {
  title: "Portal PMO Polpaico",
  description: "Portal de visibilidad de innovación y desarrollo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-slate-50">
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
