const mongoose = require('mongoose');
const moment = require('moment');
const userModel = mongoose.Schema({
    user_name: {
        type: String
    },
    user_id: {
        type: String
    },
    user_active_status: {
        type: Boolean,
        default: true
    },
    user_mobile: {
        type: String
    },
    user_email: {
        type: String,
        unique: true
    },
    user_password: {
        type: String
    },
    user_ulb: {
        type: String
    },
    user_role: {
        type: String
    },
    user_onboarded_by: {
        type: String,
        default: "Admin"
    },
    user_onboarded_date: {
        type: String,
        default: moment().format('MM/DD/YYYY')
    },
    user_timestamp: {
        type: String,
        default: Date.now()
    }
})
const users = mongoose.model('users', userModel);

module.exports = users;