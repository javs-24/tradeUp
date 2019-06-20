// TODO: add middleware here to handle the validation for create account
const Users = require('../models/users');

const userController = {};

userController.createUser = (req, res, next) => {
  // console.log('testing this, does it get here?');
  // console.log(req.body)
  Users.createUser(req.body.userName, req.body.password)
    .then((result) => {
      console.log('testng rows', result.rows);
      res.locals.userInfo = result.rows;
      // console.log(res.locals);
      next();
    })
    .catch(err => next(err));
  // next();
};


module.exports = userController;
