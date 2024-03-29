const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware.js');
const authController = require('../controllers/authController');

const { registerValidator, loginValidator } = require('../helpers/validator');


router.post('/register', registerValidator, authController.registerUser);
router.post('/login', loginValidator, authController.loginUser);

router.get('/profile', auth, authController.getProfile);


module.exports = router;