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

  // list$: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);

  constructor(
    public http: HttpClient,
    @Inject('entityName') entityName: string,
    public configService: ConfigService,
  ) {
    this.entityName = entityName;
    this.apiUrl = `${this.configService.apiUrl}/${this.entityName}`;
    this.getAll();
  }


  // -- EREDETI METÓDUSOK:
  // create(item: T): void {
  //   this.http.post<T>(this.apiUrl, item).subscribe(
  //     () => this.getAll(),
  //     err => console.error(err)
  //   );
  // }
  // getAll(): void {
  //   this.http.get<T[]>(this.apiUrl).subscribe(
  //     data => this.list$.next(data),
  //     err => console.error(err)
  //     );
  // }
  // get(id: number): Observable<T> {
  //   return Number(id) === 0 ? new Observable<T>() : this.http.get<T>(`${this.apiUrl}/${id}`);
  // }
  // update(item: T): Observable<T> {
  //   return this.http.patch<T>(`${this.apiUrl}/${item.id}`, item);
  // }
  // delete(id: number): void {
  //   id = typeof id === 'string' ? parseInt(id) : id;
  //   this.http.delete<T>(`${this.apiUrl}/${id}`).subscribe(
  //     () => this.getAll(),
  //     err => console.error(err)
  //   );
  // }
  // !-- EREDETI METÓDUSOK




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
    return this.http.patch<T>(`${this.apiUrl}/${item.id}`, item);
  }

  delete(item: T): Observable<T> {
    item.id = typeof item.id === 'string' ? parseInt(item.id) : item.id;
    return this.http.delete<T>(`${this.apiUrl}/${item.id}`);
  }



}
