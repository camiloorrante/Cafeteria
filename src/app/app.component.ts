import { Component } from '@angular/core';
import { PLATILLOS } from './modelos/platillos';

@Component({
  selector: 'neo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'neo';
  platillos=PLATILLOS;
}
