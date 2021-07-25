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
  @Input() routerName: string = '';

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  updateItem(id: number): void {
    console.log("Item updated!");
    this.router.navigate([this.routerName + '/' + id]);
  }

  deleteItem(): void {
    console.log("Item deleted!");
  }

  toStrongLetters(element: HTMLElement, value: any): any {
    element.innerHTML = `<strong>${value}</strong>`;
  }

}
