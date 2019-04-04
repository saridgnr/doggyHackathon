var express = require('express');
var router = express.Router();
const ratesController = require('../controllers/rate.controller')

/* GET users listing. */
router.get('/', ratesController.getRates);
router.post('/', ratesController.createRate);
router.put('/', ratesController.updateRate);
router.delete('/:ratesId', ratesController.deleteRate);


module.exports = router;
