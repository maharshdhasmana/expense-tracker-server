const express = require('express')
const dotenv = require("dotenv");
const dbConnect=require("./config/dbconnect")
const{registerUser}=require("./controllers/users/usersCtrl");
const userRoute = require('./routes/users/userRoute');
const { errorHandler,notFound } = require('./middlewares/errorMiddleware');
const app=express();
dotenv.config();
dbConnect();
app.use(express.json());

app.use('/api/users',userRoute)
app.use(notFound)
app.use(errorHandler)

module.exports=app;