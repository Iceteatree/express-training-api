const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const routes = require('./routes/Routes.js');

const app = express()

const PORT = process.env.PORT || 4000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', routes);

app.listen(PORT, () => {
    console.log('Server listening on port 3000')
})
