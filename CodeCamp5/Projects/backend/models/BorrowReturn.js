module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('BorrowReturn', {
        day: {
            type: DataTypes.STRING(10)
        }
    },{
        tableName: 'borrowreturn',
        timestamps: true,
    })

    return model;
}