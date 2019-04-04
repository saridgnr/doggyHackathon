const mongoose = require('mongoose');
const Visit = require('../models/visit.model');

module.exports.getVisits = async (req, res) => {
    try {
        const visits = await Visit.find();

        res.json(visits);

    }
    catch (err) {
        console.log(err);
    }
};

module.exports.createVisit = async (req, res) => {
    const visitToCreate = req.body;
    try {
        const visit = await Visit.create(visitToCreate);

        res.json(visit);

    }
    catch (err) {
        console.log(err);
    }

};

module.exports.updateVisit = async (req, res) => {
    const visitToUpdate = req.body;
    try {
        const visit = await Visit.updateOne({_id: visitToUpdate._id}, visitToUpdate, {new: true});

        res.json(visit);
    }
    catch (err) {
        console.log(err);
    }
};

module.exports.deleteVisit = async (req, res) => {
    const { visitId } = req.params;
    try {
        const visit = await Visit.deleteOne({_id: visitId});

        res.json(visit);
    }
    catch (err) {
        console.log(err);
    }
};