import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Platillo, PLATILLOS } from '../../../modelos/platillos';
import { PlatillosService } from '../../../services/platillos/platillos.service';


@Component({
  selector: 'neo-platillos-board',
  templateUrl: './platillos-board.component.html',
  styleUrls: ['./platillos-board.component.css']
})
export class PlatillosBoardComponent implements OnInit {
  platillos;
  carritoPedidos: Array<Platillo>;
  constructor( private _platillosService: PlatillosService) { }

  ngOnInit() {
    this._platillosService.getPlatillos().subscribe( platillos => {
      this.platillos = platillos;
    });
  }

  addPlatillo(platillo: Platillo) {
    this.carritoPedidos.push(platillo);
  }


}
