const { randomPinNumber } = require("../../utils/randomGenerator");
const { ResetPinSchema } = require("./resetPin-schema");

const setPasswordResetPin = async (email) => {
  //random 6 digit

  const pinLength = 6;
  const randPin = await randomPinNumber(pinLength);

  const resetObj = {
    email,
    pin: randPin,
  };

  return new Promise((resolve, reject) => {
    ResetPinSchema(resetObj)
      .save()
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

const getPinByEmailPin = (email, pin) => {
  return new Promise((resolve, reject) => {
    try {
      ResetPinSchema.findOne({ email, pin }, (error, data) => {
        if (error) {
          console.log(error);
          resolve(false);
        }

        resolve(data);
      });
    } catch (error) {
      console.log(error);
    }
  });
};

const deletePin = (email, pin) => {
  try {
    ResetPinSchema.findOneAndDelete({ email, pin }, (error, data) => {
      if (error) {
        console.log(error);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  setPasswordResetPin,
  getPinByEmailPin,
  deletePin
};
