const AbstractManager = require("./AbstractManager");

class CreateWebSiteManager extends AbstractManager {
  static table = "CreateWebSite";

  insert(item) {
    return this.connection.query(
      `insert into ${CreateWebSiteManager.table} (title, url_picture, url_website, description, technicalDescription) values (?,?,?,?,?)`,
      [
        item.title,
        item.url_picture,
        item.url_website,
        item.description,
        item.technicalDescription,
      ]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${CreateWebSiteManager.table} set title = ?, url_picture = ?, url_website, = ?, description = ?, technicalDescription = ?  where id = ?`,
      [
        item.title,
        item.url_picture,
        item.url_website,
        item.description,
        item.technicalDescription,
        item.id,
      ]
    );
  }
}

module.exports = CreateWebSiteManager;
