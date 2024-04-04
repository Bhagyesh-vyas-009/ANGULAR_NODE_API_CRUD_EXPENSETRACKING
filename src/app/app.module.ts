import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseComponent } from './expense/expense.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DetailExpenseComponent } from './detail-expense/detail-expense.component';
import { AddEditExpenseComponent } from './add-edit-expense/add-edit-expense.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseComponent,
    DetailExpenseComponent,
    AddEditExpenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
