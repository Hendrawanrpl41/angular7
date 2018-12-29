import { Account } from './Account';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private httpClient: HttpClient) {}
  getList(customer?) {
    let params: String = '';
    if (customer) {
      params = '?customer=' + customer;
    }
    return this.httpClient.get('http://localhost:7000/api/accounts' + params);
  }
  getListcus() {
    return this.httpClient.get('http://localhost:7000/api/customers');
  }
  update(account: Account) {
    return this.httpClient.put('http://localhost:7000/api/account', account);
  }

  create(account: Account) {
    return this.httpClient.post('http://localhost:7000/api/account', account);
  }

  delete(id: String) {
    return this.httpClient.delete('http://localhost:7000/api/account/' + id);
  }
}
