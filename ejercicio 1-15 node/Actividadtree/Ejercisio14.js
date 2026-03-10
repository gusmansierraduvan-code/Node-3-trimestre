const generarIdPedido = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      const id = "PED-" + Math.floor(Math.random() * 10000);
      resolve(id);
    }, 800);
  });
};

const calcularTotal = productos => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!Array.isArray(productos) || productos.length === 0) {
        return reject("Lista de productos inválida");
      }

      const total = productos.reduce((acc, item) => {
        if (typeof item.precio !== "number" || item.precio <= 0) {
          throw new Error("Precio inválido en un producto");
        }
        return acc + item.precio;
      }, 0);

      resolve(total);
    }, 800);
  });
};

const simularEnvio = idPedido => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Pedido ${idPedido} enviado correctamente`);
    }, 800);
  });
};

const productos = [
  { nombre: "Audífonos", precio: 120000 },
  { nombre: "Mouse", precio: 80000 }
];

let idGenerado;

generarIdPedido()
  .then(id => {
    idGenerado = id;
    return calcularTotal(productos);
  })
  .then(total => {
    console.log(`Pedido ${idGenerado} - Total: ${total}`);
    return simularEnvio(idGenerado);
  })
  .then(mensaje => console.log(mensaje))
  .catch(error => console.error("Error en el pedido:", error.message || error));