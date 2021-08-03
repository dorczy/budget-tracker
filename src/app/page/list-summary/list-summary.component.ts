import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TableColumn } from 'src/app/interface/table-column';
import { Income } from 'src/app/model/income';
import { IncomeService } from 'src/app/service/income.service';
import { Expense } from 'src/app/model/expense';
import { ExpenseService } from 'src/app/service/expense.service';

@Component({
  selector: 'app-list-summary',
  templateUrl: './list-summary.component.html',
  styleUrls: ['./list-summary.component.scss']
})
export class ListSummaryComponent implements OnInit {

  // incomes$: BehaviorSubject<Income[]> = this.incomeService.list$;
  // expenses$: BehaviorSubject<Expense[]> = this.expenseService.list$;
  incomes: Income[] = [];
  expenses: Expense[] = [];

  allDatas: any[] = [];

  incomeConfig: TableColumn[] = this.incomeService.config;
  incomeItemIcon: string = this.incomeService.itemIcon;
  incomeRouterName: string = this.incomeService.routerName;

  expenseConfig: TableColumn[] = this.expenseService.config;
  expenseItemIcon: string = this.expenseService.itemIcon;
  expenseRouterName: string = this.expenseService.routerName;

  // sort
  ascend: boolean = false;
  sortKey: string = '';

  // filter
  filterKey: string = '';
  phrase: string = '';


  constructor(
    public incomeService: IncomeService,
    public expenseService: ExpenseService,
  ) {
  }

  ngOnInit(): void {
    this.incomeService.getAll().subscribe(
      incomes => {
        this.incomes = incomes;
        this.allDatas = [...this.allDatas, ...incomes];
      },
      err => console.error(err)
    );
    this.expenseService.getAll().subscribe(
      expenses => {
        this.expenses = expenses;
        this.allDatas = [...this.allDatas, ...expenses];
      },
      err => console.error(err)
    );

    // this.incomes$.forEach(
    //   incomes => this.allDatas = this.allDatas.concat(incomes)
    // );
    // this.expenses$.forEach(
    //   expenses => this.allDatas = this.allDatas.concat(expenses)
    // );
  }

}
