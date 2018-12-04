const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/alcolholicguys', {
  logging: false
});

// Don't forget to change your dbname and createdb

module.exports = db;