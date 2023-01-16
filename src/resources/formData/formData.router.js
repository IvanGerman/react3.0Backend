const express = require('express');
const passport = require('passport');
const controller = require('../../controllers/formData');

const router = express.Router();


//the callback function under can be replaced by controller
router.get('/formData', passport.authenticate('jwt', { session: false }), controller.getFormData);

router.post('/formData', passport.authenticate('jwt', { session: false }), controller.postFormData);


module.exports = router; 