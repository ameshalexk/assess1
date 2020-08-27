const mongoose = require('mongoose');

const crewSchema = new mongoose.Schema({
    name:  { type: String },
    rank:  { type: String },
    homePlanet:  { type: String },
    engineeringAccess: {type: Boolean, default: false},
}, {timestamps: true});

const Crew = mongoose.model('Crew', crewSchema);

module.exports = Crew;

