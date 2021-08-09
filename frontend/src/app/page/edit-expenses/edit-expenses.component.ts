import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from 'src/app/model/expense';
import { ExpenseService } from 'src/app/service/expense.service';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';
import { RemainingService } from 'src/app/service/remaining.service';

@Component({
  selector: 'app-edit-expenses',
  templateUrl: './edit-expenses.component.html',
  styleUrls: ['./edit-expenses.component.scss']
})
export class EditExpensesComponent implements OnInit {

  updating = false;

  expense: Expense = new Expense();
  expenseId: string = "";
  routerName: string = this.expenseService.routerName;

  // users$: BehaviorSubject<User[]> = this.usersService.list$;
  users: User[] =  [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private expenseService: ExpenseService,
    private remainingService: RemainingService,
    private usersService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => this.expenseId = params._id === undefined ? "0" : params._id,
      err => console.error(err)
    );
    this.expenseService.get(this.expenseId).subscribe(
      expense => this.expense = expense,
      err => console.error(err)
    );
    this.usersService.getAll().subscribe(
      users => this.users = users,
      err => console.error(err)
    );
  }










  saveExpense(expense: Expense): void {
    this.updating = true;

    // LÉTREHOZÁS A KIADÁSOKBA
    if (expense._id === "" && expense.done === "igen") {
      this.expenseService.create(expense).subscribe(
        () => this.router.navigate([this.expenseService.routerName]),
        err => console.error(err)
      );
      alert('Sikeresen hozzáadott egy kiadást!');


    // MÓDOSÍTÁS EGY KIADÁSBAN
    } else if (expense._id !== "" && expense.done === "igen") {
      this.expenseService.update(expense).subscribe(
        () => this.router.navigate([this.expenseService.routerName]),
        err => console.error(err)
      );
      alert('Sikeresen módosított egy kiadást!');


    // LÉTREHOZÁS, ÁTTÉTEL A BEFIZETENDŐ SZÁMLÁKBA
    } else if (expense._id === "" && expense.done === "nem") {
      this.remainingService.create(expense).subscribe(
        () => this.router.navigate([this.expenseService.routerName]),
        err => console.error(err)
      );
      alert('Sikeresen hozzáadott egy befizetendő számlát, mivel teljesítetlen számlát hozott létre!')



    // MÓDOSÍTÁS, ÁTTÉTEL A BEFIZETENDŐ SZÁMLÁKBA
    } else if (expense._id !== "" && expense.done === "nem") {
      this.remainingService.create(expense).subscribe(
        () => this.router.navigate([this.expenseService.routerName]),
        err => console.error(err)
      );
      this.expenseService.delete(expense).subscribe(
        () => {}
      );
      alert('Sikeresen módosította a kiadást! Mivel teljesítetlen számla, ezért átkerült a befizetendő számlákba.');

    }


  }














  deleteExpense(expense: Expense): void {
    if (confirm('Biztos, hogy törli?')) {
      this.expenseService.delete(expense).subscribe(
        () => this.router.navigate([this.routerName]),
        err => console.error(err)
      );
      alert("Sikeresen törölt egy kiadást!")
    } else {
      return
    }
  }

  goBack(): void {
    if (confirm('Biztos, hogy visszalép?')) {
      this.router.navigate([this.expenseService.routerName]);
    } else {
      return
    }
  }

}
