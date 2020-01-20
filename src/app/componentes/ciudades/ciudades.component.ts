import { Component, OnInit } from '@angular/core';
import { Ciudad } from "../../ciudad";
import { CiudadService } from "../../services/ciudad/ciudad.service";
/* import { Ciudades } from "../../mock-ciudades"; */
@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent implements OnInit {

  ciudades: Ciudad[];
  selectedCiudad: Ciudad;

  constructor( private ciudadService: CiudadService ) { }

  ngOnInit() {
    this.getCiudades();
  }

  onSelect(ciudad: Ciudad): void {
    this.selectedCiudad = ciudad;
  }

  getCiudades(): void {
    this.ciudadService.getCiudades()
    .subscribe(ciudades=> this.ciudades = ciudades);
  }
    

}
