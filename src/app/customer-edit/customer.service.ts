import { Injectable } from '@angular/core';
import { CustomerDataService } from '../shared/customer-data.service';
import { Customer } from '../shared/models/customer';

@Injectable()
export class CustomerService {
  constructor(private customerDataService: CustomerDataService) {}

  public getCustomer(customerId: number): Customer {
    return this.customerDataService.getCustomer(customerId);
  }
}
