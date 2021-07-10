const mongoose = require('mongoose')
const subscriberScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subscriberToChannel:{
        type: String,
        required: true
    },
    subscriberDate:{
        type: String,
        required: true
    }

})
module.exports = mongoose.model('Subscriber, subscriberSchema')