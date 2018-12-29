import { Customer } from './customer';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class CustomerService {
  constructor(private httpClient: HttpClient) {}

  getList() {
    return this.httpClient.get('http://localhost:7000/api/customers');
  }
  update( customer: Customer) {
    return this.httpClient.put('http://localhost:7000/api/customer', customer);
  }

  create(customer: Customer) {
    return this.httpClient.post('http://localhost:7000/api/customer', customer);
  }

  delete(id: String) {
    return this.httpClient.delete('http://localhost:7000/api/customer/' + id);
  }
}
