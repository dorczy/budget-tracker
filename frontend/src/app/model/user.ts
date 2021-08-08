export class User {
  [propname: string]: any;
  _id: string = '';
  name?: string;
  email: string = '';
  password: string = '';
  role: string | number = 1;
  token?: string;
  age?: number;
}
