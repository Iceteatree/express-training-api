const express = require('express');
const router = express.Router();
const fs = require('fs');
const trainRoutes = require('./trains.js');

router.use('/trains', trainRoutes);
router.get('/', (req, res) => {
    console.log('Meow');
});

module.exports = router;
// (req, res) => {
//     res.send('Hello from Nerdbord!')
// }