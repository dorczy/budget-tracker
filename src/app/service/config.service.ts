import { Injectable } from '@angular/core';
import { TableColumn } from '../interface/table-column';
import { HufPipe } from '../pipe/huf.pipe';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  apiUrl: string = 'http://localhost:3000';

  /*
    user
    income
    expense
    remaining
    category
  */

  user: TableColumn[] = [
    { key: 'id', title: '#', hidden: true },
    { key: 'name', title: 'Név' },
    { key: 'email', title: 'Email' },
    { key: 'password', title: 'Jelszó' },
    { key: 'role', title: 'Jogosultság' },
    { key: 'age', title: 'Kor' },
  ];

  income: TableColumn[] = [
    { key: 'id', title: '#', hidden: true },
    { key: 'category', title: 'Kategória', modification: true },
    { key: 'name', title: 'Megnevezés', modification: true },
    { key: 'period', title: 'Gyakoriság' },
    { key: 'company', title: 'Cég' },
    { key: 'date', title: 'Teljesítés dátuma' },
    { key: 'doneMethod', title: 'Teljesítés módja' },
    { key: 'user', title: 'Felhasználó', modification: true },
    { key: 'amount', title: 'Összeg', modification: true, pipe: HufPipe },
  ];

  expense: TableColumn[] = [
    { key: 'id', title: '#', hidden: true },
    { key: 'category', title: 'Kategória', modification: true },
    { key: 'name', title: 'Megnevezés', modification: true },
    { key: 'period', title: 'Gyakoriság'},
    { key: 'company', title: 'Cég' },
    { key: 'deadlineDate', title: 'Határidő' },
    { key: 'done', title: 'Teljesítve' },
    { key: 'doneDate', title: 'Teljesítés dátuma' },
    { key: 'doneMethod', title: 'Teljesítés módja' },
    { key: 'user', title: 'Felhasználó', modification: true },
    { key: 'amount', title: 'Összeg', modification: true, pipe: HufPipe },
  ];

  remaining: TableColumn[] = [
    { key: 'id', title: '#', hidden: true },
    { key: 'category', title: 'Kategória', modification: true },
    { key: 'name', title: 'Megnevezés', modification: true },
    { key: 'period', title: 'Gyakoriság'},
    { key: 'company', title: 'Cég' },
    { key: 'deadlineDate', title: 'Határidő' },
    { key: 'done', title: 'Teljesítve' },
    { key: 'doneDate', title: 'Teljesítés dátuma' },
    { key: 'doneMethod', title: 'Teljesítés módja' },
    { key: 'user', title: 'Felhasználó', modification: true },
    { key: 'amount', title: 'Összeg', modification: true, pipe: HufPipe },
  ];

  category: TableColumn[] = [
    { key: 'id', title: '#', hidden: true },
    { key: 'mainCategory', title: 'Főkategória' },
    { key: 'subCategory', title: 'Alkategória' },
  ];

  constructor() { }
}
