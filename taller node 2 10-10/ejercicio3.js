const estudiantes = [
  { nombre: "Ana", notas: [4.0, 3.5, 5.0] },
  { nombre: "Luis", notas: [] }
];

function procesarNotas(estudiantes) {
  return new Promise((resolve, reject) => {
    let listaProcesada = [];
    let totalAprobados = 0;
    let totalReprobados = 0;

    estudiantes.forEach(e => {
      if (!e.notas.length) return;

      let promedio = e.notas.reduce((a, b) => a + b) / e.notas.length;
      let aprobado = promedio >= 3;

      if (aprobado) totalAprobados++;
      else totalReprobados++;

      listaProcesada.push({ ...e, promedio, aprobado });
    });

    resolve({ listaProcesada, totalAprobados, totalReprobados });
  });
}