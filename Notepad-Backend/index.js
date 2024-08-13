const express =require("express");
const path=require("path");
const app = express();
const fs=require('fs');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join (__dirname, 'public')));
app.set('view engine','ejs');


app.get('/',(req,res)=>{
    res.render("index.ejs");
});

app.get('/profile/:username',(req,res)=>{
   const user=req.params.username;
    res.send(`Hi ${user}`);
});

app.get('/profile/:usename/:age',(req,res)=>{
    const user=req.params.usename;
    const age=req.params.age;
    res.send(`Hi ${user} you are ${age} years old`);
});

app.listen(3000, (req,res)=>{
    console.log("Server is running on port 3000");
});