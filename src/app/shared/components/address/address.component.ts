import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Address } from '../../models/address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  @Input() parentFormGroup: FormGroup;
  @Input() address: Address;

  addressForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.addressForm = this.fb.group({
      address1: [this.address.line1, Validators.required],
      address2: [this.address.line2, Validators.required],
      postcode: [this.address.postcode, Validators.required],
      state: [this.address.state, Validators.required]
    });

    this.parentFormGroup.addControl('address', this.addressForm);
    this.addressForm.setParent(this.parentFormGroup);
  }
}
