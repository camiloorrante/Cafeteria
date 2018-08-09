import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { AngularFireDatabase } from 'angularfire2/database';

const lista = 'usuarios-activos';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  constructor(private _firebase: AngularFireDatabase) { }

  actualizarUsuarioEstatusConexion(usuario, estatus) {
    if (usuario) {
      return this._firebase.object(`${lista}/${usuario.uid}`).set({
        email: usuario.email,
        displayName: usuario.displayName,
        lastLoginAt: usuario.metadata.lastSignInAt,
        status: estatus
      });
    }
  }

  getUsuario(uid: string) {
    if (uid) {
      return this._firebase.object(`${lista}/${uid}`)
        .valueChanges();
    }
  }

}
