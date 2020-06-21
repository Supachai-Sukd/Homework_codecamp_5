module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Customer',{
        name: {
            type: DataTypes.STRING(40)
        },
        age: {
            type: DataTypes.INTEGER
        }
    },{
        tableName: 'customers'
    }
    )
    model.associate = models => {
        model.belongsToMany(models.Account, { through: models.Owns })
    }

    return model
}