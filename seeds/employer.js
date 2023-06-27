const { EmployerUser } = require('../models/EmployerUser');
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
    await sequelize.sync({ force: true });
    await EmployerUser.bulkCreate(employerData);
};

module.exports = seedEmployer;