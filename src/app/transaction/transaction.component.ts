import { AccountService } from './../account/account.service';
import { Account } from './../account/Account';
import { Transaction } from './Transaction';
import { TransactionService } from './transaction.service';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  Listaccount: Account[] = [];
  account: Account;
  transactionFormGroup: FormGroup;
  @Input()
  transaction: Transaction;
  id: String;
  @Output()
  result = new EventEmitter();
  constructor(
    private transactionService: TransactionService,
    private formBuilder: FormBuilder,
    private accountService: AccountService
  ) {}

  ngOnInit() {
    this.transactionFormGroup = this.formBuilder.group({
      accountNumber: ['', Validators.required],
      id: ['', Validators.required],
      amount: ['', Validators.required],
      type: ['', Validators.required],
      amountSign: ['', Validators.required]
    });
    this.listDataacc();

    if (this.transaction) {
      this.transactionFormGroup.controls['id'].setValue(
        this.transaction.id
      );
      this.transactionFormGroup.controls['type'].setValue(
        this.transaction.type
      );
      this.transactionFormGroup.controls['amount'].setValue(
        this.transaction.amount);
      this.transactionFormGroup.controls['amountSign'].setValue(
        this.transaction.amountSign
      );
      this.transactionFormGroup.controls['accountNumber'].setValue(
        this.transaction.account.accountNumber
      );
    }
  }
  createData() {
    const account: Account = new Account();
    const transaction = new Transaction();
    transaction.type = this.transactionFormGroup.controls['type'].value;
    transaction.amount = this.transactionFormGroup.controls['amount'].value;
    transaction.amountSign = this.transactionFormGroup.controls['amountSign'].value;

    transaction.accountNumber = this.transactionFormGroup.controls['accountNumber'].value;
    account.accountNumber = this.transactionFormGroup.controls['accountNumber'].value;

    transaction.account = account;
    console.log(transaction);

    this.transactionService.create(transaction).subscribe(
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
    const transaction = new Transaction();
    transaction.id = this.transactionFormGroup.controls['id'].value;
    transaction.type = this.transactionFormGroup.controls['type'].value;
    transaction.amount = this.transactionFormGroup.controls['amount'].value;
    transaction.amountSign = this.transactionFormGroup.controls['amountSign'].value;
    transaction.account = account;

    console.log(transaction);

    this.transactionService.update(transaction).subscribe(
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
    this.transactionService.delete(event).subscribe(
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

  listDataacc() {
    this.transactionService.getListacc().subscribe(
      respone => {
        console.log(JSON.stringify(respone));
        Object.assign(this.Listaccount, respone['values']);
      },
      err => {
        alert('error' + JSON.stringify(err));
      }
    );
  }
}
