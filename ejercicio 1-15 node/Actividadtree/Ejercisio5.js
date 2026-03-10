const login = (usuario, contraseña) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      usuario === "admin" && contraseña === "1234"
        ? resolve()
        : reject("Error en las credenciales");
    }, 1000);
  });
};

login("admin", "1234")
  .then(() => console.log("Bienvenido"))
  .catch(error => console.error(error));