import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from '../shared/models/customer';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  constructor(private customerService: CustomerService) {}

  public customer$: Observable<Customer>;

  ngOnInit() {
    this.customer$ = this.customerService.getCustomer(1);
  }
}
