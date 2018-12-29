import { CustomerService } from './../customer/customer.service';
import { ListComponent } from './../customer/list.component';
import { Customer } from './../customer/customer';
import { Account } from './Account';
import { AccountService } from './account.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  ListCustomer: Customer[] = [];
  customer: Customer;
  accountFormGroup: FormGroup;
  @Input()
  account: Account;
  id: String;
  @Output()
  result = new EventEmitter();
  constructor(
    private accountService: AccountService,
    private formBuilder: FormBuilder,
    private customerService: CustomerService
  ) {}

  ngOnInit() {
    this.accountFormGroup = this.formBuilder.group({
      accountNumber: ['', Validators.required],
      openDate: ['', Validators.required],
      balance: ['', Validators.required],
      customerNumber: ['', Validators.required]
    });
    this.listDatacus();

    if (this.account) {
      this.accountFormGroup.controls['accountNumber'].setValue(
        this.account.accountNumber
      );
      this.accountFormGroup.controls['openDate'].setValue(
        this.account.openDate
      );
      this.accountFormGroup.controls['balance'].setValue(this.account.balance);
      this.accountFormGroup.controls['customerNumber'].setValue(
        this.account.customer.customerNumber
      );
    }
  }
  createData() {
    const account: Account = new Account();
    const customer = new Customer();
    account.accountNumber = this.accountFormGroup.controls['accountNumber'].value;
    account.openDate = this.accountFormGroup.controls['openDate'].value;
    account.balance = this.accountFormGroup.controls['balance'].value;

    customer.customerNumber = this.accountFormGroup.controls['customerNumber'].value;

    account.customer = customer;
    console.log(account);

    this.accountService.create(account).subscribe(
      (respone) => {
        console.log(JSON.stringify(respone));
        this.result.emit(true); // ini reload
        alert('data created');
      },
      err => {
        alert('error' + JSON.stringify(err));
      }
    );
  }
  updateData() {
    const account: Account = new Account();
    const customer = new Customer();
    account.accountNumber = this.accountFormGroup.controls['accountNumber'].value;
    account.openDate = this.accountFormGroup.controls['openDate'].value;
    account.balance = this.accountFormGroup.controls['balance'].value;
    customer.customerNumber = this.accountFormGroup.controls['customerNumber'].value;

    account.customer = customer;
    console.log(account);

    this.accountService.update(account).subscribe(
      respone => {
        console.log(JSON.stringify(respone));
        this.result.emit(true); // ini reload
        alert('data updated');
      },
      err => {
        alert('error' + JSON.stringify(err));
      }
    );
  }
  deleteData(event) {
    this.accountService.delete(event).subscribe(
      respone => {
        console.log(JSON.stringify(respone));
        this.result.emit(true); // ini reload
        alert('data deleted');
      },
      err => {
        alert('error' + JSON.stringify(err));
      }
    );
  }
  cancelChanges() {
    this.result.emit(true);
  }

  listDatacus() {
    this.accountService.getListcus().subscribe(
      respone => {
        console.log(JSON.stringify(respone));
        Object.assign(this.ListCustomer, respone['values']);
      },
      err => {
        alert('error' + JSON.stringify(err));
      }
    );
  }
}

