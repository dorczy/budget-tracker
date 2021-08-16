import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from 'src/app/model/expense';
import { ExpenseService } from 'src/app/service/expense.service';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';
import { RemainingService } from 'src/app/service/remaining.service';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';
import { ConfigService } from 'src/app/service/config.service';
import { ToastrService } from 'ngx-toastr';

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

  users: User[] = [];
  categories: Category[] = [];

  periodArr: string[] = this.configService.period;
  doneArr: string[] = this.configService.done;
  doneMethodArr: string[] = this.configService.doneMethod;

  constructor(
    private activatedRoute: ActivatedRoute,
    private expenseService: ExpenseService,
    private remainingService: RemainingService,
    private userService: UserService,
    private categoryService: CategoryService,
    private configService: ConfigService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => this.expenseId = params._id === undefined ? "0" : params._id,
      err => console.error(err)
    );
    this.expenseService.get(this.expenseId).subscribe(
      expense => {
        expense.deadlineDate = expense.deadlineDate.toString().slice(0, 10);
        expense.doneDate = expense.doneDate.toString().slice(0, 10);
        this.expense = expense
      },
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


  saveExpense(expense: Expense): void {
    this.updating = true;

    // LÉTREHOZÁS A KIADÁSOKBA
    if (expense._id === "" && expense.done === "igen") {
      this.expenseService.create(expense).subscribe(
        () => this.router.navigate([this.routerName]),
        err => console.error(err)
      );
      this.toastr.success('Sikeresen létrehozott egy kiadást!', '', {
        timeOut: 8000,
        closeButton: true,
        progressBar: true,
        extendedTimeOut: 2000,
      });


    // MÓDOSÍTÁS EGY KIADÁSBAN
    } else if (expense._id !== "" && expense.done === "igen") {
      this.expenseService.update(expense).subscribe(
        () => this.router.navigate([this.routerName]),
        err => console.error(err)
      );
      this.toastr.success('Sikeresen módosított egy kiadást!', '', {
        timeOut: 8000,
        closeButton: true,
        progressBar: true,
        extendedTimeOut: 2000,
      });


    // LÉTREHOZÁS, ÁTTÉTEL A BEFIZETENDŐ SZÁMLÁKBA
    } else if (expense._id === "" && expense.done === "nem") {
      expense.doneDate = "";
      expense.doneMethod = "";

      this.remainingService.create(expense).subscribe(
        () => this.router.navigate([this.routerName]),
        err => console.error(err)
      );
      this.toastr.success('Sikeresen létrehozott egy befizetendő számlát, mivel befizetetlen számlát hozott létre!', '', {
        timeOut: 10000,
        closeButton: true,
        progressBar: true,
        extendedTimeOut: 2000,
      });


    // MÓDOSÍTÁS, ÁTTÉTEL A BEFIZETENDŐ SZÁMLÁKBA
    } else if (expense._id !== "" && expense.done === "nem") {
      const deleteItem = {...expense, _id: expense._id};

      expense.doneDate = "";
      expense.doneMethod = "";

      this.remainingService.create(expense).subscribe(
        () => {},
        err => console.error(err)
      );
      this.expenseService.delete(deleteItem).subscribe(
        () => this.router.navigate([this.routerName]),
        err => console.error(err)
      );
      this.toastr.success('Sikeresen módosította a kiadást! Mivel befizetetlen számla, ezért átkerült a befizetendő számlákba.', '', {
        timeOut: 10000,
        closeButton: true,
        progressBar: true,
        extendedTimeOut: 2000,
      });
    }


  }


  deleteExpense(expense: Expense): void {
    if (confirm('Biztos, hogy törli?')) {
      this.expenseService.delete(expense).subscribe(
        () => this.router.navigate([this.routerName]),
        err => console.error(err)
      );
      this.toastr.success('Sikeresen törölt egy kiadást!', '', {
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
