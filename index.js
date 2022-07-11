// const express = require("express");
// const mongoose = require('mongoose')
import express from 'express'
import mongoose from 'mongoose'
import Post from "./Post.js"
import router from './router.js';
// require('dotenv').config()
import cors from 'cors'
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3001;
const DB_URL = `mongodb+srv://dbUser:eGr2l0Ud3jwga1Po@cluster0.bpgphhr.mongodb.net/?retryWrites=true&w=majority`

const app = express();

app.use(cors())
// server-posts-men


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

// "type": "module",

// {
//     "name": "server",
//     "version": "1.0.0",
//     "main": "index.js",
//     "type": "module",
//     "scripts": {
//       "dev": "nodemon index.js",
//       "test": "echo \"Error: no test specified\" && exit 1",
//       "start": "node index.js"
//     },
//     "keywords": [],
//     "author": "",
//     "license": "ISC",
//     "dependencies": {
//       "cors": "^2.8.5",
//       "dotenv": "^16.0.1",
//       "express": "^4.18.1",
//       "heroku": "^7.60.2",
//       "mongoose": "^6.4.4",
//       "nodemon": "^2.0.19"
//     },
//     "description": "",
//     "engines": {
//       "npm": "8.10.0",
//       "node": "16.15.0"
//     }
//   }
  