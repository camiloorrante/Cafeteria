import { Component, OnInit, Input } from '@angular/core';

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

}
