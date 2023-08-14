const { MongoClient } = require("mongodb");

const getConnection = async () => {
  const client = new MongoClient();
  await client.connect();
  return client;
};

module.exports = {
  getConnection,
};
