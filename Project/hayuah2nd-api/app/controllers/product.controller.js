const db = require('../models')
const Product = db.products

exports.findAll = (req, res) => {
    Product.find()
    .then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error while retrieving product."
        })
    });
}

exports.create = (req, res) => {
    const product = new Product({
        title: req.body.title,
        description: req.body.description,
        full_description: req.body.full_description,
        image: req.body.image,
        category_id: req.body.category_id,
        price: req.body.price
    })

    product.save(product)
    .then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(409).send({
            message: err.message || "Some error while create product."
        })
    });
}

exports.findOne = (req, res) => {
    const id = req.params.id

    Product.findById(id)
    .then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(409).send({
            message: err.message || "Some error while show product."
        })
    });
}

exports.update = (req, res) => {
    const id = req.params.id

    Product.findByIdAndUpdate(id, req.body)
    .then((result) => {
        if (!result) {
            res.status(404).send({
                message: "Product not found"
            })
        }

        res.send({
            message: "Product was updated"
        })
    }).catch((err) => {
        res.status(409).send({
            message: err.message || "Some error while update product."
        })
    });
}

exports.delete = (req, res) => {
    const id = req.params.id

    Product.findByIdAndRemove(id, req.body)
    .then((result) => {
        if (!result) {
            res.status(404).send({
                message: "Product not found"
            })
        }

        res.send({
            message: "Product was seleted"
        })
    }).catch((err) => {
        res.status(409).send({
            message: err.message || "Some error while delete product."
        })
    });
}