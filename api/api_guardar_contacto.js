const express = require('express');
const axios = require('axios');
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Configuración de Supabase
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

app.post('/api_guardar_contacto', async (req, res) => {
    const { nombre, correo, telefono, mensaje } = req.body;

    try {
        const response = await axios.post(`${SUPABASE_URL}/rest/v1/contactos`, {
            nombre,
            correo,
            telefono,
            mensaje
        }, {
            headers: {
                'Content-Type': 'application/json',
                'apikey': SUPABASE_KEY,
                'Authorization': `Bearer ${SUPABASE_KEY}`
            }
        });

        if (response.status === 201) {
            res.status(201).json({ mensaje: 'Mensaje enviado correctamente' });
        } else {
            res.status(response.status).json({ mensaje: 'Error al guardar los datos', detalle: response.data });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al guardar los datos', detalle: error.message });
    }
});

// Exportar la app para Vercel
module.exports = app;