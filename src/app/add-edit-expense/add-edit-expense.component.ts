import { Component } from '@angular/core';
import { ApiExpenseService } from '../api-expense.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from '../expense';

@Component({
  selector: 'app-add-edit-expense',
  templateUrl: './add-edit-expense.component.html',
  styleUrl: './add-edit-expense.component.css'
})
export class AddEditExpenseComponent {

  constructor(private _apiExp:ApiExpenseService,private _actRoute:ActivatedRoute,private router:Router){}

  id = -1;
  data: Expense = new Expense();
  ngOnInit() {
    this.id = Number(this._actRoute.snapshot.paramMap.get('id'));
    if (this.id >0) {
      this._apiExp.getExpenseById(this.id).subscribe((res: any) => {
        this.data = res;
      })
    }
  }

  save(form: any) {
    if (this.id > 0) {
      this._apiExp.update(this.id, form).subscribe((res:any) => {
        this.data=res;
        this.router.navigate(['expense']);
      });
    }
    else {
      this._apiExp.insert(form).subscribe((res:any) => {
        this.data = res;
        this.router.navigate(['expense']);
      })
    }
  }
}
