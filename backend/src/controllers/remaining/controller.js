const Remaining = require('../../models/remaining.model');
const remainingService = require('./service');

const baseController = require('../base/controller');
const remainingController = baseController(Remaining, ['category user'], remainingService);


module.exports = () => {
  return {
    ...remainingController
  }
}