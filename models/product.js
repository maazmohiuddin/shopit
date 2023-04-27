const getDb = require("../util/database").getDb;

class Product {
  constructor(title, price, imageUrl, description) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  save() {
    const db = getDb();
    return db
      .collection("products")
      .insertMany(this)
      .then((result) => {
        result;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
