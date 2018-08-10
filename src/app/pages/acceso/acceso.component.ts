import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { ActivoService } from '../../services/activo/activo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'neo-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent implements OnInit {
  public emailLogin: string;
  public passwordLogin: string;
  public nombreRegistro: string;
  public emailRegistro: string;
  public passwordRegistro: string;
  public error: string;
  public procesando = false;

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  iniciarSesion() {
    if (!this.emailLogin || !this.passwordLogin) {
      this.error = 'Los campos correo y contraseña son obligatorios';
    }
    this.procesando = true;
    this._auth.iniciarSesion(this.emailLogin, this.passwordLogin)
      .then(() => {
        if (this.emailLogin === 'dev@gmail.com') {
          this._router.navigate(['/chefboard']);
        } else {
          this._router.navigate(['/dashboard']);
        }
      })
      .catch(err => {
        console.log(err);
        this.error = 'Ocurrio un error el iniciar sesión';
      })
      .then(() => {
        this.procesando = false;
      });
  }

  crearCuenta() {
    if (!this.emailRegistro || !this.passwordRegistro) {
      this.error = 'Por favor valida que hayas llenado todos los campos';
      return;
    }
    this.procesando = true;

    this._auth.crearCuenta(this.emailRegistro, this.passwordRegistro, this.nombreRegistro)
      .then(() => {
        this._router.navigate(['/dashboard']);
      })
      .catch((err) => {
        this.error = 'ocurrio un error al crear cuenta';
      })
      .then(() => {
        this.procesando = false;
      });
  }

  loginfb() {
    this._auth.iniciarSesionFb();
  }



}
