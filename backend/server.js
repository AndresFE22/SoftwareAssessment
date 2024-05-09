const express = require('express');
const fs = require('fs');
const { Parser } = require('n3');
const { SparqlClient } = require('sparql-http-client');

// Crear una instancia de Express
const app = express();

// Cargar el archivo TTL en la ontología
const cargarOntologia = () => {
    return new Promise((resolve, reject) => {
        const parser = new Parser();
        const readStream = fs.createReadStream('ontology.ttl');

        parser.parse(readStream, (error, quad, prefixes) => {
            if (error) {
                reject(error);
            } else if (quad) {
                // Aquí podrías guardar los datos en una estructura de datos si lo necesitas
            } else {
                resolve();
            }
        });
    });
};

// Realizar una consulta SPARQL para seleccionar los datos que contienen la palabra clave "competencia"
const realizarConsultaSPARQL = async () => {
    const endpointUrl = 'http://datos.gob.es/virtuoso/sparql'; // Reemplaza con tu URL de endpoint SPARQL
    const sparql = `
        PREFIX : <http://example.org/>
        SELECT ?s ?p ?o WHERE {
            ?s ?p ?o .
            FILTER(contains(str(?s), "competencia") || contains(str(?p), "competencia") || contains(str(?o), "competencia"))
        }
    `;

    const client = new SparqlClient({ endpointUrl });
    const stream = await client.query.select(sparql);
    
    const results = [];
    stream.on('data', row => results.push(row));
    return new Promise((resolve, reject) => {
        stream.on('error', reject);
        stream.on('end', () => resolve(results));
    });
};

// Ruta para realizar la consulta SPARQL y mostrar los datos que contienen la palabra clave "competencia"
app.get('/consultar', async (req, res) => {
    try {
        // Cargar la ontología
        await cargarOntologia();

        // Realizar la consulta SPARQL y obtener los resultados
        const resultados = await realizarConsultaSPARQL();

        // Enviar los resultados como respuesta
        res.json(resultados);
    } catch (error) {
        console.error('Error al cargar la ontología o realizar la consulta:', error);
        res.status(500).json({ error: 'Error interno del servidor.' });
    }
});

// Iniciar el servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}/`);
});
