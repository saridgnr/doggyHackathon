var mongoose = require('mongoose');

var reviewSchema = mongoose.Schema({   
    dogID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Dog"
    },
    date:{
        type: "Date",
        default: Date.now
    },
    name: {
        type:String,
        default: "Anonymous"
    },
    comment: 
    {
        type: String,
        required: true
    },
    attachment: {
        type:String,
    }
})

module.exports = mongoose.model('Review', reviewSchema);