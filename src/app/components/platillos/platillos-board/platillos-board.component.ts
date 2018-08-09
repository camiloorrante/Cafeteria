import { Component, OnInit } from '@angular/core';
import { Platillos, PLATILLOS } from '../../../modelos/platillos';
import { PlatillosService } from '../../../services/platillos/platillos.service';

@Component({
  selector: 'neo-platillos-board',
  templateUrl: './platillos-board.component.html',
  styleUrls: ['./platillos-board.component.css']
})
export class PlatillosBoardComponent implements OnInit {
  platillos;
  constructor( private _platillosService: PlatillosService) { }

  ngOnInit() {
    this._platillosService.getPlatillos().subscribe( platillos => {
      this.platillos = platillos;
    });
  }

}
