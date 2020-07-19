module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Notebook' , {
        serial_number: {
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
        timestamps: false,
    })

    model.associate = models => {
        model.belongsToMany(models.User, { through: models.Ownnotebook, foreignKey: 'notebook_id' })
       }

    return model
}