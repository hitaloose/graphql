import 'dotenv/config';
import { Sequelize } from 'sequelize-typescript';
import { resolve } from 'path';

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  models: [resolve(__dirname, 'app', 'models')],
});

export default sequelize;
