/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('orders', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		LockUID: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		phone_number: {
			type: DataTypes.STRING(15),
			allowNull: false
		},
		Total: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Credit: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: '0.00'
		},
		Confirmed: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		Creater: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true
		},
		StatusID: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '0'
		},
		AccessCode: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		SaleNo: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			defaultValue: '0',
			references: {
				model: 'mv_sale',
				key: 'Id'
			}
		},
		Info: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		InfoUpdated: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		UpdateTime: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		ModifiedBy: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		UID: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true
		},
		Driver: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		Preparer: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		IsDelivery: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		},
		DiscountPercentage: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		CouponID: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'orders'
	});
};
