import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

 import { AtmServiceService } from './services/atm-service.service';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { AtmoperationsComponent } from './atmoperations/atmoperations.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionListComponent,
    AtmoperationsComponent,
    AuthenticateComponent
  ],
  imports: [
    BrowserModule  ,
    HttpClientModule,
    ReactiveFormsModule
  ],
  //We have to import the service as a provider in the NGModule ecosystem
  //otherwise it won´t be available in the Angular Application
  providers: [AtmServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
