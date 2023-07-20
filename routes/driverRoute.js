const express = require('express');
const authControllers = require('../controllers/driverController');
const router = express.Router();

// http://localhost:5000/api/auth/login
router.get('/findTrip', authControllers.findTrip);

// http://localhost:5000/api/auth/register
router.get('/acceptTrip', authControllers.acceptTrip);

router.get('/startTripTimer', authControllers.startTripTimer);

router.get('/endTripTimer', authControllers.endTripTimer);

router.get('/addPayStausToTrip', authControllers.addPayStausToTrip);



module.exports = router;