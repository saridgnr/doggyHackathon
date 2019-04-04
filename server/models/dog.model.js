var mongoose = require('mongoose');

var dogSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    owner: {
        type: String,
        required: true,
        trim: true
    },
    images: [{
        type: String
    }],
    notGettingAlongWith: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Dog"

    }]
});


module.exports = mongoose.model('Dog', dogSchema);