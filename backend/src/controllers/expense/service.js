const Expense = require('../../models/expense.model');

const baseService = require('../base/service');
const expenseService = baseService(Expense, ['category user']);


module.exports = () => {
  return { 
    ...expenseService,

    create: (expenseData) => {
      if (expenseData.amount > 0) {
        expenseData.amount *= -1;
      };

      const expense = new Expense(expenseData);
      return expense.save();
    },
    
    
    update: (id, updatedExpenseData) => {
      if (updatedExpenseData.amount > 0) {
        updatedExpenseData.amount *= -1;
      };
    
      return Expense.findByIdAndUpdate(id, updatedExpenseData, {new: true});
    }
    
  };
};
