import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class AppMain {
  items = ['Lasanha', 'Parmegiana de Frango', 'Brigadeiro de colher', 'Pudim'];
  addItem(newItem: string) {
    this.items.push(newItem);
  }

  itemAtual = 'Lasanha de queijo';
  numAtual = 15.99;
}
