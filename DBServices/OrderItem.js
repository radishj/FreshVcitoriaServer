const Sequelize = require("sequelize")
const OP = Sequelize.Op;
const db = require('../models');
/*
async function ordersItems(phone, saleID){
    const orders = await db.order_item.findAll({
        where:{
            SaleNo: saleID,
            phone_number: phone
        },
        order: [
            ['Id', 'DESC']],
    });
    if(orders) return orders;

    return false;
}; */

function Create(orderNo, productID, unitPrice, UnitWeight, orderedQty, unit, qty, info, wUnitType, res){
    db.order_item.create(
        {
            OrderNo: orderNo,
            SameOrderNo: 1,
            ProductId: productID,
            UnitPrice: unitPrice,
            UnitWeight: UnitWeight,
            OrderedQty: orderedQty,
            Unit: unit,
            Quantity: qty,
            Info: info,
            WUnitType: wUnitType
        }
    ).then(
        function( newOrderItem){
            if(newOrderItem){
                res.send(newOrderItem);
            } else {
                res.status(400).send('Error in insert new newOrderItem');
            }
        }
    )
}; 
module.exports = {
    Create
};