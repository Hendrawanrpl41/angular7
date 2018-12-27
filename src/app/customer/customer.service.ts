import { Customer } from './customer';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class CustomerService {
  constructor(private httpClient: HttpClient) {}

  getList() {
    return this.httpClient.get('http://localhost:3000/customers');
  }
  update( customer: Customer) {
    return this.httpClient.put('http://localhost:8080/cus/customer', customer);
  }

  create(customer: Customer) {
    return this.httpClient.post('http://localhost:3000/customer', customer);
  }

  delete(id: String) {
    return this.httpClient.delete('http://localhost:3000/customer/' + id);
  }
}
