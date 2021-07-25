import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TableColumn } from 'src/app/interface/table-column';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  data$: BehaviorSubject<User[]> = this.userService.list$;

  config: TableColumn[] = this.userService.config;
  itemIcon: string = this.userService.itemIcon;
  routerName: string = this.userService.routerName;


  constructor(
    private userService: UserService,
  ) {
    this.userService.getAll();
  }

  ngOnInit(): void {
  }

}
