function validarStock(stockDisponible, cantidadSolicitada) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof stockDisponible !== "number" || typeof cantidadSolicitada !== "number") {
        return reject("Datos inválidos");
      }

      if (cantidadSolicitada <= 0) {
        return reject("Cantidad solicitada inválida");
      }

      if (cantidadSolicitada > stockDisponible) {
        return reject("Stock insuficiente");
      }

      resolve("Compra aprobada");
    }, 1000);
  });
}

validarStock(10, 5)
  .then(respuesta => console.log(respuesta))
  .catch(error => console.error("Error:", error));