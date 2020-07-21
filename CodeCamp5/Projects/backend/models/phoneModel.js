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
        model.belongsTo(models.User, { foreignKey: 'user_id' })
    }

    return model
}