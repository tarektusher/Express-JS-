//? Package List
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());
const PORT = 3000;

//? Create a object 
let users = [];
let cc=0;

//? API to check connection
app.get('/',(req,res) =>{
     res.json({message: 'Welcome to my app'});
})

//? API to create a User
app.post('/users',(req,res) => {
     const user = req.body;
     user.id = ++cc;
     users.push(user);
     res.status(201).json(user);
})

//? API to get Users 
app.get('/users',(req,res) =>{
     res.status(200).json(users);
})
//? API to get specfic user
app.get('/users/:id',(req,res)=>{
     const id =req.params.id;
     const user = users.find((u) => u.id ==  id);
     if(user){
          res.json(user);
     }
     else{
          res.status(404).json({message:"User Not Found"});
     }
})

app.listen(PORT,() =>{
     console.log(`Server is running on PORT ${PORT}`);
})
