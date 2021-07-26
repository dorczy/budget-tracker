import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-list-profile',
  templateUrl: './list-profile.component.html',
  styleUrls: ['./list-profile.component.scss']
})
export class ListProfileComponent implements OnInit {

  updating = false;
  user: User = new User();
  userId: string = '1';

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(
    //   params => this.userId = params.id === undefined ? "0" : params.id
    // );
    this.userService.get(parseInt(this.userId)).subscribe(
      user => this.user = user
    );
  }

  openEditProfile(id: number): void {
    this.router.navigate(['profile/' + id]);
  }

}
