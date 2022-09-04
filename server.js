const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const staticData = require('./utils/staticData');
const apiRoutes = require('./routes/apiRoutes');
const userCRUD = require('./services/userCRUD');

const port = process.env.PORT || 9003;
const db = require('./config/db');

const path = require('path');

app.use(cors(), bodyParser.json(), bodyParser.urlencoded({ extended: false }))

mongoose.connect(db.dbUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (err) => {
    if (err) throw err;
    else {
        console.log("Database Created");
        userCRUD.InsertUserIntoDB(staticData.adminUser, (err, result) => {
            if (err) {
                res.status(404).json({ error: err });
            } else {
                console.log(result.msg);
            }
        });
    }
});
//API Routes
app.use('/apis', apiRoutes);

app.use(express.static(__dirname + '/www'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'www/index.html'))
});
app.listen(port, () => {
    console.log('server running on :' + port);
});