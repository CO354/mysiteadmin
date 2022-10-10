const express = require('express');
const routes = express.Router();

const HomePage = require('./src/controllers/HomePage');

routes.get('/', HomePage.HomePage);

module.exports = routes;