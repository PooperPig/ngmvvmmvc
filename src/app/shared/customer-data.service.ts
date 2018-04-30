import { Injectable } from '@angular/core';
import { Customer } from './models/customer';

@Injectable()
export class CustomerDataService {
  constructor() {}

  public getCustomer(id: number) {
    // Get data from the Db, transform it into a view-data object and return it
    const customer = new Customer();
    customer.id = 1;
    customer.name = 'fred smoth';
    customer.address = '31 High Street, Nether Wallop';
    customer.postcode = '4545';
    return customer;
  }
}
