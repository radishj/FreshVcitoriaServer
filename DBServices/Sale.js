const Sequelize = require("sequelize")
const OP = Sequelize.Op;
const db = require('../models');

function Last2Sales(areaType, res){
    db.mv_sale.findAll({
        where:{
            AreaType: {[OP.gte]: areaType}
        },
        order: [
            ['Id', 'DESC']],
        limit : 2
    }).then(
        sales => {
            res.send(sales);
        },
        error => {
            res.send('Error:' + error);
        });
}; 

module.exports = {
    Last2Sales
};