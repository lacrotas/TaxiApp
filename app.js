const express = require('express');
//routes for API
const authRoute = require('./routes/authRoute.js');
const driverRoute = require('./routes/driverRoute.js');
const userRoute = require('./routes/userRoute.js');
const adminRoute = require('./routes/adminRoute.js');

const app = express();

app.use(express.json());
//cors
app.use(require('cors')());

//routes
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/driver', driverRoute);
app.use('/api/admin', adminRoute);


// {origin: 'http://localhost:4200'}
module.exports = app;