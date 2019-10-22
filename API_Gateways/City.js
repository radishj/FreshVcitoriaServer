const express = require('express');
const router = express.Router();
//const asyncHandler = require('../Helpers/asyncHandler');
//const validate = require('validate.js');
const {AllCities} = require('../DBServices/City');
router.get("/",async function(req, res, next) {
    Cities = await AllCities();
    if(Cities)
    {
        res.send(Cities);
    }
    else
    {
        res.send("Error: no City exist.");
    }
})

module.exports = router;