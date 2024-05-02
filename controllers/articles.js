const express = require('express');
const Article = require('../models/Article');
const validator = require("validator")

const list = (req, res, next) => {
    Article.find().sort({_date: -1}).then(objs => res.status(200).json({
        message: "Articles list retrieved",
        obj:objs
    })).catch(ex => res.status(500).json({
        message:"Error",
        obj:ex
    }));
};

const index = (req, res, next) => {
    const id = req.params.id;

    Article.findOne({"_id": id}).then(obj=>res.status(200).json({
        message: `Article found with id ${id}`,
        obj: obj
    })).catch(ex => res.status(500).json({
        message: 'Cannot retrieve article',
        obj: ex
    }));
}

const create = (req, res, next) => {
    let title = req.body.title;
    let content = req.body.content;
    let date = req.body.date;
    let image = req.body.image


    try{

        let validate_title = !validator.isEmpty(title) &&
                                        validator.isLength(title, {min: 5, max: 30});
        let validate_content = !validator.isEmpty(content) &&
                                              validator.isLength(content, {min: 5, max: 100});

        if(!validate_title || !validate_content){
            throw new Error("Can't validate data");
        }

    }catch(err){
        return res.status(400).json({
            status: "Error",
            message: "Data missing"
        })
    }

    let article = new Article({
        title: title,
        content: content,
        date: date,
        image: image
    });

    article.save().then(obj => res.status(200).json({
        message: "Article created",
        obj: obj
    })).catch(ex => res.status(500).json({
        message: 'Cannot create article',
        obj:ex
    }));
};

const destroy = (req, res) => {
    const id = req.params.id;
    Article.findByIdAndDelete(id)
            .then(obj => res.json(obj))
            .catch(err => res.send(err));
}

const update = (req, res, next) => {
    //Pick id
    const id = req.params.id

    //Colect new data
    let title = req.body.title;
    let content = req.body.content;
    let date = req.body.date;
    let image = req.body.image

    //Validate data
    try{

        let validate_title = !validator.isEmpty(title) &&
                                        validator.isLength(title, {min: 5, max: 30});
        let validate_content = !validator.isEmpty(content) &&
                                              validator.isLength(content, {min: 5, max: 100});

        if(!validate_title || !validate_content){
            throw new Error("Can't validate data");
        }

    }catch(err){
        return res.status(400).json({
            status: "Error",
            message: "Data missing"
        })
    }


    //Find and update article
    Article.findByPk(id).then((object) => {
        const title = 
        const content
        const date
        const image
    }).catch()

}

const test = (req, res) => {
    return res.status(200).json({
        message: "Articles test"
    })
}

module.exports = {
    list,
    index,
    test,
    create,
    destroy,
    update
}