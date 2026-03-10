const validarIngresos = ingresos => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      ingresos >= 2000000
        ? resolve("Ingresos verificados")
        : reject("Ingresos insuficientes");
    }, 800);
  });
};

const validarHistorial = puntaje => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      puntaje >= 650
        ? resolve("Historial aprobado")
        : reject("Historial crediticio negativo");
    }, 800);
  });
};

const decidirPrestamo = (monto) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Préstamo aprobado por ${monto}`);
    }, 800);
  });
};

validarIngresos(2500000)
  .then(() => validarHistorial(700))
  .then(() => decidirPrestamo(10000000))
  .then(mensaje => console.log(mensaje))
  .catch(error => console.error("Préstamo rechazado:", error));