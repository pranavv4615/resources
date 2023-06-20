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

const redirectToWebsiteService = (req) => {

  const TIMEOUT = 1000
  setInterval(function () {
    console.log('hello')
  }, TIMEOUT);


  let data = fs.readSync('./bankServices.js')
  console.log(req.query)
  switch (req.query.websiteName) {
    case "google":
      return "www.google.com";
    case "youtube":
      return "www.youtube.com";
    case "twitter":
      return "www.twitter.com";
    default:
      return "www.facebook.com"
  }
}

module.exports = {
  getBankDetailsServices,
  postBankDetailsServices,
  redirectToWebsiteService
};
