const db = require('../models');

async function AllProductTypes(){
    const producttypes = await db.product_type.findAll(
        {
            where: {
                isShown : 1
            },
            order:[['sortWeight']],
        }
    );
    if(producttypes) return producttypes;

    return false;
}; 

module.exports = {
    AllProductTypes
};