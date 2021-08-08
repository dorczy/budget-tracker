import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from 'src/app/model/expense';
import { ExpenseService } from 'src/app/service/expense.service';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';

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
    private usersService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => this.expenseId = params._id === undefined ? "0" : params._id,
      err => console.error(err)
    );
    // this.expenseService.get(parseInt(this.expenseId)).subscribe(
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
    if (expense._id === "") {
      this.expenseService.create(expense).subscribe(
        () => this.router.navigate([this.expenseService.routerName]),
        err => console.error(err)
      );
      alert('Sikeresen hozzáadott egy kiadást!');
    } else {
      this.expenseService.update(expense).subscribe(
        () => {
          console.log("Updated expense: ", expense);
          this.router.navigate([this.expenseService.routerName]);
        },
        err => console.error(err)
      );
      alert('Sikeresen módosított egy kiadást!');
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
