import { ListTransactionComponent } from './transaction/list-transaction.component';
import { FormComponent } from './customer/form.component';
import { ListComponent } from './customer/list.component';
import { TestComponent } from './test/test.component';
import { CustomerComponent } from './customer/customer.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAccountComponent } from './account/list-account.component';

const routes: Routes = [
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'customer',
    component: CustomerComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'formCustomer',
    component: FormComponent
  },
  {
    path: 'listAccount',
    component: ListAccountComponent
  },
  {
    path: 'listTransaction',
    component: ListTransactionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
