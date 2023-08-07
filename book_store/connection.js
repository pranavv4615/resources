const { MongoClient } = require("mongodb");

const getConnection = async () => {
  const client = new MongoClient(
    "mongodb+srv://pranavvsingh50:Seamless4615@cluster0.rvlrxxy.mongodb.net/?retryWrites=true&w=majority"
  );
  await client.connect();
  return client;
};

module.exports = {
  getConnection,
};
