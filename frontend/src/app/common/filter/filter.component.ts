import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TableColumn } from 'src/app/interface/table-column';
import { Category } from 'src/app/model/category';
import { User } from 'src/app/model/user';
import { CategoryService } from 'src/app/service/category.service';
import { ConfigService } from 'src/app/service/config.service';
import { UserService } from 'src/app/service/user.service';

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

  users: User[] = [];
  categories: Category[] = [];

  periodArr: string[] = this.configService.period;
  doneArr: string[] = this.configService.done;
  doneMethodArr: string[] = this.configService.doneMethod;

  constructor(
    private configService: ConfigService,
    private userService: UserService,
    private categoryService: CategoryService,
  ) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(
      users => this.users = users,
      err => console.error(err)
    );
    this.categoryService.getAll().subscribe(
      categories => this.categories = categories,
      err => console.error(err)
    );
  }

  filtering(newFilterKey: string, newPhrase: string): void {
    this.filterKeyChange.emit(newFilterKey);
    this.phraseChange.emit(newPhrase);
    this.phrase = '';
  }

  deleteFilter(): void {
    this.phrase = '';
    this.filterKey = '';
    this.phraseChange.emit('');
    this.filterKeyChange.emit('');
  }

}
