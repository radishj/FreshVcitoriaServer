const db = require('../models');

async function GetCustomer(phone, res){
    db.customers.findOne({
        where:{
            Phone:phone
        },
        include:[{
            model: db.city,
            include:[db.area]
        }]
    }).then(
        customer=>{
            res.send(customer);
        },
        error=>{
            res.send(error);
        }
    );
}; 

async function UpdateAddress(phone, address, res, next){
    await db.customers.update(
        {
            Address: address
        },
        {   returning: true, where:{
                Phone:phone
            }
        }
    ).then(
        function( rowsUpdate){
            res.json(rowsUpdate)
        }
    ).catch(next)
}; 

async function Create(phone, address, cityID, res){
    await db.customers.create(
        {
            Phone: phone,
            Address: address,
            cityID: cityID
        }
    ).then(
        function( newCustomer){
            if(newCustomer){
                res.send(newCustomer);
            } else {
                res.status(400).send('Error in insert new record');
            }
        }
    )
}; 

module.exports = {
    GetCustomer, UpdateAddress, Create
};