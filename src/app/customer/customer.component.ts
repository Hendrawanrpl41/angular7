import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Routes, Router } from '@angular/router';
import { Customer } from './customer';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  firstName: String;
  lastName: String;
  birthDate: String;
  phoneType: String;
  phoneNumber: String;
  username: String;
  password: String;
  customer = new Customer();
  showChild = true;
  constructor(
    private router: Router,
    private customerService: CustomerService
  ) {}

  ngOnInit() {}
  create() {
    this.customerService.create(this.customer).subscribe(
      respone => {
        console.log(JSON.stringify(respone));
        alert('data created');
      },
      err => {
        alert('error' + JSON.stringify(err));
      }
    );
  }
  tampil() {
    this.router.navigate([
      '/test',
      { firstname: this.firstName, lastname: this.lastName }
    ]);
  }
  muncul() {
    this.showChild = true;
  }
  hilang() {
    this.showChild = false;
  }
  parentdata(event) {
    this.showChild = event;
  }
}

