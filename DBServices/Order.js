const Sequelize = require("sequelize")
const OP = Sequelize.Op;
const db = require('../models');

async function orderPS(phone, saleID, res){
    db.orders.findOne({
        where:{
            SaleNo: saleID,
            phone_number: phone
        },
        order: [
            ['Id', 'DESC']],
    }).then(order => {
        res.send(order);
    },
    err => {
        res.send(err);
    });
}; 

async function Create(phone, saleID, info, isDelivery, discount, total, res){
    await db.orders.create(
        {
            phone_number: phone,
            SaleNo: saleID,
            Info: info,
            IsDelivery: isDelivery,
            DiscountPercentage: discount,
            Total: total
        }
    ).then(
        function( newOrder){
            if(newOrder){
                res.send(newOrder);
            } else {
                res.status(400).send('Error in insert new order');
            }
        }
    )
}; 
module.exports = {
    orderPS, Create
};