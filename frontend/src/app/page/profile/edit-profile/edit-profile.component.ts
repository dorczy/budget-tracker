import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  @Input() title: string = 'Saját profil módosítása';
  @Input() registration: boolean = false;

  saving: boolean = false;

  user: User = new User();
  userId: string = "";

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private authService: AuthService,
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
  };

  save(user: User): void {
    this.saving = true;

    // regisztráció:
    if (user._id === "") {
      this.userService.create(user).subscribe(
        data => this.router.navigate([""]),
        err => console.error(err)
      );
      this.toastr.success('Sikeresen regisztrált!', '', {
        timeOut: 8000,
        closeButton: true,
        progressBar: true,
        extendedTimeOut: 2000,
      });

    // profil frissítése:
    } else {
      this.userService.update(user).subscribe(
        () => this.router.navigate(['profile']),
        err => console.error(err)
      );
      this.toastr.success('Sikeresen módosította a profilját!', '', {
        timeOut: 8000,
        closeButton: true,
        progressBar: true,
        extendedTimeOut: 2000,
      });
    };
  };

  deleteUser(user: User): void {
    if (confirm('Biztos, hogy törli a profilját?')) {
      this.saving = true;

      this.userService.delete(user).subscribe(
        () => this.router.navigate(['/']),
        err => console.error(err)
      );

      this.authService.logout();

      this.toastr.success('Sikeresen törölte a profilját!', '', {
        timeOut: 8000,
        closeButton: true,
        progressBar: true,
        extendedTimeOut: 2000,
      });
    } else {
      return
    };
  };

  goBack(): void {
    if (confirm('Biztos, hogy visszalép?')) {
      this.router.navigate(['profile']);
    } else {
      return
    }
  }

}
