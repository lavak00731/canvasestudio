import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ClientedetalleComponent } from './clientedetalle/clientedetalle.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    ServiciosComponent,
    ContactoComponent,
    ClientedetalleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
