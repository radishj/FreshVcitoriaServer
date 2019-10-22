const express = require('express');
const router = express.Router();
//const asyncHandler = require('../Helpers/asyncHandler');
//const validate = require('validate.js');
const {AllUnitTypes} = require('../DBServices/UnitType');
router.get("/",async function(req, res, next) {
    UnitTypes = await AllUnitTypes();
    if(UnitTypes)
    {
        res.send(UnitTypes);
    }
    else
    {
        res.send("Error: no UnitType exist.");
    }
})

module.exports = router;