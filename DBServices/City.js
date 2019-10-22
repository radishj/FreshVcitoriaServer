const db = require('../models');
const Sequelize = require("sequelize")
const OP = Sequelize.Op;

async function AllCities(){
    const cities = await db.city.findAll({
        where:
        {
            areaID: {[OP.or]: [0,1]}
        }
    });
    if(cities) return cities;

    return false;
}; 

module.exports = {
    AllCities
};