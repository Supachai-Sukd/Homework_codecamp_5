module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Company', {
        name: {
            type: DataTypes.STRING(100),
            unique: true
        }
    }, {
        tableName: 'companies',
        timestamps: false,
    })

    model.associate = models => {
        model.hasMany(models.User, { foreignKey: 'company_id' })
        model.hasMany(models.Notebook, { foreignKey: 'nb_company_id' })
        model.hasMany(models.Phone, { foreignKey: 'phone_company_id' })
    }

    return model
}