const incomeService = jest.mock('./income.service.js');

let mockData;


incomeService.findOne = jest.fn(id => Promise.resolve(
  mockData.find(income => income.id === id) 
));

incomeService.__setMockData = data => mockData = data;



module.exports = incomeService;
