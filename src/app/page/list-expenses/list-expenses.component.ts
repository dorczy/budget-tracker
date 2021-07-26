import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TableColumn } from 'src/app/interface/table-column';
import { Expense } from 'src/app/model/expense';
import { ExpenseService } from 'src/app/service/expense.service';

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.scss']
})
export class ListExpensesComponent implements OnInit {

  data$: BehaviorSubject<Expense[]> = this.expenseService.list$;

  config: TableColumn[] = this.expenseService.config;
  itemIcon: string = this.expenseService.itemIcon;
  routerName: string = this.expenseService.routerName;


  constructor(
    public expenseService: ExpenseService,
  ) {
    this.expenseService.getAll();
  }

  ngOnInit(): void {
  }

}
