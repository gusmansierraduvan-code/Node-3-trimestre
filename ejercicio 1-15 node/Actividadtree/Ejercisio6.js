const productos = [
  { id: 1, nombre: "Laptop", precio: 2500 },
  { id: 2, nombre: "Mouse", precio: 80 },
  { id: 3, nombre: "Teclado", precio: 150 },
  { id: 4, nombre: "Monitor", precio: 900 }
];

function filtrarPorPrecio(precioMinimo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof precioMinimo !== "number" || precioMinimo < 0) {
        return reject("Precio inválido");
      }

      const resultado = productos.filter(p => p.precio > precioMinimo);

      if (resultado.length === 0) {
        return reject("No hay productos que superen ese precio");
      }

      resolve(resultado);
    }, 1000);
  });
}

filtrarPorPrecio(500)
  .then(lista => console.log("Productos encontrados:", lista))
  .catch(error => console.error("Error:", error));