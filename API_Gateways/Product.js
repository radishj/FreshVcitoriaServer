const express = require('express');
const router = express.Router();
//const asyncHandler = require('../Helpers/asyncHandler');
//const validate = require('validate.js');
const P = require('../DBServices/Product');
router.get("/",function(req, res, next) {
    P.AllProducts(res);
})

router.post("/stockqty", function(req, res, next) {
    var pid = req.body.PID;
    var consumedQty = req.body.consumedQty;
    P.UpdateQty(pid, consumedQty, res);
})

router.post("/products", function(req, res, next) {
    var products = JSON.parse(req.body.IDs);
    P.Products(products, res);
})

module.exports = router;