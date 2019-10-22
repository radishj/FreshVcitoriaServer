const db = require('../models');

async function AllProductTypes(){
    const producttypes = await db.product_type.findAll();
    if(producttypes) return producttypes;

    return false;
}; 

module.exports = {
    AllProductTypes
};