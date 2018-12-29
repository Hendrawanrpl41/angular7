
import { Component, OnInit } from '@angular/core';
import { Account } from './Account';
import { AccountService } from './account.service';
import { Customer } from '../customer/customer';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})
export class ListAccountComponent implements OnInit {
  listAccount: Account[] = [];
  showDetail = false;
  selectedAccount: Account = new Account();
  constructor(
    private accountService: AccountService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const customer: String = params['customer'];
      this.listData(customer);
    });
  }

  selectAccount(account: Account) {
    const copyAccount = new Account();
    const customer = new Customer();
    copyAccount.accountNumber = account.accountNumber;
    copyAccount.openDate = account.openDate;
    copyAccount.balance = account.balance;
    copyAccount.customer = account.customer;

    this.selectedAccount = copyAccount;
    this.showDetail = true;
  }
  listData(customer?) {
    this.accountService.getList(customer).subscribe(
      respone => {
        console.log(JSON.stringify(respone));
        this.listAccount = [];
        Object.assign(this.listAccount, respone['values']);
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
  viewTransaction(account: Account) {
    this.router.navigate([
      '/listTransaction',
      { account: account.accountNumber }
    ]);
  }
}
