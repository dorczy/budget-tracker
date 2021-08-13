const Remaining = require('../../models/remaining.model');

const baseService = require('../base/service');
const remainingService = baseService(Remaining, ['category user']);


module.exports = () => {
  return {
    ...remainingService,

    create: (remainingData) => {
      if (remainingData.amount < 0) {
        remainingData.amount *= -1;
      };
      const remaining = new Remaining(remainingData);
      return remaining.save();
    }
  };
};
