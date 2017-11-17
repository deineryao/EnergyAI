var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET users listing. */
router.get('/:fileName', function(req, res, next) {
  var fileName = req.params.fileName;
  var filePath = path.resolve('./files', fileName);
  var stats = fs.statSync(filePath);
  if(stats.isFile()){
    res.set({
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': 'attachment; filename='+fileName,
      'Content-Length': stats.size
    });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.end(404);
  }
});

module.exports = router;
