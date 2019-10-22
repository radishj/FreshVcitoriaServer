/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('order_item', {
		OrderNo: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			defaultValue: '0',
			primaryKey: true
		},
		SameOrderNo: {
			type: DataTypes.INTEGER(4),
			allowNull: false
		},
		ProductId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0',
			primaryKey: true,
			references: {
				model: 'product',
				key: 'PID'
			}
		},
		UnitPrice: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		UnitWeight: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		OrderedQty: {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		Unit: {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		Quantity: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		Info: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		WUnitType: {
			type: DataTypes.INTEGER(4),
			allowNull: false
		}
	}, {
		tableName: 'order_item'
	});
};
