var express = require('express');
var router = express.Router();
const ratesController = require('../controllers/rate.controller')

/* GET users listing. */
router.get('/', ratesController.getRates);
router.post('/', ratesController.createRate);
router.put('/', ratesController.updateRate);
router.delete('/:ratesId', ratesController.deleteRate);
/*Get average for dog
Example: http://localhost:3000/rates/avg/5ca65b815187ea12766dfbe7*/
router.get('/avg/:dogId', ratesController.getAvg);



module.exports = router;
