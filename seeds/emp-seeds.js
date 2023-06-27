const { EmployerUser } = require('../models');
const { sequelize } = require('../models');

const employerData = [
    {
        company: '',
        first_name: '',
        last_name: '',
        role: '',
        email: '',
        password: '',
    },
];

const seedEmployer = async () => {
    await EmployerUser.bulkCreate(employerData);
};

module.exports = seedEmployer;