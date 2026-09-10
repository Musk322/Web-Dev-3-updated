const express = require("express");
const app = express();
const studentRoutes = require("./routes/studentRoutes.js");
const PORT = 3000

app.use(express.json()); //it handles the json data coming from the client//encode

app.use("/api/students",studentRoutes);
//app.use("/auth",LoginRoutes);

app.listen(PORT, () => console.log("Server is running on port, 3000"));