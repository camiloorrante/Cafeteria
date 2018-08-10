import { Component, OnInit } from '@angular/core';
import { Platillo } from '../../modelos/platillos';

@Component({
  selector: 'neo-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public mostrar: Boolean = false;
  public platillosCarrito: Array<Platillo>;
  constructor() { }

  ngOnInit() {
  }

}
