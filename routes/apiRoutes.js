const express = require('express');
const routes = express.Router();
const userCtrl = require('../controllers/userCTRL');
const rectificationCtrl = require('../controllers/rectificationsCTRL');
const ulbURLsCtrl = require('../controllers/ulbURLsCTRL');
//users
routes.post('/create-user', userCtrl.userProccessRequest);
routes.put('/update-user', userCtrl.userUpdateProccessRequest);
routes.get('/fetch-all-users', userCtrl.userFetchProccessRequest);
routes.delete('/delete-userById/:id', userCtrl.userDeleteByIdProccessRequest);

//login
routes.post('/userAuth', userCtrl.loginProccessRequest);
routes.post('/change-password', userCtrl.changePasswordProccessRequest);
routes.post('/forgot-password', userCtrl.forgotPasswordProccessRequest);


//rectifications
routes.post('/create-rectification', rectificationCtrl.rectificationProccessRequest);
routes.put('/update-rectification', rectificationCtrl.rectificationUpdateProccessRequest);
routes.get('/fetch-all-rectifications', rectificationCtrl.rectificationFetchProccessRequest);
routes.delete('/delete-rectificationById/:id', rectificationCtrl.rectificationDeleteByIdProccessRequest);

//ULBURLs
routes.post('/create-ulbURLs', ulbURLsCtrl.ulbURLsProccessRequest);
routes.put('/update-ulbURLs', ulbURLsCtrl.ulbURLsUpdateProccessRequest);
routes.get('/fetch-all-ulbURLss', ulbURLsCtrl.ulbURLsFetchProccessRequest);
routes.delete('/delete-ulbURLsById/:id', ulbURLsCtrl.ulbURLsDeleteByIdProccessRequest);

module.exports = routes;