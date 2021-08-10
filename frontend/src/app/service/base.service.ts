import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T extends { _id: number | string }> {

  apiUrl: string = '';
  entityName: string = '';


  constructor(
    public http: HttpClient,
    @Inject('entityName') entityName: string,
    public configService: ConfigService,
  ) {
    this.entityName = entityName;
    this.apiUrl = `${this.configService.apiUrl}/${this.entityName}`;
    this.getAll();
  }

  create(item: T): Observable<T> {
    return this.http.post<T>(this.apiUrl, item);
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.apiUrl);
  }

  get(id: string | number): Observable<T> {
    return Number(id) === 0 ? new Observable<T>() : this.http.get<T>(`${this.apiUrl}/${id}`);
  }

  query(queryString: string): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}?${queryString}`);
  }

  update(item: T): Observable<T> {
    return this.http.patch<T>(`${this.apiUrl}/${item._id}`, item);
  }

  delete(item: T): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}/${item._id}`);
  }

}
