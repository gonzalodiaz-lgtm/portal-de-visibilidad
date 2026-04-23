"use client";

export default function ResumenView() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Resumen general</h1>
        <p className="text-slate-600 mt-2">
          Vista global del portafolio de innovación y desarrollo
        </p>
      </div>

      {/* Placeholder para KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="bg-white rounded-lg border border-slate-200 p-6 animate-pulse"
          >
            <div className="h-3 bg-slate-200 rounded w-20 mb-3"></div>
            <div className="h-8 bg-slate-200 rounded w-24"></div>
          </div>
        ))}
      </div>

      {/* Placeholder para gráficos */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-white rounded-lg border border-slate-200 p-6 min-h-80 animate-pulse"
          >
            <div className="h-4 bg-slate-200 rounded w-40 mb-4"></div>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((j) => (
                <div key={j} className="h-3 bg-slate-100 rounded"></div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Placeholder para tabla */}
      <div className="bg-white rounded-lg border border-slate-200 p-6">
        <div className="h-4 bg-slate-200 rounded w-40 mb-6"></div>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="h-10 bg-slate-100 rounded animate-pulse"
            ></div>
          ))}
        </div>
      </div>

      {/* Mensaje de status */}
      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-700">
          Los datos se cargarán aquí una vez que conectemos con la API de Jira.
        </p>
      </div>
    </div>
  );
}
