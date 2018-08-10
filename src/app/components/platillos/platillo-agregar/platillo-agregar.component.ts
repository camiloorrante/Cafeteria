import { Component, OnInit } from '@angular/core';
import { PlatillosService } from '../../../services/platillos/platillos.service';

@Component({
  selector: 'neo-platillo-agregar',
  templateUrl: './platillo-agregar.component.html',
  styleUrls: ['./platillo-agregar.component.css']
})
export class PlatilloAgregarComponent implements OnInit {

  constructor(private _platilloService: PlatillosService) { }

  ngOnInit() {
  }

  agregarPlatillo() {
    console.log('Clik agregado');
  }

}
