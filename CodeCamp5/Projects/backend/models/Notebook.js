module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Notebook' , {
       serial: {
            type: DataTypes.STRING(20),
            unique: true
        },
        model_name: {
            type: DataTypes.STRING(100)
        }
    }, {
        tableName: 'notebooks',
        timestamps: false,
    })

    model.associate = models => {
        model.belongsToMany(models.User, { through: models.BorrowReturn, foreignKey: 'notebook_id' })
        model.belongsTo(models.Company, { foreignKey: 'company_id' })
    }

    return model
}