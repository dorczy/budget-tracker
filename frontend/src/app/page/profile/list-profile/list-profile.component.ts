import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-list-profile',
  templateUrl: './list-profile.component.html',
  styleUrls: ['./list-profile.component.scss']
})
export class ListProfileComponent implements OnInit, OnDestroy {

  updating = false;

  userSub: Subscription = new Subscription();
  user: User | null = null;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.userSub = this.authService.currentUserSubject.subscribe(
      user => this.user = user,
      err => console.error(err)
    );
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  openEditProfile(_id: number | string): void {
    this.router.navigate(['profile/' + _id]);
  }

}
