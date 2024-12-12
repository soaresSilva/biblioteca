const { Model } = require("sequelize");
const BookSchema = require("./schemas/book");

class Book extends Model {
  static init(sequelize) {
    super.init(BookSchema, { sequelize });
  }

  static associate(models) {
    // TODO: Implementar associações
  }
}

module.exports = Book;
