const Sequelize = require("sequelize")
const db = require('../models');
const OP = Sequelize.Op;

async function AllProducts(){
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
            ut = unittypes.filter(ut=>{return ut.ID==e.unittypeID});
            if(ut.length==1){
                e.dataValues.unittypeName = ut[0].ChName;
            }
            else{
                e.dataValues.unittypeName = 'Unknown';
            }
        });
        console.log("success!")
        return products;
    })
    .catch(err => {
        console.log("error: " + err)
    })
 
    return products;

}; 

module.exports = {
    AllProducts
};