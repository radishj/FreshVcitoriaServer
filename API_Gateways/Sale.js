const express = require('express');
const router = express.Router();
//const asyncHandler = require('../Helpers/asyncHandler');
//const validate = require('validate.js');
const S = require('../DBServices/Sale');
router.get("/last",async function(req, res, next) {
    sale = await S.LastSale();
    if(sale)
    {
        res.send(sale);
    }
    else
    {
        res.send("Error: cannot find last sale.");
    }
});

module.exports = router;