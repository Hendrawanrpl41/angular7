import { AccountService } from './account/account.service';
import { CustomerService } from './customer/customer.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { CustomerComponent } from './customer/customer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AlertModule, ButtonsModule, CollapseModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './customer/list.component';
import { FormComponent } from './customer/form.component';
import { AccountComponent } from './account/account.component';
import { ListAccountComponent } from './account/list-account.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ListTransactionComponent } from './transaction/list-transaction.component';
import { ComboCustomerComponent } from './combo-customer/combo-customer.component';

@NgModule({
  declarations: [AppComponent, TestComponent, CustomerComponent, ListComponent, FormComponent, AccountComponent, ListAccountComponent, TransactionComponent, ListTransactionComponent, ComboCustomerComponent],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    CollapseModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [CustomerService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule {}
