const data = require('../data/trains.json');
const fs = require('fs');

const getTrainData = () => {
    // console.log('DATA', data[0].value);
    const trainsFile = fs.readFileSync('./data/trains.json', 'utf-8');
    const trains = JSON.parse(trainsFile);
    return trains;
}

module.exports = getTrainData;