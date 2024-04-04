import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiExpenseService {

  constructor(private _http: HttpClient) { }

  apiUrl = "http://localhost:4000/"

  getAllExpense() {
    return this._http.get(this.apiUrl);
  }

  getExpenseById(id: any) {
    return this._http.get(this.apiUrl + 'expense/' + id);
  }

  deleteExpense(id: any) {
    return this._http.delete(this.apiUrl + 'expense/' + id);
  }

  insert(form: any) {
    return this._http.post(this.apiUrl + 'expense/add', form);
  }

  update(id: any, form: any) {
    return this._http.put(this.apiUrl + 'expense/edit/' + id, form);
  }

}
