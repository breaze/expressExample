// Cargamos el módulo de express para poder crear rutas
const express = require('express');
// Cargamos el controlador
const CalculatorController = require('../app/controllers/CalculatorController');
let calculator = new CalculatorController;
// Llamamos al router
const api = express.Router();
// Creamos una ruta para los métodos que tenemos en nuestros controladores
api.post('/calculator/addition', calculator.addition);
//api.post('/calculator/subtraction', calculator.subtraction);
// Exportamos la configuración
module.exports = api;