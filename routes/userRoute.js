const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// router.get('/changeInfo', authControllers.changeInfo);

//http://localhost:5000/api/user/addTrip
   router.post('/addTrip', UserController.addTrip);

   router.post('/addStatement', UserController.addStatement);

   router.get('/chekTripHistory', UserController.chekTripHistory);

// router.get('/selectTrip/?id', authControllers.selectTrip);

// router.get('/payTheTrip', authControllers.payTheTrip);


module.exports = router;