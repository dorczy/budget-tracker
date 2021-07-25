import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { ProfileComponent } from './page/profile/profile.component';

import { ListIncomesComponent } from './page/list-incomes/list-incomes.component';
import { EditIncomesComponent } from './page/edit-incomes/edit-incomes.component';
import { ListExpensesComponent } from './page/list-expenses/list-expenses.component';
import { EditExpensesComponent } from './page/edit-expenses/edit-expenses.component';
import { ListUsersComponent } from './page/list-users/list-users.component';
import { EditUsersComponent } from './page/edit-users/edit-users.component';

import { ListItemComponent } from './common/list-item/list-item.component';
import { HufPipe } from './pipe/huf.pipe';
import { SummaryPipe } from './pipe/summary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ListIncomesComponent,
    ListExpensesComponent,
    EditIncomesComponent,
    EditExpensesComponent,
    ListItemComponent,
    LoginComponent,
    HufPipe,
    SummaryPipe,
    ProfileComponent,
    ListUsersComponent,
    EditUsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
