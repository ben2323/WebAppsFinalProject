/**
 * Created by BenM on 7/31/2017.
 */

const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.send('api works');
});

module.exports = router;
