const bcrypt = require("bcrypt"); //Encriptador
const { sendRecoveryCodeEmail } = require("../services/mailService");
const query = require("../services/databaseService");

const saltRounds = 10;

exports.createUser = async (req, res) => {
    try {
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
    const userPayload = req.body;
    const sql = `SELECT * FROM puravidanft.User WHERE email = '${userPayload.email}';`;
     
    try {
      const result = await query(sql);
      if (!result[0]){
        res.status(401).send("Credenciales invalidos.");
        return;
      }
  
      const verifyPassword = await bcrypt.compare(userPayload.password, result[0].password);
      if (!verifyPassword){
        res.status(401).send("Datos invalidos.");
        return;
      }
      const user = result[0];
      delete user.password;
      res.json(user);
    } catch (error) {
      res.status(500).json({
        message: "Error al iniciar sesion: " + error,
      });
    }
  };

exports.recoverPassword = async (req, res) => {
    try {
      const userPayload = req.body;
      const user = await db.User.findOne({
        where: { email: userPayload.email },
      });
      if (!user) {
        res.status(401).send("Datos no válidos");
        return;
      }
      const randomToken = Math.floor(
        Math.random() * (999999 - 100000 + 1) + 100000
      );
  
      await db.UserRecoveryCode.destroy({
        where: {
          userId: user.id,
        },
      });
  
      const nowDate = new Date();
      const expirationDate = new Date(
        nowDate.setMinutes(nowDate.getMinutes() + 15)
      ).toISOString();
  
      await db.UserRecoveryCode.create({
        userId: user.id,
        code: randomToken,
        expirationDate,
      });
  
      await sendRecoveryCodeEmail(user.email, randomToken);
  
      res.status(200).send();
    } catch (error) {
      res.status(500).send("Server error: " + error);
    }
  };

exports.resetPassword = async (req, res) => {
    try {
      const userPayload = req.body;
  
      const user = await db.User.findOne({
        where: { email: userPayload.email },
        include: ["recoveryCode"],
      });
      if (
        !user ||
        !user.recoveryCode ||
        user.recoveryCode.code !== userPayload.code
      ) {
        res.status(401).send("Datos no válidos");
        return;
      }
      
      if (user.recoveryCode.expirationDate < new Date()) {
        res
          .status(401)
          .send(
            "El código de recuperación brindado ya expiró. Solicite un nuevo código de recuperación."
          );
        return;
      }
  
      user.password = await bcrypt.hash(userPayload.password, saltRounds);
      user.save();
  
      await db.UserRecoveryCode.destroy({
        where: {
          userId: user.id,
        },
      });
  
      res.status(204).send();
    } catch (error) {
      res.status(500).send("Server error: " + error);
    }
  };