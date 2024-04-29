const mongoose = require("mongoose");

const connection = async() => {
    try{
        mongoose.connect("mongodb+srv://adminUser:sdfsdg57@cluster0.phvx3oz.mongodb.net/");
        console.log("Connection ok")
    }catch(error){
        console.log(error)
        throw new Error("Unable to connect to database")
    }
}

module.exports = {
    connection
}