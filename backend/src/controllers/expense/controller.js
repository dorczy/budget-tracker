const Expense = require('../../models/expense.model');
const expenseService = require('./service');

const baseController = require('../base/controller');
const expenseController = baseController(Expense, ['category user'], expenseService);


module.exports = () => {
  return {
    ...expenseController
  }
}
