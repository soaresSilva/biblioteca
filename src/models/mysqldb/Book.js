const { Model } = require("sequelize");
const BookSchema = require("./schemas/book");

class Book extends Model {
  static init(sequelize) {
    super.init(BookSchema, { sequelize });
  }

  static associate(models) {
    this.belongsToMany(models.Book, {
      through: models.UserBook,
      foreignKey: "userId",
      otherKey: "bookId",
      as: "books",
    });
  }
}

module.exports = Book;