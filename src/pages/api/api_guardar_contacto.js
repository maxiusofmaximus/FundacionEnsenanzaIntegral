require('dotenv').config();
const axios = require('axios');
const Joi = require('joi');

// Configuración de Supabase
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
    throw new Error('Las variables de entorno SUPABASE_URL y SUPABASE_KEY son obligatorias');
}

const schema = Joi.object({
    nombre: Joi.string().required(),
    correo: Joi.string().email().required(),
    telefono: Joi.string().required(),
    mensaje: Joi.string().required()
});

export default async (req, res) => {
    if (req.method === 'POST') {
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({ mensaje: error.details[0].message });
        }

        const { nombre, correo, telefono, mensaje } = req.body;
        const data = { nombre, correo, telefono, mensaje };

        try {
            const response = await axios.post(`${SUPABASE_URL}/rest/v1/contactos`, data, {
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
            console.error('Error al guardar los datos:', error.message);
            res.status(500).json({ mensaje: 'Error al guardar los datos', detalle: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ mensaje: `Método ${req.method} no permitido` });
    }
};
