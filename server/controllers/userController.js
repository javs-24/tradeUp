// TODO: add middleware here to handle the validation for create account
const Users = require("../models/users");

const userController = {};

userController.createUser = (req, res, next) => {
  Users.checkSign(req.body.userName)
    .then(result => {
      if (result.rows.length === 0) {
        Users.createUser(req.body.userName, req.body.password)
          .then(result => {
            console.log(result);
            res.locals.userInfo = result.rows;
            next();
          })
          .catch(err => next(err));
      } else {
        res.locals.userInfo = [];
        return next();
      }
    })
    .catch(err => console.log("errrrror in the userController =>", err));

  // next();
};

userController.login = (req, res, next) => {
  Users.checkUser(req.body.userName, req.body.password)
    .then(data => {
      console.log("first condition==>>", data);
      res.locals.logedIn = data.rows;
      return next();
    })
    .catch(err => {
      console.log("you got some error =>", err);
    });
};

module.exports = userController;
