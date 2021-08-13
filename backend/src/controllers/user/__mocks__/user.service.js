const userService = jest.mock('./user.service.js');

let mockData;


userService.findOne = jest.fn(id => Promise.resolve(
  mockData.find(user => user.id === id) 
));

userService.__setMockData = data => mockData = data;



module.exports = userService;
