require("dotenv").config();
const express = require("express");
const app = express();
const { sequelize } = require("./models");
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const authMiddleware = require("./middleware/authMiddleware");

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/tasks", authMiddleware, taskRoutes);

const PORT = process.env.DB_PORT || 5000;

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
