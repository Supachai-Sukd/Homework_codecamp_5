module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Phonenumber' , {
       number: {
            type: DataTypes.STRING(100),
            unique: true
        }
    }, {
        tableName: 'phones',
        timestamps: false,
    })

    model.associate = models => {
        model.belongsToMany(models.User, { through: models.Hasphone, foreignKey: 'phone_id' })
        model.belongsTo(models.Company, { foreignKey: 'company_id' })
        model.belongsTo(models.Provider, { foreignKey: 'provider_id' })
    }

    return model
}