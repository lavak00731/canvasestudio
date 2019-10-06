import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ClientedetalleComponent } from './clientedetalle/clientedetalle.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { Comp404Component } from './comp404/comp404.component';
import { FormComponent } from './form/form.component';
import { FilterClientPipe } from './filter-client.pipe';
import { ModalComponent } from './modal/modal.component';
import { A11yModule } from '@angular/cdk/a11y';




@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    ServiciosComponent,
    ContactoComponent,
    ClientedetalleComponent,
    HomeComponent,
    Comp404Component,
    FormComponent,
    FilterClientPipe,
    ModalComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    A11yModule      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
