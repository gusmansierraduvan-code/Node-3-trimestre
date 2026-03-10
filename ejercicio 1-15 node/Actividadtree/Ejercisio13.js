const validarDatos = estudiante => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!estudiante.nombre || !estudiante.edad || !estudiante.curso) {
        return reject("Datos incompletos");
      }

      if (estudiante.edad < 5) {
        return reject("Edad no válida");
      }

      resolve("Datos validados");
    }, 800);
  });
};

const guardarEstudiante = estudiante => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ ...estudiante, id: Date.now() });
    }, 800);
  });
};

const mostrarConfirmacion = estudiante => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Estudiante ${estudiante.nombre} registrado con ID ${estudiante.id}`);
    }, 800);
  });
};

const nuevoEstudiante = {
  nombre: "Carlos",
  edad: 18,
  curso: "Programación"
};

validarDatos(nuevoEstudiante)
  .then(() => guardarEstudiante(nuevoEstudiante))
  .then(estudianteGuardado => mostrarConfirmacion(estudianteGuardado))
  .then(mensaje => console.log(mensaje))
  .catch(error => console.error("Error en el registro:", error));