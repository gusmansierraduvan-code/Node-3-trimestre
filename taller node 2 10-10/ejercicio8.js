const usuarios = [
  { nombre: "Ana", consumo: 120, tarifa: 500 },
  { nombre: "Luis", consumo: 200, tarifa: 500 }
];

function procesarEnergia(usuarios) {
  return new Promise((resolve) => {
    let listaFacturas = [];
    let totalRecaudado = 0;

    usuarios.forEach(u => {
      let costo = u.consumo * u.tarifa;
      let subsidio = u.consumo < 150 ? costo * 0.1 : 0;
      let total = costo - subsidio;

      listaFacturas.push({ ...u, costo, subsidio, total });
      totalRecaudado += total;
    });

    resolve({ listaFacturas, totalRecaudado });
  });
}