import { Component, OnInit } from '@angular/core';
import { PEDIDOS, Pedidos } from '../../modelos/pedidos'

@Component({
  selector: 'neo-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  pedidos: Array<Pedidos> = PEDIDOS;//Obtiene arreglo del modelo
  public misPedidos: Array<any> = new Array(); //Almacena solo los pedidos correpondientes al usuario
  uid: string = 'Camilo';//uid de prueba para validacion de usuario
  constructor() { }

  ngOnInit() {
    //Algoritmo para filtrar pedidos del usuario
    this.pedidos.forEach(element => {
      if (element.uid == this.uid) {
        this.misPedidos.push(element);
      }
    });
  }
}
