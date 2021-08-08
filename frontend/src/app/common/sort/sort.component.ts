import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableColumn } from 'src/app/interface/table-column';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {

  @Input() config: TableColumn[] = [];

  @Input() ascend!: boolean;
  @Input() sortKey!: string;

  @Output() ascendChange = new EventEmitter<boolean>();
  @Output() sortKeyChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }


  onChangeSort(item: any, direction: any): void {
    direction = direction === "true" ? true : false;
    this.ascend = direction;
    this.ascendChange.emit(direction);
    this.sortKey = item;
    this.sortKeyChange.emit(item);
  }

}
