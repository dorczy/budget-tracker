import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/interface/table-column';
import { Income } from 'src/app/model/income';
import { IncomeService } from 'src/app/service/income.service';

@Component({
  selector: 'app-list-incomes',
  templateUrl: './list-incomes.component.html',
  styleUrls: ['./list-incomes.component.scss']
})
export class ListIncomesComponent implements OnInit {

  data: Income[] = [];

  config: TableColumn[] = this.incomeService.config;
  itemIcon: string = this.incomeService.itemIcon;
  routerName: string = this.incomeService.routerName;

  // sort
  ascend: boolean = false;
  sortKey: string = '';

  // filter
  filterKey: string = '';
  phrase: string = '';


  constructor(
    private incomeService: IncomeService,
  ) {
    this.incomeService.getAll().subscribe(
      incomes => this.data = incomes,
      err => console.error(err)
    );
  }

  ngOnInit(): void {
  }

}
