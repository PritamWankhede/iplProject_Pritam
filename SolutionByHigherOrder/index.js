const matchesData = require('../csvToJson/matches.json');
const deliveryData = require('../csvToJson/deliveries.json');
const files = require('./output');

const strikeRateOfBatsman = require('./7-strikeRateOfBatsman')
const strikeRate=strikeRateOfBatsman(matchesData,deliveryData);

files('./')