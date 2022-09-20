import { Sequelize } from "sequelize";

console.log(process.env.DATABASE_URL);
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  omitNull: true,
  dialect: 'postgres'
}) // Example for postgres

export default sequelize;
