const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  static table = "users";

  insert(item) {
    return this.connection.query(
      `insert into ${UsersManager.table} (firstname, lastname, email, phoneNumber, postalcode, role) values (?,?,?,?,?,?)`,
      [item.title]
    );
  }

  findByMail(email) {
    return this.connection.query(
      `select * from ${UsersManager.table} where email = ?`,
      [email]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${UsersManager.table} set firstname = ?, lastname = ?, email=?, phoneNumber = ?, pays = ?, role = ? where id = ?`,
      [
        item.firstname,
        item.lastname,
        item.email,
        item.phoneNumber,
        item.pays,
        item.role,
        item.id,
      ]
    );
  }
}

module.exports = UsersManager;
