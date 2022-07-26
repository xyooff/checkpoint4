const AbstractManager = require("./AbstractManager");

class LanguageManager extends AbstractManager {
  static table = "Language";

  insert(title, item) {
    return this.connection.query(
      `insert into ${LanguageManager.table} (name, url_language) values (?,?)`,
      [title, item]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${LanguageManager.table} set name = ?, url_language=? where id = ?`,
      [item.title, item.url_language, item.id]
    );
  }
}

module.exports = LanguageManager;
