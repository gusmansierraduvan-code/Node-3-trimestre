const ventas = [
  { vendedor: "Ana", monto: 500000 },
  { vendedor: "Luis", monto: 700000 },
  { vendedor: "Ana", monto: 300000 }
];

function procesarVentas(ventas) {
  return new Promise((resolve) => {
    let resumen = {};

    ventas.forEach(v => {
      let comision = v.monto * 0.05;

      if (!resumen[v.vendedor]) resumen[v.vendedor] = 0;
      resumen[v.vendedor] += v.monto;
    });

    let vendedorTop = Object.entries(resumen).sort((a,b)=>b[1]-a[1])[0][0];

    resolve({ resumen, vendedorTop });
  });
}