import { Component, Input, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/interface/table-column';
import { Expense } from 'src/app/model/expense';
import { Remaining } from 'src/app/model/remaining';
import { ExpenseService } from 'src/app/service/expense.service';
import { RemainingService } from 'src/app/service/remaining.service';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  @Input() item: any;

  opened: boolean = false;


  expensesByCategory: Expense[] = [];
  expenseConfig: TableColumn[] = this.expenseService.config;
  expenseItemIcon: string = this.expenseService.itemIcon;
  expenseRouterName: string = this.expenseService.routerName;


  remainingsByCategory: Remaining[] = [];
  remainingConfig: TableColumn[] = this.remainingService.config;
  remainingItemIcon: string = this.remainingService.itemIcon;
  remainingRouterName: string = this.remainingService.routerName;


  constructor(
    private remainingService: RemainingService,
    private expenseService: ExpenseService,
  ) {
    this.expenseService.getAll().subscribe( expenses => {
      this.expensesByCategory = expenses.filter(
        expense => expense.category.name === this.item.name
      )}
    );

    this.remainingService.getAll().subscribe( remainings => {
      this.remainingsByCategory = remainings.filter(
        remaining => remaining.category.name === this.item.name
      )}
    );
   }

  ngOnInit(): void {
  }

  openItem(): void {
    this.opened = !this.opened;
  }
}
