const validarUsuario = (usuario, clave) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      usuario === "admin" && clave === "1234"
        ? resolve("Usuario validado")
        : reject("Credenciales incorrectas");
    }, 800);
  });
};

const validarStock = (stock, cantidad) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cantidad > stock
        ? reject("Stock insuficiente")
        : resolve("Stock confirmado");
    }, 800);
  });
};

const calcularTotal = (precio, cantidad) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (precio <= 0 || cantidad <= 0) {
        return reject("Datos inválidos para el cálculo");
      }

      const subtotal = precio * cantidad;
      const iva = subtotal * 0.19;
      const total = subtotal + iva;

      resolve({ subtotal, iva, total });
    }, 800);
  });
};

const confirmarCompra = total => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Compra confirmada. Total pagado: ${total}`);
    }, 800);
  });
};

validarUsuario("admin", "1234")
  .then(() => validarStock(5, 2))
  .then(() => calcularTotal(100000, 2))
  .then(datos => confirmarCompra(datos.total))
  .then(mensaje => console.log(mensaje))
  .catch(error => console.error("Error en la compra:", error));