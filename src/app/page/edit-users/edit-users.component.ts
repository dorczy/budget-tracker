import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss']
})
export class EditUsersComponent implements OnInit {

  updating = false;

  item$: Observable<User> | null = this.activatedRoute.params.pipe(
    switchMap(params => this.userService.get(params.id))
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }


  saveUser(user: User): void {
    this.updating = true;
    if (user.id === 0) {
      this.router.navigate([this.userService.routerName]);
    } else {
      this.userService.update(user).subscribe(
        () => {
          console.log("Updated user: ", user);
          this.router.navigate([this.userService.routerName]);
        }
      );
      alert('Sikeresen módosította a felhasználó adatait!');
    }
  }

  goBack(): void {
    if (confirm('Biztos, hogy visszalép?')) {
      this.router.navigate([this.userService.routerName]);
    } else {
      return
    }
  }

}
