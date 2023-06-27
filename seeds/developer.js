const { Developer } = require('../models');

const developerData = [
    {

    }
];

const seedDeveloper = () => Developer.bulkCreate(developerData);

module.exports = seedDeveloper;