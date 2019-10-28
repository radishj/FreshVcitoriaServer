/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('product_type', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		Name: {
			type: DataTypes.STRING(10),
			allowNull: false
		},
		DiscountPercentage: {
			type: DataTypes.INTEGER(4),
			allowNull: false
		},
		isShown: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		},
		sortWeight: {
			type: DataTypes.INTEGER(6),
			allowNull: false
		}
	}, {
		tableName: 'product_type'
	});
};