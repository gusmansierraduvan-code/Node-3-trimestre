function generarFactura(productos) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!Array.isArray(productos) || productos.length === 0) {
        return reject("Lista de productos inválida");
      }

      const iva = 0.19;

      const subtotal = productos.reduce((acum, item) => {
        if (typeof item.precio !== "number" || item.precio < 0) {
          throw new Error("Precio inválido en un producto");
        }
        return acum + item.precio;
      }, 0);

      const totalIVA = subtotal * iva;
      const total = subtotal + totalIVA;

      resolve({
        subtotal,
        iva: totalIVA,
        total
      });
    }, 1000);
  });
}

const listaProductos = [
  { nombre: "Camisa", precio: 80000 },
  { nombre: "Pantalón", precio: 120000 },
  { nombre: "Zapatos", precio: 150000 }
];

generarFactura(listaProductos)
  .then(factura => console.log("Factura:", factura))
  .catch(error => console.error("Error:", error.message || error));