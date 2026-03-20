const proyectos = [
  { nombre: "Proyecto A", presupuesto: 10000000, gastos: [2000000, 3000000] },
  { nombre: "Proyecto B", presupuesto: 5000000, gastos: [4000000, 2000000] }
];

function procesarProyectos(proyectos) {
  return new Promise((resolve) => {
    let proyectosEnRiesgo = [];
    let totalPorcentaje = 0;

    proyectos.forEach(p => {
      let gastoTotal = p.gastos.reduce((a,b)=>a+b,0);
      let porcentaje = (gastoTotal / p.presupuesto) * 100;

      if (gastoTotal > p.presupuesto) {
        proyectosEnRiesgo.push({ ...p, gastoTotal, porcentaje });
      }

      totalPorcentaje += porcentaje;
    });

    let porcentajeEjecucionGeneral = totalPorcentaje / proyectos.length;

    resolve({ proyectosEnRiesgo, porcentajeEjecucionGeneral });
  });
}