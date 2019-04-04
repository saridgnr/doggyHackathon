const mongoose = require('mongoose');
const Dog = require('../models/dog.model');

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