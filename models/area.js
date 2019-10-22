module.exports = function(sequelize, DataTypes) {
	return sequelize.define('area', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		Name: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		Date: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		Info: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		SaleIsOn: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		}
	}, {
		tableName: 'area'
	});
};
