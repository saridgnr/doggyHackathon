const mongoose = require('mongoose');
const Rate = require('../models/rate.model');
const Dog = require('../models/dog.model');

const categories = ['cute', 'annoying', 'friendly', 'sleepy', 'silly', 'grumpy', 'noisy', 'smelly'];

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

module.exports.getAvg = async (req, res) => {
    try {
        const { dogId } = req.params;
        const ratings = await Rate.find({dogID: dogId});
        let categories = ['cute', 'annoying', 'friendly', 'sleepy', 'silly', 'grumpy', 'noisy', 'smelly'];
        let avg = {};
        categories.forEach(function(cat) {
            let sum = 0., count = 0;
            ratings.forEach(function (element) {
                if (element[cat] != null) {
                    sum += element[cat];
                    count++;
                }
            });
            if (count > 0) {
                avg[cat] = sum / count;
            }
        });
        console.log(avg);
        res.json(avg);

    }
    catch (err) {
        console.log(err);
    }
};

module.exports.best = async (req, res) => {
    try {
        const ratings = await Rate.find();
        let best = [];
        let dogsSum = {};
        let dogsCount = {};
        categories.forEach(function(cat) {
            dogsSum = new Proxy({}, {
                get: (target, name) => name in target ? target[name] : 0.
            });
            dogsCount = new Proxy({}, {
                get: (target, name) => name in target ? target[name] : 0
            });
            ratings.forEach(function (element) {
                if (element[cat] != null) {
                    dogsSum[element["dogID"]] += element[cat]
                    dogsCount[element["dogID"]]++
                }
            });
            max = -1;
            maxDogId = null;
            for (let dogId in dogsSum) {
                avg = dogsSum[dogId]/dogsCount[dogId]
                if (avg > max) {
                    max = avg;
                    maxDogId = dogId;
                }
            }
            if (maxDogId != null) {
                best.push({
                    "category": cat,
                    "dog": maxDogId
                })
            }
        });

        res.json(best)
    }
    catch (err) {
        console.log(err);
    }
};