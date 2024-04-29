const mongoose = require("mongoose");

//Schema defines the name of the data and the datatype they are using
const schema = mongoose.Schema({
    _title:String,
    _content:String,
    _date: {
        type: Date,
        default: Date.now
    },
    _image:{
        type:String,
        default:"default.png"
    }
})

//Article class that defines the data of the object, setters and getters
class Article{
    constructor(title, content, date, image){
        this._title = title;
        this._content = content;
        this._date = date;
        this._image = image
    }

    get title(){
        return this._title;
    }

    set title(value){
        this._title = value;
    }

    get content(){
        return this._content;
    }

    set content(value){
        this._content = value;
    }

    get date(){
        return this._date
    }

    set date(value){
        this._date = value;
    }

    get image(){
        return this._image;
    }

    set image(value){
        this._image = value;
    }
}

schema.loadClass(Article);
module.exports = mongoose.model('Article', schema);