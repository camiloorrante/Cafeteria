import { Component, OnInit } from '@angular/core';
import { Platillos, PLATILLOS } from '../../../modelos/platillos';

@Component({
  selector: 'neo-platillos-board',
  templateUrl: './platillos-board.component.html',
  styleUrls: ['./platillos-board.component.css']
})
export class PlatillosBoardComponent implements OnInit {
  platillos:Array<Platillos> = PLATILLOS;
  constructor() { }

  ngOnInit() {
  }

}
