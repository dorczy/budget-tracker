import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TableColumn } from 'src/app/interface/table-column';
import { Expense } from 'src/app/model/expense';
import { ExpenseService } from 'src/app/service/expense.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  data$: BehaviorSubject<Expense[]> = this.expenseService.list$;

  config: TableColumn[] = this.expenseService.config;
  itemIcon: string = this.expenseService.itemIcon;
  routerName: string = this.expenseService.routerName;

  constructor(
    private expenseService: ExpenseService,
  ) {
    this.expenseService.getAll();
   }

  ngOnInit(): void {
  }

}
