const notas = [4.5, 3.8, 5.0, 2.9, 4.2];

function calcularPromedio(listaNotas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!Array.isArray(listaNotas) || listaNotas.length === 0) {
        return reject("Lista de notas inválida");
      }

      const suma = listaNotas.reduce((acum, nota) => {
        if (typeof nota !== "number") {
          throw new Error("Todas las notas deben ser numéricas");
        }
        return acum + nota;
      }, 0);

      const promedio = suma / listaNotas.length;
      resolve(promedio);
    }, 1000);
  });
}

calcularPromedio(notas)
  .then(resultado => console.log("Promedio:", resultado))
  .catch(error => console.error("Error:", error.message || error));