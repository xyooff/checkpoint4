const AbstractManager = require("./AbstractManager");

class CreateWebSiteManager extends AbstractManager {
  static table = "CreateWebSite";

  insert(item, urlPicture) {
    return this.connection.query(
      `insert into ${CreateWebSiteManager.table} (title, url_picture, url_website, description, technicalDescription) values (?,?,?,?,?)`,
      [
        item.title,
        urlPicture,
        item.url_picture,
        item.url_website,
        item.description,
        item.technicalDescription,
      ]
    );
  }

  findlanguage(item) {
    return this.connection.query(
      `SELECT * FROM ${CreateWebSiteManager.table}  INNER JOIN projectFolio ON ${CreateWebSiteManager.table} .id = createWebSite_id INNER JOIN language ON language.id = language_id where= id = ?`,
      [item]
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
