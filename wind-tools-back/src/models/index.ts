import { Sequelize } from "sequelize";
const dbConfig = require("../db/db.config.ts");

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  }
);

interface Db {
  Sequelize: typeof Sequelize;
  sequelize: Sequelize;
  // Add your models here once they are defined
  // For example: user: ReturnType<typeof import("./user")>;
}

const db: Db = {
  Sequelize,
  sequelize,
  // Uncomment and add your models here once they are defined
  // For example: user: require("./user")(sequelize, Sequelize),
};

export default db;
