import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TableColumn } from 'src/app/interface/table-column';
import { Remaining } from 'src/app/model/remaining';
import { RemainingService } from 'src/app/service/remaining.service';

@Component({
  selector: 'app-list-remainings',
  templateUrl: './list-remainings.component.html',
  styleUrls: ['./list-remainings.component.scss']
})
export class ListRemainingsComponent implements OnInit {

  // data$: BehaviorSubject<Remaining[]> = this.remainingService.list$;
  data: Remaining[] = [];

  config: TableColumn[] = this.remainingService.config;
  itemIcon: string = this.remainingService.itemIcon;
  routerName: string = this.remainingService.routerName;

  // sort
  ascend: boolean = false;
  sortKey: string = '';

  // filter
  filterKey: string = '';
  phrase: string = '';


  constructor(
    public remainingService: RemainingService,
  ) {
    // this.remainingService.getAll();
    this.remainingService.getAll().subscribe(
      remainings => this.data = remainings,
      err => console.error(err)
    );
  }

  ngOnInit(): void {
  }

}
