const passport = require("passport");
const tokenService = require("../services/token");

const tables = {
  category: "categoryPermission",
  product: "productPermission",
  order: "ordersPermission",
  review: "reviewsPermission",
};

const methods = {
  manager: "can_manager",
  create: "can_create",
  read: "can_read",
  update: "can_update",
  delete: "can_delete",
  activate: "can_activate",
  deactivate: "can_activate",
};

const getUserRol = async (token) => {
  if (!token) {
    return;
  }
  const infoDecode = await tokenService.decode(token);
  if (!infoDecode || !infoDecode.Role) {
    return;
  }
  return infoDecode.Role;
};

const verifyPermission = (table, method) => {
  const tablePermission = tables[table];
  const methodPermission = methods[method];
  console.log("middleware");

  return async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    console.log({ token: !!token });
    if (!token) {
      return res.status(403).send({
        message: "No token",
      });
    }

    const rol = await getUserRol(token);

    if (rol && rol.dataValues[tablePermission].dataValues[methodPermission]) {
      next();
    } else {
      return res.status(403).send({
        message: `No está autorizado para ${tables[table]} con acción de ${methods[method]}`,
      });
    }
  };
};

module.exports = {
  verifyUser: async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(403).send({
        message: "No token",
      });
    }

    const rol = await getUserRol(token);

    if (rol) {
      next();
    } else {
      return res.status(403).send({
        message: "No autorizado",
      });
    }
  },

  verifyPermission,

  authGitHub: passport.authenticate("auth-github", { session: false }),

  authGoogle: passport.authenticate("auth-google", { session: false }),
};
