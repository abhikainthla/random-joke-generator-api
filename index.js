const express = require('express');
const app = express();
const PORT = 8080;
const jokes = require('./jokes');
const images = require('./images');
app.get('/random/joke', (req, res)=>{
    const index = Math.floor(Math.random() * jokes.length);
    const joke = jokes[index];
    res.json({joke:joke});
})

app.get('/random/image', (req,res)=>{
    const index = Math.floor(Math.random() * images.length);
    const image = images[index];
    res.json({image:image});
})

app.listen(PORT, ()=>{
    console.log('PORT is running on '+ PORT);
})