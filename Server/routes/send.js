var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 0,
    host: 'us-cdbr-iron-east-01.cleardb.net',
    user: 'b4fd0c64706ccd',
    password: '2f7f48b490a4fad',
    database: 'heroku_d894f6477eddc6d',
    debug: false
});

router.post('/permit', function (req, res) {

});




module.exports = router;
