import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Expense } from 'src/app/model/expense';
import { BehaviorSubject } from 'rxjs';
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

  users$: BehaviorSubject<User[]> = this.usersService.list$

  constructor(
    private activatedRoute: ActivatedRoute,
    private expenseService: ExpenseService,
    private usersService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => this.expenseId = params.id === undefined ? "0" : params.id
    );
    this.expenseService.get(parseInt(this.expenseId)).subscribe(
      expense => this.expense = expense
    );
  }


  saveExpense(expense: Expense): void {
    this.updating = true;
    if (expense.id === 0) {
      this.expenseService.create(expense);
      this.router.navigate([this.expenseService.routerName]);
      alert('Sikeresen hozzáadtál egy kiadást!');
    } else {
      this.expenseService.update(expense).subscribe(
        () => {
          console.log("Updated expense: ", expense);
          this.router.navigate([this.expenseService.routerName]);
        }
      );
      alert('Sikeresen módosítottál egy kiadást!');
    }
  }

}
