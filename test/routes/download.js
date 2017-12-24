var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/download/*', function(req, res) {
    var filename = req.params[0];
    var path = './public/avatar/' + filename;
    
    console.log('router -> download: req path: ' + path);

    fs.stat(path, function(err, stat){
        if (stat && stat.isFile()) {
            console.log('router -> download: file exists');
            res.download(path);
        } else {
            console.log('router -> download: file not exists');
            res.send('file not exists!');
        }
    });
});

module.exports = router;