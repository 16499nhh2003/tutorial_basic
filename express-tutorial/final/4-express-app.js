const express = require("express");
const path = require("path");

const app = express();
app.get('/about', (req,res)=>{
    const dir =  path.resolve(__dirname,'./navbar-app/index.html');
    console.log(dir)
})

app.all("*", (req, res) => {
    res.status(404).send("resource not found");
});

app.listen(5000, () => {
    console.log("server is listening on port 5000....");
});
