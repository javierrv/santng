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
    const exists = this.cartItems.some((elem) => {
      return elem.title === item.title
    });
    
    if (!exists) {
      this.cartItems = [...this.cartItems, item];
    }
  }

  updateCart(item: Item) {
    const itemIndex = this.cartItems.findIndex(elem => {
      return elem.title === item.title;
    });
    this.cartItems[itemIndex] = item;
    
    this.cartItems = [...this.cartItems];
  }

  removeItem(item: Item) {
    const itemIndex = this.cartItems.findIndex(elem => {
      return elem.title === item.title;
    });
    this.cartItems.splice(itemIndex, 1);
    
    this.cartItems = [...this.cartItems];
  }
}
