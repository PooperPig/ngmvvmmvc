import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../../shared/models/customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  @Input() customer: Customer;

  constructor(private fb: FormBuilder) {}

  public customerForm: FormGroup;

  ngOnInit() {
    this.customerForm = this.fb.group({
      name: [this.customer.name, Validators.required],
      address: this.fb.group({
        address: [this.customer.address, Validators.required],
        postcode: [this.customer.postcode, Validators.required]
      })
    });
  }

  onSubmit(form: FormBuilder) {}
}
