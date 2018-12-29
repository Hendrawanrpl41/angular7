import { Router } from '@angular/router';
import { FormComponent } from './form.component';
import { CustomerService } from './customer.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer } from './customer';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // @ViewChild('formCustomer')
  // formCustomer: FormComponent;
  listCustomer: Customer[] = [];
  showDetail = false;
  selectedCustomer: Customer = new Customer();
  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.listData();
  }

  selectCustomer(customer: Customer) {
    const copyCustomer = new Customer();
    copyCustomer.firstName = customer.firstName;
    copyCustomer.lastName = customer.lastName;
    copyCustomer.birthDate = customer.birthDate;
    copyCustomer.username = customer.username;
    copyCustomer.phoneNumber = customer.phoneNumber;
    copyCustomer.phoneType = customer.phoneType;
    copyCustomer.customerNumber = customer.customerNumber;
    copyCustomer.password = customer.password;

    this.selectedCustomer = copyCustomer;
    this.showDetail = true;
    // this.formCustomer.updateDate();
    this.listCustomer = [];
  }
  listData() {
    this.customerService.getList().subscribe(
      respone => {
        console.log(JSON.stringify(respone));
        this.listCustomer = [];
        Object.assign(this.listCustomer, respone['values']);
      },
      err => {
        alert('error' + JSON.stringify(err));
      }
    );
  }
  prosesResult(result) {
    if (result) {
      this.showDetail = false;
      this.listData();
    }
  }
  addData() {
    this.showDetail = true;
  }
  // untuk lempar data ke account,
  viewAccount(customer: Customer) {
    console.log('====================================');
    console.log(customer);
    console.log('====================================');
    this.router.navigate([
      // routing ke halaman list account
      '/listAccount',
      { customer: customer.customerNumber }
    ]);
  }
}
