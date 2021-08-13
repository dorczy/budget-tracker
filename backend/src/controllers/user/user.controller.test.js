const { mockRequest, mockResponse } = require("jest-mock-req-res");

const userController = require('./user.controller');
const userService = require('./user.service');
jest.mock('./user.service.js');


describe("User controller test.", () => {
  const mockData = [{
    "id": 1,
    "name": "Anya",
    "email": "anya@gmail.com",
    "age": 40,
    "role": 3,
  }, {
    "id": 2,
    "name": "Nagyi",
    "email": "nagyi@gmail.com",
    "age": 74,
    "role": 2,
  }, {
    "id": 3,
    "name": "Sanyi",
    "email": "sanyi@gmail.com",
    "age": 16,
    "role": 2,
  }, {
    "id": 4,
    "name": "Apa",
    "email": "tdekeep3@fc2.com",
    "age": 43,
    "role": 3,
  }, {
    "id": 5,
    "name": "Papa",
    "email": "papa@gmail.com",
    "age": 79,
    "role": 2,
  }];

  let response;
  const nextFunction = jest.fn();

  beforeEach(() => {
    userService.__setMockData(mockData);
    response = mockResponse();
  });

  test("Find one User with valid id.", () => {
    const USER_ID = 1;
    const request = mockRequest({
      params: {
        id: USER_ID
      }
    });

    return userController
      .findOne(request, response, nextFunction)
      .then(() => {
        expect(userService.findOne).toBeCalledWith(USER_ID);
        expect(response.json).toBeCalledWith(mockData.find(user => user.id === USER_ID));
      });
    });

});
