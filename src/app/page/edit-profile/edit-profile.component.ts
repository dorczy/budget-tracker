import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

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
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => this.userId = params.id === undefined ? "0" : params.id,
      err => console.error(err)
    );
    // this.userService.get(parseInt(this.userId)).subscribe(
    this.userService.get(this.userId).subscribe(
      user => this.user = user,
      err => console.error(err)
    );
  };

  save(user: User): void {
    this.saving = true;
    if (user.id === 0) {
      this.userService.create(user).subscribe(
        data => {
          console.log(data);
          this.router.navigate([""]);
        },
        err => console.error(err)
      );
      alert('Sikeresen regisztrált!')
    } else {
      this.userService.update(user).subscribe(
        () => this.router.navigate(['profile']),
        err => console.error(err)
      );
      alert('Sikeresen módosította a profilját!')
    };
  };

  deleteUser(user: User): void {
    if (confirm('Biztos, hogy törli a profilját?')) {
      this.saving = true;
      this.userService.delete(user).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['profile']);
        },
        err => console.error(err)
      );
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
