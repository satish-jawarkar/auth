const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRouter = require('./routes/authRoutes');
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//route
app.use('/api/auth', authRouter); 



//mongodb
mongoose.connect("mongodb://127.0.0.1:27017/auth").then(()=>console.log('Connected to the server!')).catch((error)=>console.log('Failed!',error));


//error handler
app.use((err, req, res, next)=>{
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
});


//server
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`App runnin on ${PORT}`);
})