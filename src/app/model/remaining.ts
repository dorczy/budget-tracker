import { Category } from "./category";
import { User } from "./user";

export class Remaining {
  [propname: string]: any;
  id: number = 0;
  category: Category = new Category();
  name: string = '';
  period: string = '';
  company: string = '';
  deadlineDate: string = '';
  done: boolean = false;
  doneDate: string = '';
  doneMethod: string = '';
  user: User = new User();
  amount: number = 0;
}
