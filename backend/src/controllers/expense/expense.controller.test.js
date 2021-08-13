const { mockRequest, mockResponse } = require("jest-mock-req-res");

const expenseController = require('./expense.controller');
const expenseService = require('./expense.service');
jest.mock('./expense.service.js');


describe("Expense controller test.", () => {
  const mockData = [{
    "id": 1,
    "deadlineDate": "2021-08-15",
    "done": "igen",
    "doneDate": "2021-08-10",
    "category": "Rezsi",
    "name": "Albérlet",
    "period": "havi",
    "company": "Főbérlő",
    "doneMethod": "készpénz",
    "user": "Apa",
    "amount": -180000,
  },{
    "id": 2,
    "deadlineDate": "2021-08-09",
    "done": "igen",
    "doneDate": "2021-08-09",
    "category": "Egyéb",
    "name": "Mozi",
    "period": "egyszeri",
    "company": "CinemaCity",
    "doneMethod": "készpénz",
    "user": "Sanyi",
    "amount": -2980,
  },{
    "id": 3,
    "deadlineDate": "2021-08-11",
    "done": "igen",
    "doneDate": "2021-08-11",
    "category": "Bevásárlás",
    "name": "Vegyszerek",
    "period": "egyszeri",
    "company": "Rossmann",
    "doneMethod": "átutalás",
    "user": "Anya",
    "amount": -4999,
  },{
    "id": 4,
    "deadlineDate": "2021-08-12",
    "done": "igen",
    "doneDate": "2021-08-12",
    "category": "Bevásárlás",
    "name": "Bevásárlás",
    "period": "heti",
    "company": "Lidl",
    "doneMethod": "átutalás",
    "user": "Apa",
    "amount": -35600,
  },{
    "id": 5,
    "deadlineDate": "2021-08-03",
    "done": "igen",
    "doneDate": "2021-08-03",
    "category": "Egészségügy",
    "name": "Szemészet",
    "period": "éves",
    "company": "Sinc Kft.",
    "doneMethod": "átutalás",
    "user": "Nagyi",
    "amount": -43000,
  }];

  let response;
  const nextFunction = jest.fn();

  beforeEach(() => {
    expenseService.__setMockData(mockData);
    response = mockResponse();
  });

  test("Find one Expense with valid id.", () => {
    const EXPENSE_ID = 1;
    const request = mockRequest({
      params: {
        id: EXPENSE_ID
      }
    });

    return expenseController
      .findOne(request, response, nextFunction)
      .then(() => {
        expect(expenseService.findOne).toBeCalledWith(EXPENSE_ID);
        expect(response.json).toBeCalledWith(mockData.find(expense => expense.id === EXPENSE_ID));
      });
    });

});
