var mongoose = require('mongoose');

var visitSchema = mongoose.Schema({   
    dogID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Dog"
    }],
    date:{
        type: "Date",
        default: Date.now
    }
})

module.exports = mongoose.model('Visit', visitSchema);