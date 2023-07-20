const express = require('express');
const AdminController = require('../controllers/adminController');
const router = express.Router();

router.get('/getAllUsers', AdminController.getAllUsers);

router.get('/getAllStatemets', AdminController.getAllStatemets);

router.delete('/deleteUser/:id', AdminController.deleteUser);

router.post('/addDriver', AdminController.addDriver);

router.post('/addCar', AdminController.addCar);


// router.delete('/deleteDriverRole', authControllers.deleteDriverRole);

// router.get('/deleteUser', authControllers.deleteUser);

// router.get('/addUser', authControllers.addUser);

// router.get('/changeInfo', authControllers.changeInfo);


module.exports = router;