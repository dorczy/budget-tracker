import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-item',
  templateUrl: './input-item.component.html',
  styleUrls: ['./input-item.component.scss']
})
export class InputItemComponent implements OnInit {

  @Input() inputs: any;

  /* inputs: {
    title: string,
    id: string,
    type: string,
    ngModel: string,
  }[] = [
    {
      title: '#',
      id: 'id',
      type: 'number',
      ngModel: 'entity.id',
    },
    {
      title: 'Kategória',
      id: 'category',
      type: 'text',
      ngModel: 'entity.category.name',
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
  ]; */

  constructor() { }

  ngOnInit(): void {
  }

}
