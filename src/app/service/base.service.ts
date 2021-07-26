import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T extends { id: number }> {

  apiUrl: string = '';
  entityName: string = '';

  list$: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);

  constructor(
    public http: HttpClient,
    @Inject('entityName') entityName: string,
    public configService: ConfigService
  ) {
    this.entityName = entityName;
    this.apiUrl = `${this.configService.apiUrl}/${this.entityName}`;
    this.getAll();
  }

  getAll(): void {
    this.http.get<T[]>(this.apiUrl).subscribe(
      data => this.list$.next(data),
      err => console.error(err)
    );
  }

  get(id: number): Observable<T> {
    return Number(id) === 0 ? new Observable<T>() : this.http.get<T>(`${this.apiUrl}/${id}`);
  }

  create(item: T): void {
    this.http.post<T>(this.apiUrl, item).subscribe(
      () => this.getAll(),
      err => console.error(err)
    );
  }

  update(item: T): Observable<T> {
    return this.http.patch<T>(`${this.apiUrl}/${item.id}`, item);
  }

  delete(id: number): void {
    id = typeof id === 'string' ? parseInt(id) : id;
    this.http.delete<T>(`${this.apiUrl}/${id}`).subscribe(
      () => this.getAll(),
      err => console.error(err)
    );
  }
}
