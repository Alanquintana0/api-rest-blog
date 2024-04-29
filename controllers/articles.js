const express = require('express');
const Article = require('../models/Article');

const list = (req, res, next) => {
    Article.find().then(objs => res.status(200).json({
        message: "Articles list retrieved",
        obj:objs
    })).catch(ex => res.status(500).json({
        message:"Error",
        obj:ex
    }));
};

const index = (req, res, next) => {
    const id = req.params.id;
    console.log(id)
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

    let article = new Article({
        title: title,
        content: content,
        date: date,
        image: image
    });

    console.log(article)

    article.save().then(obj => res.status(200).json({
        message: "Article created",
        obj: obj
    })).catch(ex => res.status(500).json({
        message: 'Cannot create article',
        obj:ex
    }));
};

const test = (req, res) => {
    return res.status(200).json({
        message: "Articles test"
    })
}

module.exports = {
    list,
    index,
    test,
    create
}