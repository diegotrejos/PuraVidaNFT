const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt"); //Encriptador
const { sendRecoveryCodeEmail } = require("../services/mailService");
const data = require("../utils/data");
//const getQuery = require("../services/databaseService").getQuery;

const saltRounds = 10;

exports.createUser = async (req, res) => {
  try {
    const query = getQuery();
    const userPayload = req.body;
    const sql = `INSERT INTO puravidanft.User
          (name,
          email,
          password)
          VALUES (
              '${userPayload.name}',
              '${userPayload.email}',
              '${await bcrypt.hash(userPayload.password, saltRounds)}'
              );
      `;
    const result = await query(sql);
    const querySelect = `SELECT id, name, email FROM puravidanft.User WHERE id=${result.insertId}`;
    const user = await query(sqlSelect);
    res.json(user[0]);
  } catch (error) {
    res.status(500).json({
      message: "Error al registrar el usuario",
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    /* const query = getQuery();
    const userPayload = req.body;
    const sql = `SELECT * FROM puravidanft.User WHERE email = '${userPayload.email}';`;
    const result = await query(sql); */

    const userPayload = req.body;
    const users = data.usersData;
    const found = users.find(obj => {
        return obj.email === userPayload.email;
      });

    if (!found) {
      res.status(401).send("Credenciales invalidos.");
      return;
    }

    const verifyPassword = await bcrypt.compare(
      userPayload.password,
      found.password
    );
    if (!verifyPassword) {
      res.status(401).send("Datos invalidos.");
      return;
    }
    const user = found;
    delete user.password;

    //const sqlQueryRoles = `SELECT * FROM puravidanft.UserRoles WHERE idUser = '${user.id}'`;
    //const roles = await query(sqlQueryRoles);

    const roles = data.roles;
    const rolesIds = roles.map((r) => r.id);

    const token = jwt.sign(
      { userId: user.id, roles: rolesIds },
      process.env.JWT_KEY,
      {
        expiresIn: "10m",
      }
    );
    res.json({
      ...user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al iniciar sesión: " + error,
    });
  }
};

exports.recoverPassword = async (req, res) => {
  try {
    const query = getQuery();
    const userPayload = req.body;
    const queryUserSQL = `SELECT id, email FROM puravidanft.User WHERE email = '${userPayload.email}';`;
    const result = await query(queryUserSQL);

    if (!result[0]) {
      res.status(401).send("Datos inválidos");
      return;
    }

    const user = result[0];
    const randomToken = Math.floor(
      Math.random() * (999999 - 100000 + 1) + 100000
    );

    const deleteCodeSQL = `DELETE puravidanft.Recovery_Codes WHERE id = ${user.id};`;
    await query(deleteCodeSQL);

    const insertCodeSQL = `INSERT INTO puravidanft.Recovery_Codes
    (idUser, code)
    VALUES(${user.id}, ${randomToken});`;
    await query(insertCodeSQL);

    await sendRecoveryCodeEmail(user.email, randomToken);

    res.status(200).send();
  } catch (error) {
    res.status(500).send("Server error: " + error);
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const query = getQuery();
    const userPayload = req.body;
    const queryUserSQL = `SELECT u.id, rc.code
    FROM Recovery_Codes rc
    JOIN User u ON rc.userId = u.id
    WHERE u.email = '${userPayload.email}';`;

    const result = await query(queryUserSQL);
    if (!result[0] || result[0].code !== userPayload.code) {
      res.status(401).send("Datos inválidos");
      return;
    }

    const userCode = result[0];
    const updatePasswordSQL = `UPDATE puravidanft.User
    SET password='${await bcrypt.hash(userPayload.password, saltRounds)}'
    WHERE id=${userCode.id};`;
    await query(updatePasswordSQL);

    const deleteCodeSQL = `DELETE puravidanft.Recovery_Codes WHERE id = ${userCode.id};`;
    await query(deleteCodeSQL);

    res.status(204).send();
  } catch (error) {
    res.status(500).send("Server error: " + error);
  }
};

exports.listUsers = async (req, res) => {
  try {
    const query = getQuery();
    const querySelect = "SELECT id, name, email FROM puravidanft.User";
    const users = await query(querySelect);
    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: "Ocurrió un error al recuperar los usuarios.",
      error,
    });
  }
};
