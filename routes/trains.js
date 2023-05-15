const express = require('express');
const trainRoutes = express.Router();
const fs = require('fs');
const fetch = require("node-fetch");
const getTrainData = require('../util');


// trainRoutes.get('/', async (req, res) => {
//     const url = 'http://localhost:4000/data/trains.json';
//     const response = await fetch(url);
//     const data = await response.json();
//     res.json(data);
// });

trainRoutes.get('/', (req, res) => {
    const trains = getTrainData();
    res.send(trains);
});

module.exports = trainRoutes;