const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const traderSchema = new Schema({
    traderName: String,
    tickerName: String,
    strategyName: String,
    strategyDescription: String,
    indicators: String
}, {
    timestamps: true
});


// Compile the schema into a model and export it
module.exports = mongoose.model('Trader', traderSchema);