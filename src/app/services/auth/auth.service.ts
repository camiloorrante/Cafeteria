import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router, CanActivate } from '@angular/router';
import { UsuariosService } from '../usuarios/usuarios.service';
import { map, catchError } from '../../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  public usuario: Observable<firebase.User>;
  private _uid: string;
  constructor(private _fireAuth: AngularFireAuth,
              private _router: Router,
              private _usuariosService: UsuariosService) {
      this.usuario = this._fireAuth.authState;
  }

  iniciarSesion(email: string, password: string) {
    this._fireAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user: firebase.auth.UserCredential) => {
        return this._usuariosService.actualizarUsuarioEstatusConexion(user.user, 'online');
      });
  }

  crearCuenta(email: string, password: string) {
    return this._fireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user: firebase.auth.UserCredential) => {
        return this._usuariosService.actualizarUsuarioEstatusConexion(user.user, 'online');
      });
  }

  cerrarSesion(usuario) {
    this._usuariosService
      .actualizarUsuarioEstatusConexion(usuario, 'offline')
      .catch(err => console.log(err))
      .then( () => {
        return this._fireAuth.auth.signOut().then(() => {
          return this._router.navigate(['/login']);
        });
      });
  }

  canActivate() {
    return this.usuario.pipe(
      map( usuario => {
        if (usuario) {
          return true;
        } else {
          return false;
        }
      }),
      catchError(err => {
        this._router.navigate(['/login']);
        return of(false);
      })
    );
  }


}
