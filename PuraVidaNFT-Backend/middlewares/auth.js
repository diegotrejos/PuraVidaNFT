const jwt = require("jsonwebtoken");
const getQuery = require("../services/databaseService").getQuery;

exports.userIsAuthenticated = async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    const token = req.headers.authorization.split(" ")[1]; // Segundo elemento es el token
    if (token) {
      try {
        const decryptedToken = jwt.verify(token, process.env.JWT_KEY);
        const query = getQuery();
        const sql = `SELECT * FROM puravidanft.User WHERE id = '${decryptedToken.userId}';`;
        const result = await query(sql);
        if (!result[0]) {
          res.status(401).json({
            error: true,
            message: "Las credenciales brindadas no son válidas.",
          });
        } else {
          req.user = decryptedToken;
          next();
        }
      } catch (error) {
        res.status(400).json({
          error: true,
          message:
            "Las credenciales brindadas no son válidas o su sesión ha expirado.",
        });
      }
    } else {
      res.status(401).json({
        error: true,
        message: "El usuario no está autenticado.",
      });
    }
  } else {
    res.status(401).json({
      error: true,
      message: "El usuario no está autenticado.",
    });
  }
};

exports.userIsInRole = (authorizedRoles) => {
  return (req, res, next) => {
    const userRoles = req.user.roles;
    const userValidRole = userRoles.find((ur) => {
      return authorizedRoles.find((ar) => ar === ur) !== undefined;
    });
    if (!userValidRole) {
      res.status(401).json({
        error: true,
        message:
          "El usuario no tiene los accesos necesarios para realizar esta operación.",
      });
    } else {
      next();
    }
  };
};
