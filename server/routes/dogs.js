var express = require('express');
var router = express.Router();
const dogsController = require('../controllers/dog.controller')

/* GET users listing. */
router.get('/', dogsController.getDogs);
router.post('/', dogsController.createDog);
router.put('/', dogsController.updateDog);
router.delete('/:dogId', dogsController.deleteDog);
router.get('/:dogId', dogsController.getDog);
router.get('/:dogId/trophies', dogsController.getTrophies);



module.exports = router;
