import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

const coleccionPedidos = 'pedidos';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private _firebase: AngularFireDatabase, private _auth: AuthService) { }

  getAllByUserId(uid) {
    return this._firebase.list(`${coleccionPedidos}/${uid}`)
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(change => {
            return {
              key: change.key,
              ...change.payload.val()
            };
          });
        }));
  }

  insertPedido(platillos: Array<any>, uid, total) {
    this._auth.usuario.subscribe(usuario => {
      console.log(usuario.uid);
      this._firebase.list(`pedidos/${usuario.uid}`).push({
        total: total,
        fecha: new Date().toISOString(),
        platillos: platillos
      });
    });
  }
}
