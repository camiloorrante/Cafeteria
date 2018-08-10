import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { Platillos } from '../../modelos/platillos';

const rutaPlatillos = 'platillos';
@Injectable({
  providedIn: 'root'
})
export class PlatillosService {

  constructor(private _firebase: AngularFireDatabase) { }

  getPlatillos() {
    return this._firebase.list(`${rutaPlatillos}`).snapshotChanges().pipe(
      map(changes => {
        return changes.map(change => {
          return {
            key: change.key,
            ...change.payload.val()
          };
        });
      })
    );
  }

  postPlatillos(platillo: Platillos) {
    this._firebase.list(rutaPlatillos).push(platillo);
  }

  deletePlatillo(platillo) {
    this._firebase.list(rutaPlatillos).remove(platillo.key);
  }
}
