// const { DevUser } = require('../models/DevUser');
// const { sequelize } = require('../config/connection');

const developerData = [
  {
    first_name: 'Bob',
    last_name: 'Ross',
    yrs_experience: 3,
    technology_id: 3,
    location: 'Raleigh',
    email: 'BobRoss@email.com',
    password: '12345',
    picture_link: 'http://fakeimglink.com/',
  },
];

// const seedDeveloper = async () => {
//   await sequelize.sync({ force: true });
//   await DevUser.bulkCreate(developerData);
// };

module.exports = developerData;