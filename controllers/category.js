const Category = require('../models/Category')
const errorHandler = require('../utils/errorHandler')
const Position = require('../models/Position')




module.exports.getAll = async function(req, res) {
    try {
        const categories = await Category.find({user: req.user.id})
        res.status(200).json(categories)
    } catch (err) {
        errorHandler(res, err)
    }
}

module.exports.getById = async function(req, res) {
    try {
        const category = await Category.findById(req.params.id)
        res.status(200).json(category)
    } catch (err) {
        errorHandler(res, err)
    }
}

module.exports.remove = async function(req, res) {
    try {
        await Category.remove({_id: req.params.id})
        await Position.remove({category: req.params.id})
        res.status(200).json({
            messege: "Category deleted."
        })
    } catch (err) {
        errorHandler(res, err)
    }
}

module.exports.create = function(req, res) {
    try {

    } catch (err) {
        errorHandler(res, err)
    }
}

module.exports.update = function(req, res) {
    try {

    } catch (err) {
        errorHandler(res, err)
    }
}
