const express = require('express');
const router = express.Router();
//const asyncHandler = require('../Helpers/asyncHandler');
//const validate = require('validate.js');
const {AllProducts} = require('../DBServices/Product');
router.get("/",async function(req, res, next) {
    products = await AllProducts();
    if(products)
    {
        res.send(products);
    }
    else
    {
        res.send("Error: no product exist.");
    }
})

module.exports = router;