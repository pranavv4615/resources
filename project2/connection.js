const { MongoClient } = require("mongodb");

const getConnection = async () => {
  const uri =
    "mongodb+srv://pranavvsingh50:Seamless4615@cluster0.rvlrxxy.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri);
  await client.connect();

  const dbName = "player_db";
  const collectionName = "player_details";

  const database = client.db(dbName);
  const collection = database.collection(collectionName);

  return collection;
};

module.exports = {
  getConnection,
};
