const Sequelize = require("sequelize")
const OP = Sequelize.Op;
const db = require('../models');

async function AllProducts(res){
    const unittypes = await db.unittype.findAll();
    let products = await db.product.findAll({
        where: {
            [OP.or]: [
                {Hold: 0},
                {[OP.and]: [
                    {Hold: {[OP.or]: [{[OP.eq]: 1}, {[OP.eq]: 2}]}},
                    {StockQty: {[OP.gte]: Sequelize.col('Unit')}}
                ]}
            ]
        },
        order:[['PID']],
        //limit: 10, 
        logging: console.log
    }).then(products => {
        //console.log(products);
        products.forEach(e => {
            ut = unittypes.filter(ut=>{return ut.ID==e.WUnitType});
            if(ut.length==1){
                e.dataValues.unittypeName = ut[0].ChName;
            }
            else{
                e.dataValues.unittypeName = 'Unknown';
            }
        });
        res.send(products);
    })
    .catch(err => {
        console.log("error: " + err)
    })
}; 

async function Products(IDs, res){
    const unittypes = await db.unittype.findAll();
    let products = await db.product.findAll({
        where: {
            PID: IDs
        },
        order:[['PID']],
        //limit: 10, 
        logging: console.log
    }).then(products => {
        //console.log(products);
        products.forEach(e => {
            ut = unittypes.filter(ut=>{return ut.ID==e.WUnitType});
            if(ut.length==1){
                e.dataValues.unittypeName = ut[0].ChName;
            }
            else{
                e.dataValues.unittypeName = 'Unknown';
            }
        });
        res.send(products);
    })
    .catch(err => {
        console.log("error: " + err)
    })
}; 

function UpdateQty(productID, consumedQty, res){
    db.product.update({ 
        StockQty: Sequelize.literal('StockQty - ' + consumedQty)
    },  
    {
        where: { PID: productID }
    })
    .then(result =>
        res.send(result)
    )
    .catch(err =>
        res.send(err)
    );
}
module.exports = {
    AllProducts, Products, UpdateQty
};