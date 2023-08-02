//? Package List
const express = require('express');
const boydParser = require('body-parser');


const app = express();
app.use(boydParser.json());
const PORT = 3000;

app.listen(PORT,() =>{
     console.log(`Server is running on PORT ${PORT}`);
})