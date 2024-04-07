import { Component } from '@angular/core';
import { ApiExpenseService } from '../api-expense.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from '../expense';

@Component({
  selector: 'app-detail-expense',
  templateUrl: './detail-expense.component.html',
  styleUrl: './detail-expense.component.css'
})
export class DetailExpenseComponent {

  data: any=[];
  constructor(private _apiExp: ApiExpenseService, private _actRoute: ActivatedRoute, private router: Router) { }

  id = 0
  ngOnInit() {
    this.id = Number(this._actRoute.snapshot.paramMap.get('id'));
    this._apiExp.getExpenseById(this.id).subscribe((res: any) => {
      this.data = res;
    })
  }

  deleteExp() {
    this._apiExp.deleteExpense(this.id).subscribe((res) => {
      this.router.navigate(['expense'])
    })
  }
}
