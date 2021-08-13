const { mockRequest, mockResponse } = require("jest-mock-req-res");

const remainingController = require('./remaining.controller');
const remainingService = require('./remaining.service');
jest.mock('./remaining.service.js');


describe("Remaining controller test.", () => {
  const mockData = [{
    "id": 1,
    "category": "Autó, utazás",
    "name": "BKV bérlet",
    "period": "havi",
    "company": "BKK Kft.",
    "deadlineDate": "",
    "done": "nem",
    "user": "Anya",
    "amount": 9500,
  },{
    "id": 2,
    "category": "Rezsi",
    "name": "Áram",
    "period": "2 havi",
    "company": "ELMŰ Kft.",
    "deadlineDate": "",
    "done": "nem",
    "user": "Apa",
    "amount": 21300,
  },{
    "id": 3,
    "category": "Biztosítás",
    "name": "Személybiztosítás",
    "period": "éves",
    "company": "Generali Kft.",
    "deadlineDate": "",
    "done": "nem",
    "user": "Nagyi",
    "amount": 55120,
  },{
    "id": 4,
    "category": "Rezsi",
    "name": "Mobilrészlet",
    "period": "3 havi",
    "company": "Telekom",
    "deadlineDate": "",
    "done": "nem",
    "user": "Sanyi",
    "amount": 33980,
  }];

  let response;
  const nextFunction = jest.fn();

  beforeEach(() => {
    remainingService.__setMockData(mockData);
    response = mockResponse();
  });

  test("Find one Remaining with valid id.", () => {
    const REMAINING_ID = 1;
    const request = mockRequest({
      params: {
        id: REMAINING_ID
      }
    });

    return remainingController
      .findOne(request, response, nextFunction)
      .then(() => {
        expect(remainingService.findOne).toBeCalledWith(REMAINING_ID);
        expect(response.json).toBeCalledWith(mockData.find(remaining => remaining.id === REMAINING_ID));
      });
    });

});
