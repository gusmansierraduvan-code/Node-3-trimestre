const facturas = [
  { id: 1, productos: [{ precio: 20000, cantidad: 2 }, { precio: 10000, cantidad: 1 }] },
  { id: 2, productos: [] }
];

function procesarFacturas(facturas) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(facturas)) return reject("Datos inválidos");

    let facturasOK = [];
    let facturasError = [];
    let totalFacturado = 0;

    facturas.forEach(f => {
      if (!f.productos.length) {
        facturasError.push(f);
        return;
      }

      let subtotal = f.productos.reduce((acc, p) => acc + (p.precio * p.cantidad), 0);
      let iva = subtotal * 0.19;
      let total = subtotal + iva;

      facturasOK.push({ ...f, subtotal, iva, total });
      totalFacturado += total;
    });

    resolve({ facturasOK, facturasError, totalFacturado });
  });
}