import { CustomerService } from './../customer/customer.service';
import { Customer } from './../customer/customer';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-combo-customer',
  templateUrl: './combo-customer.component.html',
  styleUrls: ['./combo-customer.component.css']
})
export class ComboCustomerComponent implements OnInit {

  listCustomer: Customer[] = [];
  @Output()
  customer = new EventEmitter<Customer>();
  @Input()
    selectedCustomer: Customer;
  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    console.log('init ');
    this.loadData();
  }

  onChange(index) {
    console.log('selected :'  + index ? JSON.stringify(index) : '');
    if (this.listCustomer && this.listCustomer.length > 0) {
      this.customer.emit(this.listCustomer[index]);

    }
  }
  loadData() {
    this.customerService.getList().subscribe((respone) => {
      console.log(JSON.stringify(respone));
      this.listCustomer = [];
      Object.assign(this.listCustomer, respone);
    }, (err) => {
      alert('error' + JSON.stringify(err));
    });

  }


}
