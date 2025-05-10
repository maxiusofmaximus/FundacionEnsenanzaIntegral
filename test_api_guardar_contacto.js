const axios = require('axios');

const testAPI = async () => {
    const url = 'http://localhost:3000/api/api_guardar_contacto'; // Update with the correct local URL

    // Test with valid data
    const validData = {
        nombre: 'John Doe',
        correo: 'john.doe@example.com',
        telefono: '1234567890',
        mensaje: 'This is a test message.'
    };

    try {
        const response = await axios.post(url, validData);
        console.log('Valid Data Response:', response.data);
    } catch (error) {
        console.error('Error with valid data:', error.response ? error.response.data : error.message);
    }

    // Test with invalid data
    const invalidData = {
        nombre: '', // Missing required fields
        correo: 'invalid-email',
        telefono: '',
        mensaje: ''
    };

    try {
        const response = await axios.post(url, invalidData);
        console.log('Invalid Data Response:', response.data);
    } catch (error) {
        console.error('Error with invalid data:', error.response ? error.response.data : error.message);
    }
};

testAPI();
