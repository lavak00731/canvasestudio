import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ClientedetalleComponent  } from './clientedetalle/clientedetalle.component';
import { Comp404Component } from './comp404/comp404.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServiciosComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactoComponent },
  { path: 'portfolio/:id', component: ClientedetalleComponent  },
  { path: '**',  component: Comp404Component }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
