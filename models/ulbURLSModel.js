const mongoose = require('mongoose');
const moment = require('moment');
const ulbURLSModel = mongoose.Schema({
    ulb_name: {
        type: String
    },
    ulb_url: {
        type: String
    },
    ulb_url_satus: {
        type: Boolean,
        default: true
    },
    ulb_url_onboarded_by: {
        type: String,
        default: "Admin"
    },
    ulb_url_onboarded_date: {
        type: String,
        default: moment().format('MM/DD/YYYY')
    },
    ulb_url_timestamp: {
        type: String,
        default: Date.now()
    }
})
const ulbURLs = mongoose.model('ulburl', ulbURLSModel);

module.exports = ulbURLs;