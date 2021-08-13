const expenseService = jest.mock('./expense.service.js');

let mockData;


expenseService.findOne = jest.fn(id => Promise.resolve(
  mockData.find(expense => expense.id === id) 
));

expenseService.__setMockData = data => mockData = data;



module.exports = expenseService;
