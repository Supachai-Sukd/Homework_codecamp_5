module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Hasphone', {
        day: {
            type: DataTypes.STRING(10)
        }
    },{
        tableName: 'phoneof',
        timestamps: true,
    })

    return model;
}