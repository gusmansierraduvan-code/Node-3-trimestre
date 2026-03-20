const reservas = [
  { cliente: "Ana", noches: 6, precioNoche: 100000 },
  { cliente: "Luis", noches: 2, precioNoche: 120000 }
];

function procesarReservas(reservas) {
  return new Promise((resolve) => {
    let reservasProcesadas = [];
    let ingresosTotales = 0;

    reservas.forEach(r => {
      if (r.noches <= 0) return;

      let subtotal = r.noches * r.precioNoche;
      let impuesto = subtotal * 0.1;
      let descuento = r.noches > 5 ? subtotal * 0.15 : 0;
      let total = subtotal + impuesto - descuento;

      reservasProcesadas.push({ ...r, subtotal, impuesto, descuento, total });
      ingresosTotales += total;
    });

    resolve({ reservasProcesadas, ingresosTotales });
  });
}