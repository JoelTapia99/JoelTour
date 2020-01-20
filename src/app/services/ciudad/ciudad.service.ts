import { Injectable } from '@angular/core';
import { Ciudad } from "../../ciudad";
import { Ciudades } from "../../mock-ciudades";
import { Observable, of } from 'rxjs';
import { MensajeService } from "../mensajes/mensaje.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  private ciudadUrl = 'api/ciudades';  // URL to web api

  constructor(private http: HttpClient, private mensajeService: MensajeService) { }


  ngOnInit() {
    this.getCiudades();
  }
/* trae las ciudades del servidor */
  getCiudades(): Observable<Ciudad[]> {
    this.mensajeService.agregar('mensaje');
    return this.http.get<Ciudad[]>(this.ciudadUrl)
    .pipe(
      tap(_=> this.registrar('traer ciudad')),
      catchError(this.handleError<Ciudad[]>('getCiudades', [])));
  }
/* /trae las ciudades del servidor */

  /* obtiene una ciudad por id.Evia 404 si no se encuentra la identificacións */
  getCiudad(id: number): Observable<Ciudad> {
    const url = `${this.ciudadUrl}/${id}`;
    this.mensajeService.agregar(`Mensaje: componente numero: id=${id}`);
    return this.http.get<Ciudad>(url).pipe(
      tap(_=> this.registrar(`mensaje del componenete con id=${id}`)),
      catchError(this.handleError<Ciudad>(`ciudad obtenida id=${id}`))
    );
  }


  private registrar(mensaje: string){
    this.mensajeService.agregar(`HeroService: ${mensaje}`);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: envia el error a la infraestructura de registro remoto
      console.error(error); // inicio de consola
  
      // TODO: mejorar de transformacion de error para el conusmo del usuario
      this.registrar(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
