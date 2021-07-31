import { Injectable } from '@angular/core';
import { TableColumn } from '../interface/table-column';
import { NavigationItem } from '../model/navigation-item';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  public readonly apiUrl: string = 'http://localhost:3000';

  public readonly navigationFirstBlock: NavigationItem[] = [
    {label: 'Összegző lista',       routerLink: '/summary',     icon: 'fas fa-list-ul',            role: 2},
    {label: 'Bevételek',            routerLink: '/incomes',     icon: 'fas fa-plus-circle',        role: 2},
    {label: 'Kiadások',             routerLink: '/expenses',    icon: 'fas fa-minus-circle',       role: 2},
    {label: 'Befizetendő számlák',  routerLink: '/remainings',  icon: 'fas fa-exclamation-circle', role: 2},
  ];

  public readonly navigationSecondBlock: NavigationItem[] = [
    { label: 'Bejelentkezés',  routerLink: '/login',   icon: 'fas fa-sign-in-alt',   role: 1 },
    { label: 'Profil',         routerLink: '',         icon: 'fas fa-user',          role: 2,
      dropdownItem: true,
      dropdown: [
        { label: 'Profil megtekintése',   routerLink: '/profile',   icon: 'fas fa-user-edit',     role: 2 },
        { label: 'Felhasználók',          routerLink: '/users',     icon: 'fas fa-users',         role: 3 },
        { label: 'Kijelentkezés',         routerLink: '',           icon: 'fas fa-sign-out-alt',  role: 2 }
      ]
    }
  ];


  /*
    user
    income
    expense
    remaining
    category
  */

  public readonly user: TableColumn[] = [
    { key: 'id',        title: '#',     hidden: true },
    { key: 'name',      title: 'Név' },
    { key: 'email',     title: 'Email' },
    { key: 'password',  title: 'Jelszó' },
    { key: 'role',      title: 'Jogosultság' },
    { key: 'age',       title: 'Kor' },
  ];

  public readonly income: TableColumn[] = [
    { key: 'id',          title: '#',             hidden: true },
    { key: 'name',        title: 'Megnevezés',    modification: true },
    { key: 'period',      title: 'Gyakoriság' },
    { key: 'company',     title: 'Cég' },
    { key: 'doneDate',    title: 'Teljesítés dátuma' },
    { key: 'doneMethod',  title: 'Teljesítés módja' },
    { key: 'user',        title: 'Felhasználó',   modification: true },
    { key: 'amount',      title: 'Összeg',        modification: true },
  ];

  public readonly expense: TableColumn[] = [
    { key: 'id',            title: '#',             hidden: true },
    { key: 'category',      title: 'Kategória',     modification: true },
    { key: 'name',          title: 'Megnevezés',    modification: true },
    { key: 'period',        title: 'Gyakoriság'},
    { key: 'company',       title: 'Cég' },
    { key: 'deadlineDate',  title: 'Határidő' },
    { key: 'done',          title: 'Teljesítve' },
    { key: 'doneDate',      title: 'Teljesítés dátuma' },
    { key: 'doneMethod',    title: 'Teljesítés módja' },
    { key: 'user',          title: 'Felhasználó',   modification: true },
    { key: 'amount',        title: 'Összeg',        modification: true },
  ];

  public readonly remaining: TableColumn[] = [
    { key: 'id',            title: '#', hidden: true },
    { key: 'category',      title: 'Kategória',     modification: true },
    { key: 'name',          title: 'Megnevezés',    modification: true },
    { key: 'period',        title: 'Gyakoriság'},
    { key: 'company',       title: 'Cég' },
    { key: 'deadlineDate',  title: 'Határidő' },
    { key: 'done',          title: 'Teljesítve' },
    { key: 'doneDate',      title: 'Teljesítés dátuma' },
    { key: 'doneMethod',    title: 'Teljesítés módja' },
    { key: 'user',          title: 'Felhasználó',   modification: true },
    { key: 'amount',        title: 'Összeg',        modification: true },
  ];

  public readonly category: TableColumn[] = [
    { key: 'id',    title: '#',             hidden: true },
    { key: 'name',  title: 'Kategória neve' }
  ];

  constructor() { }
}
