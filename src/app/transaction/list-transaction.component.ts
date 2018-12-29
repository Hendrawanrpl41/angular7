import { ActivatedRoute } from '@angular/router';
import { Transaction } from './Transaction';
import { TransactionService } from './transaction.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-transaction',
  templateUrl: './list-transaction.component.html',
  styleUrls: ['./list-transaction.component.css']
})
export class ListTransactionComponent implements OnInit {

  listTransaction: Transaction[] = [];
  showDetail = false;
  selectedTransaction: Transaction = new Transaction();
  constructor(
    private transactionService: TransactionService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const account: String = params['account'];
      this.listData(account);
    });
  }

  selectTransaction(transaction: Transaction) {
    const copyTransaction = new Transaction();
    copyTransaction.id = transaction.id;
    copyTransaction.type = transaction.type;
    copyTransaction.amount = transaction.amount;
    copyTransaction.amountSign = transaction.amountSign;
    copyTransaction.account = transaction.account;

    this.selectedTransaction = copyTransaction;
    this.showDetail = true;
  }
  listData(account?) {
    this.transactionService.getList(account).subscribe(
      response => {
        console.log(JSON.stringify(response));
        this.listTransaction = [];
        Object.assign(this.listTransaction, response['values']);
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

}
