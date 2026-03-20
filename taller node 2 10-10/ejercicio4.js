const carritos = [
  { cliente: "Ana", ciudad: "Medellín", productos: [{ precio: 50000, cantidad: 2 }] },
  { cliente: "Luis", ciudad: "Bogotá", productos: [] }
];

function procesarCarritos(carritos) {
  return new Promise((resolve, reject) => {
    let ventasOK = [];
    let ventasError = [];
    let totalVentas = 0;

    carritos.forEach(c => {
      if (!c.productos.length) {
        ventasError.push(c);
        return;
      }

      let subtotal = c.productos.reduce((a, p) => a + p.precio * p.cantidad, 0);
      let envio = c.ciudad === "Medellín" ? 10000 : 20000;
      let descuento = subtotal > 100000 ? subtotal * 0.05 : 0;
      let total = subtotal + envio - descuento;

      ventasOK.push({ ...c, subtotal, envio, descuento, total });
      totalVentas += total;
    });

    resolve({ ventasOK, ventasError, totalVentas });
  });
}