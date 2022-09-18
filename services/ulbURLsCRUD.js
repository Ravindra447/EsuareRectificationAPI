//import models here
const ulbURLsModel = require('../models/ulbURLSModel');
const InsertULBUrlIntoDB = (data, cb) => {
    ulbURLsModel.insertMany(data, (err, result) => {
        if (err) cb(null, { success: false, data: err, msg: "ULBUrl create failed." });
        else {
            cb(null, { success: true, data: result, msg: "ULBUrl successfully created." })
        }
    });

}
const FetchULBUrlsFromDB = (cb) => {
    ulbURLsModel.find({}, (err, result) => {
        if (err) cb(null, { success: false, data: err, msg: "ULBUrl fetch failed." });
        else {
            cb(null, { success: true, data: result, msg: "ULBUrl fetched successfully." })
        }
    })
}
const DeleteULBUrlByIdFromDB = (id, cb) => {

    ulbURLsModel.deleteOne({ _id: id }, (err, result) => {
        if (err) cb(null, { success: false, data: err, msg: "ULBUrl delete failed." }); //null, { success: false, data: err, msg: "Student fetch failed." }
        else {
            cb(null, { success: true, data: result, msg: "ULBUrl deleted successfully." }); //null, { success: true, data: result, msg: "Student fetched successfully." }
        }
    })
}
const UpdateULBUrlById = (data, cb) => {
    let ULBData = data;
    ulbURLsModel.updateOne({ _id: data._id }, ULBData, (err, result) => {
        if (err) cb(null, { success: false, data: err, msg: "ULBUrl update failed." }); //null, { success: false, data: err, msg: "Student fetch failed." }
        else {
            cb(null, { success: true, data: result, msg: "ULBUrl updated successfully." }); //null, { success: true, data: result, msg: "Student fetched successfully." }
        }
    })

}
module.exports = {
    InsertULBUrlIntoDB: InsertULBUrlIntoDB,
    FetchULBUrlsFromDB: FetchULBUrlsFromDB,
    DeleteULBUrlByIdFromDB: DeleteULBUrlByIdFromDB,
    UpdateULBUrlById: UpdateULBUrlById
}