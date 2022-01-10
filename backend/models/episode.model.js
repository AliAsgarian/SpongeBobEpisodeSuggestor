const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const episodeSchema = new Schema({
    episodeName: { type: String, require: true},
    episodeNumber: { type: String, require: true},
    rating: { type: Number, require: true},
    plot: { type: String, require: true},
    imageLink: {type: String, require: true},
}, {
    timestamps: true,
});

const Episode = mongoose.model('Episode', episodeSchema);

module.exports = Episode;