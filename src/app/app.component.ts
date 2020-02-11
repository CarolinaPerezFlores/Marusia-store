import { Component } from '@angular/core';
import {Product} from './components/product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marusia-store';
  items = ["Maru", "Selene", "Ana Iris", "Ivonne"];
  
  products: Product [] = [{
    id: '1',
    image: 'assets/images/marusia1.jpg',
    title: 'colibries',
    price: 80000,
    description: 'Cuadro de una ventana tipica de méxico con colibris'
},
{
  id: '2',
  image: 'assets/images/marusia2.jpg',
  title: 'casa tlali',
  price: 90000,
  description: 'Cuadro de la casa típica mexicana'
}];


  addItem() {
    this.items.push('nuevo item');
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

}
