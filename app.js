const express    = require('express');
const app        = express();
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;
const todoRoutes = require('./routes/todo');
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static(__dirname +'/public'));

app.use(todoRoutes);

app.listen(port,()=>{
    console.log("App is listening at port " + port);
})


