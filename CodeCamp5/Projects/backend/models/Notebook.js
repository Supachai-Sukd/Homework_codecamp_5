module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Notebook' , {
        serial: {
            type: DataTypes.STRING(50),
            unique: true
        },
        brand: {
            type: DataTypes.STRING(50)
        },
        model_name: {
            type: DataTypes.STRING(100)
        }
    }, {
        tableName: 'notebooks',
        timestamps: true,
    })

    model.associate = models => {
        model.belongsToMany(models.User, { through: models.BorrowReturn, foreignKey: 'notebook_id' })
        model.belongsTo(models.Company, { foreignKey: 'company_id' })
        // model.belongsTo(models.Brand, { foreignKey: 'brand_id' })
    }

    return model
}