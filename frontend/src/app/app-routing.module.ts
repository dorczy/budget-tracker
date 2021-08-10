import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './service/auth-guard.service';
import { RoleGuardService } from './service/role-guard.service';

import { HomeComponent } from './page/home/home.component';
import { ListSummaryComponent } from './page/summary/list-summary/list-summary.component';
import { ListCategoriesComponent } from './page/categories/list-categories/list-categories.component';
import { EditCategoriesComponent } from './page/categories/edit-categories/edit-categories.component';
import { ListIncomesComponent } from './page/incomes/list-incomes/list-incomes.component';
import { EditIncomesComponent } from './page/incomes/edit-incomes/edit-incomes.component';
import { ListExpensesComponent } from './page/expenses/list-expenses/list-expenses.component';
import { EditExpensesComponent } from './page/expenses/edit-expenses/edit-expenses.component';
import { ListRemainingsComponent } from './page/remainings/list-remainings/list-remainings.component';
import { EditRemainingsComponent } from './page/remainings/edit-remainings/edit-remainings.component';
import { LoginComponent } from './page/login/login.component';
import { EditProfileComponent } from './page/profile/edit-profile/edit-profile.component';
import { ListProfileComponent } from './page/profile/list-profile/list-profile.component';
import { ListUsersComponent } from './page/users/list-users/list-users.component';
import { EditUsersComponent } from './page/users/edit-users/edit-users.component';
import { ForbiddenComponent } from './page/forbidden/forbidden.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "summary",
    component: ListSummaryComponent,
    canActivate: [ AuthGuardService, RoleGuardService ],
    data: {
      expectedRole: 2,
    },
  },
  {
    path: "categories",
    component: ListCategoriesComponent,
    canActivate: [ AuthGuardService, RoleGuardService ],
    data: {
      expectedRole: 2,
    },
  },
  {
    path: "categories/:_id",
    component: EditCategoriesComponent,
    canActivate: [ AuthGuardService, RoleGuardService ],
    data: {
      expectedRole: 3,
    },
  },
  {
    path: "incomes",
    component: ListIncomesComponent,
    canActivate: [ AuthGuardService, RoleGuardService ],
    data: {
      expectedRole: 2,
    },
  },
  {
    path: "incomes/:_id",
    component: EditIncomesComponent,
    canActivate: [ AuthGuardService, RoleGuardService ],
    data: {
      expectedRole: 3,
    },
  },
  {
    path: "expenses",
    component: ListExpensesComponent,
    canActivate: [ AuthGuardService, RoleGuardService ],
    data: {
      expectedRole: 2,
    },
  },
  {
    path: "expenses/:_id",
    component: EditExpensesComponent,
    canActivate: [ AuthGuardService, RoleGuardService ],
    data: {
      expectedRole: 3,
    },
  },
  {
    path: "remainings",
    component: ListRemainingsComponent,
    canActivate: [ AuthGuardService, RoleGuardService ],
    data: {
      expectedRole: 2,
    },
  },
  {
    path: "remainings/:_id",
    component: EditRemainingsComponent,
    canActivate: [ AuthGuardService, RoleGuardService ],
    data: {
      expectedRole: 3,
    },
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "profile",
    component: ListProfileComponent,
    canActivate: [ AuthGuardService, RoleGuardService ],
    data: {
      expectedRole: 2,
    },
  },
  {
    path: "profile/:_id",
    component: EditProfileComponent,
  },
  {
    path: "users",
    component: ListUsersComponent,
    canActivate: [ AuthGuardService, RoleGuardService ],
    data: {
      expectedRole: 3,
    },
  },
  {
    path: "users/:_id",
    component: EditUsersComponent,
    canActivate: [ AuthGuardService, RoleGuardService ],
    data: {
      expectedRole: 3,
    },
  },
  {
    path: "forbidden",
    component: ForbiddenComponent,
  },
  {
    path: "*",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
