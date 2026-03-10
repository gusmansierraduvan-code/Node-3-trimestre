function operar(a, b, tipo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let resultado;

      if (tipo === "suma") {
        resultado = a + b;
      } else if (tipo === "resta") {
        resultado = a - b;
      } else if (tipo === "multiplicacion") {
        resultado = a * b;
      } else if (tipo === "division") {
        if (b === 0) {
          return reject("No es posible dividir por cero");
        }
        resultado = a / b;
      } else {
        return reject("Tipo de operación inválido");
      }

      resolve(resultado);
    }, 1000);
  });
}

operar(8, 2, "suma")
  .then(r => console.log("Resultado:", r))
  .catch(e => console.error("Error:", e));