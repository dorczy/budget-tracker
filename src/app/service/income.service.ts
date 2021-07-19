import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TableColumn } from '../interface/table-column';
import { Income } from '../model/income';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class IncomeService extends BaseService<Income> {

  config: TableColumn[] = this.configService.income;
  itemIcon: string = 'fa-plus-circle';
  routerName: string = 'incomes';

  constructor(
    public http: HttpClient,
    public configService: ConfigService
  ) {
    super(http, 'incomes', configService);
  }
}
