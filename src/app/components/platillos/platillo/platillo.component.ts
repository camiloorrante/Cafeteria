import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Platillo } from '../../../modelos/platillos';
import { PlatillosService } from './../../../services/platillos/platillos.service';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'neo-platillo',
  templateUrl: './platillo.component.html',
  styleUrls: ['./platillo.component.css']
})
export class PlatilloComponent implements OnInit {
  @Input() platillo;
  public mostrar: Boolean = false; // Rol chef/usuario
  public usuario;
  constructor(private _platillos: PlatillosService,
    private _auth: AuthService) {
    this._auth.usuario.subscribe(user => {
      this.usuario = user;
    });
  }

  ngOnInit() {
  }

  agregarAlCarrito(platillo: Platillo) {
    // this.agregarCarritoEvent.emit(platillo);
  }
  removePlatillo() {
    this._platillos.deletePlatillo(this.platillo);
  }

}
