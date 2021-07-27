import { Component, OnInit } from '@angular/core';
import { NavigationItem } from 'src/app/model/navigation-item';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navFirstBlock: NavigationItem[] = this.configService.navigationFirstBlock;
  navSecondBlock: NavigationItem[] = this.configService.navigationSecondBlock;

  constructor(
    private configService: ConfigService,
  ) { }

  ngOnInit(): void {
  }

}
