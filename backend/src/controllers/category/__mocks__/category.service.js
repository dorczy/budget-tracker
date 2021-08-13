const categoryService = jest.mock('./category.service.js');

let mockData;


categoryService.findOne = jest.fn(id => Promise.resolve(
  mockData.find(category => category.id === id) 
));

categoryService.__setMockData = data => mockData = data;



module.exports = categoryService;
