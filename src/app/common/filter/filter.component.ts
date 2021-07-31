import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TableColumn } from 'src/app/interface/table-column';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() config: TableColumn[] = [];

  @Input() filterKey!: string;
  @Input() phrase!: string;

  @Output() filterKeyChange = new EventEmitter<string>();
  @Output() phraseChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  filtering(newFilterKey: string, newPhrase: string): void {
    this.filterKeyChange.emit(newFilterKey);
    this.phraseChange.emit(newPhrase);
  }

}
