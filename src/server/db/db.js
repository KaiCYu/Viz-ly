var mongoose = require('mongoose');
var mongodb = require('mongodb');
//
mongoose.Promise = Promise;

mongoURI = 'mongodb://root:Go_Vizly@138.197.206.253:27107/Vizly';
//'mongodb://0.0.0.0:27017/vizly'; 
mongoose.connect(mongoURI);

////mongo "mongodb://mycluster0-shard-00-00-wpeiv.mongodb.net:27017/admin?replicaSet=Mycluster0-shard-0" --ssl --TeamVizly kay --password HR72Go_Vizly!



// // Run in seperate terminal window using 'mongod'
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongodb connection open');
});

var Schema = mongoose.Schema({
  name: String,
  email: String,
  username: String,
  provider: String,
  facebook: Object,
  pics: Array
});

var User = db.model('User', Schema);

module.exports.addFakeUser = function(request) {
  console.log('addFakeUser fired');
  var newInsert = new User({
    userName: 'mister mctester',
    email: 'arglebargle@freemail.com',
    picsUrl: 'TBD'
  });
  newInsert.save();
  console.log('db add user finish');
};

// module.exports.search = function(request) {
//   console.log('search fired');
//   User.findAll()
//     .then(
//   });
// }


module.exports.db = db;
module.exports.User = User;