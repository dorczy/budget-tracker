import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Expense } from 'src/app/model/expense';
import { Observable } from 'rxjs';
import { ExpenseService } from 'src/app/service/expense.service';
import { IncomeService } from 'src/app/service/income.service';
import { Income } from 'src/app/model/income';
import { TableColumn } from 'src/app/interface/table-column';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {


//   elements: {
//     element: string,
//     title: string,
//     id: string,
//     type: string,
//     ngModel: string,
//   }[] = [
// /*     {
//       element: 'input',
//       title: '#',
//       id: 'id',
//       type: 'number',
//       ngModel: 'entity.id',
//     }, */
//     {
//       element: 'input',
//       title: 'Kategória',
//       id: 'category',
//       type: 'text',
//       ngModel: 'entity.category.name',
//     },
//     {
//       element: 'input',
//       title: 'Megnevezés',
//       id: 'name',
//       type: 'text',
//       ngModel: 'entity.name',
//     },
//     {
//       element: 'input',
//       title: 'Cég',
//       id: 'company',
//       type: 'text',
//       ngModel: 'entity.company',
//     },
//     {
//       element: 'input',
//       title: 'Határidő',
//       id: 'deadlineDate',
//       type: 'date',
//       ngModel: 'entity.deadlineDate',
//     },
//     {
//       element: 'input',
//       title: 'Teljesítés dátuma',
//       id: 'doneDate',
//       type: 'date',
//       ngModel: 'entity.doneDate',
//     },
//     {
//       element: 'input',
//       title: 'Összeg',
//       id: 'amount',
//       type: 'number',
//       ngModel: 'entity.amount',
//     },
//     {
//       element: 'select',
//       title: 'Gyakoriság',
//       id: 'period',
//       ngModel: 'entity.period',
//       options: [
//         'napi',
//         'heti',
//         'havi',
//         '2 havi',
//         '3 havi',
//         '6 havi',
//         'éves',
//         'egyszeri',
//       ],
//     },
//     {
//       element: 'select',
//       title: 'Teljesítve',
//       id: 'done',
//       ngModel: 'entity.done',
//       options: [
//         'igen',
//         'nem',
//       ],
//     },
//     {
//       element: 'select',
//       title: 'Teljesítés módja',
//       id: 'doneMethod',
//       ngModel: 'entity.doneMethod',
//       options: [
//         'készpénz',
//         'átutalás',
//       ],
//     },
//     {
//       element: 'select',
//       title: 'Felhasználó',
//       id: 'user',
//       ngModel: 'entity.user.name',
//       options: [
//         'Anya',
//         'Apa',
//         'Mama',
//         'Gyerek',
//       ],
//     },
//   ];

  updating = false;
  item$: Observable<any> = new Observable<any>();

  headers: TableColumn[] = [];

  id: any;
  entity: any;
  service: any;

  constructor(
    private expenseService: ExpenseService,
    private incomeService: IncomeService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.entity = params.entity;
      this.id = params.id;
    });

    if (this.entity === 'incomes') {
      this.service = this.incomeService;
      this.headers = this.incomeService.config;
      console.log("INCOME.this.headers: ", this.headers);
      console.log("INCOME.this.item$: ", this.item$);
    } else if (this.entity === 'expenses') {
      this.service = this.expenseService;
      this.headers = this.expenseService.config;
      console.log("EXPENSE.this.headers: ", this.headers);
      console.log("EXPENSE.this.item$: ", this.item$);
    } else {
      alert('Invalid entity!');
      this.router.navigate([""]);
    };

    this.item$ = this.activatedRoute.params.pipe(
      switchMap(params => this.service.get(params.id))
    );

  }


  onUpdate(form: NgForm, item: any): void {
    this.updating = true;
    if (item.id === 0) {
      this.service.create(item);
      this.router.navigate([this.entity]);
    } else {
      this.service.update(item).subscribe(
        () => {
          console.log("Updated item: ", item);
          this.router.navigate([this.entity]);
        }
      );
    }
  }

}
