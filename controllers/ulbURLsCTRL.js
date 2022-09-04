//import services
const ulbURLsService = require('../services/ulbURLsCRUD');

const ulbURLsProccessRequest = async(req, res, next) => {
    await ulbURLsService.InsertULBUrlIntoDB(req.body, (err, data) => {
        if (err) {
            res.status(404).json({ error: err });
        } else {
            res.status(200);
            res.json(data)
        }
    });
}
const ulbURLsFetchProccessRequest = async(req, res, next) => {
    await ulbURLsService.FetchULBUrlsFromDB((err, data) => {
        if (err) {
            res.status(404).json({ error: err });
        } else {
            res.status(200);
            res.json(data)
        }
    });
}
const ulbURLsDeleteByIdProccessRequest = async(req, res, next) => {
    await ulbURLsService.DeleteULBUrlByIdFromDB(req.params.id, (err, data) => {
        if (err) {
            res.status(404).json({ error: err });
        } else {
            res.status(200);
            res.json(data)
        }
    });
};
const ulbURLsUpdateProccessRequest = async(req, res, next) => {
    await ulbURLsService.UpdateULBUrlById(req.body, (err, data) => {
        if (err) {
            res.status(404).json({ error: err });
        } else {
            res.status(200);
            res.json(data)
        }
    });
};
module.exports = {
    ulbURLsProccessRequest: ulbURLsProccessRequest,
    ulbURLsFetchProccessRequest: ulbURLsFetchProccessRequest,
    ulbURLsDeleteByIdProccessRequest: ulbURLsDeleteByIdProccessRequest,
    ulbURLsUpdateProccessRequest: ulbURLsUpdateProccessRequest
}