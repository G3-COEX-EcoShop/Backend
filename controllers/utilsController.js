const models = require("../models");
module.exports = {
  userByEmail: async (email) => {
    try {
      let user = await models.User.findOne({
        where: {
          email: email,
        },
        include: [
          {
            model: models.Role,
            include: [
              { model: models.Permission, as: "productPermission" },
              { model: models.Permission, as: "categoryPermission" },
              { model: models.Permission, as: "ordersPermission" },
              { model: models.Permission, as: "reviewsPermission" },
            ],
          },
        ],
      });
      if (!user) {
        return;
      }
      const password = user.password;
      user.password = null;

      return { password, user };
    } catch (error) {
      throw error;
    }
  },
  userById: async (id) => {
    try {
      let user = await models.User.findOne({
        where: {
          id: id,
        },
        include: [
          {
            model: models.Role,
            include: [
              { model: models.Permission, as: "productPermission" },
              { model: models.Permission, as: "categoryPermission" },
              { model: models.Permission, as: "ordersPermission" },
              { model: models.Permission, as: "reviewsPermission" },
            ],
          },
        ],
      });
      if (!user) {
        return;
      }
      const password = user.password;
      user.password = null;

      return { password, user };
    } catch (error) {
      throw error;
    }
  },
};
