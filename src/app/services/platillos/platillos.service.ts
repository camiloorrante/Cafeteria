import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

const rutaPlatillos = 'platillos';
@Injectable({
  providedIn: 'root'
})
export class PlatillosService {

  constructor(private _firebase: AngularFireDatabase, private _auth: AuthService) { }

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
}
