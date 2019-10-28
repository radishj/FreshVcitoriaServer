const express = require('express');
const router = express.Router();
//const asyncHandler = require('../Helpers/asyncHandler');
//const validate = require('validate.js');
const {AllProductTypes} = require('../DBServices/ProductType');
router.get("/",async function(req, res, next) {
    ProductTypes = await AllProductTypes();
    if(ProductTypes)
    {
        res.send(ProductTypes);
        console.log(ProductTypes);
    }
    else
    {
        res.send("Error: no ProductType exist.");
    }
})

module.exports = router;