const Sequelize = require("sequelize")
const OP = Sequelize.Op;
const db = require('../models');

function orderPS(phone, saleID, res){
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

function Delete(ID){
    db.sequelize.query("CALL OrderRemove("+ID+")");
}

function Create(phone, saleID, info, isDelivery, discount, total, time, res){
    db.orders.create(
        {
            phone_number: phone,
            SaleNo: saleID,
            Info: info,
            IsDelivery: isDelivery,
            DiscountPercentage: discount,
            Total: total,
            UpdateTime: time
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
    orderPS, Create, Delete
};