//import services
const userService = require('../services/userCRUD');

const userProccessRequest = async(req, res, next) => {
    await userService.InsertUserIntoDB(req.body, (err, data) => {
        if (err) {
            res.status(404).json({ error: err });
        } else {
            res.status(200);
            res.json(data)
        }
    });
}
const userFetchProccessRequest = async(req, res, next) => {
    await userService.FetchUsersFromDB((err, data) => {
        if (err) {
            res.status(404).json({ error: err });
        } else {
            res.status(200);
            res.json(data)
        }
    });
}
const userDeleteByIdProccessRequest = async(req, res, next) => {
    await userService.DeleteUserByIdFromDB(req.params.id, (err, data) => {
        if (err) {
            res.status(404).json({ error: err });
        } else {
            res.status(200);
            res.json(data)
        }
    });
};
const userUpdateProccessRequest = async(req, res, next) => {
    await userService.UpdateUserById(req.body, (err, data) => {
        if (err) {
            res.status(404).json({ error: err });
        } else {
            res.status(200);
            res.json(data)
        }
    });
};
//login
const loginProccessRequest = async(req, res, next) => {
    await userService.loginCheckFromDB(req.body, (err, data) => {
        if (err) {
            res.status(404).json({ error: err });
        } else {
            res.status(200);
            res.json(data)
        }
    });
};
const changePasswordProccessRequest = async(req, res, next) => {
    await userService.changePasswordCheckFromDB(req.body, (err, data) => {
        if (err) {
            res.status(404).json({ error: err });
        } else {
            res.status(200);
            res.json(data)
        }
    });
}
const forgotPasswordProccessRequest = async(req, res, next) => {
    await userService.forgotPasswordCheckFromDB(req.body, (err, data) => {
        if (err) {
            res.status(404).json({ error: err });
        } else {
            res.status(200);
            res.json(data)
        }
    });
}
module.exports = {
    userProccessRequest: userProccessRequest,
    userFetchProccessRequest: userFetchProccessRequest,
    userDeleteByIdProccessRequest: userDeleteByIdProccessRequest,
    userUpdateProccessRequest: userUpdateProccessRequest,
    loginProccessRequest: loginProccessRequest,
    changePasswordProccessRequest: changePasswordProccessRequest,
    forgotPasswordProccessRequest: forgotPasswordProccessRequest
}