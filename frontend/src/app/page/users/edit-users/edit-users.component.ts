import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss']
})
export class EditUsersComponent implements OnInit {

  updating = false;

  user: User = new User();
  userId: string = "";
  routerName: string = this.userService.routerName;


  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => this.userId = params._id === undefined ? "0" : params._id,
      err => console.error(err)
    );
    this.userService.get(this.userId).subscribe(
      user => this.user = user,
      err => console.error(err)
    );
  }


  saveUser(user: User): void {
    this.updating = true;

    // itt nincs új felvétele:
    if (user._id === "") {
      this.router.navigate([this.routerName]);

    // egy User adatainak frissítése:
    } else {
      this.userService.update(user).subscribe(
        () => this.router.navigate([this.routerName]),
        err => console.error(err)
      );
      this.toastr.success('Sikeresen módosította a felhasználó adatait!', '', {
        timeOut: 8000,
        closeButton: true,
        progressBar: true,
        extendedTimeOut: 2000,
      });
    }
  }

  deleteUser(user: User): void {
    if (confirm('Biztos, hogy törli?')) {
      this.userService.delete(user).subscribe(
        () => this.router.navigate([this.routerName]),
        err => console.error(err)
      );
      this.toastr.success('Sikeresen törölte a felhasználót!', '', {
        timeOut: 8000,
        closeButton: true,
        progressBar: true,
        extendedTimeOut: 2000,
      });
    } else {
      return
    }
  }

  goBack(): void {
    if (confirm('Biztos, hogy visszalép?')) {
      this.router.navigate([this.routerName]);
    } else {
      return
    }
  }

}
