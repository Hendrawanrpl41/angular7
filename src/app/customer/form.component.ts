import { CustomerService } from './customer.service';
import { Customer } from './customer';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  @Input()
    customer:  Customer;
  id: String;
  @Output()
    result = new EventEmitter;
  customerFormGroup: FormGroup;
    constructor(private customerService: CustomerService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.customerFormGroup = this.formBuilder.group({
      customerNumber: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      phoneType: ['', Validators.required],
      phoneNumber: ['', Validators.required]
    });
    if (this.customer) {
      this.customerFormGroup.controls['customerNumber'].setValue(this.customer.customerNumber);
      this.customerFormGroup.controls['firstName'].setValue(this.customer.firstName);
      this.customerFormGroup.controls['lastName'].setValue(this.customer.lastName);
      this.customerFormGroup.controls['birthDate'].setValue(this.customer.birthDate);
      this.customerFormGroup.controls['phoneType'].setValue(this.customer.phoneType);
      this.customerFormGroup.controls['phoneNumber'].setValue(this.customer.phoneNumber);
      this.customerFormGroup.controls['username'].setValue(this.customer.username);
      this.customerFormGroup.controls['password'].setValue(this.customer.password);
    }
  }
  submitData() {
    const customer: Customer = new Customer();
    customer.customerNumber = this.customerFormGroup.controls['customerNumber'].value;
    customer.firstName = this.customerFormGroup.controls['firstName'].value;
    customer.lastName = this.customerFormGroup.controls['lastName'].value;
    customer.birthDate = this.customerFormGroup.controls['birthDate'].value;
    customer.phoneNumber = this.customerFormGroup.controls['phoneNumber'].value;
    customer.username = this.customerFormGroup.controls['username'].value;
    customer.password = this.customerFormGroup.controls['password'].value;
    customer.phoneType = this.customerFormGroup.controls['phoneType'].value;

    this.customerService.update(customer).subscribe((respone) => {
      console.log(JSON.stringify(respone));
      this.result.emit(true); // ini reload
      alert('data updated');
    }, (err) => {
      alert('error' + JSON.stringify(err));

    });
  }
  createData() {
    const customer: Customer = new Customer();
    customer.customerNumber = this.customerFormGroup.controls['customerNumber'].value;
    customer.firstName = this.customerFormGroup.controls['firstName'].value;
    customer.lastName = this.customerFormGroup.controls['lastName'].value;
    customer.birthDate = this.customerFormGroup.controls['birthDate'].value;
    customer.phoneNumber = this.customerFormGroup.controls['phoneNumber'].value;
    customer.username = this.customerFormGroup.controls['username'].value;
    customer.password = this.customerFormGroup.controls['password'].value;
    customer.phoneType = this.customerFormGroup.controls['phoneType'].value;


    this.customerService.create(customer).subscribe((respone) => {
      console.log(JSON.stringify(respone));
      this.result.emit(true); // ini reload
      alert('data created');
    }, (err) => {
      alert('error' + JSON.stringify(err));

    });
  }
  // updateData() {
  //   this.customerService.update(this.customer).subscribe((respone) => {
  //     console.log(JSON.stringify(respone));
  //     this.result.emit(true); // ini reload
  //     alert('data updated');
  //   }, (err) => {
  //       alert('error' + JSON.stringify(err));

  //   });
  // }
  deleteData(id) {
    this.customerService.delete(id).subscribe((respone) => {
      console.log(JSON.stringify(respone));
      this.result.emit(true); // ini reload
      alert('data deleted');
    }, (err) => {
      alert('error' + JSON.stringify(err));

    });
  }
  cancel () {
    this.result.emit(true);
  }

}
