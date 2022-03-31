const express = require('express');
const router = express.Router();
const artistsCtrl = require('../controllers/artists')
const isLoggedIn = require('../config/auth')

router.get('/', artistsCtrl.index)

router.get('/new', isLoggedIn, artistsCtrl.new)

router.get('/:id', artistsCtrl.show)

router.post('/', isLoggedIn, artistsCtrl.create)

router.delete('/:id', isLoggedIn, artistsCtrl.delete)

router.get('/:id/edit', isLoggedIn, artistsCtrl.edit)

router.put('/:id', isLoggedIn, artistsCtrl.update)

module.exports = router;
