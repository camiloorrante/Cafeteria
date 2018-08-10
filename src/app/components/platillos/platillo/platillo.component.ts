import { PlatillosService } from './../../../services/platillos/platillos.service';
import { Component, OnInit, Input } from '@angular/core';
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
    this._auth.usuario.subscribe( user => {
      this.usuario = user;
    });
   }

  ngOnInit() {
  }

  removePlatillo () {
    this._platillos.deletePlatillo(this.platillo);
  }

}
