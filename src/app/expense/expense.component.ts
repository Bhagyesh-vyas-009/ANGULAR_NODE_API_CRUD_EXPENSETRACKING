import { Component } from '@angular/core';
import { ApiExpenseService } from '../api-expense.service';
import { Expense } from '../expense';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.css'
})
export class ExpenseComponent {

  expense:Expense[]=[];

  constructor(private _apiExp:ApiExpenseService){}

  ngOnInit(){
    this._apiExp.getAllExpense().subscribe((res:any)=>{
      this.expense=res;
    })
  }

  delete(id: any) {
    this._apiExp.deleteExpense(id).subscribe((res) => {
      this.ngOnInit();
    })
  }
}
