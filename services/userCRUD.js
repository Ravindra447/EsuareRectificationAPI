//import models here
const userModel = require('../models/userModel');
const passwordBcrypt = require('../utils/passwordBcrypt');
const InsertUserIntoDB = (data, cb) => {
    data['user_id'] = data.user_role + Date.now();
    UserFetchFromDB(data.user_email, (err, resultCheck) => {
        if (err) {
            if (err) cb(null, { success: false, data: err, msg: "user fetch failed." });
        } else {
            if (resultCheck.data == null) {
                data.user_password = passwordBcrypt.createHash(data.user_password);
                userModel.create(data, (err, result) => {
                    console.log(err,result)
                    if (err) cb(null, { success: false, data: err, msg: "User failed created." });
                    else {
                        cb(null, { success: true, data: result, msg: "User successfully created." })
                    }
                });
            } else {
                cb(null, { success: false, data: err, msg: "User already exists." });
            }
        }
    })

}
const FetchUsersFromDB = (cb) => {
    userModel.find({}, (err, result) => {
        if (err) cb(null, { success: false, data: err, msg: "User fetch failed." });
        else {
            cb(null, { success: true, data: result, msg: "User fetched successfully." })
        }
    })
}
const DeleteUserByIdFromDB = (id, cb) => {

    userModel.deleteOne({ _id: id }, (err, result) => {
        if (err) cb(null, { success: false, data: err, msg: "User delete failed." }); //null, { success: false, data: err, msg: "Student fetch failed." }
        else {
            cb(null, { success: true, data: result, msg: "User deleted successfully." }); //null, { success: true, data: result, msg: "Student fetched successfully." }
        }
    })
}
const UpdateUserById = (data, cb) => {
    let userData = data;
    userModel.updateOne({ _id: data._id }, userData, (err, result) => {
        if (err) cb(null, { success: false, data: err, msg: "User update failed." }); //null, { success: false, data: err, msg: "Student fetch failed." }
        else {
            cb(null, { success: true, data: result, msg: "User updated successfully." }); //null, { success: true, data: result, msg: "Student fetched successfully." }
        }
    })

}
const UserFetchFromDB = (user_email, cb) => {
    userModel.findOne({ user_email: user_email }, (err, result) => {
        if (err) cb(null, { success: false, data: err, msg: "User fetch failed." });
        else {
            cb(null, { success: true, data: result, msg: "User fetched successfully." });
        }
    });
};
//login
const loginCheckFromDB = (user, cb) => {
    userModel.findOne({ user_email: user.user_email }, (err, result) => {
        if (err) cb(null, { success: false, data: err, msg: "User login failed." });
        else {
            if (result) {
                if (result.user_active_status) {
                    passwordBcrypt.comparePassword(user.user_password, result.user_password, (err, isMatch) => {
                        if (err) cb(null, { success: false, data: err, msg: "User login failed." });
                        if (isMatch) {
                            cb(null, { success: true, data: result, msg: "User login successfully." });
                        } else {
                            cb(null, { success: false, data: result, msg: "Invalid Password." });
                        }
                    })

                } else {
                    cb(null, { success: false, data: err, msg: "User access denied." });
                }
            } else {
                cb(null, { success: false, data: err, msg: "User Not Registered." });
            }

            // cb(null, { success: true, data: result, msg: "User login successfully." });
        }
    });
};
//change password
const changePasswordCheckFromDB = (user, cb) => {
    userModel.findOne({ user_email: user.user_email }, (err, result) => {
        if (err) cb(null, { success: false, data: err, msg: "Change password failed." });
        else {
            if (result) {
                if (result.user_active_status) {
                    passwordBcrypt.comparePassword(user.old_password, result.user_password, (err, isMatch) => {
                        if (err) cb(null, { success: false, data: err, msg: "User login failed." });
                        if (isMatch) {
                            let new_user_password = passwordBcrypt.createHash(user.user_password);
                            userModel.updateOne({ user_email: user.user_email }, { user_password: new_user_password }, (err, result) => {
                                if (err) cb(null, { success: false, data: err, msg: "Change password failed." }); //null, { success: false, data: err, msg: "Student fetch failed." }
                                else {
                                    cb(null, { success: true, data: result, msg: "Password updated successfully." }); //null, { success: true, data: result, msg: "Student fetched successfully." }
                                }
                            })
                        } else {
                            cb(null, { success: false, data: result, msg: "Invalid old Password." });
                        }
                    })

                } else {
                    cb(null, { success: false, data: err, msg: "User access denied." });
                }
            } else {
                cb(null, { success: false, data: err, msg: "Invalid old Password." });
            }

        }
    });
};
//forgot password
const forgotPasswordCheckFromDB = (user, cb) => {
    userModel.findOne({ user_email: user.user_email }, (err, result) => {
        if (err) cb(null, { success: false, data: err, msg: "Forgot password failed." });
        else {
            if (result) {
                if (result.user_active_status) {
                    let new_user_password = passwordBcrypt.createHash(user.user_password);
                    userModel.updateOne({ user_email: user.user_email }, { user_password: new_user_password }, (err, result) => {
                        if (err) cb(null, { success: false, data: err, msg: "Forgot password failed." }); //null, { success: false, data: err, msg: "Student fetch failed." }
                        else {
                            cb(null, { success: true, data: result, msg: "Password updated successfully." }); //null, { success: true, data: result, msg: "Student fetched successfully." }
                        }
                    })
                } else {
                    cb(null, { success: false, data: err, msg: "User access denied." });
                }
            } else {
                cb(null, { success: false, data: err, msg: "User Not Registered." });
            }

        }
    });
}
module.exports = {
    InsertUserIntoDB: InsertUserIntoDB,
    FetchUsersFromDB: FetchUsersFromDB,
    DeleteUserByIdFromDB: DeleteUserByIdFromDB,
    UpdateUserById: UpdateUserById,
    loginCheckFromDB: loginCheckFromDB,
    changePasswordCheckFromDB: changePasswordCheckFromDB,
    forgotPasswordCheckFromDB: forgotPasswordCheckFromDB
}