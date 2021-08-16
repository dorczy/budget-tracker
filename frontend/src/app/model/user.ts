export class User {
  [propname: string]: any;
  _id: string | number | null = '';
  name?: string;
  email: string = '';
  password: string = '';
  role: string | number = 2;
  accessToken?: string;
  age?: number;
}
