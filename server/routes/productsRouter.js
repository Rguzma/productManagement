const express = require( 'express');
const ProductsRouter = express.Router();
const {ProductsController} = require( '../controllers/productsController' );

ProductsRouter

    .get ('/products', ProductsController.allProducts)

    .get ('/products/:_id', ProductsController.seeProduct)

    .post('/products', ProductsController.createProduct)

    .put('/products/:_id', ProductsController.updateProducts)

    .delete ('/products/:_id', ProductsController.removeProducts)



    module.exports = {
        ProductsRouter
    };
    