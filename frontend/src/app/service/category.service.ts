import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TableColumn } from '../interface/table-column';
import { Category } from '../model/category';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService<Category> {

  config: TableColumn[] = this.configService.category;
  itemIcon: string = 'fa-folder-open';
  routerName: string = 'categories';

  constructor(
    public http: HttpClient,
    public configService: ConfigService
  ) {
    super(http, 'categories', configService)
  }
}
