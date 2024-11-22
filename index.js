const express = require("express");
const app = express();

const port = 3000;

app.get('/',(req,res)=>{
    res.send("Home Page")
})

app.get('about',(req,res)=>{
    res.send("About Page")
})

app.listen(port, (req, res) => {
  console.log(`App is running at http://localhost:${port}`);
});
