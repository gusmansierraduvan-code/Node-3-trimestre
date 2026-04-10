const express = require('express');
const conectarDB = require('./config/db');
const Juego = require('./Juegos');

const app = express();
app.use(express.json()); 
conectarDB();


app.post('/api/juegos', async (req, res) => {
    try {
        const nuevoJuego = new Juego(req.body);
        const juegoGuardado = await nuevoJuego.save();
        res.status(201).json(juegoGuardado);
    } catch (error) {
        res.status(400).send(error.message);
    }
});


app.get('/api/juegos', async (req, res) => {
    const juegos = await Juego.find();
    res.json(juegos);
});


app.put('/api/juegos/:id', async (req, res) => {
    const actualizado = await Juego.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(actualizado);
});


app.delete('/api/juegos/:id', async (req, res) => {
    await Juego.findByIdAndDelete(req.params.id);
    res.send('Juego eliminado');
});

app.listen(3000, () => console.log('Servidor en puerto 3000'));