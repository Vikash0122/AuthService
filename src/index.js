const express = require("express");
const { PORT } = require("./config/serverConfig");
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/index');
// const db = require("./models/index");


const getServerStarted = async() => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use('/api', apiRoutes);

  app.listen(PORT, async() => {
//    db.sequelize.sync({ alter: true });
    console.log(`Server Started on Port: ${PORT}`);
  });
};

getServerStarted();