import { Category } from "./category";
import { User } from "./user";

export class Remaining {
  [propname: string]: any;
  _id: string | number | null = '';
  category: Category = new Category();
  name: string = '';
  period: string = '';
  company: string = '';
  deadlineDate: Date = new Date();
  done: string = 'nem';
  doneDate?: Date;
  doneMethod?: string;
  user: User = new User();
  amount: number = 0;
}
