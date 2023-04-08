require("dotenv").config();

var jwt = require("jsonwebtoken");
const models = require("../models");

async function checkToken(token) {
  let id = null;
  try {
    const { id } = await jwt.decode(token);
    id = id;
  } catch (e) {
    return false;
  }

  const user = await models.Usuario.findOne({
    where: {
      id: id,
      estado: 1,
    },
  });
  if (user) {
    const token = jwt.sign(
      {
        id: id,
      },
      process.env.SECRET_KEY_TO_GENERATE_TOKEN,
      {
        expiresIn: "1d",
      }
    );
    return {
      token,
      rol: user.rol,
    };
  } else {
    return false;
  }
}

module.exports = {
  //generar el token
  encode: async (user) => {
    const token = jwt.sign(
      {
        user,
      },
      process.env.SECRET_KEY_TO_GENERATE_TOKEN,
      {
        expiresIn: "1d",
      }
    );
    return token;
  },
  //permite decodificar el token
  decode: async (token) => {
    try {
      const userInfo = await jwt.verify(
        token,
        process.env.SECRET_KEY_TO_GENERATE_TOKEN
      );
      const user = await models.Usuario.findOne({
        where: {
          id: user.id,
        },
      });
      if (user) {
        return user;
      } else {
        return false;
      }
    } catch (e) {
      const newToken = await checkToken(token);
      return newToken;
    }
  },
};
