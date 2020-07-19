module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Ownphone', {
        day: {
            type: DataTypes.STRING(10)
        }
    },{
        tableName: 'ownsphone',
        timestamps: true,
    })

    model.associate = models => {
        model.belongsTo(models.User)
    }

    return model
}