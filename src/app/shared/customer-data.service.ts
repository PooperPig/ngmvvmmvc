import { Injectable } from '@angular/core';
import { Customer } from './models/customer';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Address } from './models/address';

@Injectable()
export class CustomerDataService {
  constructor() {}

  public getCustomer(id: number): Observable<Customer> {
    // Get data from the Db, transform it into a view-data object and return it
    const customer = new Customer();
    customer.id = 1;
    customer.name = 'fred smoth';
    customer.address = new Address();
    customer.address.line1 = 'Level 3';
    customer.address.line2 = '123 Nitherington Lane';
    customer.address.postcode = '1234';
    customer.address.state = 'Qld';
    return Observable.of(customer);
  }
}
