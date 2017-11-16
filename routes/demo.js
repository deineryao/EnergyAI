var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('demo', {title: 'EnergyAI 开放平台'});
});

module.exports = router;
