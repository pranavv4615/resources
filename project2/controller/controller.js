const Redis = require("ioredis");
const redis = new Redis();

const service = require("../service/service");

const register = async (req, res) => {
  const emailId = req.body.emailId;
  const password = req.body.password;

  const response = await service.registerService(emailId, password);

  res.status(200).json({
    status: true,
    message: "Request Processed Succesfully",
    token: response,
  });
};

const createUserDetails = async (req, res) => {
  try {
    const { name, age, gender, height, weight } = req.body;

    const response = service.createUserDetailsService(
      name,
      age,
      gender,
      height,
      weight
    );

    res.status(200).json({
      status: true,
      message: "Request Processed Successfully",
      respone: response,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, message: "Something went wrong", error: error });
  }
};

const getUserDetails = async (req, res) => {
  const emailId = getEmailId(req.body.token);

  const connection = await getConnection();
  const data = await connection.findOne({
    emailId: emailId,
  });

  res.status(200).json({
    status: true,
    message: "Request Processed Succesfully",
    response: data,
  });
};

const updateUserDetails = async (req, res) => {
  try {
    const { token, age, weight } = req.body;

    const emailId = getEmailId(token);
    const connection = await getConnection();

    await connection.updateOne(
      { emailId: emailId },
      { $set: { age: age, weight: weight } }
    );

    res.status(200).json({
      status: true,
      message: "Request Processed Succesfully",
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, message: "Something went wrong", error: error });
  }
};

const deleteUserDetails = async (req, res) => {
  try {
    const { token } = req.body;

    const emailId = getEmailId(token);
    const connection = await getConnection();

    await connection.deleteOne({ emailId: emailId });

    res.status(200).json({
      status: true,
      message: "Request Processed Succesfully",
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, message: "Something went wrong", error: error });
  }
};

const updatePlayerDetails = async (req, res) => {
  const newPlayerName = req.body.playerName;
  const playerId = req.body.playerId;

  const connection = await getConnection();
  let cacheData = await redis.get("playerDataArray");
  if (cacheData) {
    let parsedData = JSON.parse(playerDataFromCache);
    for (let i = 0; i < parsedData.length; i++) {
      if (parsedData[i].playerId === playerId) {
        parsedData[i].playerName = newPlayerName;
      }
    }
  }
  await connection.updateOne(
    { playerId: playerId },
    { $set: { playername: newPlayerName } }
  );
};

const getPlayerDetails = async (req, res) => {
  // await redis.del("playerDataArray");
  const playerDataFromCache = await redis.get("playerDataArray");
  let responseData = [];
  if (playerDataFromCache) {
    responseData = JSON.parse(playerDataFromCache);
  } else {
    const connection = await getConnection();
    const players = await connection.find({});

    const playerDataArray = [];
    await players.forEach((player) => {
      playerDataArray.push(player);
    });
    responseData = playerDataArray;
    const jsonString = JSON.stringify(responseData);
    await redis.set("playerDataArray", 3600, jsonString);
  }

  res.status(200).json({
    status: true,
    message: "Request Processed Successfully",
    playerDetail: responseData,
  });
};

module.exports = {
  register,
  createUserDetails,
  getUserDetails,
  updateUserDetails,
  deleteUserDetails,
  updatePlayerDetails,
  getPlayerDetails,
};
