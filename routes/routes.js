var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res) {
  const queue = { hue: 42 }
  res.json(queue);
});

router.post('/', async function(req, res) {
  const title = req.body.title;
  res.json(title);
});

module.exports = router;
