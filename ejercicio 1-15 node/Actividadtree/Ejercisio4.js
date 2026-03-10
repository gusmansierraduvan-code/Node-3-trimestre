function validarUsuario(usuario, contraseña) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const usuarioCorrecto = "admin";
      const contraseñaCorrecta = "1234";

      if (usuario === usuarioCorrecto) {
        if (contraseña === contraseñaCorrecta) {
          resolve("Acceso concedido");
        } else {
          reject("Contraseña incorrecta");
        }
      } else {
        reject("Usuario no encontrado");
      }
    }, 1000);
  });
}

validarUsuario("admin", "1234")
  .then(respuesta => console.log(respuesta))
  .catch(error => console.error("Error:", error));