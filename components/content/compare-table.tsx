const ROWS = [
  {
    criterio: "Cuándo alcanza",
    planilla: "Pocos datos, un solo responsable, sin integraciones",
    saas: "Proceso estándar del rubro; el producto ya lo cubre",
    medida: "Reglas propias, varios actores o integraciones que el enlatado no une",
  },
  {
    criterio: "Costo inicial",
    planilla: "Bajo (licencia Office)",
    saas: "Cuota mensual predecible",
    medida: "Inversión en diseño y desarrollo; después operación y evolución",
  },
  {
    criterio: "Riesgo operativo",
    planilla: "Errores manuales, versiones duplicadas, poca trazabilidad",
    saas: "Dependencia del proveedor y límites del producto",
    medida: "Código y datos bajo tu control; requiere equipo que mantenga",
  },
  {
    criterio: "Integraciones",
    planilla: "Copiar/pegar o exportar CSV",
    saas: "Las que el SaaS ya trae",
    medida: "Mercado Pago, portales, WhatsApp, ERP: según tu operación real",
  },
  {
    criterio: "Evolución",
    planilla: "Nuevas columnas y macros",
    saas: "Pedir feature al vendor o cambiar de herramienta",
    medida: "Iterás el sistema con tu negocio",
  },
] as const

export function CompareTable() {
  return (
    <div className="overflow-x-auto rounded-xl border-[0.5px] border-foreground/20">
      <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
        <caption className="sr-only">
          Comparación entre planilla Excel, software SaaS y sistema a medida
        </caption>
        <thead>
          <tr className="border-b-[0.5px] border-foreground/15 bg-foreground/[0.03]">
            <th scope="col" className="px-4 py-3 font-medium">Criterio</th>
            <th scope="col" className="px-4 py-3 font-medium">Planilla</th>
            <th scope="col" className="px-4 py-3 font-medium">SaaS / enlatado</th>
            <th scope="col" className="px-4 py-3 bg-lime/30 font-medium text-lime-foreground">
              A medida (Misionary)
            </th>
          </tr>
        </thead>
        <tbody className="divide-y-[0.5px] divide-foreground/15">
          {ROWS.map((row) => (
            <tr key={row.criterio}>
              <th scope="row" className="px-4 py-3 font-medium">{row.criterio}</th>
              <td className="px-4 py-3 text-muted-foreground">{row.planilla}</td>
              <td className="px-4 py-3 text-muted-foreground">{row.saas}</td>
              <td className="px-4 py-3 bg-lime/10 text-muted-foreground">{row.medida}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
