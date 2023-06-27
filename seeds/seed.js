const sequelize = require('../config/connection');
const { DevUser, EmployerUser, Technology } = require('../models');

const developerData = require('./developer');
const employerData = require('./employer');
const technologyData = require('./technology');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await DevUser.bulkCreate(developerData, {
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

  process.exit(0);
};

seedDatabase();

  // for (const project of projectData) {
  //   await Project.create({
  //     ...project,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }

//   process.exit(0);
// };

// seedDatabase();
