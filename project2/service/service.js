const bcrypt = require("bcrypt");
const { getConnection } = require("../connection.js");

const registerService = async (emailId, password) => {
  const encryptedPassword = bcrypt.hashSync(password, 10);

  const dataToBeInserted = {
    emailId: emailId,
    password: encryptedPassword,
  };
  const connection_data = await getConnection();
  await connection_data.insertOne(dataToBeInserted);

  const token = jwt.sign(
    { emailId: emailId },
    "4512fehrettbdsfbty252524ge354523"
  );

  return token;
};

const createUserDetailsService = async (name, age, gender, height, weight) => {
  const emailId = getEmailId(req.body.token);
  const dataToBeInserted = {
    name,
    age,
    gender,
    height,
    weight,
  };

  const connection = await getConnection();
  const data = await connection.updateOne(
    { emailId: emailId },
    { $set: dataToBeInserted }
  );

  return data;
};

module.exports = {
  registerService,
  createUserDetailsService,
};
