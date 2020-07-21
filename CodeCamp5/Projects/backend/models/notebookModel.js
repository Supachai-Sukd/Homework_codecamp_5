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
        model.belongsTo(models.User, { foreignKey: 'user_id' })
       }

    return model
}