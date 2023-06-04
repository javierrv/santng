import { Component } from '@angular/core';
import { Item } from './items';

export interface ItemShoppingList {
  title: string,
  quantity: number,
  unitPrice: number,
  totalPrice: number,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  cartItems: ItemShoppingList[] = [];
  title = 'point_of_sale';

  addToCart(item: Item) {
    const itemCopy = Object.assign({}, item);

    const itemShoppingList = {
      title: itemCopy.title,
      quantity: 1,
      unitPrice: itemCopy.price,
      totalPrice: itemCopy.price,
    };

    const exists = this.cartItems.some((elem) => {
      return elem.title === itemCopy.title
    });
    
    if (!exists) {
      this.cartItems = [...this.cartItems, itemShoppingList];
    }
  }

  updateCart(item: ItemShoppingList) {
    const itemIndex = this.cartItems.findIndex(elem => {
      return elem.title === item.title;
    });
    this.cartItems[itemIndex] = item;
    
    this.cartItems = [...this.cartItems];
  }

  removeItem(item: ItemShoppingList) {
    const itemIndex = this.cartItems.findIndex(elem => {
      return elem.title === item.title;
    });
    this.cartItems.splice(itemIndex, 1);
    
    this.cartItems = [...this.cartItems];
  }

  clearCart() {
    // workaround to reset quantities after clear
    this.cartItems.forEach(elem => {
      elem.quantity = 1;
    });
    this.cartItems = [];
  }
}
