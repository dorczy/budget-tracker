import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { JwtInterceptorService } from './service/jwt-interceptor.service';

import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { ForbiddenComponent } from './page/forbidden/forbidden.component';

import { ListSummaryComponent } from './page/summary/list-summary/list-summary.component';
import { ListCategoriesComponent } from './page/categories/list-categories/list-categories.component';
import { EditCategoriesComponent } from './page/categories/edit-categories/edit-categories.component';
import { ListIncomesComponent } from './page/incomes/list-incomes/list-incomes.component';
import { EditIncomesComponent } from './page/incomes/edit-incomes/edit-incomes.component';
import { ListExpensesComponent } from './page/expenses/list-expenses/list-expenses.component';
import { EditExpensesComponent } from './page/expenses/edit-expenses/edit-expenses.component';
import { ListRemainingsComponent } from './page/remainings/list-remainings/list-remainings.component';
import { EditRemainingsComponent } from './page/remainings/edit-remainings/edit-remainings.component';
import { ListProfileComponent } from './page/profile/list-profile/list-profile.component';
import { EditProfileComponent } from './page/profile/edit-profile/edit-profile.component';
import { ListUsersComponent } from './page/users/list-users/list-users.component';
import { EditUsersComponent } from './page/users/edit-users/edit-users.component';

import { ListItemComponent } from './common/list-item/list-item.component';
import { CardItemComponent } from './common/card-item/card-item.component';

import { HufPipe } from './pipe/huf.pipe';
import { SummaryPipe } from './pipe/summary.pipe';
import { SortPipe } from './pipe/sort.pipe';
import { FilterPipe } from './pipe/filter.pipe';

import { SortComponent } from './common/sort/sort.component';
import { FilterComponent } from './common/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ForbiddenComponent,
    ListSummaryComponent,
    ListCategoriesComponent,
    EditCategoriesComponent,
    ListIncomesComponent,
    EditIncomesComponent,
    ListExpensesComponent,
    EditExpensesComponent,
    ListRemainingsComponent,
    EditRemainingsComponent,
    ListProfileComponent,
    EditProfileComponent,
    ListUsersComponent,
    EditUsersComponent,
    ListItemComponent,
    CardItemComponent,
    HufPipe,
    SummaryPipe,
    SortPipe,
    FilterPipe,
    SortComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
