const express = require('express');
const passport = require('passport');
const controller = require('../../controllers/message');

const router = express.Router();


//the callback function under can be replaced by controller
router.get('/messages', passport.authenticate('jwt', { session: false }), controller.getMessages);

router.post('/messages', passport.authenticate('jwt', { session: false }), controller.postMessage);

router.delete('/messages/:id', passport.authenticate('jwt', { session: false }), controller.deleteMessage);

router.put('/messages/:id', passport.authenticate('jwt', { session: false }), controller.updateMessage);

module.exports = router; 