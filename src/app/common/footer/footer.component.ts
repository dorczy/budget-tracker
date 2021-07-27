import { Component, OnInit } from '@angular/core';
import { NavigationItem } from 'src/app/model/navigation-item';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  navItems: NavigationItem[] = this.configService.navigationFirstBlock;

  constructor(
    private configService: ConfigService,
  ) { }

  ngOnInit(): void {
  }

}
