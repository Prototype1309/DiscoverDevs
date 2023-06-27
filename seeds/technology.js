const { Technology } = require('../models');

const technologyData = [
    {

    }
];

const seedTechnology = () => Technology.bulkCreate(technologyData);

module.exports = seedTechnology;