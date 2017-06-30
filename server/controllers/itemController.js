const Item = require('../models/item');

exports.getAll = (req, res, next) => {
  Item.find((err, items) => {
    if (err) res.send(err);
    res.send(items);
  });
};

exports.create = (req, res, next) => {
  Item.create(req.body, (err, user) => {
    if (err) res.send(err);
    else {
      res.send(user);
    }
  });
};
