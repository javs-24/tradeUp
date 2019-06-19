const Favorites = require('../models/favorites');
const favoriteController = {};

favoriteController.getAll = (req, res, next) => {
  console.log(req.query.params.user_id);
  Favorites.getAll(req.query.params.user_id)
    .then(result => {
      res.locals.favoriteItems = result.rows;
      return next();
    })
    .catch(err => {
      return next(err);
    });
};

favoriteController.add = (req, res, next) => {
  Favorites.add(req.body.user_id, req.body.item_id)
    .then(result => {
      next();
    })
    .catch(err => {
      return next(err);
    });
};

module.exports = favoriteController;
