import { Component, OnInit } from '@angular/core';
import { PlatillosService } from '../../../services/platillos/platillos.service';
import { Platillos } from '../../../modelos/platillos';

@Component({
  selector: 'neo-platillo-agregar',
  templateUrl: './platillo-agregar.component.html',
  styleUrls: ['./platillo-agregar.component.css']
})
export class PlatilloAgregarComponent implements OnInit {
  public platillo: Platillos = new Platillos();

  constructor(private _platilloService: PlatillosService) { }

  ngOnInit() {
  }

  agregarPlatillo() {
    this._platilloService.postPlatillos(this.platillo).then( () => {
      this.platillo = new Platillos();
    });
  }

}
