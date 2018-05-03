import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerDetailsComponent } from './customer-edit/customer-details/customer-details.component';
import { CustomerService } from './customer-edit/customer.service';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerDataService } from './shared/customer-data.service';
import { AddressComponent } from './shared/components/address/address.component';

@NgModule({
  declarations: [AppComponent, CustomerDetailsComponent, CustomerEditComponent, AddressComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [CustomerService, CustomerDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
