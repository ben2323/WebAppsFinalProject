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

router.get('/cities', (req, res) => {
  AdController.getAll({city:true}).then(ads => {
    res.json(ads);
  })
});

/* Ads */
router.get('/ads', (req, res) => {
  AdController.getAll().then(ads => {
    res.json(ads);
  })
});

router.post('/ads', (req, res) => {
  AdController.findByQuery(req.body.query).then(ads => {
    res.json(ads);
  })
});

router.get('/ads/:id', (req, res) => {
  AdController.getById(req.id).subscribe(ad => {
    res.json(ad);
  })
});

router.delete('/ads/:id', (req, res) => {
  AdController.delete(req.params.id).then(succeeded => {
    emitAdsUpdated(req.io);
    res.send(succeeded);
  });
});


router.post('/ads/:id', (req, res) => {
  AdController.updateOrAdd(req.params.id, req.body.ad).then(succeeded => {
    emitAdsUpdated(req.io);
    res.send(succeeded);
  });
});

router.post('/cities/ads', (req, res) => {
  AdController.updateOrAdd(req.params.id, req.body.ad).then(succeeded => {
    emitAdsUpdated(req.io);
    res.send(succeeded);
  });
});


function emitAdsUpdated(io){
  AdController.getAll().then(ads=>{
    io.emit('adsUpdated', ads);
  });
}

module.exports = router;
