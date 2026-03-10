const pedidos = [
  { id: 1, cliente: "Ana", items: [{ sku: "A1", precio: 12000, cantidad: 2 }, { sku: "B1", precio: 8000, cantidad: 1 }], cupon: "DESC10" },
  { id: 2, cliente: "Luis", items: [{ sku: "A1", precio: 12000, cantidad: 1 }, { sku: "C1", precio: 20000, cantidad: 3 }], cupon: null },
  { id: 3, cliente: "Sofi", items: [{ sku: "D1", precio: 5000, cantidad: 0 }], cupon: "DESC20" },
  { id: 4, cliente: "Juan", items: [], cupon: "DESC10" },
];

const cupones = {
  DESC10: 0.10,
  DESC20: 0.20,
};

// Validar pedido
function validarPedido(pedido) {
  return new Promise((resolve, reject) => {
    if (!pedido.items || pedido.items.length === 0) {
      return reject("El pedido no tiene items");
    }

    for (let item of pedido.items) {
      if (item.cantidad <= 0) {
        return reject("Cantidad inválida");
      }
      if (item.precio <= 0) {
        return reject("Precio inválido");
      }
    }

    resolve(pedido);
  });
}

// Calcular subtotal
function calcularSubtotal(pedido) {
  return new Promise((resolve) => {
    const subtotal = pedido.items.reduce((acc, item) => {
      return acc + item.precio * item.cantidad;
    }, 0);

    pedido.subtotal = subtotal;
    resolve(pedido);
  });
}

// Aplicar descuento
function aplicarDescuento(pedido, cupones) {
  return new Promise((resolve) => {
    let descuento = 0;

    if (pedido.cupon && cupones[pedido.cupon]) {
      descuento = pedido.subtotal * cupones[pedido.cupon];
    }

    pedido.descuento = descuento;
    pedido.total = pedido.subtotal - descuento;

    resolve(pedido);
  });
}

const pedidosOK = [];
const pedidosError = [];
const resumenClientes = {};
let totalGeneral = 0;

const procesos = pedidos.map((pedido) => {
  return validarPedido(pedido)
    .then(calcularSubtotal)
    .then((p) => aplicarDescuento(p, cupones))
    .then((pedidoFinal) => {
      pedidosOK.push(pedidoFinal);

      // resumen por cliente
      if (!resumenClientes[pedidoFinal.cliente]) {
        resumenClientes[pedidoFinal.cliente] = 0;
      }

      resumenClientes[pedidoFinal.cliente] += pedidoFinal.total;

      totalGeneral += pedidoFinal.total;
    })
    .catch((error) => {
      pedidosError.push({
        id: pedido.id,
        cliente: pedido.cliente,
        error: error,
      });
    });
});

Promise.all(procesos).then(() => {
  const reporte = {
    pedidosOK,
    pedidosError,
    resumenClientes,
    totalGeneral,
  };

  console.log(reporte);
});