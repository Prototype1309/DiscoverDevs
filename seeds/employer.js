const { Employer } = require('../models');

const employerData = [
    {

    }
];

const seedEmployer = () => Employer.bulkCreate(employerData);

module.exports = seedEmployer;