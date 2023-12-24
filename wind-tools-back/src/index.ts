import express from 'express';
import cors from 'cors';
/* import authRoutes from "./routes/authRoutes"
 *//* import db from './models/index'
 */
const app = express();

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;

/* app.use("/auth", authRoutes);
 */
/* db.sequelize.sync({ alter: false });
 */
app.listen(PORT, () => {
  console.log(`Express is listening at ${PORT}`);
});