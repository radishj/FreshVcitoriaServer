const db = require('../models');

async function LastSale(){
    const order = await db.mv_sale.findOne({
        order: [
            ['Id', 'DESC']]
    });
    if(order) return order;

    return false;
}; 

module.exports = {
    LastSale
};