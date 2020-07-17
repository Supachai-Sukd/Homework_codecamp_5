module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Brand' , {
       name: {
            type: DataTypes.STRING(100)
        }
    }, {
        tableName: 'brands',
        timestamps: false,
    })

    model.associate = models => {
        model.hasMany(models.Notebook, { foreignKey: 'brand_id' })
    }

    return model
}