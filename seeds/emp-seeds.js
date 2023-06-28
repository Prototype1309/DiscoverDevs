const { EmployerUser } = require('../models');
const { sequelize } = require('../models');

const employerData = [
  {
    company: 'Tech Company',
    first_name: 'Sally',
    last_name: 'Seashore',
    location: 'Durham',
    role: 'Lead Director',
    email: 'SallySea@fakeemail.com',
    password: '987654',
    picture_link: 'http://fakeimglink.com/',
  },
];

const seedEmployer = async () => {
  await sequelize.sync({ force: true });
  await EmployerUser.bulkCreate(employerData);
};

module.exports = seedEmployer;
