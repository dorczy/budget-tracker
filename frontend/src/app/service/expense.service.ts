import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  // -- EREDETI:
  // create(expense: Expense | Remaining): void {
  //   console.log(expense);
  //   console.log(typeof expense);
  //   expense.amount = expense.amount * -1;
  //   console.log(expense);
  //   this.http.post<Expense | Remaining>(this.apiUrl, expense).subscribe(
  //     () => this.getAll(),
  //     err => console.error(err)
  //   );
  // }
  // !-- EREDETI
  create(item: Expense | Remaining): Observable<Expense> {
    if (item.amount > 0) {
      item.amount *= -1;
    }

    return this.http.post<Expense>(this.apiUrl, item as Expense);
  }

  update(item: Expense): Observable<Expense> {
    if (item.amount > 0) {
      item.amount *= -1;
    }

    return this.http.patch<Expense>(`${this.apiUrl}/${item._id}`, item);
  }
}
