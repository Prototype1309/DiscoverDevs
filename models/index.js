const DevUser = require('./DevUser');
const EmployerUser = require('./EmployerUser');
const Technology = require('./Technology')

DevUser.belongsToMany(Technology, {through: "user_tech"})
Technology.belongsToMany(DevUser, {through: "user_tech"})

module.exports = { DevUser, EmployerUser, Technology };
