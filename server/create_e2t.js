var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/e2t";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.createCollection("User", function(err, res) {
    if (err) throw err;
    console.log("User created!");
    db.close();
//  });
});