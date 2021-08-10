import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Income } from 'src/app/model/income';
import { IncomeService } from 'src/app/service/income.service';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';

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

  constructor(
    private activatedRoute: ActivatedRoute,
    private incomeService: IncomeService,
    private usersService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => this.incomeId = params._id === undefined ? "0" : params._id,
      err => console.error(err)
    );
    this.incomeService.get(this.incomeId).subscribe(
      income => this.income = income,
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
      alert('Sikeresen hozzáadott egy bevételt!');
    } else {
      this.incomeService.update(income).subscribe(
        () => this.router.navigate([this.routerName]),
        err => console.error(err)
      );
      alert('Sikeresen módosított egy bevételt!');
    }
  }

  deleteIncome(income: Income): void {
    if (confirm('Biztos, hogy törli?')) {
      this.incomeService.delete(income).subscribe(
        () => this.router.navigate([this.routerName]),
        err => console.error(err)
      );
      alert("Sikeresen törölt egy bevételt!")
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
