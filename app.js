const express = require("express");

const app = express();

app.use(express.static("pages"));

app.use('/', function(req, res, next){
    const d = new Date();
    const day = d.getDay();
    let hour = d.getHours();
    if(day >= 1 && day <= 5 && hour >= 9 && hour <= 16 ){
        next();
    }else{
        res.status(500).send('page not found')
    }
 });
 

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/pages/home.html");
});

app.get("/contactus", (req, res) => {
  res.sendFile(__dirname + "/pages/contactus.html");
});

app.get("/ourservice", (req, res) => {
    res.sendFile(__dirname + "/pages/ourservice.html");
  });

const port = 5000;
app.listen(port, () => console.log(`server runningon ${port}`));