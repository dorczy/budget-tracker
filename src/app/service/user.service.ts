import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TableColumn } from '../interface/table-column';
import { User } from '../model/user';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User> {

  config: TableColumn[] = this.configService.user;
  itemIcon: string = 'fa-user-circle';
  routerName: string = 'users';

  constructor(
    public http: HttpClient,
    public configService: ConfigService
  ) {
    super(http, 'users', configService);
  }
}
