// myApp.js
// Exercise Tracker

const express = require('express');
const bodyParser = require("body-parser");
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const app = express();

// Use memory storage or disk storage
const upload = multer({ dest: 'uploads/' });


app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
    
    const file = req.file;
    console.log(req.file.path);

    if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    res.json({
        name: file.originalname,
        type: file.mimetype,
        size: file.size
    });
});

 module.exports = app;