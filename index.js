// const express = require("express");
// const mongoose = require('mongoose')
import express from 'express'
import mongoose from 'mongoose'
import Post from "./Post.js"
import router from './router.js';
require('dotenv').config()
const cors = require('cors')

const PORT = 3001;
const DB_URL = `mongodb+srv://dbUser:eGr2l0Ud3jwga1Po@cluster0.bpgphhr.mongodb.net/?retryWrites=true&w=majority`

const app = express();

app.use(cors())


app.use(express.json())
// app.use('/api', router)
app.use('/api', router)

// app.get("/api", (req, res) => {
//     res.json({ message: "Hello from server!" });
// });
app.get("/numbers", (req, res) => {
    res.json({ message: "123123123" });
});

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
    }
    catch (e) {
        console.log(e);
    }
}

startApp()