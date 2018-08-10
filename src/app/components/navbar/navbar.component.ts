import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'neo-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public usuario;
  constructor(private _auth: AuthService) {
    this._auth.usuario.subscribe( user => {
      this.usuario = user;
    });
   }

  ngOnInit() {
  }

  cerrarSesion() {
    if ( this.usuario ) {
      this._auth.cerrarSesion(this.usuario);
    }
  }

}
