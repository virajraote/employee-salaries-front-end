import { MaterialModule } from 'src/MaterialModule';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarComponent } from './component/menubar/menubar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './component/home/home.component';
import { EmployeesComponent } from './component/employees/employees.component';
import { PopupComponent } from './component/popup/popup.component';
import { EmployeeDetailsComponent } from './component/employee-details/employee-details.component';
import { ChartComponent } from './component/chart/chart.component';



@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HomeComponent,
    EmployeesComponent,
    PopupComponent,
    EmployeeDetailsComponent,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
