const mongoose = require('mongoose');
const Review = require('../models/review.model');

module.exports.getReviews = async (req, res) => {
    try {
        const reviews = await Review.find();

        res.json(reviews);

    }
    catch (err) {
        console.log(err);
    }
};

module.exports.createReview = async (req, res) => {
    const reviewToCreate = req.body;
    try {
        const review = await Review.create(reviewToCreate);

        res.json(review);

    }
    catch (err) {
        console.log(err);
    }

};

module.exports.updateReview = async (req, res) => {
    const reviewToUpdate = req.body;
    try {
        const review = await Review.updateOne({_id: reviewToUpdate._id}, reviewToUpdate, {new: true});

        res.json(review);
    }
    catch (err) {
        console.log(err);
    }
};

module.exports.deleteReview = async (req, res) => {
    const { reviewId } = req.params;
    try {
        const review = await Review.deleteOne({_id: reviewId});

        res.json(review);
    }
    catch (err) {
        console.log(err);
    }
};

module.exports.getReviewsByDogId = async (req, res) => {
    const { dogId } = req.params;
    try {
        const reviews = await Review.find({'dogID': dogId});

        console.log(reviews);
        res.json(reviews);

    }
    catch (err) {
        console.log(err);
    }
};
