import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TableColumn } from '../interface/table-column';
import { Expense } from '../model/expense';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService extends BaseService<Expense>{

  config: TableColumn[] = this.configService.expense;
  itemIcon: string = 'fa-minus-circle';
  routerName: string = 'expenses';

  constructor(
    public http: HttpClient,
    public configService: ConfigService
  ) {
    super(http, 'expenses', configService);
  }
}
