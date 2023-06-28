var express = require('express');
var router = express.Router();
const traderCtrl = require('../controllers/traders');

// GET /traders
router.get('/', traderCtrl.index);

// GET /traders/new
router.get('/new', traderCtrl.new);

// POST /traders
router.post('/', traderCtrl.create);

// DELETE /traders/:id
router.delete('/:id', traderCtrl.delete);

// GET /traders/:id/edit
router.get('/:id/edit', traderCtrl.edit);

// GET /traders/:id
router.get('/:id', traderCtrl.show)

// PUT /traders/:id
router.put('/:id', traderCtrl.update);

module.exports = router;
