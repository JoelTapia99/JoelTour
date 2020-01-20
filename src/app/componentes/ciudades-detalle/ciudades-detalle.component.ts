import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CiudadService } from '../../services/ciudad/ciudad.service';
import { Ciudad } from 'src/app/ciudad';

@Component({
  selector: 'app-ciudades-detalle',
  templateUrl: './ciudades-detalle.component.html',
  styleUrls: ['./ciudades-detalle.component.css']
})
export class CiudadesDetalleComponent implements OnInit {

  ciudad: Ciudad;

  constructor(
    private route: ActivatedRoute, /* guarda información sobre la ruta a esta instancia del CiudadService */
    private ciudadService: CiudadService, /* obtiene datos héroe desde el servidor remoto  */
    private location: Location /* es un servicio angular para interactuar con el navegador */
  ) { }

  ngOnInit() {
    this.getCiudad();
  }

  getCiudad(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ciudadService.getCiudad(id)
      .subscribe(ciudad => this.ciudad = ciudad);
  }

  atras(){
    this.location.back();
  }
}
