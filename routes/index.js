var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Movie-Texter' });
});

router.get('/room/:id', function(req, res, next) {
  var id = req.params.id;
  res.render('messages', {
    title: 'Messages',
    id_num: id
  });

  // model.getById(id, function(err, particle) {
  //   if (err) return next(err);
  //   res.render('particles', {
  //     title: 'PARTICLES',
  //     data: particle
  //   });
  // });
});




module.exports = router;
