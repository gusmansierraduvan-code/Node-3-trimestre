const convertirMoneda = (valor, tasa) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isNaN(valor) || isNaN(tasa)) {
        return reject("Los datos deben ser numéricos");
      }

      if (valor <= 0 || tasa <= 0) {
        return reject("Los valores deben ser mayores que cero");
      }

      const total = Number(valor) * Number(tasa);
      resolve(total);
    }, 1000);
  });
};

convertirMoneda(250, 3900)
  .then(resultado => console.log("Resultado:", resultado))
  .catch(error => console.error("Error:", error));