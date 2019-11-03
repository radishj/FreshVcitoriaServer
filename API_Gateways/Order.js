const express = require('express');
const router = express.Router();
//const asyncHandler = require('../Helpers/asyncHandler');
//const validate = require('validate.js');
const O = require('../DBServices/Order');

router.get("/ps/:phone_number/:saleNo",async function(req, res, next) {
    var phone_number = req.params.phone_number;
    var saleNo = req.params.saleNo;
    O.orderPS(phone_number, saleNo, res);
});

router.post("/delete",async function(req, res) {
    var ID = req.body.ID;
    O.Delete(ID, res);
})

router.post("/new",async function(req, res) {
    //var phone = req.params.phone;
    //var address = req.params.address;
    //var cityID = req.params.cityID;
    var phone = req.body.phone;
    var saleID = req.body.saleID;
    var info = req.body.info;
    var isDelivery = req.body.isDelivery;
    var discount = req.body.discount;
    var total = req.body.total;
    var time = req.body.time;
    O.Create(phone, saleID, info, isDelivery, discount, total, time, res);
})

module.exports = router;