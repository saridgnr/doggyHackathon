var express = require('express');
var router = express.Router();
const visitsController = require('../controllers/visit.controller')

/* GET users listing. */
router.get('/', visitsController.getDogs);
router.post('/', visitsController.createDog);
router.put('/', visitsController.updateDog);
router.delete('/:visitId', visitsController.deleteDog);


module.exports = router;
