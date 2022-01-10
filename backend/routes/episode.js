const router = require('express').Router();
let Episode = require('../models/episode.model');

router.route('/').get((req, res) => {
    //Episode.find().sort({rating: 1})
    Episode.aggregate([{$sample: {size:1} }])
    .then(episodes => res.json(episodes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const episodeName = req.body.episodeName;
    const episodeNumber = req.body.episodeNumber;
    const rating = Number(req.body.rating);
    const plot = req.body.plot;
    const imageLink = req.body.imageLink;

    const newEpisode = new Episode({
        episodeName,
        episodeNumber,
        rating,
        plot,
        imageLink,
    });

    newEpisode.save()
    .then(() => res.json('Episode added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;