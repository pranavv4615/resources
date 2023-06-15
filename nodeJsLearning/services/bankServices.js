const { connection } = require("../connection");

const getBankDetailsServices = (req) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM bankDetails WHERE bankId = ?`,
      [req.params.bankId],
      function (err, results) {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }
    );
  });
};

const postBankDetailsServices = (req) => {
  const {
    bankId,
    userId,
    accountNumber,
    IFSC,
    MICR,
    accountHolderName,
    BRANCH,
  } = req.body;

  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO bankDetails(bankId, userId, accountNumber, IFSC, MICR, accountHolderName, BRANCH) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [bankId, userId, accountNumber, IFSC, MICR, accountHolderName, BRANCH],
      function (err, results) {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }
    );
  });
};

module.exports = {
  getBankDetailsServices,
  postBankDetailsServices,
};
