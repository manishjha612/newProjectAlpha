import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterilsModule } from './materials/materils.module';

import { EmployeesComponent } from './employees/employees.component';
import { CommonLayoutComponent } from './common-layout/common-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientComponent } from './client/client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import{HttpClientModule} from'@angular/common/http';
import { AddClientModelComponent } from './add-client-model/add-client-model.component';
import { CardViewComponent } from './card-view/card-view.component'
import { ButtonRendererComponent } from './employees/ButtonRendererComponent';
import { DynamicCardComponent } from './dynamic-card/dynamic-card.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    CommonLayoutComponent,
    DashboardComponent,
    ClientComponent,
    AddClientModelComponent,
    CardViewComponent,
    DynamicCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterilsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([ButtonRendererComponent]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
