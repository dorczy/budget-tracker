import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
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
  users$: BehaviorSubject<User[]> = this.userService.list$

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router,
  ) {
    if (this.item$ == null) {
      console.log("VÉGRE");
      this.item$ = new Observable<User>();
    } else {
      console.log("nem látja h null");
    }
  }

  ngOnInit(): void {
  }


  onUpdate(form: NgForm, user: User): void {
    this.updating = true;
    if (user.id === 0) {
      this.userService.create(user);
      this.router.navigate([this.userService.routerName]);
      alert('You have successfully created an expense!');
    } else {
      this.userService.update(user).subscribe(
        () => {
          console.log("Updated expense: ", user);
          this.router.navigate([this.userService.routerName]);
        }
      );
      alert('You have successfully updated an expense!');
    }
  }

}
