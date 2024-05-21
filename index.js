
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 8000;


app.get("/", (req, res) => {
    res.send("Hello from Node API server updated");
})

mongoose.connect("mongodb+srv://lepha123:LephaRam@cluster0.jiz6pi5.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    console.log("Connected to database!");
    app.listen(port, () => {
        console.log("Srever is runing on port: ", port);
    })
    
})

.catch(() => {
    console.log("Connection failed");
})