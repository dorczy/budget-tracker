import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/interface/table-column';
import { Expense } from 'src/app/model/expense';
import { ExpenseService } from 'src/app/service/expense.service';

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.scss']
})
export class ListExpensesComponent implements OnInit {

  // data$: BehaviorSubject<Expense[]> = this.expenseService.list$;
  data: Expense[] = [];

  config: TableColumn[] = this.expenseService.config;
  itemIcon: string = this.expenseService.itemIcon;
  routerName: string = this.expenseService.routerName;

  // sort
  ascend: boolean = false;
  sortKey: string = '';

  // filter
  filterKey: string = '';
  phrase: string = '';


  constructor(
    private expenseService: ExpenseService,
  ) {
    // this.expenseService.getAll();
    this.expenseService.getAll().subscribe(
      expenses => this.data = expenses,
      err => console.error(err)
    );
  }

  ngOnInit(): void {
  }

}
