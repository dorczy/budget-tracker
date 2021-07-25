import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './page/home/home.component';
import { ListIncomesComponent } from './page/list-incomes/list-incomes.component';
import { EditIncomesComponent } from './page/edit-incomes/edit-incomes.component';
import { ListExpensesComponent } from './page/list-expenses/list-expenses.component';
import { EditExpensesComponent } from './page/edit-expenses/edit-expenses.component';
import { LoginComponent } from './page/login/login.component';
import { ProfileComponent } from './page/profile/profile.component';
import { ListUsersComponent } from './page/list-users/list-users.component';
import { EditUsersComponent } from './page/edit-users/edit-users.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "incomes",
    component: ListIncomesComponent
  },
  {
    path: "incomes/:id",
    component: EditIncomesComponent
  },
  {
    path: "expenses",
    component: ListExpensesComponent
  },
  {
    path: "expenses/:id",
    component: EditExpensesComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "users",
    component: ListUsersComponent
  },
  {
    path: "users/:id",
    component: EditUsersComponent
  },
  {
    path: "*",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
