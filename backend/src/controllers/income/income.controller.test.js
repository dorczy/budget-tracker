const { mockRequest, mockResponse } = require("jest-mock-req-res");

const incomeController = require('./income.controller');
const incomeService = require('./income.service');
jest.mock('./income.service.js');


describe("Income controller test.", () => {
  const mockData = [{
    "id": 1,
    "name": "Fizetés",
    "period": "havi",
    "company": "OTP Bank Kft.",
    "doneDate": "2021-08-05",
    "doneMethod": "átutalás",
    "user": "Apa",
    "amount": 540000,
  },{
    "id": 1,
    "name": "Fizetés",
    "period": "havi",
    "company": "Kemence Pék Kft.",
    "doneDate": "2021-08-03",
    "doneMethod": "átutalás",
    "user": "Anya",
    "amount": 181000,
  },{
    "id": 1,
    "name": "Nyugdíj",
    "period": "havi",
    "company": "Magyar Államkincstár Kft.",
    "doneDate": "2021-08-12",
    "doneMethod": "készpénz",
    "user": "Nagyi",
    "amount": 198000,
  },{
    "id": 1,
    "name": "Sportfogadás",
    "period": "egyszeri",
    "company": "Szerencsejáték Zrt.",
    "doneDate": "2021-08-09",
    "doneMethod": "készpénz",
    "user": "Sanyi",
    "amount": 2760,
  }];

  let response;
  const nextFunction = jest.fn();

  beforeEach(() => {
    incomeService.__setMockData(mockData);
    response = mockResponse();
  });

  test("Find one Income with valid id.", () => {
    const INCOME_ID = 1;
    const request = mockRequest({
      params: {
        id: INCOME_ID
      }
    });

    return incomeController
      .findOne(request, response, nextFunction)
      .then(() => {
        expect(incomeService.findOne).toBeCalledWith(INCOME_ID);
        expect(response.json).toBeCalledWith(mockData.find(income => income.id === INCOME_ID));
      });
    });

});
