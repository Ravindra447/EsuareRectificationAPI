//import models here
const rectificationModel = require('../models/rectificationsModel');
const InsertRectificationIntoDB = (data, cb) => {
    rectificationModel.insertMany(data, (err, result) => {
        if (err) cb(null, { success: false, data: err, msg: "Rectification data upload failed." });
        else {
            cb(null, { success: true, data: result, msg: "Rectification data successfully created." })
        }
    });

}
const FetchRectificationsFromDB = (cb) => {
    rectificationModel.find({}, (err, result) => {
        if (err) cb(null, { success: false, data: err, msg: "Rectification fetch failed." });
        else {
            cb(null, { success: true, data: result, msg: "Rectification fetched successfully." })
        }
    })
}
const DeleteRectificationByIdFromDB = (id, cb) => {

    rectificationModel.deleteOne({ _id: id }, (err, result) => {
        if (err) cb(null, { success: false, data: err, msg: "Rectification delete failed." }); //null, { success: false, data: err, msg: "Student fetch failed." }
        else {
            cb(null, { success: true, data: result, msg: "Rectification deleted successfully." }); //null, { success: true, data: result, msg: "Student fetched successfully." }
        }
    })
}
const UpdateRectificationById = (data, cb) => {
    let projData = data;
    rectificationModel.updateOne({ _id: data._id }, projData, (err, result) => {
        if (err) cb(null, { success: false, data: err, msg: "Rectification update failed." }); //null, { success: false, data: err, msg: "Student fetch failed." }
        else {
            cb(null, { success: true, data: result, msg: "Rectification updated successfully." }); //null, { success: true, data: result, msg: "Student fetched successfully." }
        }
    })

}
module.exports = {
    InsertRectificationIntoDB: InsertRectificationIntoDB,
    FetchRectificationsFromDB: FetchRectificationsFromDB,
    DeleteRectificationByIdFromDB: DeleteRectificationByIdFromDB,
    UpdateRectificationById: UpdateRectificationById
}