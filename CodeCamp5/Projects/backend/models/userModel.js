module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('User' , {
        username: {
            type: DataTypes.STRING(20),
            unique: true
        },
        password: {
            type: DataTypes.STRING(255)
        },
        user_level: {
            type: DataTypes.STRING(10)
        },
        name: {
            type: DataTypes.STRING(100)
        },
        position: {
            type: DataTypes.STRING(20)
        }
    }, {
        tableName: 'users',
        timestamps: false,
    })

    model.associate = models => {
        model.belongsTo(models.Company, { foreignKey: 'company_id' })
        model.hasMany(models.Notebook, { foreignKey: 'user_id' })
        model.hasMany(models.Phone, { foreignKey: 'user_id' })
    }

    return model
}