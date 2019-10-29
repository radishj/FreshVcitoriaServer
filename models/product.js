/* jshint indent: 1 */
const Sequelize = require("sequelize")
module.exports = function(sequelize, DataTypes) {
	return sequelize.define('product', {
		PID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Name: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		TAX: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		SaleCityID: {
			type: DataTypes.INTEGER(3).UNSIGNED,
			allowNull: false
		},
		PType: {
			type: DataTypes.INTEGER(3).UNSIGNED,
			allowNull: false
		},
		ProductTypeID: {
			type: DataTypes.INTEGER(3).UNSIGNED,
			allowNull: false
		},
		PurchasePrice: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		UnitPrice: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		MarketPrice: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		Unit: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		WUnitType: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'unittype',
				key: 'ID'
			}
		},
		Hold: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		},
		StockQty: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		AddedQty: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		ProviderID: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true
		},
		ProviderCode: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		CasePrice: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		CasePrice2: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		CaseWeight: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		Location: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		PIndex: {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		PurchasedCaseQty: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		RestPurchasedCaseQty: {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		Info: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		Folder: {
			type: DataTypes.STRING(30),
			allowNull: false
		},
		ImageFileName: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		Min: {
			type: DataTypes.INTEGER(3).UNSIGNED,
			allowNull: false
		},
		Max: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			defaultValue: '0'
		},
		ProductSortId: {
			type: DataTypes.INTEGER(4),
			allowNull: false
		},
		ProductSortIDNanaimo: {
			type: DataTypes.INTEGER(4),
			allowNull: false
		},
		RestPriceSelector: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		URL: {
			type: DataTypes.STRING(254),
			allowNull: false
		},
		NeedUPCScan: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		UPCs: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	}, 
	{
		tableName: 'product'
	});
};
