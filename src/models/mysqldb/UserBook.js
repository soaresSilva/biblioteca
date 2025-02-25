const { Model, DataTypes } = require("sequelize");
const UserBookSchema = require("./schemas/userBook");

class UserBook extends Model {
    static init(sequelize) {
        super.init(UserBookSchema, { sequelize, tableName: "UserBook" });
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: "userId", as: "user" });
        this.belongsTo(models.Book, { foreignKey: "bookId", as: "book" });
    }
}

module.exports = UserBook;