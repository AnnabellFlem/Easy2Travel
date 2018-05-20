var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://@localhost:27017/e2t";
var url = "mongodb://admin:admin@ds129670.mlab.com:29670/heroku_05k89dpz";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  // db.collection("users").find({}).toArray(function (err, result) {
  //   if (err) throw err;
  //   console.log(result);
  //   db.close();
  // });

  // db.collection("timelines").find({}).toArray(function (err, result) {
  //   if (err) throw err;
  //   console.log(`Length: ${result.length}\n${JSON.stringify(result)}`);
  //   db.close();
  // });
  // db.collection("system.users").find({}).toArray(function (err, result) {
  //   if (err) throw err;
  //   console.log(`Length: ${result.length}\n${JSON.stringify(result)}`);
  //   db.close();
  // });
  db.collection("countries").find({}).toArray(function (err, result) {
    if (err) throw err;
    console.log(`Length: ${result.length}\n${JSON.stringify(result)}`);
    db.close();
  });

  // db.collection("places").find({}).toArray(function (err, result) {
  //   if (err) throw err;
  //   console.log(result);
  //   db.close();
  // });
});