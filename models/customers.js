module.exports = function(sequelize, DataTypes) {
	return sequelize.define('customers', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Phone: {
			type: DataTypes.STRING(10),
			allowNull: false,
			unique: true
		},
		Name: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		WechatName: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		Address: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		cityID: {
			type: DataTypes.INTEGER(4).UNSIGNED,
			allowNull: false,
			references: {
				model: 'city',
				key: 'ID'
			}
		},
		Phone2: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		Stop: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '0'
		},
		OrderTimes: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		SameOrderNo: {
			type: DataTypes.INTEGER(4),
			allowNull: true,
			defaultValue: '0'
		},
		PayTimes: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		Info: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		Credit: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		UpdateTime: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		ProblemTimes: {
			type: DataTypes.INTEGER(4),
			allowNull: true
		},
		Status: {
			type: DataTypes.INTEGER(4),
			allowNull: true
		},
		NoMessage: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		}
	}, {
		tableName: 'customers'
	});
};
