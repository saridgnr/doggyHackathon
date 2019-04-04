var express = require('express');
var router = express.Router();
const visitsController = require('../controllers/visit.controller')

/* GET users listing. */
router.get('/', visitsController.getVisits);
router.post('/', visitsController.createVisit);
router.put('/', visitsController.updateVisit);
router.delete('/:visitId', visitsController.deleteVisit);


module.exports = router;
