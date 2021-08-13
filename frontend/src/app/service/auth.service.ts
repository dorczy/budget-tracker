import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/user';
import { ConfigService } from './config.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl = `${this.configService.apiUrl}/login`;
  logoutUrl = `${this.configService.apiUrl}/logout`;
  storageName = 'currentUser';
  currentUserSubject$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  lastToken: string = '';


  constructor(
    private configService: ConfigService,
    private http: HttpClient,
    private router: Router,
    private userService: UserService,
  ) {
    if (localStorage.currentUser) {
      const user: User = JSON.parse(localStorage.currentUser);
      this.lastToken = user.accessToken || '';
      this.currentUserSubject$.next(user);
    }
  }


  get currentUserValue(): User | null {
    return this.currentUserSubject$.value;
  }



  login(loginData: User): Observable<User | null> {
    return this.http.post<{user: User, accessToken: string}>(
      this.loginUrl,
      loginData
    ).pipe(
      map( response => {
        if (response.user && response.accessToken) {
          this.lastToken = response.accessToken;
          response.user.accessToken = response.accessToken;
          this.currentUserSubject$.next(response.user);
          localStorage.currentUser = JSON.stringify(response.user);
          return response.user;
        }
        return null;
      })
    );
  }


  logout() {
    this.lastToken = '';
    this.currentUserSubject$.next(null);
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }


}
