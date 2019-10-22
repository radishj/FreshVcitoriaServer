/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('company', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			autoIncrement: true
		},
		CompanyName: {
			type: DataTypes.STRING(60),
			allowNull: false
		},
		Manager: {
			type: DataTypes.STRING(60),
			allowNull: false
		},
		Phone: {
			type: DataTypes.STRING(10),
			allowNull: false
		},
		Phone2: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		Address: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		City: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		TypeID: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			defaultValue: '0'
		},
		Info: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	}, {
		tableName: 'company'
	});
};
