import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { Remaining } from 'src/app/model/remaining';
import { User } from 'src/app/model/user';
import { CategoryService } from 'src/app/service/category.service';
import { ExpenseService } from 'src/app/service/expense.service';
import { RemainingService } from 'src/app/service/remaining.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit-remainings',
  templateUrl: './edit-remainings.component.html',
  styleUrls: ['./edit-remainings.component.scss']
})
export class EditRemainingsComponent implements OnInit {

  updating = false;

  remaining: Remaining = new Remaining();
  remainingId: string = "";
  routerName: string = this.remainingService.routerName;

  users: User[] = [];
  categories: Category[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private remainingService: RemainingService,
    private expenseService: ExpenseService,
    private userService: UserService,
    private categoryService: CategoryService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => this.remainingId = params._id === undefined ? "0" : params._id,
      err => console.error(err)
    );
    this.remainingService.get(this.remainingId).subscribe(
      remaining => this.remaining = remaining,
      err => console.error(err)
    );
    this.userService.getAll().subscribe(
      users => this.users = users,
      err => console.error(err)
    );
    this.categoryService.getAll().subscribe(
      categories => this.categories = categories,
      err => console.error(err)
    );
  }


  saveRemaining(remaining: Remaining): void {
    this.updating = true;

    // LÉTREHOZÁS A BEFIZETENDŐ SZÁMLÁKBA
    if (remaining._id === "" && remaining.done === "nem") {
      this.remainingService.create(remaining).subscribe(
        () => this.router.navigate([this.routerName]),
        err => console.error(err)
      );
      alert('Sikeresen hozzáadott egy befizetendő számlát!');


    // MÓDOSÍTÁS EGY BEFIZETENDŐ SZÁMLÁBAN
    } else if (remaining._id !== "" && remaining.done === "nem") {
      this.remainingService.update(remaining).subscribe(
        () => this.router.navigate([this.routerName]),
        err => console.error(err)
      );
      alert('Sikeresen módosított egy befizetendő számlát!');


    // LÉTREHOZÁS, ÁTTÉTEL A KIADÁSOKBA
    } else if (remaining._id === "" && remaining.done === "igen") {
      this.expenseService.create(remaining).subscribe(
        () => this.router.navigate([this.routerName]),
        err => console.error(err)
      );
      alert('Sikeresen hozzáadott egy kiadást, mivel teljesített számlát hozott létre!');


    // MÓDOSÍTÁS, ÁTTÉTEL A KIADÁSOKBA
    } else if (remaining._id !== "" && remaining.done === "igen") {
      this.expenseService.create(remaining).subscribe(
        () => this.router.navigate([this.routerName]),
        err => console.error(err)
      );
      this.remainingService.delete(remaining).subscribe(
       () => {}
      );
      alert('Sikeresen módosította a befizetendő számlát! Mivel teljesített számla, ezért átkerült a kiadásokba.');
    }
  }

  deleteRemaining(remaining: Remaining): void {
    if (confirm('Biztos, hogy törli?')) {
      this.remainingService.delete(remaining).subscribe(
        () => this.router.navigate([this.routerName]),
        err => console.error(err)
      );
      alert("Sikeresen törölt egy befizetendő számlát!")
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
