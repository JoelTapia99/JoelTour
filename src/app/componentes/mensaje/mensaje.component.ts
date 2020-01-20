import { Component, OnInit } from '@angular/core';
import { MensajeService } from "../../services/mensajes/mensaje.service";

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {

  constructor( private mensajeService: MensajeService ) { }

  ngOnInit() {
  }

}
