const express = require("express");
//useing of this packege is to getting data from the html page and calculte the data and respond that data.
const bodyParser = require("body-parser");

const app = express();
//this make our html in form of data
app.use(bodyParser.urlencoded({extended : true}));
// const app1 = express();

app.get("/" , (req,res) => {
    // console.log(__filename);
    res.sendFile(__dirname + "/index.html");
})
app.post("/",(req,res) => {
    //we need to convert into a number because this is form of string

    var tem = req.body.num1;
    var tem1 = req.body.num2;
    var re = Number(tem) + Number(tem1);
    // console.log(req.body); // this is give in form of data because of body is object(trit as).
    res.send("Given Two Number " + tem + " and " + tem1 + " ans is : " + re);
})
// app1.get("/" , (req,res) => {
//     console.log(__filename);
//     res.send("hellow world");
// })

app.listen(3000,() => {
    console.log("server is ready");
})

// app1.listen(3001,() => {
//     console.log("server is ready");
// })