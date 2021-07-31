import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TableColumn } from '../interface/table-column';
import { Expense } from '../model/expense';
import { Remaining } from '../model/remaining';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService extends BaseService<Expense>{

  config: TableColumn[] = this.configService.expense;
  itemIcon: string = 'fa-minus';
  routerName: string = 'expenses';

  constructor(
    public http: HttpClient,
    public configService: ConfigService
  ) {
    super(http, 'expenses', configService);
  }

  create(expense: Expense | Remaining): void {
    expense.amount = expense.amount * -1;
    this.http.post<Expense | Remaining>(this.apiUrl, expense).subscribe(
      () => this.getAll(),
      err => console.error(err)
    );
  }
}
