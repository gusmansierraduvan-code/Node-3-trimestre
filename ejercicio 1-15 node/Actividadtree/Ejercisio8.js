const usuarios = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Luis" }
];

function buscarPorId(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof id !== "number") {
        return reject("El ID debe ser numérico");
      }

      const usuario = usuarios.find(u => u.id === id);

      if (!usuario) {
        return reject("Usuario no encontrado");
      }

      resolve(usuario);
    }, 1000);
  });
}

buscarPorId(1)
  .then(resultado => console.log("Encontrado:", resultado))
  .catch(error => console.error("Error:", error));