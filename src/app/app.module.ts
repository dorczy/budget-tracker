import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { LoginComponent } from './page/login/login.component';
import { FooterComponent } from './common/footer/footer.component';
import { ExpensesComponent } from './page/expenses/expenses.component';
import { IncomesComponent } from './page/incomes/incomes.component';
import { ListItemComponent } from './common/list-item/list-item.component';
import { HufPipe } from './pipe/huf.pipe';
import { SummaryPipe } from './pipe/summary.pipe';
import { EditItemComponent } from './common/edit-item/edit-item.component';
import { InputItemComponent } from './common/input-item/input-item.component';
import { SelectItemComponent } from './common/select-item/select-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    FooterComponent,
    ExpensesComponent,
    IncomesComponent,
    ListItemComponent,
    HufPipe,
    SummaryPipe,
    EditItemComponent,
    InputItemComponent,
    SelectItemComponent,
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
