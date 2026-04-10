const mongoose = require('mongoose');

const conectarDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/tienda_juegos');
        console.log('¡Conexión exitosa a MongoDB!');
    } catch (error) {
        console.error('Error al conectar:', error.message);
        process.exit(1);
    }
};

module.exports = conectarDB;