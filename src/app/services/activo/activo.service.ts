import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivoService implements CanActivate {

  constructor(private _auth: AuthService, private _router: Router ) { }

  canActivate() {
    return this._auth.usuario.pipe(
      map( user => {
        if (user) {
          this._router.navigate(['/']);
        } else {
          return true;
        }
      }),
      catchError( () => {
        return of(true);
      })
    );
  }
}
