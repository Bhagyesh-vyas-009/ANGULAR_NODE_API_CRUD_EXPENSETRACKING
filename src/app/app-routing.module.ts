import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseComponent } from './expense/expense.component';
import { DetailExpenseComponent } from './detail-expense/detail-expense.component';
import { AddEditExpenseComponent } from './add-edit-expense/add-edit-expense.component';

const routes: Routes = [
  {path:'expense',component:ExpenseComponent},
  { path: 'expense/add/edit/:id', component: AddEditExpenseComponent },
  {path: 'expense/:id', component: DetailExpenseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
