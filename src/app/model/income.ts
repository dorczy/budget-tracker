import { Category } from "./category";
import { User } from "./user";

export class Income {
  [propname: string]: any;
  id: number = 0;
  category: Category = new Category();
  name: string = '';
  period: string = '';
  company: string = '';
  date: string = '';
  doneMethod: string = '';
  user: User = new User();
  amount: number = 0;
}
