import { Category } from "./category";
import { User } from "./user";

export class Expense {
  [propname: string]: any;
  _id: string | number | null = '';
  category: Category = new Category();
  name: string = '';
  period: string = '';
  company: string = '';
  deadlineDate!: Date | string;
  done: string = 'igen';
  doneDate!: Date | string;
  doneMethod: string = '';
  user: User = new User();
  amount: number = 0;
}
