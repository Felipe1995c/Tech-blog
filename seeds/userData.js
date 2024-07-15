const { User } = require('../models');

const userdata = [
  {
    user_name: 'kryptonian12',
    password: 'kc123password!',
    
  },
  {
    user_name: 'newDev2024',
    password: 'DO-675_pw@',
    
  },
  {
    user_name: 'ignacio',
    password: '12345qert!',
    
  },
  
  
  
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;