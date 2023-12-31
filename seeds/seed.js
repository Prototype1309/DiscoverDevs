const sequelize = require('../config/connection');
const { DevUser, EmployerUser, Technology, UserTech } = require('../models');

const developerData = require('./dev-seeds');
const employerData = require('./emp-seeds');
const technologyData = require('./tech-seeds');
const throughData = require('./through-seeds')


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Technology.bulkCreate(technologyData, {
    individualHooks: true,
    returning: true,
  });

  await DevUser.bulkCreate(developerData, {
    individualHooks: true,
    returning: true,
  });

  await EmployerUser.bulkCreate(employerData, {
    individualHooks: true,
    returning: true,
  });

  await UserTech.bulkCreate(throughData, {
    individualHooks: true,
    returning: true
  })


  process.exit(0);
};

seedDatabase();


