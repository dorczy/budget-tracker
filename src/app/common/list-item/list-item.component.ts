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
  @Input() service: any;

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  updateItem(id: number): void {
    this.router.navigate([this.routerName + '/' + id]);
  }

  deleteItem(id: number): void {
    if (confirm('Biztos, hogy törli?')) {
      this.service.delete(id);
      this.router.navigate([this.routerName]);
    } else {
      return
    }
  }

  toStrongLetters(element: HTMLElement, value: any): any {
    element.innerHTML = `<strong>${value}</strong>`;
  }

}
