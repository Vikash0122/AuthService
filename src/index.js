const express = require("express");
const { PORT } = require("./config/serverConfig");
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/index');
// const db = require("./models/index");
// const { User, Role } = require("./models/index");


const getServerStarted = async() => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use('/api', apiRoutes);

  app.listen(PORT, async() => {
//    db.sequelize.sync({ alter: true });
      // const u1 = await User.findByPk(3);
      // const r1 = await Role.findByPk(2);
      // u1.addRole(r1);
    console.log(`Server Started on Port: ${PORT}`);
  });
};

getServerStarted();