import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from '../shared/models/customer';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  constructor(private customerService: CustomerService) {}

  public customer: Customer;

  ngOnInit() {
    this.customer = this.customerService.getCustomer(1);
  }
}
