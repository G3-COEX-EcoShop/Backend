const passport = require("passport");
const tokenService = require("../services/token");
const { parseCookie } = require("../services/cookie");

const tables = {
  category: "categoryPermission",
  product: "productPermission",
  order: "ordersPermission",
  review: "reviewsPermission",
  user: "userPermission",
};
const methods = {
  manager: "can_manager",
  create: "can_create",
  read: "can_read",
  update: "can_update",
  delete: "can_delete",
  activate: "can_activate",
  deactivate: "can_deactivate",
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
  return async (req, res, next) => {
    const cookie = parseCookie(req.headers.cookie);
    if (!cookie.token) {
      return res.status(403).send({ message: "No token" });
    }
    const rol = await getUserRol(cookie.token);
    if (
      rol &&
      rol.dataValues[tablePermission] &&
      rol.dataValues[tablePermission].dataValues[methodPermission] &&
      rol.dataValues[tablePermission].dataValues[methods.manager]
    ) {
      next();
    } else {
      const errorMessage = `No está autorizado para ${tables[table]} con acción de ${methods[method]}`;
      const userDetails = {
        rol: rol ? rol.dataValues : null,
        table: table,
        requiredPermission: {
          method: method,
          manager: methods.manager,
        },
        userPermission:
          rol &&
          rol.dataValues[tablePermission] &&
          rol.dataValues[tablePermission].dataValues,
      };
      return res.status(403).send({
        message: errorMessage,
        userDetails: userDetails,
      });
    }
  };
};

module.exports = {
  verifyUser: async (req, res, next) => {
    const cookie = parseCookie(req.headers.cookie);
    if (!cookie.token) {
      return res.status(403).send({ message: "No token" });
    }
    const rol = await getUserRol(cookie.token);
    if (rol) {
      next();
    } else {
      return res.status(403).send({ message: "No autorizado" });
    }
  },
  verifyPermission,
  authGitHub: passport.authenticate("auth-github", { session: false }),
  authGoogle: passport.authenticate("auth-google", { session: false }),
};
