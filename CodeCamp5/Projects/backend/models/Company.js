module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Company' , {
       name: {
            type: DataTypes.STRING(100),
            unique: true
        }
    }, {
        tableName: 'companies',
        timestamps: false,
    })

    model.associate = models => {
        model.belongsTo(models.User, { foreignKey: 'company_id' })
        model.hasMany(models.Notebook, { foreignKey: 'company_id' })
        model.hasMany(models.Phonenumber, { foreignKey: 'company_id' })
        }

    return model
}