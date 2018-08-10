import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'neo-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public mostrar: Boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
