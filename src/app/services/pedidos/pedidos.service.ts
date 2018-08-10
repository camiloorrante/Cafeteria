import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';

const coleccionPedidos = 'pedidos';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private _firebase: AngularFireDatabase) { }

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
}
