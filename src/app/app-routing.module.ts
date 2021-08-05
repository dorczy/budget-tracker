import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './page/home/home.component';
import { ListIncomesComponent } from './page/list-incomes/list-incomes.component';
import { EditIncomesComponent } from './page/edit-incomes/edit-incomes.component';
import { ListExpensesComponent } from './page/list-expenses/list-expenses.component';
import { EditExpensesComponent } from './page/edit-expenses/edit-expenses.component';
import { LoginComponent } from './page/login/login.component';
import { ListUsersComponent } from './page/list-users/list-users.component';
import { EditUsersComponent } from './page/edit-users/edit-users.component';
import { EditProfileComponent } from './page/edit-profile/edit-profile.component';
import { ListProfileComponent } from './page/list-profile/list-profile.component';
import { ListRemainingsComponent } from './page/list-remainings/list-remainings.component';
import { EditRemainingsComponent } from './page/edit-remainings/edit-remainings.component';
import { ListSummaryComponent } from './page/list-summary/list-summary.component';
import { AuthGuardService } from './service/auth-guard.service';
import { RoleGuardService } from './service/role-guard.service';
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
