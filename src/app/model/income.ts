import { User } from "./user";

export class Income {
  [propname: string]: any;
  id: number = 0;
  name: string = '';
  period: string = '';
  company: string = '';
  doneDate: string = '';
  doneMethod: string = '';
  user: User = new User();
  amount: number = 0;
}
