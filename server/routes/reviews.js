var express = require('express');
var router = express.Router();
const reviewsController = require('../controllers/review.controller')

/* GET users listing. */
router.get('/', reviewsController.getReviews);
router.post('/', reviewsController.createReview);
router.put('/', reviewsController.updateReview);
router.delete('/:reviewId', reviewsController.deleteReview);


module.exports = router;
