const { Model } = require("sequelize");
const UserSchema = require("./schemas/user");

class User extends Model {
  static init(sequelize) {
    super.init(UserSchema, { sequelize });
  }
}

module.exports = User;