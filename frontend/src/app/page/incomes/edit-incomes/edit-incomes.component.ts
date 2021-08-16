import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Income } from 'src/app/model/income';
import { IncomeService } from 'src/app/service/income.service';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';
import { ConfigService } from 'src/app/service/config.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-incomes',
  templateUrl: './edit-incomes.component.html',
  styleUrls: ['./edit-incomes.component.scss']
})
export class EditIncomesComponent implements OnInit {

  updating = false;

  income: Income = new Income();
  incomeId: string = "";
  routerName: string = this.incomeService.routerName;

  users: User[] =  [];

  periodArr: string[] = this.configService.period;
  doneMethodArr: string[] = this.configService.doneMethod;

  constructor(
    private activatedRoute: ActivatedRoute,
    private incomeService: IncomeService,
    private usersService: UserService,
    private configService: ConfigService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => this.incomeId = params._id === undefined ? "0" : params._id,
      err => console.error(err)
    );
    this.incomeService.get(this.incomeId).subscribe(
      income => {
        income.doneDate = income.doneDate.toString().slice(0, 10);
        this.income = income
      },
      err => console.error(err)
    );
    this.usersService.getAll().subscribe(
      users => this.users = users,
      err => console.error(err)
    );
  }


  saveIncome(income: Income): void {
    this.updating = true;
    if (income._id === "") {
      this.incomeService.create(income).subscribe(
        () => this.router.navigate([this.routerName]),
        err => console.error(err)
      );
      this.toastr.success('Sikeresen létrehozott egy bevételt!', '', {
        timeOut: 8000,
        closeButton: true,
        progressBar: true,
        extendedTimeOut: 2000,
      });

    } else {
      this.incomeService.update(income).subscribe(
        () => this.router.navigate([this.routerName]),
        err => console.error(err)
      );
      this.toastr.success('Sikeresen módosított egy bevételt!', '', {
        timeOut: 8000,
        closeButton: true,
        progressBar: true,
        extendedTimeOut: 2000,
      });
    }
  }

  deleteIncome(income: Income): void {
    if (confirm('Biztos, hogy törli?')) {
      this.incomeService.delete(income).subscribe(
        () => this.router.navigate([this.routerName]),
        err => console.error(err)
      );
      this.toastr.success('Sikeresen törölt egy bevételt!', '', {
        timeOut: 8000,
        closeButton: true,
        progressBar: true,
        extendedTimeOut: 2000,
      });
    } else {
      return
    }
  }

  goBack(): void {
    if (confirm('Biztos, hogy visszalép?')) {
      this.router.navigate([this.routerName]);
    } else {
      return
    }
  }

}
