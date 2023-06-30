
// const User = require('./User');
// // const Project = require('./Project');

// User.hasMany(Project, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// Project.belongsTo(User, {
//   foreignKey: 'user_id'
// });

// module.exports = { User, Project };

const DevUser = require('./DevUser');
const EmployerUser = require('./EmployerUser');
const Technology = require('./Technology')

DevUser.belongsToMany(Technology, {through: "user_tech"})
Technology.belongsToMany(DevUser, {through: "user_tech"})

module.exports = { DevUser, EmployerUser, Technology };

