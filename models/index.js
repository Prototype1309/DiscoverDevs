const DevUser = require('./DevUser');
const EmployerUser = require('./EmployerUser');
const Technology = require('./Technology')
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection');


class UserTech extends Model{}

UserTech.init(
    {
    // developer_id: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: DevUser,
    //         key: 'id'
    //     }
    // },
    // technology_id: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: Technology, 
    //         key: 'id'
    //     }
    // },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: false,
        modelName: 'user_tech',
      }
    );


DevUser.belongsToMany(Technology, {through: UserTech})
Technology.belongsToMany(DevUser, {through: UserTech})



module.exports = { DevUser, EmployerUser, Technology, UserTech };









