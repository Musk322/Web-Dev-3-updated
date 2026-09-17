const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = 3000;

app.use(morgan());

// const logMiddleware = (req,res,next)=>{
//     req.data = "this is data from middleware"
//     console.log("Request URL:", req.url, "Method:", req.method, "Time:", new Date().toLocaleString());
//     next();
// }

const apiMiddleWare = (req, res, next)=>{
    const API_KEY = req.query.API_KEY;
    if(API_KEY !== "1234"){
        res.send("API KEY is not valid")
    }
    console.log("authenticated");
    next();
}

//app.use(logMiddleware);  //global middleware
//app.use(apiMiddleWare);   //global middleware

app.get("/", (req,res)=>{
    console.log("HomePage")
    console.log("Data from middleware:", req.data);
    res.send("Hello from Server");

})

app.get("/weather-data",apiMiddleWare, (req,res)=>{    //route level middleware
    console.log("weather data")
    res.json({
        city : "New Delhi",
        temperature : 32,
        weather : "sunny"
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});