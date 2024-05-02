const {connection} = require("./database/connection");
const express = require("express")
const cors = require("cors")

//Routes import
const articlesRouter = require('./routes/articles');

//Launch app
console.log("Node app launched");

//Connect
connection();

//Node server
const app = express();
const port = 3900;

//Configurate cors
app.use(cors());

//make a body an JS object
//Express handle for json objects
app.use(express.json())
//Express handle for form data
app.use(express.urlencoded({extended:true}));

//define routes
app.use('/articles', articlesRouter)

//Create routes
app.get("/", (req, res) => {
    return res.status(200).json({
        message:"Welcome to my api"
    })
})

//Create server and listen http requests
app.listen(port, () => {
    console.log("App running on port: " + port);
})