import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRestComponent } from './add-rest/add-rest.component';
import { UpdateRestComponent } from './update-rest/update-rest.component';
import { LoginRestComponent } from './login-rest/login-rest.component';
import { ListRestComponent } from './list-rest/list-rest.component';
import { RegisterRestComponent } from './register-rest/register-rest.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    AddRestComponent,
    UpdateRestComponent,
    LoginRestComponent,
    ListRestComponent,
    RegisterRestComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
