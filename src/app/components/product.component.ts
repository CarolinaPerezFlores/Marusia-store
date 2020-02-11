import {Component} from '@angular/core';
import {Product} from '../components/product.model';
@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})

export class ProductComponent {

product: Product = {
    id: '1',
    image: 'assets/images/marusia1.jpg',
    title: 'colibries',
    price: 80000,
    description: 'Cuadro de una ventana tipica de méxico con colibris'
};

}