export class User {
  [propname: string]: any;
  id: number = 0;
  name?: string;
  email: string = '';
  password: string = '';
  role: string | number = 1;
  token?: string;
  age?: number;
}
