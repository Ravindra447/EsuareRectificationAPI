//import services
const rectificationService = require('../services/rectificationsCRUD');

const rectificationProccessRequest = async(req, res, next) => {
    await rectificationService.InsertRectificationIntoDB(req.body, (err, data) => {
        if (err) {
            res.status(404).json({ error: err });
        } else {
            res.status(200);
            res.json(data)
        }
    });
}
const rectificationFetchProccessRequest = async(req, res, next) => {
    await rectificationService.FetchRectificationsFromDB((err, data) => {
        if (err) {
            res.status(404).json({ error: err });
        } else {
            res.status(200);
            res.json(data)
        }
    });
}
const rectificationDeleteByIdProccessRequest = async(req, res, next) => {
    await rectificationService.DeleteRectificationByIdFromDB(req.params.id, (err, data) => {
        if (err) {
            res.status(404).json({ error: err });
        } else {
            res.status(200);
            res.json(data)
        }
    });
};
const rectificationUpdateProccessRequest = async(req, res, next) => {
    await rectificationService.UpdateRectificationById(req.body, (err, data) => {
        if (err) {
            res.status(404).json({ error: err });
        } else {
            res.status(200);
            res.json(data)
        }
    });
};
module.exports = {
    rectificationProccessRequest: rectificationProccessRequest,
    rectificationFetchProccessRequest: rectificationFetchProccessRequest,
    rectificationDeleteByIdProccessRequest: rectificationDeleteByIdProccessRequest,
    rectificationUpdateProccessRequest: rectificationUpdateProccessRequest
}