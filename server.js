const express = require('express');
// const color = require('color');
// const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const connectDB = require("./service/mongodbService.js")
const cors = require("cors")
const Location = require("./models/locator.js")





dotenv.config();

//connect mongoose
connectDB();


//rest object 
const app = express();

//middleware
app.use(express.json())
// app.use(morgan('dev'))
app.use(cors())


//routes

app.get('/', (req,res) => {
    res.status(200).send({
        message:"Server Running "
    })
});

app.use("/user",require("./routes/userRoutes"))


const port = process.env.PORT || 8080

//listen
app.listen(port,()=> {
    console.log(`server Running on port ${port}`

    );
});