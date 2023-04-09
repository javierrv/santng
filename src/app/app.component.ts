import { Component } from '@angular/core';
import { Item } from './items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  cartItems: Item[] = [];
  title = 'point_of_sale';

  addToCart(item: Item) {
    this.cartItems.push(item);
  }
}
