"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { data: session } = useSession();
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? "border-b-2 border-blue-600" : "";
  };

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo / Título */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">PMO</span>
            </div>
            <span className="font-semibold text-slate-900">Portal PMO</span>
          </div>

          {/* Navegación */}
          <div className="flex items-center gap-8">
            <Link
              href="/resumen"
              className={`text-sm font-medium text-slate-700 hover:text-slate-900 pb-3 ${isActive(
                "/resumen"
              )}`}
            >
              Resumen general
            </Link>
            <Link
              href="/proyectos"
              className={`text-sm font-medium text-slate-700 hover:text-slate-900 pb-3 ${isActive(
                "/proyectos"
              )}`}
            >
              Ficha de Proyecto
            </Link>
          </div>

          {/* Usuario */}
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end">
              <p className="text-sm font-medium text-slate-900">
                {session?.user?.name}
              </p>
              <p className="text-xs text-slate-500">{session?.user?.email}</p>
            </div>
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="text-sm text-slate-600 hover:text-slate-900 underline"
            >
              Salir
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
