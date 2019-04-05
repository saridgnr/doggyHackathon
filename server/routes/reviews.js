var express = require('express');
var router = express.Router();
const reviewController = require('../controllers/review.controller')

/* GET users listing. */
router.get('/', reviewController.getReviews);
router.post('/', reviewController.createReview);
router.put('/', reviewController.updateReview);
router.delete('/:reviewId', reviewController.deleteReview);
router.get('/dogs/:dogId', reviewController.getReviewsByDogId);



module.exports = router;
