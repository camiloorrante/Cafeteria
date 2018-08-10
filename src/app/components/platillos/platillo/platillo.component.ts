import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Platillo } from '../../../modelos/platillos';

@Component({
  selector: 'neo-platillo',
  templateUrl: './platillo.component.html',
  styleUrls: ['./platillo.component.css']
})
export class PlatilloComponent implements OnInit {
  @Input() platillo;
  public mostrar: Boolean = false; // Rol chef/usuario
  constructor() { }

  ngOnInit() {
  }

  agregarAlCarrito(platillo: Platillo) {
    // this.agregarCarritoEvent.emit(platillo);
  }

}
