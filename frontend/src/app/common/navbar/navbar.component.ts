import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationItem } from 'src/app/model/navigation-item';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  navFirstBlock: NavigationItem[] = this.configService.navigationFirstBlock;
  navLogin: NavigationItem = this.configService.navigationLogin;
  navUser: NavigationItem = this.configService.navigationUser;

  loginStatus: boolean = false;
  userSub: Subscription = new Subscription();
  user: User | null = null;


  constructor(
    private configService: ConfigService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.userSub = this.authService.currentUserSubject$.subscribe(
      user => this.user = user,
      err => console.error(err)
    );
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  onLogout(): void {
    this.authService.logout();
  }


}
