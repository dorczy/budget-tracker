import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { Remaining } from 'src/app/model/remaining';
import { User } from 'src/app/model/user';
import { CategoryService } from 'src/app/service/category.service';
import { ConfigService } from 'src/app/service/config.service';
import { ExpenseService } from 'src/app/service/expense.service';
import { RemainingService } from 'src/app/service/remaining.service';
import { UserService } from 'src/app/service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-remainings',
  templateUrl: './edit-remainings.component.html',
  styleUrls: ['./edit-remainings.component.scss']
})
export class EditRemainingsComponent implements OnInit {

  updating = false;

  remaining: Remaining = new Remaining();
  remainingId: string = "";
  routerName: string = this.remainingService.routerName;

  users: User[] = [];
  categories: Category[] = [];

  periodArr: string[] = this.configService.period;
  doneArr: string[] = this.configService.done;
  doneMethodArr: string[] = this.configService.doneMethod;

  constructor(
    private activatedRoute: ActivatedRoute,
    private remainingService: RemainingService,
    private expenseService: ExpenseService,
    private userService: UserService,
    private categoryService: CategoryService,
    private configService: ConfigService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => this.remainingId = params._id === undefined ? "0" : params._id,
      err => console.error(err)
    );
    this.remainingService.get(this.remainingId).subscribe(
      remaining => {
        remaining.deadlineDate = remaining.deadlineDate.toString().slice(0, 10);
        if (remaining.doneDate) {
          remaining.doneDate = remaining.doneDate.toString().slice(0, 10);
        }
        this.remaining = remaining
      },
      err => console.error(err)
    );
    this.userService.getAll().subscribe(
      users => this.users = users,
      err => console.error(err)
    );
    this.categoryService.getAll().subscribe(
      categories => this.categories = categories,
      err => console.error(err)
    );
  }


  saveRemaining(remaining: Remaining): void {
    this.updating = true;

    // L??TREHOZ??S A BEFIZETEND?? SZ??ML??KBA
    if (remaining._id === "" && remaining.done === "nem") {
      this.remainingService.create(remaining).subscribe(
        () => this.router.navigate([this.routerName]),
        err => console.error(err)
      );
      this.toastr.success('Sikeresen l??trehozott egy befizetend?? sz??ml??t!', '', {
        timeOut: 8000,
        closeButton: true,
        progressBar: true,
        extendedTimeOut: 2000,
      });


    // M??DOS??T??S EGY BEFIZETEND?? SZ??ML??BAN
    } else if (remaining._id !== "" && remaining.done === "nem") {
      this.remainingService.update(remaining).subscribe(
        () => this.router.navigate([this.routerName]),
        err => console.error(err)
      );
      this.toastr.success('Sikeresen m??dos??tott egy befizetend?? sz??ml??t!', '', {
        timeOut: 8000,
        closeButton: true,
        progressBar: true,
        extendedTimeOut: 2000,
      });


    // L??TREHOZ??S, ??TT??TEL A KIAD??SOKBA
    } else if (remaining._id === "" && remaining.done === "igen") {
      this.expenseService.create(remaining).subscribe(
        () => this.router.navigate([this.routerName]),
        err => console.error(err)
      );
      this.toastr.success('Sikeresen l??trehozott egy kiad??st, mivel befizetett sz??ml??t hozott l??tre!', '', {
        timeOut: 10000,
        closeButton: true,
        progressBar: true,
        extendedTimeOut: 2000,
      });


    // M??DOS??T??S, ??TT??TEL A KIAD??SOKBA
    } else if (remaining._id !== "" && remaining.done === "igen") {
      const deleteItem = {...remaining, _id: remaining._id};

      this.expenseService.create(remaining).subscribe(
        () => {},
        err => console.error(err)
      );
      this.remainingService.delete(deleteItem).subscribe(
        () => this.router.navigate([this.routerName]),
        err => console.error(err)
      );
      this.toastr.success('Sikeresen m??dos??totta a befizetend?? sz??ml??t! Mivel befizetett sz??mla, ez??rt ??tker??lt a kiad??sokba.', '', {
        timeOut: 10000,
        closeButton: true,
        progressBar: true,
        extendedTimeOut: 2000,
      });
    }
  }

  deleteRemaining(remaining: Remaining): void {
    if (confirm('Biztos, hogy t??rli?')) {
      this.remainingService.delete(remaining).subscribe(
        () => this.router.navigate([this.routerName]),
        err => console.error(err)
      );
      this.toastr.success('Sikeresen t??r??lt egy befizetend?? sz??ml??t!', '', {
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
    if (confirm('Biztos, hogy visszal??p?')) {
      this.router.navigate([this.routerName]);
    } else {
      return
    }
  }

}
