var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/e2t";

// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   db.collection("users").drop(function (err, delOK) {
//     if (err) throw err;
//     if (delOK) console.log("users deleted");
//     db.close();
//   });
// });

// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   db.collection("timelines").drop(function (err, delOK) {
//     if (err) throw err;
//     if (delOK) console.log("timelines deleted");
//     db.close();
//   });
// });
MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  db.collection("countries").drop(function (err, delOK) {
    if (err) throw err;
    if (delOK) console.log("countries deleted");
    db.close();
  });
});

// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   //  console.log('Collections: ' + db.getCollectionNames());
//   db.collection("places").drop(function (err, delOK) {
//     if (err) throw err;
//     if (delOK) console.log("places deleted");
//     db.close();
//   });
// });