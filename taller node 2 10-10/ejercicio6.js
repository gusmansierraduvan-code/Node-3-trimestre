const prestamos = [
  { cliente: "Ana", monto: 10000000, tasa: 0.02, plazo: 12 },
  { cliente: "Luis", monto: 0, tasa: 0.03, plazo: 24 }
];

function procesarPrestamos(prestamos) {
  return new Promise((resolve) => {
    let prestamosOK = [];
    let prestamosError = [];
    let totalPrestado = 0;

    prestamos.forEach(p => {
      if (p.monto <= 0) {
        prestamosError.push(p);
        return;
      }

      let interes = p.monto * p.tasa * p.plazo;
      let total = p.monto + interes;
      let cuota = total / p.plazo;

      prestamosOK.push({ ...p, interes, cuota });
      totalPrestado += p.monto;
    });

    resolve({ prestamosOK, prestamosError, totalPrestado });
  });
}