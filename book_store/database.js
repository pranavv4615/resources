const { getConnection } = require("./connection");

const getDbDetails = async () => {
  const dbName = "Book";
  const collectionName = "book_details";
  const client = await getConnection();
  const database = client.db(dbName);
  const collection = database.collection(collectionName);

  return {
    database,
    collection,
  };
};

module.exports = {
  getDbDetails,
};
