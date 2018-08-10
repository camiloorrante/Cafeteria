import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router, CanActivate } from '@angular/router';
import { UsuariosService } from '../usuarios/usuarios.service';
import { map, catchError } from 'rxjs/operators';

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
    return this._fireAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user: firebase.auth.UserCredential) => {
        this._router.navigate(['/']);
      });
  }

  iniciarSesionFb() {
    this._fireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => {
        console.log(res);
        this._router.navigate(['/']);
      });
  }

  cerrarSesionFb() {
    this._fireAuth.auth.signOut();
  }

  crearCuenta(email: string, password: string, nombre: string) {
    return this._fireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user: firebase.auth.UserCredential) => {
        this._router.navigate(['/']);
      });
  }

  cerrarSesion(usuario) {
    return this._fireAuth.auth.signOut().then(() => {
      this._router.navigate(['/login']);
    }).catch(err => {
      console.log(err);
    });
  }

  canActivate() {
    return this.usuario.pipe(
      map(usuario => {
        if (usuario) {
          return true;
        } else {
          this._router.navigate(['/acceso']);
          return false;
        }
      }),
      catchError(err => {
        this._router.navigate(['/acceso']);
        return of(false);
      })
    );
  }


}
