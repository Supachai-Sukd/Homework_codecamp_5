module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Provider' , {
       name: {
            type: DataTypes.STRING(100)
        }
    }, {
        tableName: 'providers',
        timestamps: false,
    })

    model.associate = models => {
        model.hasMany(models.Phonenumber, { foreignKey: 'provider_id' })
       
    }

    return model
}