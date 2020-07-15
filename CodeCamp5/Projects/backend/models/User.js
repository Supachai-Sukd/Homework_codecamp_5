module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('User' , {
        username: {
            type: DataTypes.STRING(200),
            unique: true
        },
        password: {
            type: DataTypes.STRING(255)
        },
        name: {
            type: DataTypes.STRING(100)
        }
    }, {
        tableName: 'users',
        timestamps: false,
    })

    model.associate = models => {
        model.belongsToMany(models.Notebook, { through: models.BorrowReturn, foreignKey: 'emp_id' })
    }

    return model
}