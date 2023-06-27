const { Developer } = require('../models/DevUser');
const { sequelize } = require('../models');

const developerData = [
    {
        first_name: '',
        last_name: '',
        yrs_experience: 3,
        technology_id: 3,
        location: '',
        email:'',
        password: '',
        picture_link: ''

    }
];

const seedDeveloper = async () => {
    await sequelize.sync({ force: true });
    await developerData .bulkCreate(developerData);
}

module.exports = seedDeveloper;