import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CiudadesComponent } from './componentes/ciudades/ciudades.component';
import { MensajeComponent } from './componentes/mensaje/mensaje.component';
import { CiudadesDetalleComponent } from './componentes/ciudades-detalle/ciudades-detalle.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '/ciudades', pathMatch: 'full' },
  { path: 'ciudades', component: CiudadesComponent },
  { path: 'detalleCiudades/:id', component: CiudadesDetalleComponent },
  { path: 'mensaje', component: MensajeComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
