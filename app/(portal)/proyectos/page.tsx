export const metadata = {
    title: "Ficha de Proyecto — Portal PMO Polpaico",
    description: "Detalle de proyecto de innovación",
  };
  
  export default function ProyectosPage() {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Ficha de Proyecto</h1>
          <p className="text-slate-600 mt-2">
            Detalle y seguimiento de proyectos individuales
          </p>
        </div>
  
        {/* Placeholder */}
        <div className="bg-white rounded-lg border border-slate-200 p-12 text-center">
          <div className="inline-block p-4 bg-slate-100 rounded-lg mb-4">
            <span className="text-2xl">📋</span>
          </div>
          <h2 className="text-lg font-semibold text-slate-900 mb-2">
            Sin proyecto seleccionado
          </h2>
          <p className="text-slate-600">
            Selecciona un proyecto de la tabla del resumen general para ver sus detalles.
          </p>
        </div>
  
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-700">
            Esta página mostrará el detalle completo del proyecto una vez que implementemos la navegación desde el resumen.
          </p>
        </div>
      </div>
    );
  }
  