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
        },
        userlevel: {
            type: DataTypes.STRING(10)
        }
    }, {
        tableName: 'users',
        timestamps: false,
    })

    model.associate = models => {
        model.belongsToMany(models.Notebook, { through: models.BorrowReturn, foreignKey: 'user_id' })
        model.belongsToMany(models.Phonenumber, { through: models.Hasphone, foreignKey: 'user_id' })
        model.hasOne(models.Company, { foreignKey: 'company_id' })
    }

    return model
}