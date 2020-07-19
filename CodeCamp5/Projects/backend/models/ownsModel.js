module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Ownnotebook', {
        day: {
            type: DataTypes.STRING(10)
        }
    },{
        tableName: 'ownsnotebook',
        timestamps: true,
    })
    model.associate = models => {
        model.belongsTo(models.User)
    }
    return model;
}