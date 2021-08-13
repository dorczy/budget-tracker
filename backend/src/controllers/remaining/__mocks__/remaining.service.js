const remainingService = jest.mock('./remaining.service.js');

let mockData;


remainingService.findOne = jest.fn(id => Promise.resolve(
  mockData.find(remaining => remaining.id === id) 
));

remainingService.__setMockData = data => mockData = data;



module.exports = remainingService;
