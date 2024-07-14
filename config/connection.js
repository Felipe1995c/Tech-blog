require('dotenv').config();
const Sequelize = require('sequelize');


const sequelize = process.env.techBlog_url
  ? new Sequelize(process.env.techBlog_url)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'postgres',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;