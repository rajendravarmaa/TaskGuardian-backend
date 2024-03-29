require("dotenv").config();
const mongoose = require('mongoose');

const express = require('express');
const app = express();

app.use(express.json());

app.use(express.static('public'));
//auth route
const authRoute = require('./routes/authRoute.js');
app.use('/api',  authRoute);
//admin route
const adminRoute = require('./routes/adminRoute.js');
app.use('/api/admin',  adminRoute);
//common route
const commonRoute = require('./routes/commonRoute.js');
app.use('/api',  commonRoute);

app.get('/', (req, res) => {
    res.send("Hello from TaskG Server");
});


mongoose.connect("mongodb+srv://rvuser:tgsample123@taskguardian.fy1kx1p.mongodb.net/TaskG?retryWrites=true&w=majority&appName=taskguardian")
    .then(() => {
        console.log("Connected to database!");
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch((error) => {
        console.log("Connection failed!", error);
    });