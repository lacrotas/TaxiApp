const Router = require('express');
const router = new Router();
const authControllers = require('../controllers/authController');


// http://localhost:5000/api/auth/login
router.post('/login', authControllers.login);

// http://localhost:5000/api/auth/register
router.post('/register', authControllers.registrate);


module.exports = router;