import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Ciudad } from "../../ciudad";
@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor() { }

  crearBD(){
    const CiudadesD = [
      { id: 1, nombre: 'Quito', extencion:"372.4 km", idioma:"español", poblacion:"2.963.000" },
      { id: 2, nombre: 'Guayaquil', extencion:"396.4 km", idioma:"español", poblacion:"2.258.000" },
      { id: 3, nombre: 'Cuenca', extencion:"531.4 km", idioma:"español", poblacion:"2.123.000" },
      { id: 4, nombre: 'Ambato', extencion:"272.4 km", idioma:"español", poblacion:"2.125.000" },
      { id: 5, nombre: 'Manta', extencion:"293.4 km", idioma:"español", poblacion:"2.354.000" },
      { id: 6, nombre: 'Machala', extencion:"258.4 km", idioma:"español", poblacion:"2.785.000" },
      { id: 7, nombre: 'Santo Domingo', extencion:"258.4 km", idioma:"español", poblacion:"2.785.000" },
      { id: 8, nombre: 'Ibarra', extencion:"258.4 km", idioma:"español", poblacion:"2.785.000" },
      { id: 9, nombre: 'Latacunga', extencion:"258.4 km", idioma:"español", poblacion:"2.785.000" },
      { id: 10, nombre: 'Loja', extencion:"258.4 km", idioma:"español", poblacion:"2.785.000" }
    ];
    return {CiudadesD};
  }

  getId(ciudades: Ciudad[]): number {
    return ciudades.length > 0 ? Math.max(...ciudades.map(ciudad=> ciudad.id)) +1 : 11;
  }

}
