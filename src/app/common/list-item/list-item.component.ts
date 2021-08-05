import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableColumn } from 'src/app/interface/table-column';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() item: any;

  @Input() config: TableColumn[] = [];
  @Input() itemIcon: string = '';
  @Input() iconColor: string = '';
  @Input() routerName: string = '';

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  updateItem(_id: number): void {
    this.router.navigate([this.routerName + '/' + _id]);
  }

  toStrongLetters(element: HTMLElement, value: any): any {
    element.innerHTML = `<strong>${value}</strong>`;
  }

}
