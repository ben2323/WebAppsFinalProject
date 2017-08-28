/**
 * Created by BenM on 7/31/2017.
 */

const express = require('express');
const router = express.Router();
const AdController = require('../controllers/AdController');
const WeatherController = require('../controllers/WeatherController');


router.get('/weather/:cityName', (req, res) => {
  WeatherController.getByCity(req.params.cityName).subscribe(weather => {
    res.json(weather);
  }, (error) => {
    res.json(error);
  })
});


/* Ads */
router.get('/ads', (req, res) => {
  AdController.getAll().then(ads => {
    res.json(ads);
  })
});

router.get('/ads/:id', (req, res) => {
  AdController.getById(req.id).subscribe(ad => {
    res.json(ad);
  })
});

router.delete('/ads/:id', (req, res) => {
  AdController.delete(req.id).subscribe(succeeded => {
    res.send(succeeded);
  });
});

router.post('/ads', (req, res) => {
  AdController.add(req.ad).subscribe(adId => {
    res.send(adId);
  });
});

router.post('/ads/:adId', (req, res) => {
  AdController.update(req.params.adId, req.params.ad).subscribe(succeeded => {
    res.send(succeeded);
  });
});

module.exports = router;
