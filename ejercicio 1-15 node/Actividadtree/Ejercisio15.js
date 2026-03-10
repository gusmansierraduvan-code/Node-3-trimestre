const autenticar = (usuario, clave) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usuario === "empresa" && clave === "2024") {
        resolve({ token: "ABC123XYZ" });
      } else {
        reject("Error de autenticación");
      }
    }, 800);
  });
};

const obtenerDatos = token => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!token) {
        return reject("Token inválido");
      }

      resolve([
        { id: 1, valor: 100 },
        { id: 2, valor: 200 },
        { id: 3, valor: 300 }
      ]);
    }, 800);
  });
};

const procesarDatos = datos => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!Array.isArray(datos) || datos.length === 0) {
        return reject("No hay datos para procesar");
      }

      const total = datos.reduce((acc, item) => acc + item.valor, 0);
      resolve({ total, cantidad: datos.length });
    }, 800);
  });
};

const devolverRespuesta = resultado => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        status: 200,
        mensaje: "Proceso completado correctamente",
        data: resultado
      });
    }, 800);
  });
};

autenticar("empresa", "2024")
  .then(auth => obtenerDatos(auth.token))
  .then(datos => procesarDatos(datos))
  .then(resultado => devolverRespuesta(resultado))
  .then(respuestaFinal => console.log("Respuesta final:", respuestaFinal))
  .catch(error => console.error("Error en el flujo empresarial:", error));