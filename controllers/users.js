const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt"); //Encriptador
const { sendRecoveryCodeEmail } = require("../services/mailService");
const data = require("../utils/data");

const saltRounds = 10;

exports.createUser = async (req, res) => {
  try {
    const userPayload = req.body; 
    let lenght = data.users.length;

    encryptedPassword = await bcrypt.hash(userPayload.password, saltRounds);
    data.users.push({
      id: lenght,
      name: userPayload.name,
      email: userPayload.email,
      password: encryptedPassword,
      photo: "https://ci0137.s3.amazonaws.com/NFT/users/incognito.png",
      balance: 20
    });
    
    console.log(data.users);
    
    res.json({
      userData: data.users});
      
  } catch (error) {
    res.status(500).json({
      message: "Error al registrar el usuario",
    });
  }
};

exports.editUser = async (req, res) => {
  try {
    const userPayload = req.body; 
    const users = data.users;
    const idUser = userPayload.id;

    console.log(users);

    let updatedUser;
    for(let user of data.users){
      if(user.id === idUser){
        user.name = userPayload.name;
        user.email = userPayload.email;  
        user.photo = userPayload.picture;
        updatedUser = user;
    }
  }
    console.log(data.users);
    res.json({
      ...updatedUser,
    });

    console.log(users);

  } catch (error) {
    res.status(500).json({
      message: "Error al editar usuario el usuario",
    });
  }
};


exports.loginUser = async (req, res) => {
  try {
    const userPayload = req.body;
    const users = data.users;
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

    const userRoles = data.userRoles;
    const roles = userRoles.find(obj => {
        return obj.idUser === userPayload.id;
      });

    const rolesIds = roles.idRol;
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
    const userPayload = req.body;
    const users = data.users;
    const found = users.find(obj => {
        return obj.email === userPayload.email;
      });

    if (!found) {
      res.status(401).send("Credenciales invalidos.");
      return;
    }

    const user = found; 
    const randomToken = Math.floor(
      Math.random() * (999999 - 100000 + 1) + 100000
    );

    // Delete old codes from same user
    for(let i = 0; i < data.recoveryCodes.length; i++) {
      if(data.recoveryCodes[i].idUser == user.id){
        data.recoveryCodes.splice(i, 1);
      }
    };

    // Insert new code into table
    data.recoveryCodes.push({
      idUser: user.id,
      code: randomToken
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
    let user;

    // Search user
    for(let i = 0; i < data.users.length; i++) {
      if(data.users[i].email == userPayload.email){
        user = data.users[i];
      }
    };

    if (user == undefined) {
      res.status(401).send("Credenciales inválidos.");
      return;
    }

    // Validate restore code
    let userCode;
    for(let i = 0; i < data.recoveryCodes.length; i++) {
      if(data.recoveryCodes[i].idUser == user.id && data.recoveryCodes[i].code == userPayload.code){
        userCode = data.recoveryCodes[i].code;
      }
    };

    if (userCode == undefined) {
      res.status(401).send("Código incorrecto.");
      return;
    }

    // Update new password
    let updatedUser;
    for(let i = 0; i < data.users.length; i++) {
      if(data.users[i].id == user.id){
        data.users[i].password = await bcrypt.hash(userPayload.password, saltRounds);
        updatedUser = data.users[i];
      }
    };

    // Delete old codes from same user
    for(let i = 0; i < data.recoveryCodes.length; i++) {
      if(data.users[i].idUSer == user.id){
        data.recoveryCodes.splice(i, 1);
      }
    };

    res.json({
      ...updatedUser,
    });
  } catch (error) {
    res.status(500).send("Server error: " + error);
  }
};

exports.changePassword = async (req, res) => {
  try {
    const userPayload = req.body;
    let user;

    // Search user
    for(let i = 0; i < data.users.length; i++) {
      if(data.users[i].email == userPayload.email){
        user = data.users[i];
      }
    };

    if (user == undefined) {
      res.status(401).send("Credenciales inválidos.");
      return;
    }

    // Check that the passwords are the same
    let same = false;
    if (userPayload.password == userPayload.confirm){
      same = true;
    }

    if (!same) {
      res.status(401).send("Contraseñas inválidas.");
      return;
    }

    // Update new password
    let updatedUser;
    for(let i = 0; i < data.users.length; i++) {
      if(data.users[i].id == user.id){
        data.users[i].password = await bcrypt.hash(userPayload.password, saltRounds);
        updatedUser = data.users[i];
      }
    };

    res.json({
      ...updatedUser,
    });

  } catch (error) {
    res.status(500).send("Server error: " + error);
  }
};

exports.listUsers = async (req, res) => {
  try {
    const query = getQuery();
    const querySelect = "SELECT id, name, email FROM puravidanft.User";
    const users = await query(querySelect);
    Swagger.validateModel('Users', res);
    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: "Ocurrió un error al recuperar los usuarios.",
      error,
    });
  }
};
