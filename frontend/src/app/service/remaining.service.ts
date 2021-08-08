import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TableColumn } from '../interface/table-column';
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
}
