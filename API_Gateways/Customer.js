const express = require('express');
const router = express.Router();
//const asyncHandler = require('../Helpers/asyncHandler');
//const validate = require('validate.js');
const C = require('../DBServices/Customer');
router.get("/:phone_number",async function(req, res, next) {
    var phone = req.params.phone_number;
    customer = await C.GetCustomer(phone);
    if(customer)
    {
        res.send(customer);
    }
    else
    {
        res.send("Error: no customer has phone:"+phone);
    }
});

router.post("/",async function(req, res, next) {
    //var phone = req.params.phone_number;
    var phone = req.body.phone;
    var address = req.body.address;
    await C.UpdateAddress(phone, address, res, next);
})

router.post("/new",async function(req, res) {
    //var phone = req.params.phone;
    //var address = req.params.address;
    //var cityID = req.params.cityID;
    var phone = req.body.phone;
    var address = req.body.address;
    var cityID = req.body.cityID;
    await C.Create(phone, address, cityID, res);
})


module.exports = router;