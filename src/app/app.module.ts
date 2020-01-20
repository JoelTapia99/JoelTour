import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CiudadesComponent } from './componentes/ciudades/ciudades.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule }    from '@angular/common/http';
/* paquete de API web de angular */
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MensajeComponent } from './componentes/mensaje/mensaje.component';
import { CiudadesDetalleComponent } from './componentes/ciudades-detalle/ciudades-detalle.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    CiudadesComponent,
    MensajeComponent,
    CiudadesDetalleComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
