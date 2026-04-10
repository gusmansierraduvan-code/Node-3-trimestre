const mongoose = require('mongoose');

const juegoSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    plataforma: String,
    precio: Number,
    anio: Number,
    disponible: { type: Boolean, default: true }
});

module.exports = mongoose.model('Juego', juegoSchema);