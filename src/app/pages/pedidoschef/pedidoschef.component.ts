import { Component, OnInit } from '@angular/core';
import { Pedidos, PEDIDOS } from '../../modelos/pedidos';

@Component({
  selector: 'neo-pedidoschef',
  templateUrl: './pedidoschef.component.html',
  styleUrls: ['./pedidoschef.component.css']
})
export class PedidoschefComponent implements OnInit {
  pedidos: Array<Pedidos> = PEDIDOS; //Obtiene arreglo del modelo
  uid: string = 'Camilo'; //uid de prueba para validacion de usuario
  constructor() {}

  ngOnInit() {}
}
