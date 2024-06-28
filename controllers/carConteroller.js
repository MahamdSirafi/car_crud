const Car = require('../models/carModel');
const factory = require('../utils/handlerFactory');
exports.getAllcar = factory.getAll(Car);
exports.getcar = factory.getOne(Car);
exports.createcar = factory.createOne(Car);
exports.updatecar = factory.updateOne(Car);
exports.deletecar = factory.deleteOne(Car);
