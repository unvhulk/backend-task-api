const sequelize = require("../config/db.js");
const User = require("./user")(sequelize);
const Task = require("./task")(sequelize);

User.hasMany(Task, { foreignKey: "userId", onDelete: "CASCADE" });
Task.belongsTo(User, { foreignKey: "userId" });

module.exports = { sequelize, User, Task };
