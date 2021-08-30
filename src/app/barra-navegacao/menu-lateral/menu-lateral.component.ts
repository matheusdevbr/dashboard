import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  constructor() { }

  public menuAberto: boolean = false;
  ngOnInit(): void {
  }

  toggle() {
    this.menuAberto = !this.menuAberto;
  }
}
