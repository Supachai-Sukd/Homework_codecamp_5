module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Manager', {
        name: {
            type: DataTypes.STRING(255),

        },
        experience: {
            type: DataTypes.INTEGER
        }

    }, {
        tableName: 'managers'
    }
    )

    model.associate = models => {
        model.belongsTo(models.Branch, { foreignKey: 'manager_id' })
    }

    return model;
}