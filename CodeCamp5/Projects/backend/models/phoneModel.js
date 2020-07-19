module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Phone', {
        phone_number: {
            type: DataTypes.INTEGER(10),
            unique: true
        },
        provider: {
            type: DataTypes.STRING(20)
        }
    }, {
        tableName: 'phones',
        timestamps: false,
    })

    model.associate = models => {
        model.belongsToMany(models.User, { through: models.Own, foreignKey: 'phone_id' })
    }

    return model
}