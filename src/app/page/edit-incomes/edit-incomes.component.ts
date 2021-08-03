import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Income } from 'src/app/model/income';
import { BehaviorSubject } from 'rxjs';
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

  // users$: BehaviorSubject<User[]> = this.usersService.list$
  users: User[] =  [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private incomeService: IncomeService,
    private usersService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => this.incomeId = params.id === undefined ? "0" : params.id,
      err => console.error(err)
    );
    // this.incomeService.get(parseInt(this.incomeId)).subscribe(
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
    if (income.id === 0) {
      this.incomeService.create(income).subscribe(
        () => this.router.navigate([this.incomeService.routerName]),
        err => console.error(err)
      );
      alert('Sikeresen hozzáadtál egy bevételt!');
    } else {
      this.incomeService.update(income).subscribe(
        () => {
          console.log("Updated income: ", income);
          this.router.navigate([this.incomeService.routerName]);
        },
        err => console.error(err)
      );
      alert('Sikeresen módosítottál egy bevételt!');
    }
  }

  goBack(): void {
    if (confirm('Biztos, hogy visszalép?')) {
      this.router.navigate([this.incomeService.routerName]);
    } else {
      return
    }
  }

}
