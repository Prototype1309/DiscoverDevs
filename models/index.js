const DevUser = require('./DevUser');
const EmployerUser = require('./EmployerUser');
const Technology = require('./Technology')

// DevUser.belongsToMany(Technology, {

// })

// Technology.belongsToMany(DevUser, {
  
// })

module.exports = { DevUser, EmployerUser, Technology };
