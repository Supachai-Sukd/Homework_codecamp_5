module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Company' , {
       name: {
            type: DataTypes.STRING(100)
        }
    }, {
        tableName: 'companies',
        timestamps: false,
    })

    model.associate = models => {
        model.hasMany(models.User, { foreignKey: 'company_id' })
        model.hasMany(models.Notebook, { foreignKey: 'company_id' })
        model.hasMany(models.Phonenumber, { foreignKey: 'company_id' })
        }

    return model
}