const mongoose = require('mongoose');
const Rate = require('../models/rate.model');

module.exports.getRates = async (req, res) => {
    try {
        const rates = await Rate.find();

        res.json(rates);

    }
    catch (err) {
        console.log(err);
    }
};

module.exports.createRate = async (req, res) => {
    const rateToCreate = req.body;
    try {
        const rate = await Rate.create(rateToCreate);

        res.json(rate);

    }
    catch (err) {
        console.log(err);
    }

};

module.exports.updateRate = async (req, res) => {
    const rateToUpdate = req.body;
    try {
        const rate = await Rate.updateOne({_id: rateToUpdate._id}, rateToUpdate, {new: true});

        res.json(rate);
    }
    catch (err) {
        console.log(err);
    }
};

module.exports.deleteRate = async (req, res) => {
    const { rateId } = req.params;
    try {
        const rate = await Rate.deleteOne({_id: rateId});

        res.json(rate);
    }
    catch (err) {
        console.log(err);
    }
};