const mongoose = require('mongoose');
const Dog = require('../models/dog.model');
const Rate = require('../models/rate.model');

const categories = ['cute', 'annoying', 'friendly', 'sleepy', 'silly', 'grumpy', 'noisy', 'smelly'];

module.exports.getDogs = async (req, res) => {
    try {
        const dogs = await Dog.find();

        res.json(dogs);

    }
    catch (err) {
        console.log(err);
    }
};

module.exports.createDog = async (req, res) => {
    const dogToCreate = req.body;
    try {
        const dog = await Dog.create(dogToCreate);

        res.json(dog);

    }
    catch (err) {
        console.log(err);
    }

};

module.exports.updateDog = async (req, res) => {
    const dogToUpdate = req.body;
    try {
        const dog = await Dog.updateOne({_id: dogToUpdate._id}, dogToUpdate, {new: true});

        res.json(dog);
    }
    catch (err) {
        console.log(err);
    }
};

module.exports.deleteDog = async (req, res) => {
    const { dogId } = req.params;
    try {
        const dog = await Dog.deleteOne({_id: dogId});

        res.json(dog);
    }
    catch (err) {
        console.log(err);
    }
};

module.exports.getDog = async (req, res) => {
    const { dogId } = req.params;
    try {
        const dog = await Dog.findOne({_id: dogId});

        res.json(dog);
    }
    catch (err) {
        console.log(err);
    }
};

module.exports.getTrophies = async (req, res) => {
    try {
        const ratings = await Rate.find();
        let trophies = [];
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
                trophies.push(cat);
            }
        });

        res.json(trophies)
    }
    catch (err) {
        console.log(err);
    }
};