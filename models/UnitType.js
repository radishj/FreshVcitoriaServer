/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('unittype', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		EnName: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		ChName: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	}, {
		tableName: 'unittype'
	});
};
