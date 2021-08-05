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
  @Input() result!: boolean;

  @Output() filterKeyChange = new EventEmitter<string>();
  @Output() phraseChange = new EventEmitter<string>();
  @Output() resultChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  filtering(newFilterKey: string, newPhrase: string): void {
    const newResult = true;
    this.filterKeyChange.emit(newFilterKey);
    this.phraseChange.emit(newPhrase);
    this.resultChange.emit(newResult);
  }

}
