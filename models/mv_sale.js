/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mv_sale', {
		Id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		StartDate: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		Info: {
			type: DataTypes.STRING(30),
			allowNull: true
		},
		Status: {
			type: DataTypes.INTEGER(4),
			allowNull: true
		},
		AreaType: {
			type: DataTypes.INTEGER(3).UNSIGNED,
			allowNull: true
		},
		SaleType: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '0'
		}
	}, {
		tableName: 'mv_sale'
	});
};
