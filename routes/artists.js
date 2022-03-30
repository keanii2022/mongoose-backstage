const express = require('express');
const router = express.Router();
const artistsCtrl = require('../controllers/artists')

router.get('/', artistsCtrl.index)

router.get('/new', artistsCtrl.new)

router.get('/:id', artistsCtrl.show)

router.post('/', artistsCtrl.create)

router.delete('/:id', artistsCtrl.delete)

router.get('/:id/edit', artistsCtrl.edit)

// router.put('/artists/:id', artistsCtrl.update)

module.exports = router;
