const express = require("express");
const app = express();
const PORT = 3000;

app.get('/', (req, res, next) => {
    try {
        throw new Error("Something went wrong");
    } catch (error) {
        //res.status(500).json({sucess:false, message:"Something went wrong"});
        next(error);
    }
})
app.get("/:id", (req, res) => {
    const id = req.params.id;
    try {
        if (id === "1234") {
            res.send("Valid id");
        } else {
            throw new Error("Invalid id");
        }
    } catch (error) {
        //res.status(400).json({success:false, message: "Invalid id"});
        next(error);
    }

});
app.use((err, req, res, next) => {  //error middelware
    res.status(500).json({ success: false, message: err.message });
})

app.use((req, res) => {  //Invalid route middelware
    res.status(404).json({ success: false, message: "page not found" });
})


app.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`);
})