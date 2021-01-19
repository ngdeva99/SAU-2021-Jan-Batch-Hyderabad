import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableformComponent } from './tableform/tableform.component';
import { HttpClientModule } from '@angular/common/http';
//import { TableformComponent } from './tableform/tableform.component';
import { MybootstrapModule } from './modules/mybootstrap/mybootstrap.module';
import { HeaderComponent } from './components/header/header.component';
import { customdate } from './components/userForm/customdate.pipe';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator/calculator.component';


@NgModule({
  declarations: [
    AppComponent,
    TableformComponent,
    customdate,
    HeaderComponent,
    CalculatorComponent
    
    //TableformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    MybootstrapModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
