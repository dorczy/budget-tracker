import { User } from "./user";

export class Income {
  [propname: string]: any;
  _id: string = '';
  name: string = '';
  period: string = '';
  company: string = '';
  doneDate: Date = new Date();
  doneMethod: string = '';
  user: User = new User();
  amount: number = 0;
}
