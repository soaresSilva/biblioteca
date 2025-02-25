const { Model } = require("sequelize");
const UserSchema = require("./schemas/user");

class User extends Model {
  static init(sequelize) {
    super.init(UserSchema, { sequelize });
  }

  static associate(models) {
    this.belongsToMany(models.User, {
      through: models.UserBook,
      foreignKey: "bookId",
      otherKey: "userId",
      as: "users",
    });
  }
}

module.exports = User;