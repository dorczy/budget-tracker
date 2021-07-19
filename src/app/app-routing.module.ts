import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditItemComponent } from './common/edit-item/edit-item.component';
import { ExpensesComponent } from './page/expenses/expenses.component';
import { HomeComponent } from './page/home/home.component';
import { IncomesComponent } from './page/incomes/incomes.component';
import { LoginComponent } from './page/login/login.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "incomes",
    component: IncomesComponent
  },
  {
    path: "incomes/:id",
    component: EditItemComponent
  },
  {
    path: "expenses",
    component: ExpensesComponent
  },
  {
    path: "expenses/:id",
    component: EditItemComponent
  },
  {
    path: "login",
    component: LoginComponent
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
