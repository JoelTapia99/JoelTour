import { Component, OnInit } from '@angular/core';
import { CiudadService } from '../../services/ciudad/ciudad.service';
import { Ciudad } from "../../ciudad";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ciudades: Ciudad[] = [];

  constructor( private ciudadService: CiudadService ) { }

  ngOnInit() {
    this.getCiudades();
  }

  getCiudades(): void {
    this.ciudadService.getCiudades()
      .subscribe(ciudades => this.ciudades = ciudades.slice(1, 5));
  }

}
