import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-item',
  templateUrl: './select-item.component.html',
  styleUrls: ['./select-item.component.scss']
})
export class SelectItemComponent implements OnInit {

  @Input() selects: any;

  /* selects: {
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
  ]; */

  constructor() { }

  ngOnInit(): void {
  }

}
