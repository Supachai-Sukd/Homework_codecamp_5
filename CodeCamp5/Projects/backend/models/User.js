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
        staffid: {
            type: DataTypes.UUID,
            defaultValue: sequelize.UUIDV4
        }
    }, {
        tableName: 'users',
        timestamps: false,
    })

    model.associate = models => {
        model.belongsToMany(models.Notebook, { through: models.BorrowReturn, foreignKey: 'emp_id' })
        model.belongsToMany(models.PhoneNO, { through: models.BorrowReturn, foreignKey: 'emp_id' })
        model.hasOne(models.Branch, { foreignKey: 'manager_id' })
    }

    return model
}