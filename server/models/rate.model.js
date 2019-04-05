var mongoose = require('mongoose');

var rateSchema = mongoose.Schema({
    dogID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Dog"
    },
    date:{
        type: "Date",
        default: Date.now
    },
    cute:{
        type: Number,
        min: 1,
        max: 5
    },
    annoying:{
        type: Number,
        min: 1,
        max: 5
    },
    friendly:{
        type: Number,
        min: 1,
        max: 5
    },
    sleepy:{
        type: Number,
        min: 1,
        max: 5
    },
    silly:{
        type: Number,
        min: 1,
        max: 5
    },
    grumpy:{
        type: Number,
        min: 1,
        max: 5
    },
    noisy:{
        type: Number,
        min: 1,
        max: 5
    },
    smelly:{
        type: Number,
        min: 1,
        max: 5
    },
});


module.exports = mongoose.model('Rate', rateSchema);