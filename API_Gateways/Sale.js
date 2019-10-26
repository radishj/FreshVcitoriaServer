const express = require('express');
const router = express.Router();
//const asyncHandler = require('../Helpers/asyncHandler');
//const validate = require('validate.js');
const S = require('../DBServices/Sale');
router.get("/last2sales/:area_type", function(req, res, next) {
    var areaType = req.params.area_type;
    S.Last2Sales(areaType, res);
});

module.exports = router;