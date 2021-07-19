import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Expense } from 'src/app/model/expense';
import { BehaviorSubject, Observable } from 'rxjs';
import { ExpenseService } from 'src/app/service/expense.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {

  inputs: {
    title: string,
    id: string,
    type: string,
    ngModel: string,
  }[] = [
/*     {
      title: '#',
      id: 'id',
      type: 'number',
      ngModel: 'entity.id',
    }, */
    {
      title: 'Kategória',
      id: 'category',
      type: 'text',
      ngModel: 'entity.category.mainCategory + entity.category.subCategory',
    },
    {
      title: 'Megnevezés',
      id: 'name',
      type: 'text',
      ngModel: 'entity.name',
    },
    {
      title: 'Cég',
      id: 'company',
      type: 'text',
      ngModel: 'entity.company',
    },
    {
      title: 'Határidő',
      id: 'deadlineDate',
      type: 'date',
      ngModel: 'entity.deadlineDate',
    },
    {
      title: 'Teljesítés dátuma',
      id: 'doneDate',
      type: 'date',
      ngModel: 'entity.doneDate',
    },
    {
      title: 'Összeg',
      id: 'amount',
      type: 'number',
      ngModel: 'entity.amount',
    }
  ];

  selects: {
    title: string,
    id: string,
    ngModel: string,
    options: string[],
  }[] = [
    {
      title: 'Gyakoriság',
      id: 'period',
      ngModel: 'entity.period',
      options: [
        'napi',
        'heti',
        'havi',
        '2 havi',
        '3 havi',
        '6 havi',
        'éves',
        'egyszeri',
      ],
    },
    {
      title: 'Teljesítve',
      id: 'done',
      ngModel: 'entity.done',
      options: [
        'igen',
        'nem',
      ],
    },
    {
      title: 'Teljesítés módja',
      id: 'doneMethod',
      ngModel: 'entity.doneMethod',
      options: [
        'készpénz',
        'átutalás',
      ],
    },
    {
      title: 'Felhasználó',
      id: 'user',
      ngModel: 'entity.user.name',
      options: [
        'Anya',
        'Apa',
        'Mama',
        'Gyerek',
      ],
    },
  ];

  updating = false;
  item$: Observable<Expense> = this.activatedRoute.params.pipe(
    switchMap(params => this.expenseService.get(params.id))
  );


  constructor(
    private expenseService: ExpenseService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void { }


  onUpdate(form: NgForm, expense: Expense): void {
    this.updating = true;
    if (expense.id === 0) {
      this.expenseService.create(expense);
      this.router.navigate(['expenses']);
    } else {
      this.expenseService.update(expense).subscribe(
        () => {
          console.log(expense);
          this.router.navigate(['expenses']);
        }
      );
    }
  }

}
