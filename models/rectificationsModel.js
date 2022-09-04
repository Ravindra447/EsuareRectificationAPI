const mongoose = require('mongoose');
const moment = require('moment');
const rectificationModel = mongoose.Schema({
    user_id: {
        type: String
    },
    NameOfULB: {
        type: String
    },
    District: {
        type: String
    },
    WardNo: {
        type: String
    },
    Location: {
        type: String
    },
    PoleNumber: {
        type: String
    },
    Wattage:{
        type: String
    },
    CauseOfComplaint: {
        type: String
    },
    DateOfComplaint: {
        type: String
    },
    DateOfRectification: {
        type: String
    },
    Category:{
        type: String
    },
    Status: {
        type: String
    },
    rectification_uploaded_by: {
        type: String,
        default: "Admin"
    },
    rectification_uploaded_date: {
        type: String,
        default: moment().format('MM/DD/YYYY')
    },
    rectification_timestamp: {
        type: String,
        default: Date.now()
    }
})
const rectifications = mongoose.model('rectifications', rectificationModel);

module.exports = rectifications;