const sequelize = require('../config/connection');
const { Developer, EmployerUser, Technology } = require('../models');

const developerData = require('./dev-seeds');
const employerData = require('./emp-seeds');
const technologyData = require('./tech-seeds');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Developer.bulkCreate(developerData, {
    individualHooks: true,
    returning: true,
  });

  await EmployerUser.bulkCreate(employerData, {
    individualHooks: true,
    returning: true,
  });

  await Technology.bulkCreate(technologyData, {
    individualHooks: true,
    returning: true,
  });


  // for (const project of projectData) {
  //   await Project.create({
  //     ...project,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }

  process.exit(0);
};

seedDatabase();
