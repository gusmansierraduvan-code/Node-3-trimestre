const empleados = [
  { id: 1, nombre: "Ana", salarioBase: 2000000, horasExtra: 10 },
  { id: 2, nombre: "Luis", salarioBase: 1800000, horasExtra: 5 },
  { id: 3, nombre: "Carlos", salarioBase: 0, horasExtra: 8 }
];

function procesarNomina(empleados) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(empleados)) return reject("Datos inválidos");

    let empleadosProcesados = [];
    let empleadosError = [];
    let totalNomina = 0;

    empleados.forEach(emp => {
      if (emp.salarioBase <= 0) {
        empleadosError.push(emp);
        return;
      }

      let valorHora = emp.salarioBase / 240;
      let pagoHE = valorHora * 1.5 * emp.horasExtra;
      let bruto = emp.salarioBase + pagoHE;
      let salud = bruto * 0.04;
      let neto = bruto - salud;

      empleadosProcesados.push({ ...emp, valorHora, pagoHE, bruto, salud, neto });
      totalNomina += neto;
    });

    resolve({ empleadosProcesados, empleadosError, totalNomina });
  });
}