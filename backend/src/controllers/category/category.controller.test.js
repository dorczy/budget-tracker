const { mockRequest, mockResponse } = require("jest-mock-req-res");

const categoryController = require('./category.controller');
const categoryService = require('./category.service');
jest.mock('./category.service.js');


describe("Category controller test.", () => {
  const mockData = [{
    "id": 1,
    "name": "Rezsi",
  },{
    "id": 2,
    "name": "Egyéb",
  },{
    "id": 3,
    "name": "Autó, utazás",
  },{
    "id": 4,
    "name": "Biztosítás",
  },{
    "id": 5,
    "name": "Kölcsön, hitel",
  },{
    "id": 6,
    "name": "Bevásárlás",
  },{
    "id": 7,
    "name": "Egészségügy",
  }];

  let response;
  const nextFunction = jest.fn();

  beforeEach(() => {
    categoryService.__setMockData(mockData);
    response = mockResponse();
  });

  test("Find one Category with valid id.", () => {
    const CATEGORY_ID = 1;
    const request = mockRequest({
      params: {
        id: CATEGORY_ID
      }
    });

    return categoryController
      .findOne(request, response, nextFunction)
      .then(() => {
        expect(categoryService.findOne).toBeCalledWith(CATEGORY_ID);
        expect(response.json).toBeCalledWith(mockData.find(category => category.id === CATEGORY_ID));
      });
    });

});
