import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'neo-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  @Input('misPedidos')
  misPedidos: any;

  @Input('uid')
  uid: string;
  constructor() {}

  ngOnInit() {
    console.log(this.misPedidos);
  }
}
