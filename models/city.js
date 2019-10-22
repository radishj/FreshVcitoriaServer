module.exports = function(sequelize, DataTypes) {
	return sequelize.define('city', {
		ID: {
			type: DataTypes.INTEGER(4).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		Name: {
			type: DataTypes.CHAR(20),
			allowNull: false
		},
		DeliveryFee: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		LargeOrderDeliveryFee: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		LargeOrderThreshold: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		areaID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'area',
				key: 'ID'
			}
		},
		DeliveryInfo: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		PickupInfo: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		PickAddress: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	}, {
		tableName: 'city'
	});
};
