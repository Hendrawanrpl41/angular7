import { Transaction } from './Transaction';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpClient: HttpClient) { }
  getList(account?) {
    let params: String = '';
    if (account) {
      params = '?account=' + account;
    }
    return this.httpClient.get('http://localhost:7000/api/transactions' + params);
  }
  getListacc() {
    return this.httpClient.get('http://localhost:7000/api/accounts');
  }
  update(transaction: Transaction) {
    return this.httpClient.put('http://localhost:7000/api/transaction', transaction);
  }

  create(transaction: Transaction) {
    return this.httpClient.post('http://localhost:7000/api/transaction', transaction);
  }

  delete(id: String) {
    return this.httpClient.delete('http://localhost:7000/api/transaction/' + id);
  }
}
