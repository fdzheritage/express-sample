const express = require("express");
const app = express();

const port = 9000;


app.get('/', (req, res)=> {
    res.send('<h1>Hello World</h1>');
});

app.get('/home', (req,res)=> {
    res.send('<h1>Your are home</h1>');
});

app.get('/user/:username', (req,res)=> {
    res.send('Welcome: ' + req.params.username);
});

app.listen(port, 
    ()=>{
        console.log(`Sample App ${port}!`);
    }
);
