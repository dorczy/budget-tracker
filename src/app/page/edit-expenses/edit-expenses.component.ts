import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Expense } from 'src/app/model/expense';
import { BehaviorSubject, Observable } from 'rxjs';
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
  item$: Observable<Expense> | null = this.activatedRoute.params.pipe(
    switchMap(params => this.expenseService.get(params.id))
  );
  users$: BehaviorSubject<User[]> = this.usersService.list$

  constructor(
    private activatedRoute: ActivatedRoute,
    private expenseService: ExpenseService,
    private usersService: UserService,
    private router: Router,
  ) {
    if (this.item$ === null) {
      console.log("VÉGRE");
      this.item$ = new Observable<Expense>();
    } else {
      console.log("nem látja h null");
    }
  }

  ngOnInit(): void {
  }


  onUpdate(form: NgForm, expense: Expense): void {
    this.updating = true;
    if (expense.id === 0) {
      this.expenseService.create(expense);
      this.router.navigate([this.expenseService.routerName]);
      alert('You have successfully created an expense!');
    } else {
      this.expenseService.update(expense).subscribe(
        () => {
          console.log("Updated expense: ", expense);
          this.router.navigate([this.expenseService.routerName]);
        }
      );
      alert('You have successfully updated an expense!');
    }
  }

}
