const express = require('express');
const router = express.Router();
//const asyncHandler = require('../Helpers/asyncHandler');
//const validate = require('validate.js');
const O = require('../DBServices/OrderItem');

router.get("/:orderID",async function(req, res, next) {
    var orderID = req.params.orderID;
    O.orderItems(orderID, res);
 });

router.post("/new",async function(req, res) {
    //var phone = req.params.phone;
    //var address = req.params.address;
    //var cityID = req.params.cityID;
    
    var orderNo = req.body.orderNo;
    var productID = req.body.productID;
    var unitPrice = req.body.unitPrice;
    var UnitWeight = req.body.UnitWeight;
    var orderedQty = req.body.orderedQty;
    var unit = req.body.unit;
    var qty = req.body.qty;
    var info = req.body.info;
    var wUnitType = req.body.wUnitType;
    O.Create(orderNo, productID, unitPrice, UnitWeight, orderedQty, unit, qty, info, wUnitType, res);
})

module.exports = router;