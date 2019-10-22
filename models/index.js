'use strict';

const config = require('../config/config');
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const db = {};

console.log(config);

const sequelize = new Sequelize(config.db.database, config.db.username, config.db.password,{
  dialect: 'mysql',
  host: config.db.host,
  define:{
    timestamps: false
  }
});

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//ASSOCIATIONS
//UnitType
db.unittype.hasMany(db.product);
//Product
db.product.belongsTo(db.unittype);
//customers
db.customers.belongsTo(db.city);
//city
db.city.hasMany(db.customers);
db.city.belongsTo(db.area);
//area
db.area.hasMany(db.city);
//mv_sale
db.mv_sale.hasMany(db.orders);
//orders
db.orders.hasMany(db.order_item);
db.orders.belongsTo(db.mv_sale);
//order_item
db.order_item.belongsTo(db.orders);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = db;
