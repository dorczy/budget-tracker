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
export class RemainingService extends BaseService<Remaining> {

  config: TableColumn[] = this.configService.remaining;
  itemIcon: string = 'fa-exclamation';
  routerName: string = 'remainings';

  constructor(
    public http: HttpClient,
    public configService: ConfigService
  ) {
    super(http, 'remainings', configService);
  }

  create(item: Remaining | Expense): Observable<Remaining> {
    if (item.amount < 0) {
      item.amount *= -1;
    }
    return this.http.post<Remaining>(this.apiUrl, item as Remaining);
  }
}
