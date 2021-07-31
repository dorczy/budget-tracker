import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Expense } from 'src/app/model/expense';
import { Remaining } from 'src/app/model/remaining';
import { User } from 'src/app/model/user';
import { ExpenseService } from 'src/app/service/expense.service';
import { RemainingService } from 'src/app/service/remaining.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit-remainings',
  templateUrl: './edit-remainings.component.html',
  styleUrls: ['./edit-remainings.component.scss']
})
export class EditRemainingsComponent implements OnInit {

  updating = false;

  remaining: Remaining = new Remaining();
  remainingId: string = "";

  users$: BehaviorSubject<User[]> = this.usersService.list$

  constructor(
    private activatedRoute: ActivatedRoute,
    private remainingService: RemainingService,
    private expenseService: ExpenseService,
    private usersService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => this.remainingId = params.id === undefined ? "0" : params.id
    );
    this.remainingService.get(parseInt(this.remainingId)).subscribe(
      remaining => this.remaining = remaining
    );
  }


  saveRemaining(remaining: Remaining): void {
    this.updating = true;

    if (remaining.id === 0 && remaining.done === "nem") {
      this.remainingService.create(remaining);
      this.router.navigate([this.remainingService.routerName]);
      alert('Sikeresen hozzáadtál egy befizetendő számlát!');

    } else if (remaining.id > 0 && remaining.done === "nem") {
      this.remainingService.update(remaining).subscribe(
        () => {
          console.log("Updated remaining: ", remaining);
          this.router.navigate([this.remainingService.routerName]);
        }
      );
      alert('Sikeresen módosítottál egy befizetendő számlát!');

    } else if (remaining.id === 0 && remaining.done === "igen") {
      this.expenseService.create(remaining);
      this.router.navigate([this.remainingService.routerName]);
      alert('Sikeresen hozzáadtál egy kiadást, mivel teljesített számlát hoztál létre!');

    } else if (remaining.id > 0 && remaining.done === "igen") {
      this.expenseService.create(remaining);  // HIBA, ERROR, MÓDOSÍTANI
      this.remainingService.delete(remaining.id);
      this.router.navigate([this.remainingService.routerName]);
      alert('Sikeresen módosítottad a befizetendő számlát! Mivel teljesített számla, ezért átkerült a kiadásokba.');
    }
  }

  goBack(): void {
    if (confirm('Biztos, hogy visszalép?')) {
      this.router.navigate([this.remainingService.routerName]);
    } else {
      return
    }
  }

}
