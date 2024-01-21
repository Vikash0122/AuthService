const express = require("express");
const { PORT } = require("./config/serverConfig");
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/index');
// const UserRepository = require("./repository/user-repository");

const getServerStarted = async() => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use('/api', apiRoutes);

  app.listen(PORT, async() => {
    console.log(`Server Started on Port: ${PORT}`);
    // const userRepository = new UserRepository();
    // const user = await userRepository.getById(2);
    // console.log(user);
  });
};

getServerStarted();