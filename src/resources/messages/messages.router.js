const express = require('express');
const passport = require('passport');
const controller = require('../../controllers/message');

const router = express.Router();


//the callback function under can be replaced by controller
router.get('/messages', passport.authenticate('jwt', { session: false }), controller.getMessages);

router.post('/messages', passport.authenticate('jwt', { session: false }), controller.postMessage);


module.exports = router; 