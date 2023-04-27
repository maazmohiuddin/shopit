const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://maazuddin72:maaz882000@cluster0.qb6h6qm.mongodb.net/test"
  )
    .then((client) => {
      _db = client.db();
      console.log("Connected!");
      callback();
    })
    .catch((err) => {
      console.log(err);
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No Db Found";
};

exports.getDb = getDb;
exports.mongoConnect = mongoConnect;
