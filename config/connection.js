require('dotenv').config();
const Sequelize = require('sequelize');


const sequelize = process.env.techBlog_db
  ? new Sequelize(process.env.techBlog_db)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: 'postgres',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;