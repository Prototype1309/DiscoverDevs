const { Technology } = require('../models/Technology');
const { sequelize } = require('../models');

const technologyData = [
    {
        name: 'JavaScript',
        badge_link: 'https://example.com',
    },
    {
        name: 'Python',
        badge_link: 'https://example.com',
    },
    {
        name: 'C++',
        badge_link: 'https://example.com',
    },
    // Ask group what else we want to add
];

const seedTechnology = () => Technology.bulkCreate(technologyData);

module.exports = seedTechnology;