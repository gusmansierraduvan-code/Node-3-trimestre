function validarEdad(edad) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (edad < 0) {
        return reject("Edad inválida");
      }

      if (edad >= 18) {
        resolve("Acceso permitido");
      } else {
        reject("Debes ser mayor de edad");
      }
    }, 1000);
  });
}

validarEdad(17)
  .then(resultado => console.log(resultado))
  .catch(error => console.error("Error:", error));